import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { ActionSheetController, LoadingController } from 'ionic-angular';
import { UploadOptions } from './upload.option';
export declare class ImgUploader {
    private actionSheetCtrl;
    private camera;
    private loadCtrl;
    private transfer;
    constructor(actionSheetCtrl: ActionSheetController, camera: Camera, loadCtrl: LoadingController, transfer: Transfer);
    open(uploadOptions: UploadOptions): void;
    openAlbum(): Promise<{}>;
    takePhoto(): Promise<{}>;
    renderImg(base64: string): Promise<{}>;
    upload(data: any, uploadOptions: UploadOptions): Promise<{}>;
}
