import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ImgUploader } from './ImgUploader';
import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
var UploadModule = (function () {
    function UploadModule() {
    }
    return UploadModule;
}());
export { UploadModule };
UploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [IonicModule],
                providers: [
                    ImgUploader, Camera, Transfer
                ]
            },] },
];
/** @nocollapse */
UploadModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map