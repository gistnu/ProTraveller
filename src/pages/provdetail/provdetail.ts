import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { MapviewPage } from '../mapview/mapview';


@Component({
  selector: 'page-provdetail',
  templateUrl: 'provdetail.html'
})
export class ProvdetailPage {

  constructor(public navCtrl: NavController) {

  }
  goToMap() {
  this.navCtrl.push(MapviewPage);
  }

}
