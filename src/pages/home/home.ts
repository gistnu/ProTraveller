import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { ListPage } from '../list/list';
import { MapviewPage } from '../mapview/mapview';
import { ProvdetailPage } from '../provdetail/provdetail';
import { FaqPage } from '../faq/faq';
import { HospitalPage } from '../hospital/hospital';
import { ViewlocatPage } from '../viewlocat/viewlocat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController) {

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

