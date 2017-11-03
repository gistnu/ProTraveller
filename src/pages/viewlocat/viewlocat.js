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
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
var ViewlocatPage = /** @class */ (function () {
    function ViewlocatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ViewlocatPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    ViewlocatPage.prototype.loadmap = function () {
        var _this = this;
        this.map = leaflet.map("map").fitWorld();
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 16
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 16
        }).on('locationfound', function (e) {
            var markerGroup = leaflet.featureGroup();
            var marker = leaflet.marker([e.latitude, e.longitude]).on('click', function () {
                alert('Marker clicked');
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
            console.log(e.latitude, e.longitude);
        }).on('locationerror', function (err) {
            alert(err.message);
        });
        leaflet.tileLayer.wms("http://www.gistnu.com/geoserver/apr/wms?", {
            layers: 'apr:forking',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], ViewlocatPage.prototype, "mapContainer", void 0);
    ViewlocatPage = __decorate([
        Component({
            selector: 'page-viewlocat',
            templateUrl: 'viewlocat.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], ViewlocatPage);
    return ViewlocatPage;
}());
export { ViewlocatPage };
//# sourceMappingURL=viewlocat.js.map