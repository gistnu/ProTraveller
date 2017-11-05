import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import L from 'leaflet';

import {Subscription} from 'rxjs/Subscription';
import {Item} from '../../models/item';

import {Geolocation} from '@ionic-native/geolocation';


import {CourseServiceProvider} from '../../providers/course-service/course-service';


@Component({
  selector: 'page-viewlocat',
  templateUrl: 'viewlocat.html'
})
export class ViewlocatPage {



@ViewChild('map') mapContainer: ElementRef;
map : L.map;  
center : any;
marker : any;
circle : any;

items : Item[];
sub : Subscription;
  
  constructor(
    public navCtrl : NavController, 
    public navParams : NavParams, 
    private courseServiceProvider : CourseServiceProvider, 
    public geoLocation : Geolocation
  ) {}
 
  ionViewDidEnter() {
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


      this.marker = L.marker(pos, {draggable: false}).addTo(this.map);
      this.circle = L.circle(pos, {radius: 2000}).addTo(this.map);  

      let villDengue = L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
        layers: 'hgis:v_all_dengue_p',
        cql_filter: 'DWITHIN(geom,POINT('+pos[1]+' '+pos[0]+'),2,kilometers)',
        format: 'image/png',
        transparent: true,
        attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
        zIndex:6
      }).addTo(this.map);

      let villDensity = L.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
          layers: 'hgis:v_all_dengue_den',
          cql_filter: 'DWITHIN(geom,POINT('+pos[1]+' '+pos[0]+'),2,kilometers)',
          format: 'image/png',
          transparent: true,
          attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
          zIndex:5
      }).addTo(this.map);    

        this.marker.on("dragend", function (e) {
        pos = [e.target._latlng.lat, e.target._latlng.lng];     
      }); 
    
    this.sub = this.courseServiceProvider.getDengue(this.center[1], this.center[0]).subscribe(
      (res)=> this.items=res
    );

    })
    
  }

 
}

