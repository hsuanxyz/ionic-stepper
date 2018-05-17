"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IonicStepHeaderComponent = (function () {
    function IonicStepHeaderComponent() {
        this.icon = 'number';
        this.errorIcon = 'close';
        this.active = false;
        this.status = '';
    }
    Object.defineProperty(IonicStepHeaderComponent.prototype, "isError", {
        get: function () { return this.status === 'error'; },
        enumerable: true,
        configurable: true
    });
    IonicStepHeaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-step-header',
                    template: "\n<div class=\"ionic-step-header-icon\"\n     [class.ionic-step-header-icon-error]=\"isError\"\n     [class.ionic-step-header-icon-active]=\"active\">\n    <span class=\"ionic-step-header-icon-number\" *ngIf=\"(icon === 'number' && status === ''); else ionIcon\">{{index + 1}}</span>\n    <ng-template #ionIcon><ion-icon [name]=\"!isError ? icon : errorIcon\"></ion-icon></ng-template>\n</div>\n<div class=\"ionic-step-header-text-container\" [class.mt]=\"description\">\n  <div class=\"ionic-step-header-label\"\n       [class.ionic-step-header-label-error]=\"isError\"\n       [class.ionic-step-header-label-active]=\"active\">{{label}}</div>\n  <div class=\"ionic-step-header-description\" [class.ionic-step-header-description-error]=\"isError\" *ngIf=\"description\">\n    <span>{{description}}</span>\n  </div>\n</div>\n  ",
                    host: {
                        '[class.ionic-step-header-status-error]': 'isError'
                    }
                },] },
    ];
    /** @nocollapse */
    IonicStepHeaderComponent.ctorParameters = function () { return []; };
    IonicStepHeaderComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'description': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'errorIcon': [{ type: core_1.Input },],
        'index': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'status': [{ type: core_1.Input },],
    };
    return IonicStepHeaderComponent;
}());
exports.IonicStepHeaderComponent = IonicStepHeaderComponent;
//# sourceMappingURL=ionic-step-header.js.map