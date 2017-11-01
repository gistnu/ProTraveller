webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provdetail_provdetail__ = __webpack_require__(50);
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
    function ListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListPage.prototype.goToDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__provdetail_provdetail__["a" /* ProvdetailPage */]);
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/list/list.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n\n    </ion-navbar>\n      \n</ion-header>\n\n<ion-content>\n\n\n  <a (click)="goToDetail()">\n  <ion-card>\n    <img src="../assets/prov1.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>พิษณุโลก</h2>\n      <p>พระพุทธชินราชงามเลิศ ถิ่นกำเนิดพระนเรศวร สองฝั่งน่านล้วนเรือนแพ หวานฉ่ำแท้กล้วยตาก ถ้ำและน้ำตกหลากตระการตา</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>7 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  </a>\n\n\n  <ion-card>\n        <img src="../assets/prov2.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>อุตรดิตถ์</h2>\n      <p>เหล็กน้ำพี้ลือเลื่อง เมืองลางสาดหวาน บ้านพระยาพิชัยดาบหัก ถิ่นสักใหญ่ของโลก</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>11 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  \n  <ion-card>\n        <img src="../assets/prov3.png">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>สุโขทัย</h2>\n      <p>มรดกโลกล้ำเลิศ กำเนิดลายสือไทย เล่นไฟลอยกระทง ดำรงพุทธศาสนา งามตาผ้าตีนจก สังคโลกทองโบราณ สักการแม่ย่าพ่อขุน รุ่งอรุณแห่งความสุข</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>21 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  \n  <ion-card>\n        <img src="../assets/prov4.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>เพชรบูรณ์</h2>\n      <p>เมืองมะขามหวาน อุทยานน้ำหนาว ศรีเทพเมืองเก่า เขาค้ออนุสรณ์ นครพ่อขุนผาเมือง</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>18 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  \n  <ion-card>\n        <img src="../assets/prov5.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>ตาก</h2>\n      <p>ธรรมชาติน่ายล ภูมิพลเขื่อนใหญ่ พระเจ้าตากเกรียงไกร เมืองไม้และป่างาม</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>16 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__howto_howto__ = __webpack_require__(102);
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
    function MapviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MapviewPage.prototype.goToHowto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__howto_howto__["a" /* HowtoPage */]);
    };
    return MapviewPage;
}());
MapviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mapview',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/mapview/mapview.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <ion-card>\n\n   <img src="../assets/getlocation.png">\n\n  <ion-fab right top>\n    <button ion-fab>\n      <ion-icon name="pin"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-item>\n    <ion-icon name="pin" item-start large></ion-icon>\n      <h2>วัดจุฬามณี</h2>\n      <p>ที่ตั้ง : 23/2 ซอยจุฬามณี ซอย 3 ตำบล ท่าทอง อำเภอเมืองพิษณุโลก พิษณุโลก 65000</p>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon name="flash" item-left large ></ion-icon>\n    <h2>พบการเกิดโรคในระยะใกล้เคียง </h2>\n    \n  </ion-item>\n\n  <ion-item>\n\n  \n\n\n  <table class="table">\n                    <tbody>\n\n                        <tr class="table-row">\n                            <td class="table-img">\n                               <img src="images/in.jpg" alt="" />\n                            </td>\n                            <td class="table-text">\n                              <h6>หมู่บ้าน บ้านกอก</h6>\n                                \n                            </td>\n                            <td>\n                              <p>พบผู้ป่วย 1 ราย</p>\n                            </td>\n                        </tr>\n\n                        <tr class="table-row">\n                            <td class="table-img">\n                               <img src="images/in.jpg" alt="" />\n                            </td>\n                            <td class="table-text">\n                              <h6>หมู่บ้าน ท่าทองตะวันตก</h6>\n                                \n                            </td>\n                            <td>\n                              <p>พบผู้ป่วย 1 ราย</p>\n                            </td>\n                        </tr>\n\n                        <tr class="table-row">\n                            <td class="table-img">\n                               <img src="images/in.jpg" alt="" />\n                            </td>\n                            <td class="table-text">\n                              <h6>หมู่บ้าน หนองหัวยางเหนือ</h6>\n                                \n                            </td>\n                            <td>\n                              <p>พบผู้ป่วย 1 ราย</p>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n                </table>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <span item-left>\n\n        <button ion-button icon-left clear item-end (click)="goToHowto()">\n          <ion-icon name="navigate"></ion-icon>\n          แนวทางป้องกัน\n        </button>\n      \n    </span>\n\n    <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      ค้นหาเส้นทางมาที่นี่\n    </button>\n\n  </ion-item>\n\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/mapview/mapview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MapviewPage);

