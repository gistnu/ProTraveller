import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Course } from '../../models/course';  
import { Item } from '../../models/item';

@Injectable()
export class CourseServiceProvider {
constructor(public http: Http) { }
 
getCourse():Observable<Course[]> {
return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/protraveller.php').map((res:Response) => <Course[]> res.json());
}



getCourseDetail(id_prov:number):Observable<Item[]> {
return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_prov.php?id_prov='+id_prov).map((res:Response) => <Item[]> res.json());
}

getProvDetail(id_place:number):Observable<Item[]> {
return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_place.php?id_place='+id_place)
.map((res:Response) => <Item[]> res.json());
}

getHospital():Observable<Item[]> {
return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_hospital.php')
.map((res:Response) => <Item[]> res.json());


}
 
}