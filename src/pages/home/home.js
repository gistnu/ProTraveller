var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ProvdetailPage } from '../provdetail/provdetail';
import { FaqPage } from '../faq/faq';
import { HospitalPage } from '../hospital/hospital';
import { ViewlocatPage } from '../viewlocat/viewlocat';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToList = function () {
        this.navCtrl.push(ListPage);
    };
    HomePage.prototype.goToMap = function () {
        this.navCtrl.push(ViewlocatPage);
    };
    HomePage.prototype.goToFaq = function () {
        this.navCtrl.push(FaqPage);
    };
    HomePage.prototype.goToDetail = function () {
        this.navCtrl.push(ProvdetailPage);
    };
    HomePage.prototype.goToHospital = function () {
        this.navCtrl.push(HospitalPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map