//# sourceMappingURL=mapview.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-howto',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/howto/howto.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="../assets/protect.png" alt="">\n    </ion-avatar>\n    <h2>แนวทางการป้องกัน</h2>\n  </ion-item>\n</ion-list>\n\n<ion-card>\n  <ion-card-content>\n   1. ให้ผู้ป่วยทายากันยุง เพื่อป้องกันยุงกัดแล้วไปแพร่เชื้อให้คนรอบข้าง\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-content>\n   2. ซื้อสเปรย์/ไม้ตียุง มากำจัดยุงที่มีเชื้อตามมุมอับของที่พัก\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-content>\n   3. เฝ้าระวังอาการผู้ป่วย หากกช๊อกรีบนำตัวไปพบแพทย์ทันที\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/howto/howto.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HowtoPage);

//# sourceMappingURL=howto.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-faq',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/faq/faq.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="../assets/question.png" alt="">\n    </ion-avatar>\n    <h2>คำถามที่พบบ่อย</h2>\n  </ion-item>\n</ion-list>\n\n\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> โรคไข้เลือกออกคืออะไร ?</ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การติดต่อสามารถติดต่อทางไหนได้บ้าง ? </ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การรักษาเบื้องต้นเมื่อเกิดอาการ</ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> อาการของโรคเป็นอย่างไร ?</ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การป้องกันสามารถทำได้อย่างไร ?  ?</ion-item>\n  \n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/faq/faq.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], FaqPage);

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DirectionPage = (function () {
    function DirectionPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.start = '16.7547209,100.2004448';
        this.end = '16.808390,100.263315';
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
    return DirectionPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], DirectionPage.prototype, "mapElement", void 0);
DirectionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-direction',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/direction/direction.html"*/'\n<ion-header>\n  <ion-toolbar>\n   <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div #map id="map"></div>\n    <div id="right-panel"></div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/direction/direction.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object])
], DirectionPage);

var _a, _b, _c;
//# sourceMappingURL=direction.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/direction/direction.module": [
		271,
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provdetail_provdetail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_faq__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hospital_hospital__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewlocat_viewlocat__ = __webpack_require__(201);
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
        selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/home/home.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home_bg">\n    <ion-grid  >\n      <ion-row>\n        <ion-col>\n           <a (click)="goToList()"><img src="../assets/menu1.png" alt=""></a>\n        </ion-col>\n        <ion-col>\n           <a (click)="goToMap()"><img src="../assets/menu2.png" alt=""></a>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <a (click)="goToHospital()"><img src="../assets/menu3.png" alt=""></a>\n        </ion-col>\n        <ion-col>\n           <a (click)="goToFaq()"><img src="../assets/menu4.png" alt=""></a>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n\n\n</ion-content>'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__direction_direction__ = __webpack_require__(104);
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
    function HospitalPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    HospitalPage.prototype.goTodir = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__direction_direction__["a" /* DirectionPage */]);
        modal.present();
    };
    HospitalPage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    HospitalPage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 13
        }).on('locationfound', function (e) {
            var markerGroup = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.marker([e.latitude, e.longitude]).on('click', function () {
                alert('Marker clicked');
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
            console.log(e.latitude, e.longitude);
            __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.circle([e.latitude, e.longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 2000
            }).addTo(_this.map);
        }).on('locationerror', function (err) {
            alert(err.message);
        });
    };
    return HospitalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], HospitalPage.prototype, "mapContainer", void 0);
HospitalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hospital',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/hospital/hospital.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n      <div id="map" style="width:100%; height:100%;"></div>\n\n      <ion-fab right top>\n	    <button ion-fab>\n	      <ion-icon name="pin"></ion-icon>\n	    </button>\n	  </ion-fab>\n\n  <ion-item-group>\n    <ion-item-divider color="light">สถานพยาบาลในระยะ 5 กิโลเมตร</ion-item-divider>\n    <ion-list>\n        <ion-item>\n          <h2>โรงพยาบาลพุทธชินราช</h2>\n          <button ion-button clear item-end (click)="goTodir()">ค้นหาเส้นทาง</button>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n          <h2>โรงพยาบาลพุทธชินราช</h2>\n          <button ion-button clear item-end (click)="goTodir()">ค้นหาเส้นทาง</button>\n        </ion-item>\n    </ion-list>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">สถานพยาบาลในระยะ 10 กิโลเมตร</ion-item-divider>\n    <ion-item>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>ค้นหาเส้นทาง</button>\n    </ion-item>\n    <ion-item>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>ค้นหาเส้นทาง</button>\n    </ion-item>\n  </ion-item-group>\n\n  </ion-card>\n \n</ion-content>'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/hospital/hospital.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object])
], HospitalPage);

