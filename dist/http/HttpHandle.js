/**
 * http请求handle
 */
import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { UIService } from "../provider/UIService";
var HttpHandle = (function () {
    function HttpHandle(events, uiService) {
        this.events = events;
        this.uiService = uiService;
        events.subscribe('request:before', function (url, options) {
            uiService.showLoading();
            console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
        });
        events.subscribe('request:success', function (url, options, res) {
            uiService.hideLoading();
            console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        });
        events.subscribe('request:error', function (url, options, error) {
            uiService.hideLoading();
            console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'error', error);
            var status = error.status;
            if (status === 0) {
                uiService.showToast('服务连接失败');
            }
            else if (status === 404) {
                uiService.showToast('请求地址不存在');
            }
            else if (status === 500) {
                uiService.showToast('服务器出错，请稍后再试');
            }
            else {
                uiService.showToast('未知错误，请检查网络');
            }
        });
    }
    return HttpHandle;
}());
export { HttpHandle };
HttpHandle.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HttpHandle.ctorParameters = function () { return [
    { type: Events, },
    { type: UIService, },
]; };
//# sourceMappingURL=HttpHandle.js.map