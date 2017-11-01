import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';


@Component({
  selector: 'page-viewlocat',
  templateUrl: 'viewlocat.html'
})
export class ViewlocatPage {



@ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidEnter() {
    this.loadmap();
  }
 
loadmap() {
    this.map = leaflet.map("map").fitWorld();

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 16

    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 16
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);

       console.log(e.latitude,e.longitude);

      }).on('locationerror', (err) => {
        alert(err.message);
    })

      leaflet.tileLayer.wms("http://www.gistnu.com/geoserver/apr/wms?", {
        layers: 'apr:forking',
        format: 'image/png',
        transparent: true,
        attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
    }).addTo(this.map);
 
  }
 
}

