var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, ViewController } from 'ionic-angular';
var DirectionPage = /** @class */ (function () {
    function DirectionPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.start = '16.7547209,100.2004448';
        this.end = '16.5747209,100.2034448';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    DirectionPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    DirectionPage.prototype.initMap = function () {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 16.7455036, lng: 100.19629619999999 }
        });
        this.directionsDisplay.setMap(this.map);
        this.directionsDisplay.setPanel(document.getElementById('right-panel'));
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    DirectionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], DirectionPage.prototype, "mapElement", void 0);
    DirectionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-direction',
            templateUrl: 'direction.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController])
    ], DirectionPage);
    return DirectionPage;
}());
export { DirectionPage };
//# sourceMappingURL=direction.js.map