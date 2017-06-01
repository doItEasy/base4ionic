import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { Http, XHRBackend, RequestOptions} from "@angular/http";

import {httpFactory, WrappedHttp} from './WrappedHttp';
import {HttpHandle } from './HttpHandle';
import {UIService} from '../provider/UIService';
import {Toast} from '@ionic-native/toast';
import {Network} from '@ionic-native/network';



@NgModule({
	imports: [IonicModule,HttpModule]

})
export class HttpExtModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: HttpExtModule,
			providers: [
				{provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, HttpHandle]},
				HttpHandle,UIService,Toast,Network
			]
		};
	}
}
