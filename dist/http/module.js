var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { httpFactory } from './WrappedHttp';
import { HttpHandle } from './HttpHandle';
import { UIService } from '../provider/UIService';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
var HttpExtModule = HttpExtModule_1 = (function () {
    function HttpExtModule() {
    }
    HttpExtModule.forRoot = function () {
        return {
            ngModule: HttpExtModule_1,
            providers: [
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, HttpHandle] },
                HttpHandle, UIService, Toast, Network
            ]
        };
    };
    return HttpExtModule;
}());
HttpExtModule = HttpExtModule_1 = __decorate([
    NgModule({
        imports: [IonicModule, HttpModule]
    })
], HttpExtModule);
export { HttpExtModule };
var HttpExtModule_1;
//# sourceMappingURL=module.js.map