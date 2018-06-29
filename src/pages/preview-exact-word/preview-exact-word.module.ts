import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviewExactWordPage } from './preview-exact-word';

@NgModule({
  declarations: [
    PreviewExactWordPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviewExactWordPage),
  ],
})
export class PreviewExactWordPageModule {}
