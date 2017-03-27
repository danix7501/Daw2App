import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {RegistroPage} from "../pages/registro/registro";
import {CochesPage} from "../pages/coches/coches";
import {ConsolasPage} from "../pages/consolas/consolas";
import {InformaticaPage} from "../pages/informatica/informatica";
import {MotosPage} from "../pages/motos/motos";
import {MovilesPage} from "../pages/moviles/moviles";
import {SonidoPage} from "../pages/sonido/sonido";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegistroPage,
    CochesPage,
    ConsolasPage,
    InformaticaPage,
    MotosPage,
    MovilesPage,
    SonidoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegistroPage,
    CochesPage,
    ConsolasPage,
    InformaticaPage,
    MotosPage,
    MovilesPage,
    SonidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
