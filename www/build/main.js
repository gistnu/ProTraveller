webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_course_service_course_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapview_mapview__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProvdetailPage = (function () {
    function ProvdetailPage(navCtrl, navParams, courseServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
        this.id_prov = this.navParams.get('id_prov');
    }
    ProvdetailPage.prototype.itemSelected = function (c) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapview_mapview__["a" /* MapviewPage */], {
            id_place: c.id_place,
            lat: c.lat,
            lon: c.lon
        });
    };
    ProvdetailPage.prototype.getCourseDetail = function () {
        var _this = this;
        this.sub = this.courseServiceProvider.getCourseDetail(this.id_prov).subscribe(function (res) { return _this.items = res; });
    };
    ProvdetailPage.prototype.ionViewWillEnter = function () {
        this.getCourseDetail();
    };
    return ProvdetailPage;
}());
ProvdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-provdetail',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\provdetail\provdetail.html"*/'\n\n<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n      <ion-list >\n\n          <ion-item *ngFor="let c of items" (click)="itemSelected(c)">\n\n                <ion-avatar item-start>\n\n                  <img src="../assets/img_trav/{{c.img_place}}">\n\n                </ion-avatar>\n\n                  <h2>{{c.name_place}}</h2>\n\n                  <p>ที่ตั้ง : {{c.addre_place}}</p>\n\n          </ion-item>\n\n      </ion-list>\n\n         \n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\provdetail\provdetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_course_service_course_service__["a" /* CourseServiceProvider */]])
], ProvdetailPage);

//# sourceMappingURL=provdetail.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectionPage = (function () {
    function DirectionPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.start = '16.7547209,100.2004448';
        this.end = this.lat_lon;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.id_hospital = this.navParams.get('id_hospital');
        this.lat_place = this.navParams.get('lat_place');
        this.lon_place = this.navParams.get('lon_place');
        this.lat_lon = this.navParams.get('lat_lon');
        console.log(this.lat_lon);
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
            destination: this.lat_lon,
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
    return DirectionPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], DirectionPage.prototype, "mapElement", void 0);
DirectionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-direction',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\direction\direction.html"*/'\n\n<ion-header>\n\n  <ion-toolbar>\n\n   <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div #map id="map"></div>\n\n     <ion-list id="right-panel">\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\direction\direction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], DirectionPage);

//# sourceMappingURL=direction.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/course/course.module": [
		279,
		1
	],
	"../pages/direction/direction.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provdetail_provdetail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_faq__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hospital_hospital__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewlocat_viewlocat__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    HomePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__viewlocat_viewlocat__["a" /* ViewlocatPage */]);
    };
    HomePage.prototype.goToFaq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__faq_faq__["a" /* FaqPage */]);
    };
    HomePage.prototype.goToDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__provdetail_provdetail__["a" /* ProvdetailPage */]);
    };
    HomePage.prototype.goToHospital = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__hospital_hospital__["a" /* HospitalPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\home\home.html"*/'\n\n<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home_bg">\n\n    <ion-grid  >\n\n      <ion-row>\n\n        <ion-col>\n\n           <a (click)="goToList()"><img src="../assets/menu1.png" alt=""></a>\n\n        </ion-col>\n\n        <ion-col>\n\n           <a (click)="goToMap()"><img src="../assets/menu2.png" alt=""></a>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n            <a (click)="goToHospital()"><img src="../assets/menu3.png" alt=""></a>\n\n        </ion-col>\n\n        <ion-col>\n\n           <a (click)="goToFaq()"><img src="../assets/menu4.png" alt=""></a>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid> \n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provdetail_provdetail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_course_service_course_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams, courseServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
    }
    ListPage.prototype.itemSelected = function (c) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__provdetail_provdetail__["a" /* ProvdetailPage */], {
            id_prov: c.id_prov
        });
    };
    ListPage.prototype.getCourses = function () {
        var _this = this;
        this.sub = this.courseServiceProvider.getCourse().subscribe(function (res) { return _this.courses = res; }, function (error) { return _this.errorMessage = error; });
    };
    ListPage.prototype.ionViewWillEnter = function () {
        this.getCourses();
    };
    ListPage.prototype.ionViewWillLeave = function () {
        this.sub.unsubscribe();
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\list\list.html"*/'<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  \n\n  <ion-card ion-item *ngFor = "let c of courses"  >\n\n    <a (click)="itemSelected(c)">\n\n    <img src="../assets/{{c.img_prov}}">\n\n\n\n    <ion-item>\n\n      <ion-icon name="pin" item-start large></ion-icon>\n\n      <h2>{{c.name_prov}}</h2>\n\n      <p>{{c.detail_prov}}</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <span item-left>7 สถานที่แนะนำ</span>\n\n      <button ion-button icon-left clear item-end>\n\n        <ion-icon name="navigate"></ion-icon>\n\n        Start\n\n      </button>\n\n    </ion-item>\n\n    </a>\n\n  </ion-card>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_course_service_course_service__["a" /* CourseServiceProvider */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__howto_howto__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_course_service_course_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapviewPage = (function () {
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
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").setView([this.lat, this.lon], 15);
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 16
        }).addTo(this.map);
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([this.lat, this.lon]).addTo(this.map);
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer.wms("http://www.gistnu.com/geoserver/apr/wms?", {
            layers: 'apr:forking',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
    };
    MapviewPage.prototype.goToHowto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__howto_howto__["a" /* HowtoPage */]);
    };
    return MapviewPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapviewPage.prototype, "mapContainer", void 0);
MapviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mapview',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\mapview\mapview.html"*/'\n\n<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content >\n\n  <ion-card *ngFor="let c of items">\n\n\n\n  <div id="map" style="width:100%; height:100%;"></div>\n\n\n\n  <ion-fab right top>\n\n    <button ion-fab>\n\n      <ion-icon name="pin"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <img src="../assets/img_trav/{{c.img_place}}">\n\n    </ion-thumbnail>\n\n      <h2>{{c.name_place}}</h2>\n\n      <p>ที่ตั้ง : {{c.addre_place}}</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-icon name="flash" item-left large ></ion-icon>\n\n    <h2>พบการเกิดโรคในระยะใกล้เคียง </h2>\n\n    \n\n  </ion-item>\n\n\n\n  <ion-item>\n\n\n\n  \n\n\n\n\n\n  <table class="table">\n\n                    <tbody>\n\n\n\n                        <tr class="table-row">\n\n                            <td class="table-text">\n\n                              <h6>หมู่บ้าน บ้านกอก</h6>\n\n                                \n\n                            </td>\n\n                            <td>\n\n                              <p>พบผู้ป่วย 1 ราย</p>\n\n                            </td>\n\n                        </tr>\n\n\n\n                        <tr class="table-row">\n\n                            <td class="table-text">\n\n                              <h6>หมู่บ้าน ท่าทองตะวันตก</h6>\n\n                                \n\n                            </td>\n\n                            <td>\n\n                              <p>พบผู้ป่วย 1 ราย</p>\n\n                            </td>\n\n                        </tr>\n\n\n\n                        <tr class="table-row">\n\n                            <td class="table-text">\n\n                              <h6>หมู่บ้าน หนองหัวยางเหนือ</h6>\n\n                                \n\n                            </td>\n\n                            <td>\n\n                              <p>พบผู้ป่วย 1 ราย</p>\n\n                            </td>\n\n                        </tr>\n\n\n\n\n\n                    </tbody>\n\n                </table>\n\n\n\n  </ion-item>\n\n\n\n\n\n\n\n  <ion-item>\n\n\n\n    <span item-left>\n\n\n\n        <button ion-button icon-left clear item-end (click)="goToHowto()">\n\n          <ion-icon name="navigate"></ion-icon>\n\n          แนวทางป้องกัน\n\n        </button>\n\n      \n\n    </span>\n\n\n\n    <button ion-button icon-left clear item-end>\n\n      <ion-icon name="navigate"></ion-icon>\n\n      ค้นหาเส้นทางมาที่นี่\n\n    </button>\n\n\n\n  </ion-item>\n\n\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\mapview\mapview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_course_service_course_service__["a" /* CourseServiceProvider */]])
], MapviewPage);

//# sourceMappingURL=mapview.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HowtoPage = (function () {
    function HowtoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HowtoPage;
}());
HowtoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-howto',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\howto\howto.html"*/'\n\n<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="../assets/protect.png" alt="">\n\n    </ion-avatar>\n\n    <h2>แนวทางการป้องกัน</h2>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n<ion-card>\n\n  <ion-card-content>\n\n   1. ให้ผู้ป่วยทายากันยุง เพื่อป้องกันยุงกัดแล้วไปแพร่เชื้อให้คนรอบข้าง\n\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n  <ion-card-content>\n\n   2. ซื้อสเปรย์/ไม้ตียุง มากำจัดยุงที่มีเชื้อตามมุมอับของที่พัก\n\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n  <ion-card-content>\n\n   3. เฝ้าระวังอาการผู้ป่วย หากกช๊อกรีบนำตัวไปพบแพทย์ทันที\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\howto\howto.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HowtoPage);

