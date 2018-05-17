import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, Renderer2 } from '@angular/core';
import { IonicStepComponent } from './ionic-step';
export declare type StepContentPositionState = ('next' | 'previous' | 'current');
export declare class IonicStepperComponent implements OnInit {
    private _hostRef;
    private render;
    private _changeDetectorRef;
    disabled: boolean;
    _selectedIndex: number;
    _steps: QueryList<IonicStepComponent>;
    mode: ('horizontal' | 'vertical');
    selectedIndex: number;
    selectIndexChange: EventEmitter<number>;
    constructor(_hostRef: ElementRef, render: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    nextStep(): void;
    previousStep(): void;
    setStep(index: number): boolean;
    getAnimationDirection(index: number): StepContentPositionState;
}
