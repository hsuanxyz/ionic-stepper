import { Directive} from '@angular/core';
import { IonicStepperComponent } from "./ionic-stepper";

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: '[ionicStepperNext]',
  host: {
    '(click)': '_stepper.nextStep()',
  }
})
export class IonicStepperNext {

  constructor(public _stepper: IonicStepperComponent) {}
}

/** Button that moves to the previous step in a stepper workflow. */
@Directive({
  selector: '[ionicStepperPrevious]',
  host: {
    '(click)': '_stepper.previousStep()',
  }
})
export class IonicStepperPrevious {

  constructor(public _stepper: IonicStepperComponent) {}
}
