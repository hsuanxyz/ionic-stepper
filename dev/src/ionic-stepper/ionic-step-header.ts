import { Component, Input } from '@angular/core';

@Component({
  selector: 'ionic-step-header',
  template: `
<div class="ionic-step-header-icon" [class.ionic-step-header-icon-active]="active">
    <span class="ionic-step-header-icon-number" *ngIf="icon === 'number'; else ionIcon">{{index + 1}}</span>
    <ng-template #ionIcon><ion-icon name="heart"></ion-icon></ng-template>
</div>
<div class="ionic-step-header-text-container" [class.mt]="description">
  <div class="ionic-step-header-label" [class.ionic-step-header-label-active]="active">{{label}}</div>
  <div class="ionic-step-header-description" *ngIf="description">{{description}}</div>
</div>
  `
})
export class IonicStepHeaderComponent {

  @Input() label: string;
  @Input() description: string;
  @Input() icon: string = 'number';
  @Input() index: number;
  @Input() active: boolean = false;

  constructor() {
  }


}
