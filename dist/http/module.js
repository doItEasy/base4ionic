import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { IonicModule } from 'ionic-angular';
import { httpFactory } from './WrappedHttp';
import { HttpHandle } from './HttpHandle';
import { UIService } from '../provider/UIService';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
var HttpExtModule = (function () {
    function HttpExtModule() {
    }
    return HttpExtModule;
}());
export { HttpExtModule };
HttpExtModule.decorators = [
    { type: NgModule, args: [{
                imports: [IonicModule, HttpModule],
                providers: [
                    { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, HttpHandle] },
                    HttpHandle, UIService, Toast, Network
                ]
            },] },
];
/** @nocollapse */
HttpExtModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map