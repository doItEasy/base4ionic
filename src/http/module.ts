import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Http, XHRBackend, RequestOptions} from "@angular/http";

import {httpFactory} from './WrappedHttp';
import {HttpHandle } from './HttpHandle';
import {UIService} from '../provider/UIService';
import {Toast} from '@ionic-native/toast';
import {Network} from '@ionic-native/network';



@NgModule({
	imports: [HttpModule],
	providers: [
		{provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, HttpHandle]},
		HttpHandle,UIService,Toast,Network
	]
})
export class HttpExtModule {}
