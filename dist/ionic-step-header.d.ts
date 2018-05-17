import { IonicStepStatus } from './ionic-step';
export declare class IonicStepHeaderComponent {
    label: string;
    description: string;
    icon: string;
    errorIcon: string;
    index: number;
    active: boolean;
    status: IonicStepStatus;
    readonly isError: boolean;
}
