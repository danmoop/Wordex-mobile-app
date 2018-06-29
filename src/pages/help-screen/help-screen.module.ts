import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpScreenPage } from './help-screen';

@NgModule({
  declarations: [
    HelpScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpScreenPage),
  ],
})
export class HelpScreenPageModule {}
