import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';



import { ListPage } from '../list/list';
import { ProvdetailPage } from '../provdetail/provdetail';
import { FaqPage } from '../faq/faq';
import { HospitalPage } from '../hospital/hospital';
import { ViewlocatPage } from '../viewlocat/viewlocat';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
    
  center : any;

  constructor(
    public navCtrl: NavController,
    public navParams : NavParams,   
    public geoLocation : Geolocation
  ) {}

  ionViewDidLoad() {
    //this.getlocation();
  }

  getlocation(){
    this.geoLocation.getCurrentPosition().then((res) => {      
      this.center = [res.coords.latitude, res.coords.longitude];
    })
  }

  goToList() {
  this.navCtrl.push(ListPage);
  }

  goToMap() {
	this.navCtrl.push(ViewlocatPage);
	}

  goToFaq() {
	this.navCtrl.push(FaqPage);
	}  

  goToDetail() {
  this.navCtrl.push(ProvdetailPage);
  }  

  goToHospital() {
  this.navCtrl.push(HospitalPage);
  }  


}