//# sourceMappingURL=howto.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqPage = (function () {
    function FaqPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return FaqPage;
}());
FaqPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-faq',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\faq\faq.html"*/'\n\n<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n <ion-list>\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="../assets/question.png" alt="">\n\n    </ion-avatar>\n\n    <h2>คำถามที่พบบ่อย</h2>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> โรคไข้เลือกออกคืออะไร ?</ion-item>\n\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การติดต่อสามารถติดต่อทางไหนได้บ้าง ? </ion-item>\n\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การรักษาเบื้องต้นเมื่อเกิดอาการ</ion-item>\n\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> อาการของโรคเป็นอย่างไร ?</ion-item>\n\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การป้องกันสามารถทำได้อย่างไร ?  ?</ion-item>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\faq\faq.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], FaqPage);

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__direction_direction__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_course_service_course_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HospitalPage = (function () {
    function HospitalPage(modalCtrl, navCtrl, navParams, courseServiceProvider, geoLocation) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
        this.geoLocation = geoLocation;
        this.id_prov = this.navParams.get('id_prov');
    }
    HospitalPage.prototype.getHospital = function () {
        var _this = this;
        this.courseServiceProvider
            .getHospital()
            .subscribe(function (res) { return _this.items = res; });
    };
    HospitalPage.prototype.ionViewWillEnter = function () {
        //this.getHospital();
    };
    HospitalPage.prototype.ionViewDidEnter = function () {
        this.center = [16.823720, 100.262053];
        this.loadMap();
    };
    // loadmap() {
    //   this.map = leaflet.map("map").fitWorld();
    //   leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributor' +
    //         's, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imager' +
    //         'y © <a href="http://mapbox.com">Mapbox</a>',
    //     maxZoom: 18
    //   }).addTo(this.map);
    //   this.map.locate({setView: true, maxZoom: 13})
    //     .on('locationfound', (e) => {
    //       let markerGroup = leaflet.featureGroup();
    //       let marker : any = leaflet
    //         .marker([e.latitude, e.longitude])
    //         .on('click', () => {
    //           alert('Marker clicked');
    //         })
    //       markerGroup.addLayer(marker);
    //       this.map.addLayer(markerGroup);
    //       leaflet.circle([
    //         e.latitude, e.longitude
    //       ], {
    //         color: 'red',
    //         fillColor: '#f03',
    //         fillOpacity: 0.2,
    //         radius: 2000
    //       }).addTo(this.map);
    //       console.log(e.latitude, e.longitude);
    //       leaflet.tileLayer.wms("http://www.map.nu.ac.th/geoserver-hgis/wms?", {
    //           layers: 'vmobile_admin:dpc9_health_center',
    //           cql_filter: 'DWITHIN(geom,POINT(' + e.longitude + ' ' + e.latitude + '),0.02,meters)',
    //           format: 'image/png',
    //           transparent: true,
    //           attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
    //         }).addTo(this.map);
    //     })
    //     .on('locationerror', (err) => {
    //       alert(err.message);
    //     })
    // }
    HospitalPage.prototype.loadMap = function () {
        var mapOption = {
            center: this.center,
            zoom: 12
        };
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.map('map', mapOption);
        this.marker = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.marker();
        var osm = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'sakda',
            maxZoom: 18
        }).addTo(this.map);
        var mapbox = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
            '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
            'dDXD2lMJpTfCVsVuA').addTo(this.map);
        var dengue = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.tileLayer.wms("http://www.map.nu.ac.th/geoserver-hgis/hgis/wms?", {
            layers: 'hgis:apps2014',
            //time: '2015-12-28T00:00:00.0Z/2016-01-04T23:59:59.999Z',
            format: 'image/png',
            transparent: true,
            //singletile: true,
            attribution: "map.nu.ac.th"
        }).addTo(this.map);
        var baseLayers = {
            "Mapbox": mapbox,
            "OpenStreetMap": osm
        };
        var overlays = {
            //"hcenter": hcenter,
            "dengue": dengue
        };
        //L.control.layers(baseLayers, overlays).addTo(this.map);
    };
    HospitalPage.prototype.showLocation = function () {
        var _this = this;
        this.geoLocation.getCurrentPosition().then(function (res) {
            _this.center = [res.coords.latitude, res.coords.longitude];
            var pos = [res.coords.latitude, res.coords.longitude];
            _this.map.setView(pos);
            console.log(_this.marker);
            //add marker and circle
            _this.marker = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.marker(pos, { draggable: true }).addTo(_this.map);
            _this.circle = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.circle(pos, { radius: 2500 }).addTo(_this.map);
            var hcenter = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.tileLayer.wms("http://www.map.nu.ac.th/geoserver-hgis/wms?", {
                layers: 'vmobile_admin:dpc9_health_center',
                cql_filter: 'DWITHIN(geom,POINT(' + pos[1] + ' ' + pos[0] + '),0.02,meters)',
                format: 'image/png',
                transparent: true,
                attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>',
                zIndex: 5
            }).addTo(_this.map);
            _this.marker.on("dragend", function (e) {
                pos = [e.target._latlng.lat, e.target._latlng.lng];
                console.log(pos);
            });
        });
    };
    HospitalPage.prototype.searchRadius = function (pos) {
        var _this = this;
        this.sub = this.courseServiceProvider.getHospitalGS(this.center[1], this.center[0]).subscribe(function (res) { return _this.items = res; });
    };
    HospitalPage.prototype.itemSelected = function (c) {
        console.log(c);
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_3__direction_direction__["a" /* DirectionPage */], {
            id_hospital: c.properties.maincode,
            lat_place: c.properties.lat,
            lon_place: c.properties.lon,
            lat_lon: c.properties.lat + ',' + c.properties.lon
        });
        modal.present();
    };
    return HospitalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], HospitalPage.prototype, "mapContainer", void 0);
HospitalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hospital',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\hospital\hospital.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n    <ion-title>\n\n      <img src="../assets/logobanner.png" alt="">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- <ion-card> -->\n\n\n\n    <div id="map" class="map"></div>\n\n    <ion-fab right top>\n\n      <button ion-fab (click)=\'showLocation();searchRadius()\'>\n\n        <ion-icon name="pin"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n\n\n    <ion-item-divider color="light" class="kanit">สถานพยาบาลในระยะ 2 กิโลเมตร</ion-item-divider>\n\n\n\n    <ion-scroll scrollX="true" scrollY="true" class="data">        \n\n      <ion-list>\n\n        <ion-item ion-item *ngFor="let c of items">\n\n          <h3 class="kanit">{{c.properties.name}}</h3>\n\n          <button ion-button clear item-end class="kanit" (click)="itemSelected(c)">ค้นหาเส้นทาง</button>\n\n        </ion-item>\n\n      </ion-list>\n\n  </ion-scroll>\n\n\n\n  <!-- </ion-card> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\hospital\hospital.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_course_service_course_service__["a" /* CourseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_course_service_course_service__["a" /* CourseServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _f || Object])
], HospitalPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=hospital.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewlocatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewlocatPage = (function () {
    function ViewlocatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ViewlocatPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    ViewlocatPage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 16
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 16
        }).on('locationfound', function (e) {
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latitude, e.longitude]).on('click', function () {
                alert('Marker clicked');
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
            console.log(e.latitude, e.longitude);
        }).on('locationerror', function (err) {
            alert(err.message);
        });
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer.wms("http://www.gistnu.com/geoserver/apr/wms?", {
            layers: 'apr:forking',
            format: 'image/png',
            transparent: true,
            attribution: '&copy; <a href="http://GISTNU.com">GISTNU</a>'
        }).addTo(this.map);
    };
    return ViewlocatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ViewlocatPage.prototype, "mapContainer", void 0);
ViewlocatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewlocat',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\viewlocat\viewlocat.html"*/'\n\n<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card>\n\n\n\n      <div id="map" style="width:100%; height:100%;"></div>\n\n\n\n      <ion-fab right top>\n\n	    <button ion-fab>\n\n	      <ion-icon name="pin"></ion-icon>\n\n	    </button>\n\n	  </ion-fab>\n\n\n\n    <ion-item>\n\n      <ion-icon name="pin" item-start large></ion-icon>\n\n      <h2>ตรวจสอบตำแหน่งปัจจุบันที่ท่านอยู่</h2>\n\n      <p></p>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-icon name="star" item-left large ></ion-icon>\n\n    <h2>ไม่พบการเกิดโรคในระยะใกล้เคียง </h2>\n\n    \n\n  </ion-item>\n\n\n\n\n\n  </ion-card>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\viewlocat\viewlocat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ViewlocatPage);

//# sourceMappingURL=viewlocat.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_course_service_course_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursePage = (function () {
    function CoursePage(navCtrl, navParams, courseServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
    }
    CoursePage.prototype.getCourses = function () {
        var _this = this;
        this.sub = this.courseServiceProvider.getCourse().subscribe(function (res) { return _this.courses = res; }, function (error) { return _this.errorMessage = error; });
    };
    CoursePage.prototype.ionViewWillEnter = function () {
        this.getCourses();
    };
    CoursePage.prototype.ionViewWillLeave = function () {
        this.sub.unsubscribe();
    };
    return CoursePage;
}());
CoursePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-course',template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\pages\course\course.html"*/'<!--\n\n  Generated template for the CoursePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header >\n\n    <ion-navbar >\n\n        <button ion-button menuToggle class="home_bg">\n\n    </button>\n\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  \n\n  <ion-card ion-item *ngFor = "let c of courses">\n\n  	<a (click)="goToDetail()">\n\n    <img src="../assets/{{c.img_prov}}">\n\n\n\n    <ion-item>\n\n      <ion-icon name="pin" item-start large></ion-icon>\n\n      <h2>{{c.name_prov}}</h2>\n\n      <p>{{c.detail_prov}}</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <span item-left>7 สถานที่แนะนำ</span>\n\n      <button ion-button icon-left clear item-end>\n\n        <ion-icon name="navigate"></ion-icon>\n\n        Start\n\n      </button>\n\n    </ion-item>\n\n    </a>\n\n  </ion-card>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\pages\course\course.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_course_service_course_service__["a" /* CourseServiceProvider */]])
], CoursePage);

//# sourceMappingURL=course.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hospital_hospital__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_viewlocat_viewlocat__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_direction_direction__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_course_course__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_course_service_course_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__["a" /* ProvdetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__["a" /* MapviewPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__["a" /* FaqPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__["a" /* HowtoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_hospital_hospital__["a" /* HospitalPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_viewlocat_viewlocat__["a" /* ViewlocatPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_direction_direction__["a" /* DirectionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_course_course__["a" /* CoursePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/course/course.module#CoursePageModule', name: 'CoursePage', segment: 'course', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/direction/direction.module#DirectionPageModule', name: 'DirectionPage', segment: 'direction', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__["a" /* ProvdetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__["a" /* MapviewPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__["a" /* FaqPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__["a" /* HowtoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_hospital_hospital__["a" /* HospitalPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_viewlocat_viewlocat__["a" /* ViewlocatPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_direction_direction__["a" /* DirectionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_course_course__["a" /* CoursePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_17__providers_course_service_course_service__["a" /* CourseServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'หน้าแรก', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\_dev_gistnu\ProTraveller\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <font color=\'black\'>{{p.title}}</font>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\_dev_gistnu\ProTraveller\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseServiceProvider = (function () {
    function CourseServiceProvider(http) {
        this.http = http;
    }
    CourseServiceProvider.prototype.getCourse = function () {
        return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/protraveller.php').map(function (res) { return res.json(); });
    };
    CourseServiceProvider.prototype.getCourseDetail = function (id_prov) {
        return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_prov.php?id_prov=' + id_prov).map(function (res) { return res.json(); });
    };
    CourseServiceProvider.prototype.getProvDetail = function (id_place) {
        return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_place.php?id_place=' + id_place)
            .map(function (res) { return res.json(); });
    };
    CourseServiceProvider.prototype.getHospital = function () {
        return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_hospital.php')
            .map(function (res) { return res.json(); });
    };
    CourseServiceProvider.prototype.getHospitalGS = function (lon, lat) {
        return this.http
            .get('http://www.map.nu.ac.th/geoserver-hgis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=vmobile_admin:dpc9_health_center&cql_filter=DWITHIN(geom,POINT(' + lon + '%20' + lat + '),0.02,meters)&outputFormat=application%2Fjson')
            .map(function (res) { return res.json().features; });
    };
    return CourseServiceProvider;
}());
CourseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CourseServiceProvider);

//# sourceMappingURL=course-service.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map