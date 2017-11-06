import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController ,NavParams, ModalController} from 'ionic-angular';
import leaflet from 'leaflet';


import { HowtoPage } from '../howto/howto';
import { CourseServiceProvider } from '../../providers/course-service/course-service';
import { Item } from '../../models/item';
import { Subscription } from 'rxjs/Subscription';
import {DirectionPage} from '../direction/direction';

import L from 'leaflet';
import {Geolocation} from '@ionic-native/geolocation';




@Component({
  selector: 'page-mapview',
  templateUrl: 'mapview.html'
})
export class MapviewPage {


  id_place:number;
  lat:number;
  lon:number;
  sub: Subscription;
  items: Item[];
  prov: Item[];
  map : L.map;  
  center : any;
  marker : any;
  circle : any;



 private getProvDetail() {
    this.sub = this.courseServiceProvider.getProvDetail(this.id_place).subscribe(
    (res) => this.prov = res
    );
    console.log(this.prov);
  }     
  
  ionViewWillEnter() {
    this.getProvDetail();
  }



  @ViewChild('map') mapContainer: ElementRef;
  
    
    constructor(public modalCtrl : ModalController, 
      public navCtrl : NavController, 
      public navParams : NavParams, 
      private courseServiceProvider : CourseServiceProvider, 
      public geoLocation : Geolocation
    ) {
          this.id_place = this.navParams.get('id_place'); 
          this.lat = this.navParams.get('lat'); 
          this.lon = this.navParams.get('lon'); 
      
        
        }

     
   
    ionViewDidEnter() {
      this.loadMap();
    }
  
    loadMap() {
        this.center = [this.lat,this.lon];      
  
        let mapOption = {
          center: this.center,
          zoom: 12
        };

        console.log(this.center);

        this.map = L.map('map', mapOption);
        this.marker = L.marker();
    
        let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attributions: 'OSM',
          maxZoom: 14
        }).addTo(this.map);
    
        let mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
            '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
            'dDXD2lMJpTfCVsVuA').addTo(this.map);
  
  
        
        let tambon = L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
            layers: 'vmobile_admin:dpc9_tambon_4326',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
        
        let amphoe = L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
          layers: 'vmobile_admin:dpc9_amphoe_4326',
          format: 'image/png',
          transparent: true,
          attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
        
        let province = L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
          layers: 'vmobile_admin:dpc9_province_4326',
          format: 'image/png',
          transparent: true,
          attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
    
        let baseLayers = {
          "Mapbox": mapbox,
          "OpenStreetMap": osm
        };
        let overlays = {
          //"hcenter": hcenter,
          // "dengue": dengue
        };
        //L.control.layers(baseLayers, overlays).addTo(this.map);
  
  
        this.marker = L.marker(this.center, {draggable: false}).addTo(this.map);
        // this.circle = L.circle(pos, {radius: 2000}).addTo(this.map);  
  
        let villDengue = L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
          layers: 'hgis:v_all_dengue_2015p',
          cql_filter: 'DWITHIN(geom,POINT('+this.lon+' '+this.lat+'),2,kilometers)',
          format: 'image/png',
          transparent: true,
          attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
          zIndex:6
        }).addTo(this.map);
  
        let villDensity = L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
            layers: 'hgis:v_all_dengue_2015',
            cql_filter: 'DWITHIN(geom,POINT('+this.lon+' '+this.lat+'),2,kilometers)',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
            zIndex:5
        }).addTo(this.map);    

      
      this.sub = this.courseServiceProvider.getDengue(this.lon, this.lat).subscribe(
        (res)=> this.items=res
      );
  
      
    }




    goToHowto(c) : void {
      let modal = this.modalCtrl
        .create(HowtoPage, {});
      modal.present();
    }
  
  
    itemSelected(c) : void {
      console.log(c);
      let modal = this.modalCtrl
        .create(DirectionPage, {
          id_hospital: c.id_place,
          lat_place: c.lat,
          lon_place: c.lon,
          lat_lon: c.lat + ',' + c.lon
        });
      modal.present();
    }
  
  

}