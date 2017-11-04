
import { Component, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
import { NavController, ModalController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { DirectionPage } from '../direction/direction';
import { CourseServiceProvider } from '../../providers/course-service/course-service';  
import { Subscription } from 'rxjs/Subscription';  
import { Item } from '../../models/item';


@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html'
})
export class HospitalPage {



@ViewChild('map') mapContainer: ElementRef;
    map: any;
    
    items: Item[];
    sub: Subscription;
    id_prov:number;

    constructor(public modalCtrl: ModalController,
                public navCtrl: NavController,
                public navParams: NavParams,
                private courseServiceProvider:CourseServiceProvider
    ) {
    this.id_prov = this.navParams.get('id_prov'); 
    
    }

    

  private getHospital() {
    this.courseServiceProvider.getHospital().subscribe(

    (res) => this.items = res

    );

  }

  
  ionViewWillEnter() {
    this.getHospital();
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

       
       leaflet.circle([e.latitude, e.longitude], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.2,
          radius: 2000
        }).addTo(this.map);

  
console.log(e.latitude, e.longitude);

        leaflet.tileLayer.wms("http://www.map.nu.ac.th/geoserver-hgis/wms?", {
          layers: 'vmobile_admin:dpc9_health_center',
          cql_filter: 'DWITHIN(geom,POINT('+e.longitude+' '+e.latitude+'),0.02,meters)',
          format: 'image/png',
          transparent: true,
          attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
      }).addTo(this.map);


      }).on('locationerror', (err) => {
        alert(err.message);
    })



       

  }


    itemSelected(c):void {
        let modal = this.modalCtrl.create(DirectionPage,{
        id_hospital : c.id_hospital,
        lat_place : c.lat_place,
        lon_place : c.lon_place,
        lat_lon : c.lat_place+','+c.lon_place,
        });
        modal.present();
    }  
 
}


