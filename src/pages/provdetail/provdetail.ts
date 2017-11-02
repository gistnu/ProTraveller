import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CourseServiceProvider } from '../../providers/course-service/course-service';

import { Item } from '../../models/item';

import { MapviewPage } from '../mapview/mapview';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'page-provdetail',
  templateUrl: 'provdetail.html'
})



export class ProvdetailPage {
	items: Item[];
	sub: Subscription;
	id_prov:number;

  constructor(public navCtrl: NavController,
	public navParams: NavParams,
	private courseServiceProvider:CourseServiceProvider
	) {
	this.id_prov = this.navParams.get('id_prov'); 
	
	}

  goToMap() {
  this.navCtrl.push(MapviewPage);
  }


	private getCourseDetail() {
		this.sub = this.courseServiceProvider.getCourseDetail(this.id_prov).subscribe(
		(res) => this.items = res
		);
	}
	ionViewWillEnter() {
		this.getCourseDetail();
	}
}
