import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { HowtoPage } from '../howto/howto';


@Component({
  selector: 'page-mapview',
  templateUrl: 'mapview.html'
})
export class MapviewPage {


   constructor(public navCtrl: NavController) {

  }


  goToHowto() {
	this.navCtrl.push(HowtoPage);
  }

}

