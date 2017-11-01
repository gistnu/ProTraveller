import { Component, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
import { ModalController } from 'ionic-angular';

import { DirectionPage } from '../direction/direction';

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html'
})
export class HospitalPage {



@ViewChild('map') mapContainer: ElementRef;
  map: any;


constructor(public modalCtrl: ModalController) { }



  goTodir() {

let modal = this.modalCtrl.create(DirectionPage);
    modal.present();

  }  






 
  ionViewDidEnter() {
    this.loadmap();
  }
 
loadmap() {
    this.map = leaflet.map("map").fitWorld();

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18

    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 13
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);

       console.log(e.latitude,e.longitude);

       leaflet.circle([e.latitude, e.longitude], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 2000
        }).addTo(this.map);

      }).on('locationerror', (err) => {
        alert(err.message);
    })

       

  }

 
}

