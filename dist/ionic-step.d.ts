import { TemplateRef } from '@angular/core';
export declare type IonicStepStatus = ('' | 'error');
export declare class IonicStepComponent {
    index: number;
    disabled: boolean;
    label: string;
    description: string;
    icon: string;
    errorIcon: string;
    status: IonicStepStatus;
    content: TemplateRef<any>;
}
