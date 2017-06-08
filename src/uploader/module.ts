import { NgModule , ModuleWithProviders,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicModule} from 'ionic-angular';

import { ImgUploader} from './ImgUploader';

import { Camera} from '@ionic-native/camera';
import { Transfer} from '@ionic-native/transfer';

@NgModule({
	imports:[IonicModule],
	providers: [
		ImgUploader,Camera,Transfer
	]
})
export class UploadModule {}
