import { NgModule , ModuleWithProviders} from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ImgUploader} from './ImgUploader';

import { Camera} from '@ionic-native/camera';
import { Transfer} from '@ionic-native/transfer';

@NgModule({
	imports: [IonicModule]
})
export class UploadModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: UploadModule,
			providers: [
				ImgUploader,Camera,Transfer
			]
		};
	}
}
