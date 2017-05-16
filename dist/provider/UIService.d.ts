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
    /**
     * 是否真机环境
     * @return {boolean}
     */
    isMobile(): boolean;
    /**
     * 是否android
     * @return {boolean}
     */
    isAndroid(): boolean;
    /**
     * 是否ios
     * @return {boolean}
     */
    isIos(): boolean;
    showToast(message: string, duration?: number): void;
    showToastBottom(message: string, duration?: number): void;
    showToastTop(message: string, duration?: number): void;
    presentConfirm(title: string, message: string, cb: any): void;
    presentAlert(message: string): void;
    /**
     * 1.5秒后显示loading
     */
    showLoading(content?: string): void;
    /**
     *立刻显示loading
     */
    showLoadingNow(content?: string): void;
    /**
     * 关闭loading
     */
    hideLoading(): void;
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string;
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    isConnecting(): boolean;
}
