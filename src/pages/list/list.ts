import { Component } from '@angular/core';



import { ProvdetailPage } from '../provdetail/provdetail';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseServiceProvider } from '../../providers/course-service/course-service';  

import { Course } from '../../models/course';  
import { Subscription } from 'rxjs/Subscription';  


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})



export class ListPage {



  goToDetail() {
  this.navCtrl.push(ProvdetailPage);
  }





courses: Course[];
sub:Subscription;
errorMessage:string;
constructor(public navCtrl: NavController,
public navParams: NavParams,
private courseServiceProvider:CourseServiceProvider
) {}


private getCourses() {
this.sub = this.courseServiceProvider.getCourse().subscribe(
(res) => this.courses = res,
(error) => this.errorMessage = <any> error
);
}
ionViewWillEnter() {
this.getCourses();  
}
ionViewWillLeave() {
this.sub.unsubscribe();  
}

		



}

