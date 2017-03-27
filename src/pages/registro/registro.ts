import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Nav} from 'ionic-angular';
import {Page1} from "../page1/page1";


/*
  Generated class for the Registro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({

  selector: 'page-registro',
  templateUrl: 'registro.html'

})
export class RegistroPage {

  component: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    //console.log(this.navCtrl.pop());
  }

  registrar(){
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }

}
