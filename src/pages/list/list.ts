import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { ProvdetailPage } from '../provdetail/provdetail';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})



export class ListPage {

  constructor(public navCtrl: NavController) {

  }

  goToDetail() {
  this.navCtrl.push(ProvdetailPage);
  }





		



}

