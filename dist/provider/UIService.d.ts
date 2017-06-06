import { ToastController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
export declare class UIService {
    private platform;
    private toastCtrl;
    private loadingCtrl;
    private alertCtrl;
    private network;
    private toast;
    private loading;
    private loadRunning;
    constructor(platform: Platform, toastCtrl: ToastController, loadingCtrl: LoadingController, alertCtrl: AlertController, network: Network, toast: Toast);
    isMobile(): boolean;
    isAndroid(): boolean;
    isIos(): boolean;
    showToast(message: string, duration?: number): void;
    showToastBottom(message: string, duration?: number): void;
    showToastTop(message: string, duration?: number): void;
    presentConfirm(title: string, message: string, cb: any): void;
    presentAlert(message: string): void;
    showLoading(content?: string): void;
    showLoadingNow(content?: string): void;
    hideLoading(): void;
    getNetworkType(): string;
    isConnecting(): boolean;
}
