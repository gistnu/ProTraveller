var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProvdetailPage } from '../pages/provdetail/provdetail';
import { MapviewPage } from '../pages/mapview/mapview';
import { FaqPage } from '../pages/faq/faq';
import { HowtoPage } from '../pages/howto/howto';
import { HospitalPage } from '../pages/hospital/hospital';
import { ViewlocatPage } from '../pages/viewlocat/viewlocat';
import { DirectionPage } from '../pages/direction/direction';
import { CoursePage } from '../pages/course/course';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourseServiceProvider } from '../providers/course-service/course-service';
import { HttpModule } from '@angular/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                ListPage,
                ProvdetailPage,
                MapviewPage,
                FaqPage,
                HowtoPage,
                HospitalPage,
                ViewlocatPage,
                DirectionPage,
                CoursePage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp),
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                ListPage,
                ProvdetailPage,
                MapviewPage,
                FaqPage,
                HowtoPage,
                HospitalPage,
                ViewlocatPage,
                DirectionPage,
                CoursePage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                CourseServiceProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map