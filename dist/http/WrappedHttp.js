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
WrappedHttp = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConnectionBackend, RequestOptions, HttpHandle])
], WrappedHttp);
export { WrappedHttp };
export function httpFactory(backend, defaultOptions, httpHandle) {
    return new WrappedHttp(backend, defaultOptions, httpHandle);
}
//# sourceMappingURL=WrappedHttp.js.map