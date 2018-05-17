"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_step_1 = require("./ionic-step");
var ionic_stepper_animations_1 = require("./ionic-stepper-animations");
var IonicStepperComponent = (function () {
    function IonicStepperComponent(_hostRef, render, _changeDetectorRef) {
        this._hostRef = _hostRef;
        this.render = render;
        this._changeDetectorRef = _changeDetectorRef;
        this._selectedIndex = 0;
        this.mode = 'vertical';
        this.selectIndexChange = new core_1.EventEmitter();
    }
    Object.defineProperty(IonicStepperComponent.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (index) {
            this._selectedIndex = index;
            this.selectIndexChange.emit(this._selectedIndex);
        },
        enumerable: true,
        configurable: true
    });
    IonicStepperComponent.prototype.ngOnInit = function () {
        this.render.addClass(this._hostRef.nativeElement, "ionic-stepper-" + this.mode);
    };
    IonicStepperComponent.prototype.nextStep = function () {
        this.selectedIndex = Math.min(this.selectedIndex + 1, this._steps.length - 1);
        this._changeDetectorRef.markForCheck();
    };
    IonicStepperComponent.prototype.previousStep = function () {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        this._changeDetectorRef.markForCheck();
    };
    IonicStepperComponent.prototype.setStep = function (index) {
        var len = this._steps.length;
        if (index < len - 1 && index >= 0) {
            this.selectedIndex = index;
            this._changeDetectorRef.markForCheck();
            return true;
        }
        else {
            return false;
        }
    };
    IonicStepperComponent.prototype.getAnimationDirection = function (index) {
        var position = index - this.selectedIndex;
        if (position < 0) {
            return 'previous';
        }
        else if (position > 0) {
            return 'next';
        }
        return 'current';
    };
    IonicStepperComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-stepper',
                    template: "\n<div *ngIf=\"mode === 'horizontal'\" class=\"ionic-stepper-horizontal-container\">\n     <div class=\"ionic-stepper-horizontal-header-container\">\n       <ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\">\n          <ion-step-header [index]=\"i\"\n                             [icon]=\"step.icon\"\n                             [errorIcon]=\"step.errorIcon\"\n                             [label]=\"step.label\"\n                             [status]=\"step.status\"\n                             [active]=\"i <= selectedIndex\">\n          </ion-step-header>\n          <div *ngIf=\"!isLast\" class=\"ionic-stepper-horizontal-line\"></div>\n      </ng-container>\n    </div>\n    <ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\">\n        <div class=\"ionic-stepper-horizontal-content-container\"\n             [class.ionic-stepper-vertical-line]=\"!isLast\">\n            <div class=\"ionic-stepper-horizontal-content\"\n                 [@horizontalStepTransition]=\"getAnimationDirection(i)\">\n                 <div class=\"ionic-vertical-content\" *ngIf=\"i === selectedIndex\">\n                     <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n                 </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n\n<div *ngIf=\"mode === 'vertical'\" class=\"ionic-stepper-vertical-container\">\n    <ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\">\n        <ion-step-header [index]=\"i\"\n                           [icon]=\"step.icon\"\n                           [errorIcon]=\"step.errorIcon\"\n                           [label]=\"step.label\"\n                           [status]=\"step.status\"\n                           [active]=\"i <= selectedIndex\"\n                           [description]=\"step.description\">\n        </ion-step-header>\n        <div class=\"ionic-stepper-vertical-content-container\"\n             [class.ionic-stepper-vertical-line]=\"!isLast\">\n            <div class=\"ionic-stepper-vertical-content\"\n                 [@verticalStepTransition]=\"getAnimationDirection(i)\">\n                 <div class=\"ionic-vertical-content\">\n                     <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n                 </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    host: {
                        'class': 'ionic-stepper'
                    },
                    animations: [
                        ionic_stepper_animations_1.IonicStepperAnimations.verticalStepTransition,
                        ionic_stepper_animations_1.IonicStepperAnimations.horizontalStepTransition,
                    ],
                },] },
    ];
    /** @nocollapse */
    IonicStepperComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    IonicStepperComponent.propDecorators = {
        '_steps': [{ type: core_1.ContentChildren, args: [ionic_step_1.IonicStepComponent,] },],
        'mode': [{ type: core_1.Input },],
        'selectedIndex': [{ type: core_1.Input },],
        'selectIndexChange': [{ type: core_1.Output },],
    };
    return IonicStepperComponent;
}());
exports.IonicStepperComponent = IonicStepperComponent;
//# sourceMappingURL=ionic-stepper.js.map