var _a, _b;
//# sourceMappingURL=hospital.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewlocatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(200);
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
        selector: 'page-viewlocat',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/viewlocat/viewlocat.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n      <div id="map" style="width:100%; height:100%;"></div>\n\n      <ion-fab right top>\n	    <button ion-fab>\n	      <ion-icon name="pin"></ion-icon>\n	    </button>\n	  </ion-fab>\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>ตรวจสอบตำแหน่งปัจจุบันที่ท่านอยู่</h2>\n      <p></p>\n    </ion-item>\n    <ion-item>\n    <ion-icon name="star" item-left large ></ion-icon>\n    <h2>ไม่พบการเกิดโรคในระยะใกล้เคียง </h2>\n    \n  </ion-item>\n\n\n  </ion-card>\n \n</ion-content>'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/viewlocat/viewlocat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ViewlocatPage);

//# sourceMappingURL=viewlocat.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hospital_hospital__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_viewlocat_viewlocat__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_direction_direction__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(197);
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
            __WEBPACK_IMPORTED_MODULE_12__pages_direction_direction__["a" /* DirectionPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
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
            __WEBPACK_IMPORTED_MODULE_12__pages_direction_direction__["a" /* DirectionPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__ = __webpack_require__(102);
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
            { title: 'หน้าแรก', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'ตรวจสอบพื้นที่', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'ค้นหาสถานพยาบาล', component: __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__["a" /* ProvdetailPage */] },
            { title: 'ดูแผนที่', component: __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__["a" /* MapviewPage */] },
            { title: 'คำถามที่พบบ่อย', component: __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__["a" /* FaqPage */] },
            { title: 'การป้องกัน', component: __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__["a" /* HowtoPage */] }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <font color=\'black\'>{{p.title}}</font>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapview_mapview__ = __webpack_require__(101);
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
    function ProvdetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProvdetailPage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mapview_mapview__["a" /* MapviewPage */]);
    };
    return ProvdetailPage;
}());
ProvdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-provdetail',template:/*ion-inline-start:"/Applications/MAMP/htdocs/protraveller/src/pages/provdetail/provdetail.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-list>\n    <a (click)="goToMap()">\n      <ion-item>\n        <ion-thumbnail item-start>\n            <img src="../assets/img_trav/trav1.jpg">\n        </ion-thumbnail>\n        <h2>วัดพระศรีรัตนมหาธาตุวรมหาวิหาร</h2>\n        <p>ที่ตั้ง : ตำบลในเมือง อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n        <button ion-button clear item-end>View</button>\n      </ion-item>\n    </a>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav2.jpg">\n      </ion-thumbnail>\n      <h2>อุทยานแห่งชาติน้ำตกชาติตระการ</h2>\n      <p>เขตพื้นที่อำเภอชาติตระการ และอำเภอนครไทย จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav3.jpg">\n      </ion-thumbnail>\n      <h2>โครงการพัฒนาป่าไม้ตามแนวพระราชดำริภูหินร่องกล้า</h2>\n      <p>เขตพื้นที่อุทยานแห่งชาติภูหินร่องกล้า จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav4.jpg">\n      </ion-thumbnail>\n      <h2>พิพิธภัณฑ์พื้นบ้านจ่าทวี</h2>\n      <p>ตำบลในเมืองอำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav5.jpg">\n      </ion-thumbnail>\n      <h2>วัดจุฬามณี</h2>\n      <p>อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav6.jpg">\n      </ion-thumbnail>\n      <h2>พระราชวังจันทร์</h2>\n      <p>ตำบลในเมือง อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav7.jpg">\n      </ion-thumbnail>\n      <h2>อุทยานแห่งชาติภูหินร่องกล้า</h2>\n      <p>เขตพื้นที่อำเภอด่านซ้าย จังหวัดเลย อำเภอนครไทย จังหวัดพิษณุโลก และอำเภอหล่มสัก จังหวัดเพชรบูรณ์</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/protraveller/src/pages/provdetail/provdetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ProvdetailPage);

//# sourceMappingURL=provdetail.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map