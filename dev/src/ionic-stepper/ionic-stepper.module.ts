import { NgModule } from '@angular/core';
import { IonicStepperComponent } from './ionic-stepper';
import { IonicStepComponent } from './ionic-step';
import { CommonModule } from '@angular/common';
import { IonicStepHeaderComponent } from './ionic-step-header';
import { IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStepperNext, IonicStepperPrevious } from './ionic-stepper-button';

const COMPONENTS = [
  IonicStepperComponent,
  IonicStepComponent,
  IonicStepHeaderComponent,
  IonicStepperNext,
  IonicStepperPrevious
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, BrowserAnimationsModule, IonicModule],
  exports: [...COMPONENTS]
})
export class IonicStepperModule {
}
