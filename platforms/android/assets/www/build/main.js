webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/gistnu/travel_care/src/pages/list/list.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <a (click)="goToDetail()">\n  <ion-card>\n    <img src="../assets/prov1.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>พิษณุโลก</h2>\n      <p>พระพุทธชินราชงามเลิศ ถิ่นกำเนิดพระนเรศวร สองฝั่งน่านล้วนเรือนแพ หวานฉ่ำแท้กล้วยตาก ถ้ำและน้ำตกหลากตระการตา</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>7 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  </a>\n\n\n  <ion-card>\n        <img src="../assets/prov2.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>อุตรดิตถ์</h2>\n      <p>เหล็กน้ำพี้ลือเลื่อง เมืองลางสาดหวาน บ้านพระยาพิชัยดาบหัก ถิ่นสักใหญ่ของโลก</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>11 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  \n  <ion-card>\n        <img src="../assets/prov3.png">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>สุโขทัย</h2>\n      <p>มรดกโลกล้ำเลิศ กำเนิดลายสือไทย เล่นไฟลอยกระทง ดำรงพุทธศาสนา งามตาผ้าตีนจก สังคโลกทองโบราณ สักการแม่ย่าพ่อขุน รุ่งอรุณแห่งความสุข</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>21 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  \n  <ion-card>\n        <img src="../assets/prov4.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>เพชรบูรณ์</h2>\n      <p>เมืองมะขามหวาน อุทยานน้ำหนาว ศรีเทพเมืองเก่า เขาค้ออนุสรณ์ นครพ่อขุนผาเมือง</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>18 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n  \n  <ion-card>\n        <img src="../assets/prov5.jpg">\n\n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>ตาก</h2>\n      <p>ธรรมชาติน่ายล ภูมิพลเขื่อนใหญ่ พระเจ้าตากเกรียงไกร เมืองไม้และป่างาม</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>16 สถานที่แนะนำ</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/gistnu/travel_care/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        selector: 'page-howto',template:/*ion-inline-start:"/Users/gistnu/travel_care/src/pages/howto/howto.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="../assets/protect.png" alt="">\n    </ion-avatar>\n    <h2>แนวทางการป้องกัน</h2>\n  </ion-item>\n</ion-list>\n\n<ion-card>\n  <ion-card-content>\n   1. ให้ผู้ป่วยทายากันยุง เพื่อป้องกันยุงกัดแล้วไปแพร่เชื้อให้คนรอบข้าง\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-content>\n   2. ซื้อสเปรย์/ไม้ตียุง มากำจัดยุงที่มีเชื้อตามมุมอับของที่พัก\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-content>\n   3. เฝ้าระวังอาการผู้ป่วย หากกช๊อกรีบนำตัวไปพบแพทย์ทันที\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/gistnu/travel_care/src/pages/howto/howto.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HowtoPage);

//# sourceMappingURL=howto.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        selector: 'page-faq',template:/*ion-inline-start:"/Users/gistnu/travel_care/src/pages/faq/faq.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="../assets/question.png" alt="">\n    </ion-avatar>\n    <h2>คำถามที่พบบ่อย</h2>\n  </ion-item>\n</ion-list>\n\n\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> โรคไข้เลือกออกคืออะไร ?</ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การติดต่อสามารถติดต่อทางไหนได้บ้าง ? </ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การรักษาเบื้องต้นเมื่อเกิดอาการ</ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> อาการของโรคเป็นอย่างไร ?</ion-item>\n<ion-item><ion-icon name="arrow-dropdown-circle"></ion-icon> การป้องกันสามารถทำได้อย่างไร ?  ?</ion-item>\n<img src="../assets/map_dir.png" alt="">\n</ion-content>\n'/*ion-inline-end:"/Users/gistnu/travel_care/src/pages/faq/faq.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], FaqPage);

