import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import leaflet from 'leaflet';


import { HowtoPage } from '../howto/howto';
import { CourseServiceProvider } from '../../providers/course-service/course-service';
import { Item } from '../../models/item';
import { Subscription } from 'rxjs/Subscription';


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


@ViewChild('map') mapContainer: ElementRef;
  map: any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private courseServiceProvider:CourseServiceProvider) {

    this.id_place = this.navParams.get('id_place'); 
    this.lat = this.navParams.get('lat'); 
    this.lon = this.navParams.get('lon'); 

    console.log(this.lat);
  }
 private getProvDetail() {
    this.sub = this.courseServiceProvider.getProvDetail(this.id_place).subscribe(
    (res) => this.items = res
    );
  }  
  ionViewWillEnter() {
    this.getProvDetail();
  }

  ionViewDidEnter() {
    this.loadmap();
  }


  loadmap() {
    this.map = leaflet.map("map").setView([this.lat, this.lon], 15);

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 16

    }).addTo(this.map);

    leaflet.marker([this.lat, this.lon]).addTo(this.map);



      leaflet.tileLayer.wms("http://www.gistnu.com/geoserver/apr/wms?", {
        layers: 'apr:forking',
        format: 'image/png',
        transparent: true,
        attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
    }).addTo(this.map);
 
  }


  goToHowto() {
  	this.navCtrl.push(HowtoPage);
  }




}

