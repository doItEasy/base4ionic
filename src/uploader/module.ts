import { NgModule , ModuleWithProviders,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { ImgUploader} from './ImgUploader';

import { Camera} from '@ionic-native/camera';
import { Transfer} from '@ionic-native/transfer';

@NgModule({
	providers: [
		ImgUploader,Camera,Transfer
	]
})
export class UploadModule {}
