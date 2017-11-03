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
import leaflet from 'leaflet';
import { NavController, ModalController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { DirectionPage } from '../direction/direction';
import { CourseServiceProvider } from '../../providers/course-service/course-service';
var HospitalPage = /** @class */ (function () {
    function HospitalPage(modalCtrl, navCtrl, navParams, courseServiceProvider) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
        this.id_prov = this.navParams.get('id_prov');
    }
    HospitalPage.prototype.getHospital = function () {
        var _this = this;
        this.sub = this.courseServiceProvider.getHospital().subscribe(function (res) { return _this.items = res; });
    };
    HospitalPage.prototype.ionViewWillEnter = function () {
        this.getHospital();
    };
    HospitalPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    HospitalPage.prototype.loadmap = function () {
        var _this = this;
        this.map = leaflet.map("map").fitWorld();
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 13
        }).on('locationfound', function (e) {
            var markerGroup = leaflet.featureGroup();
            var marker = leaflet.marker([e.latitude, e.longitude]).on('click', function () {
                alert('Marker clicked');
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
            console.log(e.latitude, e.longitude);
            leaflet.circle([e.latitude, e.longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 2000
            }).addTo(_this.map);
        }).on('locationerror', function (err) {
            alert(err.message);
        });
        leaflet.tileLayer.wms("http://www.gistnu.com/geoserver-hgis/wms?", {
            layers: 'vmobile_admin:dpc9_health_center',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
    };
    HospitalPage.prototype.itemSelected = function (c) {
        var modal = this.modalCtrl.create(DirectionPage, {
            id_hospital: c.id_hospital,
            lat_place: c.lat_place,
            lon_place: c.lon_place,
        });
        modal.present();
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], HospitalPage.prototype, "mapContainer", void 0);
    HospitalPage = __decorate([
        Component({
            selector: 'page-hospital',
            templateUrl: 'hospital.html'
        }),
        __metadata("design:paramtypes", [ModalController,
            NavController,
            NavParams,
            CourseServiceProvider])
    ], HospitalPage);
    return HospitalPage;
}());
export { HospitalPage };
//# sourceMappingURL=hospital.js.map