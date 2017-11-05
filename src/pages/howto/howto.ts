import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-howto',
  templateUrl: 'howto.html'
})
export class HowtoPage {

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController) {

  }

  
  dismiss() {
    this.viewCtrl.dismiss();
  }


}

