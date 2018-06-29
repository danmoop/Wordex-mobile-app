import { Component, ViewChild } from '@angular/core';
import { Nav, App, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LearnScreenPage } from '../pages/learn-screen/learn-screen';
import { WordsViewerPage } from '../pages/words-viewer/words-viewer';
import { WordTestPage } from '../pages/word-test/word-test';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string, type: string}>;

  constructor(public appCtrl: App, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Домашняя', component: HomePage, icon: 'ios-home-outline', type: 'None'},
      { title: 'Известные слова', component: 'WordsViewerPage', icon: 'ios-search-outline', type: 'knownWords'},
      { title: 'Выученные слова', component: 'WordsViewerPage', icon: 'cloud-outline', type: 'learnedWords'},
      { title: 'Слова для повторения', component: 'WordsViewerPage', icon: 'ios-information-circle-outline', type: 'toRepeatWords'},
      { title: 'Пройти тест', component: 'WordTestPage', icon: 'stats', type: 'None'},
      { title: 'Помощь', component: 'HelpScreenPage', icon: 'help-circle-outline', type: 'None'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  pushTo(page)
  {
    if(page.title == 'Домашняя') 
      this.nav.setRoot(HomePage);
    else if(page.type != 'None') 
      this.appCtrl.getRootNav().push(page.component, page.type);
    else 
      this.appCtrl.getRootNav().push(page.component);

  }
}
