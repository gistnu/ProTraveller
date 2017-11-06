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
	itemSelected(c):void {
	  this.navCtrl.push(MapviewPage,{
			id_place : c.id_place,
			lat : c.lat,
			lon : c.lon
		});
	  }


	items: Item[];
	sub: Subscription;
	id_prov:number;

  constructor(public navCtrl: NavController,
	public navParams: NavParams,
	private courseServiceProvider:CourseServiceProvider
	) {
	this.id_prov = this.navParams.get('id_prov'); 
	
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
