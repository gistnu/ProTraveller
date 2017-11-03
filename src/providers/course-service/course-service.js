var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
var CourseServiceProvider = /** @class */ (function () {
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
        return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_place.php?id_place=' + id_place).map(function (res) { return res.json(); });
    };
    CourseServiceProvider.prototype.getHospital = function () {
        return this.http.get('http://www2.cgistln.nu.ac.th/app_gistnu/php/select_hospital.php').map(function (res) { return res.json(); });
    };
    CourseServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], CourseServiceProvider);
    return CourseServiceProvider;
}());
export { CourseServiceProvider };
//# sourceMappingURL=course-service.js.map