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
import { NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
import { HowtoPage } from '../howto/howto';
import { CourseServiceProvider } from '../../providers/course-service/course-service';
var MapviewPage = /** @class */ (function () {
    function MapviewPage(navCtrl, navParams, courseServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
        this.id_place = this.navParams.get('id_place');
        this.lat = this.navParams.get('lat');
        this.lon = this.navParams.get('lon');
        console.log(this.lat);
    }
    MapviewPage.prototype.getProvDetail = function () {
        var _this = this;
        this.sub = this.courseServiceProvider.getProvDetail(this.id_place).subscribe(function (res) { return _this.items = res; });
    };
    MapviewPage.prototype.ionViewWillEnter = function () {
        this.getProvDetail();
    };
    MapviewPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    MapviewPage.prototype.loadmap = function () {
        this.map = leaflet.map("map").setView([this.lat, this.lon], 15);
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 16
        }).addTo(this.map);
        leaflet.marker([this.lat, this.lon]).addTo(this.map);
        leaflet.tileLayer.wms("http://www.gistnu.com/geoserver/apr/wms?", {
            layers: 'apr:forking',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
    };
    MapviewPage.prototype.goToHowto = function () {
        this.navCtrl.push(HowtoPage);
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], MapviewPage.prototype, "mapContainer", void 0);
    MapviewPage = __decorate([
        Component({
            selector: 'page-mapview',
            templateUrl: 'mapview.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CourseServiceProvider])
    ], MapviewPage);
    return MapviewPage;
}());
export { MapviewPage };
//# sourceMappingURL=mapview.js.map