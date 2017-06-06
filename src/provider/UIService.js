var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * 用户交互反馈
 *
 * 规划：1.环境判断   2.loading效果  3.提示(toast)  4.网络判断
 */
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
var UIService = (function () {
    function UIService(platform, toastCtrl, loadingCtrl, alertCtrl, network, toast) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toast = toast;
        this.loadRunning = false;
    }
    /**
     * 是否真机环境
     * @return {boolean}
     */
    UIService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android
     * @return {boolean}
     */
    UIService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios
     * @return {boolean}
     */
    UIService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    UIService.prototype.showToast = function (message, duration) {
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    ;
    UIService.prototype.showToastBottom = function (message, duration) {
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'bottom').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'bottom',
                showCloseButton: false
            }).present();
        }
    };
    ;
    UIService.prototype.showToastTop = function (message, duration) {
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'top').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'top',
                showCloseButton: false
            }).present();
        }
    };
    ;
    UIService.prototype.presentConfirm = function (title, message, cb) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: '确定',
                    handler: function () {
                        cb();
                    }
                }
            ]
        });
        alert.present();
    };
    UIService.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['确认']
        });
        alert.present();
    };
    /**
     * 1.5秒后显示loading
     */
    UIService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadRunning) {
            this.loadRunning = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            setTimeout(function () {
                if (_this.loadRunning) {
                    _this.loading.present();
                }
            }, 1500);
            setTimeout(function () {
                _this.hideLoading();
            }, 10000);
        }
    };
    ;
    /**
     *立刻显示loading
     */
    UIService.prototype.showLoadingNow = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadRunning) {
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            this.loadRunning = true;
            setTimeout(function () {
                _this.hideLoading();
            }, 10000);
        }
    };
    ;
    /**
     * 关闭loading
     */
    UIService.prototype.hideLoading = function () {
        if (this.loadRunning) {
            this.loading.dismiss();
            this.loadRunning = false;
        }
    };
    ;
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    UIService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    UIService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    return UIService;
}());
UIService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Platform,
        ToastController,
        LoadingController,
        AlertController,
        Network,
        Toast])
], UIService);
export { UIService };
//# sourceMappingURL=UIService.js.map