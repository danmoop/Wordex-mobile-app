	import {
	  Component
	} from '@angular/core';
	import {
	  NavController,
	  AlertController,
	  LoadingController,
	  App
	} from 'ionic-angular';

	//import {  homedir} from 'os';
	import words from './../../model/wordsbase';
	import Word from './../../model/Word';

	@Component({
	  selector: 'page-home',
	  templateUrl: 'home.html'
	})
	export class HomePage {

	  toLearnAmount = 0;
	  knownAmount = 0;
	  toRepeatAmount = 0;
	  learnedAmount = 0;

	  constructor(public appCtrl: App, public navCtrl: NavController, public alertCtrl: AlertController, public loadCtrl: LoadingController) {}

	  ionViewDidEnter() {
			this.refreshWords();

			if(+localStorage.getItem("words_imported") == 0)
			{
				this.importWords();
				localStorage.setItem("words_imported", "1");
			}

			var counter = +localStorage.getItem("rateCounter");
			var rateBool = localStorage.getItem("rateBool");

			if(counter >= 20 && rateBool != "true")
				this.alertCtrl.create({
					title: 'Оцените Wordex',
					subTitle: 'Вы выучили более 20 слов, не желаете ли оценить приложение в магазине?',
					buttons: [
						{
							text: 'Да',
							handler: data =>{
								localStorage.setItem("rateBool", "true");
								this.alertCtrl.create({
									title: '¯\\_(ツ)_/¯',
									subTitle: 'Вам повезло, никакой ссылки еще нет',
									buttons: ['OK']
								}).present();
							}
						},
						{
							text: 'Нет',
							handler: data =>{
								localStorage.setItem("rateBool", "true");
							}
						}
					]
				}).present();
	  }


	  refreshWords() {
	    let loading = this.loadCtrl.create({
	      content: 'Пожалуйста, подождите'
	    });

	    loading.present().then(() => {
	      try {
	        this.toLearnAmount = JSON.parse(localStorage.getItem("toLearnWords")).length;
	        this.knownAmount = JSON.parse(localStorage.getItem("knownWords")).length;
	        this.toRepeatAmount = JSON.parse(localStorage.getItem("toRepeatWords")).length;
	        this.learnedAmount = JSON.parse(localStorage.getItem("learnedWords")).length;
	      } catch (err) {}
	    }).then(() => {
	      loading.dismiss();
	    });
	  }

	  ls(key) {
	    var key1 = localStorage.getItem(key);
	    return key1;
	  }

	  refreshPage() {
	    this.navCtrl.setRoot(HomePage);
	  }

	  importWords() {
			localStorage.setItem("toRepeatWords", "[]");
			localStorage.setItem("knownWords", "[]");
			localStorage.setItem("learnedWords", "[]");

			var data = words.split("\n");
			var _words = [];

			for (var i = 0; i < data.length; i++) {
				var en = data[i].split(" -- ")[0];
				var ru = data[i].split(" -- ")[1];

				_words.unshift(new Word(ru, en));
			}

			localStorage.setItem("toLearnWords", JSON.stringify(_words));
	  }

	  navigateTo(pageName) {
	    this.navCtrl.push(pageName);
	  }

	  viewKnownWords(words) {
	    this.appCtrl.getRootNav().push('WordsViewerPage', words);
	  }
	}
