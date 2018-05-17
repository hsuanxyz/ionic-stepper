"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_stepper_1 = require("./ionic-stepper");
var ionic_step_1 = require("./ionic-step");
var ionic_step_header_1 = require("./ionic-step-header");
var ionic_angular_1 = require("ionic-angular");
var ionic_stepper_button_1 = require("./ionic-stepper-button");
var COMPONENTS = [
    ionic_stepper_1.IonicStepperComponent,
    ionic_step_1.IonicStepComponent,
    ionic_step_header_1.IonicStepHeaderComponent,
    ionic_stepper_button_1.IonicStepperNext,
    ionic_stepper_button_1.IonicStepperPrevious
];
var IonicStepperModule = (function () {
    function IonicStepperModule() {
    }
    IonicStepperModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: COMPONENTS.slice(),
                    imports: [ionic_angular_1.IonicModule],
                    exports: COMPONENTS.slice()
                },] },
    ];
    /** @nocollapse */
    IonicStepperModule.ctorParameters = function () { return []; };
    return IonicStepperModule;
}());
exports.IonicStepperModule = IonicStepperModule;
exports.default = IonicStepperModule;
//# sourceMappingURL=ionic-stepper.module.js.map