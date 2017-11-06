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
import { NavController, NavParams } from 'ionic-angular';
import { CourseServiceProvider } from '../../providers/course-service/course-service';
import { MapviewPage } from '../mapview/mapview';
var ProvdetailPage = /** @class */ (function () {
    function ProvdetailPage(navCtrl, navParams, courseServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
        this.id_prov = this.navParams.get('id_prov');
    }
    ProvdetailPage.prototype.itemSelected = function (c) {
        this.navCtrl.push(MapviewPage, {
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
    ProvdetailPage = __decorate([
        Component({
            selector: 'page-provdetail',
            templateUrl: 'provdetail.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CourseServiceProvider])
    ], ProvdetailPage);
    return ProvdetailPage;
}());
export { ProvdetailPage };
//# sourceMappingURL=provdetail.js.map