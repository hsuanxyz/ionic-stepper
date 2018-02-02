import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mode:string = 'vertical';
  selectedIndex = 0;

  constructor(public navCtrl: NavController) {

  }

  selectChange(e) {
    console.log(e);
  }
}
