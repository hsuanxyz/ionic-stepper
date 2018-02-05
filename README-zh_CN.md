<p align="center">
   <img width="800" src="https://raw.githubusercontent.com/HsuanXyz/ionic-stepper/master/screenshot.png">
</p>

# ionic-stepper

用于 Ionic 的分步器 (stepper)。

[![Build Status][build-image]][build-image]
[![Dependency Status][dependency-image]][dependency-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![MIT License][license-image]][license-url]

## 开始

### 前提条件

- `ionic-angular: ^3.x`
- `@angular/animations: ^4.x`

### 安装

```base
$ npm install ionic-stepper
# or
$ yarn add ionic-stepper
```

### 使用

import 到你的 `root.module.ts`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

...

import { IonicStepperModule } from 'ionic-stepper';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicStepperModule,
    IonicModule.forRoot(MyApp)
  ],
  ...
})
export class AppModule {}
```

`your-component.ts`

```ts
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  template: `
   <ion-stepper #stepper (selectIndexChange)="selectChange($event)">
      <ion-step label="Step1"
                description="Step1 description">
        <h2>Step1 Content</h2>
        <p>Step1 Content</p>
        <button ion-button small ionicStepperNext>Next</button>
      </ion-step>
      <ion-step label="Step2 - Step2 - Step2"
                description="Step1 description">
        <h2>Step2 Content</h2>
        <p>Step2 Content</p>
        <button ion-button color="light" small ionicStepperPrevious>Previous</button>
      </ion-step>
    </ion-stepper>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  selectChange(e) {
    console.log(e);
  }
}

```

## API

### `ion-stepper`

#### property

| Name            | Type          | Default       | Description |
| --------------- | ------------- | ------------- | ----------- |
| [mode]          | `'horizontal', 'vertical'`    | `'vertical'`| 方向 |
| (selectIndexChange) | `EventEmitter<number>`    |             | index 改变事件 |

#### method

| Name            |  Description |
| --------------- |   ----------- |
| nextStep(): void        |  下一步   |
| previousStep(): void    |  上一步  |
| setStep(index: number): boolean | 通过 index 设置 |


### `ion-step`

#### property

| Name            | Type          | Default       | Description |
| --------------- | ------------- | ------------- | ----------- |
| [label]         | `string`      |               |  label  |
| [description]   | `string`      |               | 描述 (仅在 visible 有效) |
| [icon]          | `icon`        | `'number'`    | step 的 icon, 默认显示当前 index ([icons](https://ionicframework.com/docs/ionicons/)) |
| [status]        | `'error', ''` | `''`          | step 的状态 |
| [errorIcon]     | `string`      | `'close'`     | 错误状态下的 icon |

### `[ionicStepperNext]`

移动到下一步

`<button ion-button ionicStepperNext>Next</button>`

### `[ionicStepperPrevious]`

移动到上一步

`<button ion-button ionicStepperPrevious>Previous</button>`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[build-image]: https://travis-ci.org/HsuanXyz/ionic-stepper.svg?branch=master
[build-image]: https://travis-ci.org/HsuanXyz/ionic-stepper

[dependency-image]: https://david-dm.org/HsuanXyz/ionic-stepper.svg
[dependency-url]:https://david-dm.org/HsuanXyz/ionic-stepper

[npm-image]: https://img.shields.io/npm/v/ionic-stepper.svg
[npm-url]: https://www.npmjs.com/package/ionic-stepper

[downloads-image]: https://img.shields.io/npm/dm/ionic-stepper.svg
[downloads-url]: http://badge.fury.io/js/ionic-stepper

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE