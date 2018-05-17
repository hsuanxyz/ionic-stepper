"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_stepper_1 = require("./ionic-stepper");
/** Button that moves to the next step in a stepper workflow. */
var IonicStepperNext = (function () {
    function IonicStepperNext(_stepper) {
        this._stepper = _stepper;
    }
    IonicStepperNext.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ionicStepperNext]',
                    host: {
                        '(click)': '_stepper.nextStep()',
                    }
                },] },
    ];
    /** @nocollapse */
    IonicStepperNext.ctorParameters = function () { return [
        { type: ionic_stepper_1.IonicStepperComponent, },
    ]; };
    return IonicStepperNext;
}());
exports.IonicStepperNext = IonicStepperNext;
/** Button that moves to the previous step in a stepper workflow. */
var IonicStepperPrevious = (function () {
    function IonicStepperPrevious(_stepper) {
        this._stepper = _stepper;
    }
    IonicStepperPrevious.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ionicStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previousStep()',
                    }
                },] },
    ];
    /** @nocollapse */
    IonicStepperPrevious.ctorParameters = function () { return [
        { type: ionic_stepper_1.IonicStepperComponent, },
    ]; };
    return IonicStepperPrevious;
}());
exports.IonicStepperPrevious = IonicStepperPrevious;
//# sourceMappingURL=ionic-stepper-button.js.map