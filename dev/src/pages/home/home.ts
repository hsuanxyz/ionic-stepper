import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicStepperComponent } from "../../ionic-stepper";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mode:string = 'vertical';
  selectedIndex = 0;
  stepperForm: FormGroup;
  _JSONString: string = '';

  get name() { return this.stepperForm.get('name') }
  get email() { return this.stepperForm.get('email') }
  get address() { return this.stepperForm.get('address') }

  @ViewChild('stepper') stepper: IonicStepperComponent;
  constructor(private fb: FormBuilder) {
    this.stepperForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['']
    })
  }

  selectChange(e) {
    console.log(e);
  }

  onSubmit() {
    this._JSONString = JSON.stringify(
      this.stepperForm.getRawValue(),
      null,
      2
    );
  }

  onReset() {
    this.stepperForm.reset({
      name: '',
      email: '',
      address: '',
    });
    this._JSONString = '';
    this.stepper.setStep(0)
  }


}
