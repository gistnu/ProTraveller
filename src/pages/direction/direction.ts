import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController ,ViewController, NavParams} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the DirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var google;

@IonicPage()
@Component({
  selector: 'page-direction',
  templateUrl: 'direction.html',
})
export class DirectionPage {




		@ViewChild('map') mapElement: ElementRef;
		  map: any;	
			id_hospital:number;
			id_cuurent:string;
		lat_place:number;
		lon_place:number;
		lat_lon:number; 
		 center : any;
		 id_location : string;

  		constructor(public navCtrl: NavController ,
						public navParams: NavParams,
						public viewCtrl: ViewController,   
						public geoLocation : Geolocation) {
				this.id_hospital = this.navParams.get('id_hospital'); 
				this.id_cuurent=this.navParams.get('id_cuurent');
		  	this.lat_place = this.navParams.get('lat_place'); 
		  	this.lon_place = this.navParams.get('lon_place'); 
		  	this.lat_lon = this.navParams.get('lat_lon'); 
		  
			}
			


		  directionsService = new google.maps.DirectionsService;
		  directionsDisplay = new google.maps.DirectionsRenderer;


		  ionViewDidLoad(){
		    this.initMap();
		  }

		  initMap() {

				this.geoLocation.getCurrentPosition().then((res) => {      
					this.center = [res.coords.latitude, res.coords.longitude];
					this.id_location = this.center[0]+','+this.center[1];
					
					this.map = new google.maps.Map(this.mapElement.nativeElement, {
						zoom: 7,	
						center: {lat: 16.7455036, lng: 100.19629619999999}
					});
	
					this.directionsDisplay.setMap(this.map);
					this.directionsDisplay.setPanel(document.getElementById('right-panel'));
	
					console.log(this.id_location);
	
					this.directionsService.route({
						origin: this.id_location,
						destination: this.lat_lon,
						travelMode: 'DRIVING'
					}, (response, status) => {
						if (status === 'OK') {
							this.directionsDisplay.setDirections(response);
						} else {
							window.alert('Directions request failed due to ' + status);
						}
					});					
				})	    
		  }

		dismiss() {
			this.viewCtrl.dismiss();
		}


}
