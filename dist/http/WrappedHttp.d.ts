import { Http, Response, RequestOptions, ConnectionBackend, RequestOptionsArgs, XHRBackend } from '@angular/http';
import { Observable } from "rxjs";
import { HttpHandle } from "./HttpHandle";
export declare class WrappedHttp extends Http {
    handle: HttpHandle;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, handle: HttpHandle);
    get(url: string, options?: RequestOptionsArgs): Observable<Response>;
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    head(url: string, options?: RequestOptionsArgs): Observable<Response>;
    options(url: string, options?: RequestOptionsArgs): Observable<Response>;
}
export declare function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, httpHandle: HttpHandle): WrappedHttp;
