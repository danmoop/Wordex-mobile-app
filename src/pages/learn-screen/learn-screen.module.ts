import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnScreenPage } from './learn-screen';

@NgModule({
  declarations: [
    LearnScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnScreenPage),
  ],
})
export class LearnScreenPageModule {}
