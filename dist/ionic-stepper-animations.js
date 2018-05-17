"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/angular/material2/blob/master/src/lib/stepper/stepper-animations.ts
var animations_1 = require("@angular/animations");
exports.IonicStepperAnimations = {
    horizontalStepTransition: animations_1.trigger('horizontalStepTransition', [
        animations_1.state('previous', animations_1.style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        animations_1.state('current', animations_1.style({ transform: 'none', visibility: 'visible' })),
        animations_1.state('next', animations_1.style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        animations_1.transition('* => *', animations_1.animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    verticalStepTransition: animations_1.trigger('verticalStepTransition', [
        animations_1.state('previous', animations_1.style({ height: '0px', visibility: 'hidden' })),
        animations_1.state('next', animations_1.style({ height: '0px', visibility: 'hidden' })),
        animations_1.state('current', animations_1.style({ height: '*', visibility: 'visible' })),
        animations_1.transition('* <=> current', animations_1.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};
//# sourceMappingURL=ionic-stepper-animations.js.map