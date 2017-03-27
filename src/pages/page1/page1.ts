import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {CochesPage} from "../coches/coches";
import {MotosPage} from "../motos/motos";
import {MovilesPage} from "../moviles/moviles";
import {ConsolasPage} from "../consolas/consolas";
import {SonidoPage} from "../sonido/sonido";
import {InformaticaPage} from "../informatica/informatica";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {


  }

  coches(){
    this.navCtrl.push(CochesPage);
  }

  motos(){
    this.navCtrl.push(MotosPage);
  }

  moviles(){
    this.navCtrl.push(MovilesPage);
  }

  consolas(){
    this.navCtrl.push(ConsolasPage);
  }

  sonido(){
    this.navCtrl.push(SonidoPage);
  }

  informatica(){
    this.navCtrl.push(InformaticaPage);
  }

}
