var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 包装过的HTTP服务
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, ConnectionBackend } from '@angular/http';
import { Observable } from "rxjs";
import { HttpHandle } from "./HttpHandle";
var WrappedHttp = (function (_super) {
    __extends(WrappedHttp, _super);
    function WrappedHttp(backend, defaultOptions, handle) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.handle = handle;
        return _this;
    }
    WrappedHttp.prototype.get = function (url, options) {
        var _this = this;
        this.handle.events.publish("request:before", url, options);
        return Observable.create(function (observer) {
            _super.prototype.get.call(_this, url, options).subscribe(function (res) {
                _this.handle.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this.handle.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    WrappedHttp.prototype.post = function (url, body, options) {
        var _this = this;
        this.handle.events.publish("request:before", url, options);
        return Observable.create(function (observer) {
            _super.prototype.post.call(_this, url, body, options).subscribe(function (res) {
                _this.handle.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this.handle.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    WrappedHttp.prototype.put = function (url, body, options) {
        var _this = this;
        this.handle.events.publish("request:before", url, options);
        return Observable.create(function (observer) {
            _super.prototype.put.call(_this, url, body, options).subscribe(function (res) {
                _this.handle.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this.handle.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    WrappedHttp.prototype.delete = function (url, options) {
        var _this = this;
        this.handle.events.publish("request:before", url, options);
        return Observable.create(function (observer) {
            _super.prototype.delete.call(_this, url, options).subscribe(function (res) {
                _this.handle.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this.handle.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    WrappedHttp.prototype.patch = function (url, body, options) {
        var _this = this;
        this.handle.events.publish("request:before", url, options);
        return Observable.create(function (observer) {
            _super.prototype.patch.call(_this, url, body, options).subscribe(function (res) {
                _this.handle.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this.handle.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    WrappedHttp.prototype.head = function (url, options) {
        var _this = this;
        this.handle.events.publish("request:before", url, options);
        return Observable.create(function (observer) {
            _super.prototype.head.call(_this, url, options).subscribe(function (res) {
                _this.handle.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this.handle.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    WrappedHttp.prototype.options = function (url, options) {
        var _this = this;
        this.handle.events.publish("request:before", url, options);
        return Observable.create(function (observer) {
            _super.prototype.options.call(_this, url, options).subscribe(function (res) {
                _this.handle.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this.handle.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    return WrappedHttp;
}(Http));
export { WrappedHttp };
WrappedHttp.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WrappedHttp.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
    { type: HttpHandle, },
]; };
export function httpFactory(backend, defaultOptions, httpHandle) {
    return new WrappedHttp(backend, defaultOptions, httpHandle);
}
//# sourceMappingURL=WrappedHttp.js.map