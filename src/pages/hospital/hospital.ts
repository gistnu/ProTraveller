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

  private getHospital() {
    this.courseServiceProvider
      .getHospital()
      .subscribe((res) => this.items = res);
  }

  ionViewWillEnter() {
    //this.getHospital();
  }

  ionViewDidEnter() {
    this.center = [16.823720, 100.262053];
    this.loadMap();
  }

  // loadmap() {
  //   this.map = leaflet.map("map").fitWorld();

  //   leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

  //     attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributor' +
  //         's, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imager' +
  //         'y © <a href="http://mapbox.com">Mapbox</a>',
  //     maxZoom: 18

  //   }).addTo(this.map);

  //   this.map.locate({setView: true, maxZoom: 13})
  //     .on('locationfound', (e) => {
  //       let markerGroup = leaflet.featureGroup();
  //       let marker : any = leaflet
  //         .marker([e.latitude, e.longitude])
  //         .on('click', () => {
  //           alert('Marker clicked');
  //         })
  //       markerGroup.addLayer(marker);
  //       this.map.addLayer(markerGroup);

  //       leaflet.circle([
  //         e.latitude, e.longitude
  //       ], {
  //         color: 'red',
  //         fillColor: '#f03',
  //         fillOpacity: 0.2,
  //         radius: 2000
  //       }).addTo(this.map);

  //       console.log(e.latitude, e.longitude);

  //       leaflet.tileLayer.wms("http://www.map.nu.ac.th/geoserver-hgis/wms?", {
  //           layers: 'vmobile_admin:dpc9_health_center',
  //           cql_filter: 'DWITHIN(geom,POINT(' + e.longitude + ' ' + e.latitude + '),0.02,meters)',
  //           format: 'image/png',
  //           transparent: true,
  //           attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
  //         }).addTo(this.map);

  //     })
  //     .on('locationerror', (err) => {
  //       alert(err.message);
  //     })

  // }

  loadMap() {
    let mapOption = {
      center: this.center,
      zoom: 12
    };

    this.map = L.map('map', mapOption);
    this.marker = L.marker();

    let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'sakda',
      maxZoom: 18
    }).addTo(this.map);

    let mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
        '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
        'dDXD2lMJpTfCVsVuA').addTo(this.map);

    let dengue = L.tileLayer.wms("http://www.map.nu.ac.th/geoserver-hgis/hgis/wms?", {
        layers: 'hgis:apps2014',
        //time: '2015-12-28T00:00:00.0Z/2016-01-04T23:59:59.999Z',
        format: 'image/png',
        transparent: true,
        //singletile: true,
        attribution: "map.nu.ac.th"
      }).addTo(this.map);

    let baseLayers = {
      "Mapbox": mapbox,
      "OpenStreetMap": osm
    };
    let overlays = {
      //"hcenter": hcenter,
      "dengue": dengue
    };
    //L.control.layers(baseLayers, overlays).addTo(this.map);
  }

  showLocation() {
    this.geoLocation.getCurrentPosition().then((res) => {
        this.center = [res.coords.latitude, res.coords.longitude];
        let pos = [res.coords.latitude, res.coords.longitude];
        this.map.setView(pos);

        console.log(this.marker);
        //add marker and circle
        this.marker = L.marker(pos, {draggable: true}).addTo(this.map);
        this.circle = L.circle(pos, {radius: 2500}).addTo(this.map);

        

        let hcenter = L.tileLayer.wms("http://www.map.nu.ac.th/geoserver-hgis/wms?", {
            layers: 'vmobile_admin:dpc9_health_center',
            cql_filter: 'DWITHIN(geom,POINT('+pos[1]+' '+pos[0]+'),0.02,meters)',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
            zIndex:5
        }).addTo(this.map);        
          this.marker.on("dragend", function (e) {
          pos = [e.target._latlng.lat, e.target._latlng.lng];
          console.log(pos);          
        });
      })    
  }

  searchRadius(pos){
    this.sub = this.courseServiceProvider.getHospitalGS(this.center[1], this.center[0]).subscribe(
      (res)=> this.items=res
    );    
  }

  itemSelected(c) : void {
    console.log(c);
    let modal = this.modalCtrl
      .create(DirectionPage, {
        id_hospital: c.properties.maincode,
        lat_place: c.properties.lat,
        lon_place: c.properties.lon,
        lat_lon: c.properties.lat + ',' + c.properties.lon
      });
    modal.present();
  }

}
