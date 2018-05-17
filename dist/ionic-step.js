"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IonicStepComponent = (function () {
    function IonicStepComponent() {
        this.icon = 'number';
        this.errorIcon = 'close';
        this.status = '';
    }
    IonicStepComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-step',
                    template: "\n  <ng-template><ng-content></ng-content></ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    IonicStepComponent.ctorParameters = function () { return []; };
    IonicStepComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'description': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'errorIcon': [{ type: core_1.Input },],
        'status': [{ type: core_1.Input },],
        'content': [{ type: core_1.ViewChild, args: [core_1.TemplateRef,] },],
    };
    return IonicStepComponent;
}());
exports.IonicStepComponent = IonicStepComponent;
//# sourceMappingURL=ionic-step.js.map