//# sourceMappingURL=faq.js.map

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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapview_mapview__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provdetail_provdetail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faq_faq__ = __webpack_require__(103);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapview_mapview__["a" /* MapviewPage */]);
    };
    HomePage.prototype.goToFaq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__faq_faq__["a" /* FaqPage */]);
    };
    HomePage.prototype.goToDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__provdetail_provdetail__["a" /* ProvdetailPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/gistnu/travel_care/src/pages/home/home.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home_bg">\n    <ion-grid  >\n      <ion-row>\n        <ion-col>\n           <a (click)="goToList()"><img src="../assets/menu1.png" alt=""></a>\n        </ion-col>\n        <ion-col>\n           <a (click)="goToMap()"><img src="../assets/menu2.png" alt=""></a>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <a (click)="goToMap()"><img src="../assets/menu3.png" alt=""></a>\n        </ion-col>\n        <ion-col>\n           <a (click)="goToFaq()"><img src="../assets/menu4.png" alt=""></a>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n\n\n</ion-content>'/*ion-inline-end:"/Users/gistnu/travel_care/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_faq_faq__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_test_test__ = __webpack_require__(267);
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
            __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__["a" /* HowtoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
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
            __WEBPACK_IMPORTED_MODULE_9__pages_howto_howto__["a" /* HowtoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_test_test__["a" /* TestProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_provdetail_provdetail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mapview_mapview__ = __webpack_require__(51);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/gistnu/travel_care/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <font color=\'black\'>{{p.title}}</font>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/gistnu/travel_care/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TestProvider = (function () {
    function TestProvider(http) {
        this.http = http;
        console.log('Hello TestProvider Provider');
    }
    return TestProvider;
}());
TestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TestProvider);

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapview_mapview__ = __webpack_require__(51);
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
        selector: 'page-provdetail',template:/*ion-inline-start:"/Users/gistnu/travel_care/src/pages/provdetail/provdetail.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-list>\n    <a (click)="goToMap()">\n      <ion-item>\n        <ion-thumbnail item-start>\n            <img src="../assets/img_trav/trav1.jpg">\n        </ion-thumbnail>\n        <h2>วัดพระศรีรัตนมหาธาตุวรมหาวิหาร</h2>\n        <p>ที่ตั้ง : ตำบลในเมือง อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n        <button ion-button clear item-end>View</button>\n      </ion-item>\n    </a>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav2.jpg">\n      </ion-thumbnail>\n      <h2>อุทยานแห่งชาติน้ำตกชาติตระการ</h2>\n      <p>เขตพื้นที่อำเภอชาติตระการ และอำเภอนครไทย จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav3.jpg">\n      </ion-thumbnail>\n      <h2>โครงการพัฒนาป่าไม้ตามแนวพระราชดำริภูหินร่องกล้า</h2>\n      <p>เขตพื้นที่อุทยานแห่งชาติภูหินร่องกล้า จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav4.jpg">\n      </ion-thumbnail>\n      <h2>พิพิธภัณฑ์พื้นบ้านจ่าทวี</h2>\n      <p>ตำบลในเมืองอำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav5.jpg">\n      </ion-thumbnail>\n      <h2>วัดจุฬามณี</h2>\n      <p>อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav6.jpg">\n      </ion-thumbnail>\n      <h2>พระราชวังจันทร์</h2>\n      <p>ตำบลในเมือง อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n          <img src="../assets/img_trav/trav7.jpg">\n      </ion-thumbnail>\n      <h2>อุทยานแห่งชาติภูหินร่องกล้า</h2>\n      <p>เขตพื้นที่อำเภอด่านซ้าย จังหวัดเลย อำเภอนครไทย จังหวัดพิษณุโลก และอำเภอหล่มสัก จังหวัดเพชรบูรณ์</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/gistnu/travel_care/src/pages/provdetail/provdetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ProvdetailPage);

//# sourceMappingURL=provdetail.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        selector: 'page-mapview',template:/*ion-inline-start:"/Users/gistnu/travel_care/src/pages/mapview/mapview.html"*/'\n<ion-header >\n    <ion-navbar >\n        <button ion-button menuToggle class="home_bg">\n    </button>\n        <ion-title><img src="../assets/logobanner.png" alt="" ></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n   <img src="../assets/mapshow.png">\n\n  <ion-fab right top>\n    <button ion-fab>\n      <ion-icon name="pin"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-item>\n    <ion-icon name="pin" item-start large></ion-icon>\n      <h2>วัดพระศรีรัตนมหาธาตุวรมหาวิหาร</h2>\n      <p>ที่ตั้ง : ตำบลในเมือง อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก</p>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon name="star" item-left large ></ion-icon>\n    <h2>ไม่พบการเกิดโรคในระยะใกล้เคียง</h2>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-icon name="star" item-left large ></ion-icon>\n    <h2>ไม่พบการเกิดโรคในระยะใกล้เคียง</h2>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon name="star" item-left large ></ion-icon>\n    <h2>ไม่พบการเกิดโรคในระยะใกล้เคียง</h2>\n  </ion-item>\n  <ion-item>\n\n    <span item-left>\n\n        <button ion-button icon-left clear item-end (click)="goToHowto()">\n          <ion-icon name="navigate"></ion-icon>\n          แนวทางป้องกัน\n        </button>\n      \n    </span>\n\n    <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      ค้นหาเส้นทางมาที่นี่\n    </button>\n\n  </ion-item>\n\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/gistnu/travel_care/src/pages/mapview/mapview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MapviewPage);

//# sourceMappingURL=mapview.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map