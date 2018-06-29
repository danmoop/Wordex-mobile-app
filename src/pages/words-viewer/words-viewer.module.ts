import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordsViewerPage } from './words-viewer';

@NgModule({
  declarations: [
    WordsViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(WordsViewerPage),
  ],
})
export class WordsViewerPageModule {}
