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

import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourseServiceProvider } from '../providers/course-service/course-service';


import { HttpModule } from '@angular/http';



@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    Geolocation,
    CourseServiceProvider
  ]
})
export class AppModule {}
