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
import { ProvdetailPage } from '../provdetail/provdetail';
import { NavController, NavParams } from 'ionic-angular';
import { CourseServiceProvider } from '../../providers/course-service/course-service';
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, courseServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseServiceProvider = courseServiceProvider;
    }
    ListPage.prototype.itemSelected = function (c) {
        this.navCtrl.push(ProvdetailPage, {
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
    ListPage = __decorate([
        Component({
            selector: 'page-list',
            templateUrl: 'list.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CourseServiceProvider])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.js.map