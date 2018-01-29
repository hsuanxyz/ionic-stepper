import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  index:number = 2;
  constructor(public navCtrl: NavController) {

  }

  selectChange(e) {
    console.log(this.index);
    console.log(e);
  }
}
