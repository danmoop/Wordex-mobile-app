import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordTestPage } from './word-test';

@NgModule({
  declarations: [
    WordTestPage,
  ],
  imports: [
    IonicPageModule.forChild(WordTestPage),
  ],
})
export class WordTestPageModule {}
