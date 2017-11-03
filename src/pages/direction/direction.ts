import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController ,ViewController} from 'ionic-angular';
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

		  

	id_hospital:number;
	lat_place:number;
	lon_place:number;


		@ViewChild('map') mapElement: ElementRef;
		  map: any;


		  start = '16.7547209,100.2004448';
		  end = '16.5747209,100.2034448';
		  directionsService = new google.maps.DirectionsService;
		  directionsDisplay = new google.maps.DirectionsRenderer;


		  ionViewDidLoad(){
		    this.initMap();
		  }

		  initMap() {
		    this.map = new google.maps.Map(this.mapElement.nativeElement, {
		      zoom: 7,
		      center: {lat: 16.7455036, lng: 100.19629619999999}
		    });

		    this.directionsDisplay.setMap(this.map);
		    this.directionsDisplay.setPanel(document.getElementById('right-panel'));


		    this.directionsService.route({
		      origin: this.start,
		      destination: this.end,
		      travelMode: 'DRIVING'
		    }, (response, status) => {
		      if (status === 'OK') {
		        this.directionsDisplay.setDirections(response);
		      } else {
		        window.alert('Directions request failed due to ' + status);
		      }
		    });
		  }

		  constructor(public navCtrl: NavController ,public viewCtrl: ViewController) {}
		dismiss() {
			this.viewCtrl.dismiss();
		}


}
