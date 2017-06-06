var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { ActionSheetController, LoadingController } from 'ionic-angular';
var ImgUploader = (function () {
    function ImgUploader(actionSheetCtrl, camera, loadCtrl, transfer) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadCtrl = loadCtrl;
        this.transfer = transfer;
    }
    ImgUploader.prototype.open = function (uploadOptions) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '拍照',
                    icon: 'md-camera',
                    handler: function () {
                        _this.takePhoto().then(_this.renderImg).then(function (imageData) {
                            if (!!uploadOptions.onSuccess) {
                                uploadOptions.onSuccess(imageData);
                            }
                            _this.upload(imageData, uploadOptions).then(function (data) {
                                if (!!uploadOptions.onSuccess) {
                                    uploadOptions.onSuccess(data);
                                }
                            }).catch(function (error) { return console.error(error); });
                        });
                    }
                }, {
                    text: '从相册选取',
                    icon: 'md-images',
                    handler: function () {
                        _this.openAlbum().then(_this.renderImg).then(function (imageData) {
                            if (!!uploadOptions.onSuccess) {
                                uploadOptions.onSuccess(imageData);
                            }
                            _this.upload(imageData, uploadOptions).then(function (data) {
                                if (!!uploadOptions.onSuccess) {
                                    uploadOptions.onSuccess(data);
                                }
                            }).catch(function (error) { return console.error(error); });
                        });
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ImgUploader.prototype.openAlbum = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                "sourceType": 0,
                "destinationType": 0,
                "quality": 50
            };
            _this.camera.getPicture(options).then(function (imageData) {
                resolve('data:image/jpeg;base64,' + imageData);
            }, function (err) {
                reject(err);
            });
        });
    };
    ImgUploader.prototype.takePhoto = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                "sourceType": 1,
                "destinationType": 0,
                "quality": 50
            };
            _this.camera.getPicture(options).then(function (imageData) {
                resolve('data:image/jpeg;base64,' + imageData);
            }, function (err) {
                reject(err);
            });
        });
    };
    ImgUploader.prototype.renderImg = function (base64) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.src = base64;
            if (image.complete) {
                render();
            }
            else {
                image.onload = render;
            }
            function render() {
                var MaximgW = 1000;
                var MaximgH = 1000;
                var imageWidth, imageHeight;
                var canvas = document.createElement("canvas");
                if (image.width > image.height) {
                    imageWidth = MaximgW;
                    imageHeight = MaximgH * (image.height / image.width);
                }
                else if (image.width < image.height) {
                    imageHeight = MaximgH;
                    imageWidth = MaximgW * (image.width / image.height);
                }
                else {
                    imageWidth = MaximgW;
                    imageHeight = MaximgH;
                }
                canvas.width = imageWidth;
                canvas.height = imageHeight;
                var con = canvas.getContext('2d');
                con.clearRect(0, 0, canvas.width, canvas.height);
                con.drawImage(image, 0, 0, imageWidth, imageHeight);
                var ndata = canvas.toDataURL('image/jpeg', 0.5);
                resolve(ndata);
            }
        });
    };
    ImgUploader.prototype.upload = function (data, uploadOptions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fileTransfer = _this.transfer.create();
            var options;
            var loading = _this.loadCtrl.create({
                content: "上传中..."
            });
            loading.present();
            options = {
                fileKey: uploadOptions['fileKey'],
                fileName: uploadOptions['fileName'],
                mimeType: 'multipart/form-data',
                httpMethod: 'POST',
                headers: {}
            };
            fileTransfer.upload(data, uploadOptions['uploadUrl'], options).then(function (data) {
                loading.dismiss();
                resolve(JSON.parse(data['response']));
            }, function (err) {
                reject(err);
            });
        });
    };
    return ImgUploader;
}());
ImgUploader = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ActionSheetController,
        Camera,
        LoadingController,
        Transfer])
], ImgUploader);
export { ImgUploader };
//# sourceMappingURL=ImgUploader.js.map