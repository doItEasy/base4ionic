/**
 * 拍照上传图片服务
 */

import {Injectable} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera'
import {Transfer, TransferObject} from '@ionic-native/transfer'
import {ActionSheetController, LoadingController} from 'ionic-angular';
import {UploadOptions} from './upload.option'
@Injectable()
export class ImgUploader {
    constructor(public actionSheetCtrl: ActionSheetController,
                private camera: Camera,
                private loadCtrl: LoadingController,
                private transfer: Transfer) {

    }

    open(uploadOptions:UploadOptions) {

        let actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '拍照',
                    icon: 'md-camera',
                    handler: () => {
                        this.takePhoto().then(this.renderImg).then((imageData) => {
                            if(!!uploadOptions.onSuccess){
                                uploadOptions.onSuccess(imageData);
                            }
                            this.upload(imageData,uploadOptions).then((data) => {
                                if(!!uploadOptions.onSuccess){
                                    uploadOptions.onSuccess(data);
                                }
                            }).catch(error => console.error(error));
                        });
                    }

                }, {
                    text: '从相册选取',
                    icon: 'md-images',
                    handler: () => {

                        this.openAlbum().then(this.renderImg).then((imageData) => {
                            if(!!uploadOptions.onSuccess){
                                uploadOptions.onSuccess(imageData);
                            }
                            this.upload(imageData,uploadOptions).then((data) => {
                                if(!!uploadOptions.onSuccess){
                                    uploadOptions.onSuccess(data);
                                }
                            }).catch(error => console.error(error));
                        });

                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();


    }


    openAlbum() {
        return new Promise((resolve, reject) => {
            let options: CameraOptions = {
                "sourceType": 0,
                "destinationType": 0,
                "quality": 50
            };
            this.camera.getPicture(options).then((imageData) => {
                resolve('data:image/jpeg;base64,' + imageData);
            }, (err) => {
                reject(err);
            });
        })

    }

    takePhoto() {
        return new Promise((resolve, reject) => {
            let options: CameraOptions = {
                "sourceType": 1,
                "destinationType": 0,
                "quality": 50
            };
            this.camera.getPicture(options).then((imageData) => {
                resolve('data:image/jpeg;base64,' + imageData);
            }, (err) => {
                reject(err);
            });
        })
    }


    renderImg(base64:string) {
        return new Promise((resolve, reject) => {
            var image = new Image();
            image.src = base64;
            //图片加载完毕之后进行压缩，然后上传
            if (image.complete) {
                render();
            } else {
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
                //进行最小压缩
                var ndata = canvas.toDataURL('image/jpeg', 0.5);
                resolve(ndata);
            }


        })
    }


    upload(data:any,uploadOptions:UploadOptions) {
        return new Promise((resolve, reject) => {
            const fileTransfer: TransferObject = this.transfer.create();
            var options: any;

            let loading = this.loadCtrl.create({
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


            fileTransfer.upload(data, uploadOptions['uploadUrl'], options).then((data) => {
                loading.dismiss();
                resolve(JSON.parse(data['response']));
            }, (err) => {
                reject(err);
            })


        })
    }


}
