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



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



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
    DirectionPage
  ],
  imports: [
    BrowserModule,
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
    DirectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
