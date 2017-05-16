import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ImgUploader} from './ImgUploader';

import { Camera} from '@ionic-native/camera';
import { Transfer} from '@ionic-native/transfer';

@NgModule({
	imports: [IonicModule],
	providers: [
		Camera,Transfer,ImgUploader
	]
})
export class UploadModule {}
