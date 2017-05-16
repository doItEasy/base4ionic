/**
 * 用户交互反馈
 *
 * 规划：1.环境判断   2.loading效果  3.提示(toast)  4.网络判断
 */
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Platform, Loading, AlertController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Network} from '@ionic-native/network';


@Injectable()
export class UIService {
  private loading: Loading;
  private loadRunning: boolean = false;

  constructor(private platform: Platform,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private network:Network,
              private toast: Toast

  ) {
  }


  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile() {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android
   * @return {boolean}
   */
  isAndroid() {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios
   * @return {boolean}
   */
  isIos() {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }



  showToast(message: string, duration: number = 2000) {
    if (this.isMobile()) {
      this.toast.show(message, String(duration), 'center').subscribe();
    } else {
      this.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'middle',
        showCloseButton: false
      }).present();
    }
  };


  showToastBottom(message: string, duration: number = 2000) {
    if (this.isMobile()) {
      this.toast.show(message, String(duration), 'bottom').subscribe();
    } else {
      this.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'bottom',
        showCloseButton: false
      }).present();
    }
  };

  showToastTop(message: string, duration: number = 2000) {
    if (this.isMobile()) {
      this.toast.show(message, String(duration), 'top').subscribe();
    } else {
      this.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'top',
        showCloseButton: false
      }).present();
    }
  };

  presentConfirm(title: string, message: string, cb:any) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: '确定',
          handler: () => {
            cb();
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      subTitle: message,
      buttons: ['确认']
    });
    alert.present();
  }


  /**
   * 1.5秒后显示loading
   */
  showLoading(content: string = '') {
    if (!this.loadRunning) {
      this.loadRunning = true;
      this.loading = this.loadingCtrl.create({
        content: content
      });

      setTimeout(() => {//1500毫秒内完成的请求不显示loading
        if (this.loadRunning) {
          this.loading.present();
        }
      }, 1500);

      setTimeout(() => {//最长显示10秒
        this.hideLoading();
      }, 10000);
    }
  };

  /**
   *立刻显示loading
   */
  showLoadingNow(content: string = '') {

    if (!this.loadRunning) {
      this.loading = this.loadingCtrl.create({
        content: content
      });

      this.loading.present();
      this.loadRunning = true;

      setTimeout(() => {//最长显示10秒
        this.hideLoading();
      }, 10000);
    }
  };

  /**
   * 关闭loading
   */
  hideLoading() {
    if (this.loadRunning) {
      this.loading.dismiss();
      this.loadRunning = false;
    }
  };


  /**
   * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   */
  getNetworkType(): string {
    if (!this.isMobile()) {
      return 'wifi';
    }
    return this.network.type;
  }

  /**
   * 判断是否有网络
   * @returns {boolean}
   */
  isConnecting(): boolean {
    return this.getNetworkType() != 'none';
  }


}
