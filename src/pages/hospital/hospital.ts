import {Component, ViewChild, ElementRef} from '@angular/core';
import L from 'leaflet';
import {NavController, ModalController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';

import {DirectionPage} from '../direction/direction';
import {CourseServiceProvider} from '../../providers/course-service/course-service';
import {Subscription} from 'rxjs/Subscription';
import {Item} from '../../models/item';

import {Geolocation} from '@ionic-native/geolocation';


@Component({
  selector: 'page-hospital', 
  templateUrl: 'hospital.html'
})

export class HospitalPage {
  @ViewChild('map')mapContainer : ElementRef;
  map : L.map;  
  center : any;
  marker : any;
  circle : any;

  items : Item[];
  sub : Subscription;
  id_prov : number;

  constructor(
    public modalCtrl : ModalController, 
    public navCtrl : NavController, 
    public navParams : NavParams, 
    private courseServiceProvider : CourseServiceProvider, 
    public geoLocation : Geolocation,
  ) {
    this.id_prov = this.navParams.get('id_prov');
  }

  ionViewWillEnter() {
  }

  ionViewDidLoad() {
    this.loadMap();
  }  

  loadMap() {
    this.geoLocation.getCurrentPosition().then((res) => {
      this.center = [res.coords.latitude, res.coords.longitude];      
      let pos = [res.coords.latitude, res.coords.longitude];

      let mapOption = {
        center: this.center,
        zoom: 12
      };
  
      this.map = L.map('map', mapOption);
      this.marker = L.marker();
  
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attributions: 'OSM',
        maxZoom: 11
      }).addTo(this.map);
  
      L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
          '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
          'dDXD2lMJpTfCVsVuA').addTo(this.map);
  
      // let baseLayers = {
      //   "Mapbox": mapbox,
      //   "OpenStreetMap": osm
      // };
      // let overlays = {
      //   //"hcenter": hcenter,
      //   // "dengue": dengue
      // };
      // //L.control.layers(baseLayers, overlays).addTo(this.map);


      this.marker = L.marker(pos, {draggable: false}).addTo(this.map);
      this.circle = L.circle(pos, {radius: 10000}).addTo(this.map);        

      L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
          layers: 'vmobile_admin:dpc9_health_center',
          cql_filter: 'DWITHIN(geom,POINT('+pos[1]+' '+pos[0]+'),10,kilometers)',
          format: 'image/png',
          transparent: true,
          attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
          zIndex:5
      }).addTo(this.map);        
        this.marker.on("dragend", function (e) {
        pos = [e.target._latlng.lat, e.target._latlng.lng];     
      }); 
    
    this.sub = this.courseServiceProvider.getHospitalGS(this.center[1], this.center[0]).subscribe(
      (res)=> this.items=res
    );

    })
    
  }



  showLocation() {
    this.geoLocation.getCurrentPosition().then((res) => {
        this.center = [res.coords.latitude, res.coords.longitude];
        let pos = [res.coords.latitude, res.coords.longitude];
        this.map.setView(pos);

        //add marker and circle
        this.marker = L.marker(pos, {draggable: false}).addTo(this.map);
        this.circle = L.circle(pos, {radius: 10000}).addTo(this.map);        

        L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
            layers: 'vmobile_admin:dpc9_health_center',
            cql_filter: 'DWITHIN(geom,POINT('+pos[1]+' '+pos[0]+'),10,kilometers)',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
            zIndex:5
        }).addTo(this.map);        
          this.marker.on("dragend", function (e) {
          pos = [e.target._latlng.lat, e.target._latlng.lng];
          //console.log(pos);          
        });
      })  
      
      this.sub = this.courseServiceProvider.getHospitalGS(this.center[1], this.center[0]).subscribe(
        (res)=> this.items=res
      );
  }

  itemSelected(c) : void {
    console.log(this.center);
    let modal = this.modalCtrl
      .create(DirectionPage, {
        id_hospital: c.properties.maincode,
        id_cuurent: this.center[0]+','+this.center[1],
        lat_place: c.properties.lat,
        lon_place: c.properties.lon,
        lat_lon: c.properties.lat + ',' + c.properties.lon
      });
    modal.present();
  }


 // doRefresh(refresher) {
 //    console.log('Begin async operation', refresher);

 //    setTimeout(() => {
 //      console.log('Async operation has ended');
 //      refresher.complete();
 //    }, 2000);
 //  }

}
