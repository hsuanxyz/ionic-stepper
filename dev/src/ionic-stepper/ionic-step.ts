import { Component, forwardRef, Inject, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { IonicStepperComponent } from "./ionic-stepper";

@Component({
  selector: 'ionic-step',
  template: `
  <ng-template><ng-content></ng-content></ng-template>
  `
})
export class IonicStepComponent implements OnChanges {
  index: number;

  @Input() disabled: boolean;
  @Input() label: string;
  @Input() description: string;
  @Input() icon: string = 'number';

  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor(@Inject(forwardRef(() => IonicStepperComponent)) private _stepper: IonicStepperComponent) {
  }

  ngOnChanges() {
  }

}
