import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from 'ionic-angular';
import Word from './../../model/Word';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-word-test',
  templateUrl: 'word-test.html',
})
export class WordTestPage {

  randomWord: Word;

  started: boolean;
  words: any;
  toLearnWords: any;
  learnedWords: any;

  buttons = [];

  type: string;

  constructor(public loadCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.started = false;
    this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
    this.toLearnWords = JSON.parse(localStorage.getItem("toLearnWords"));
    this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
  }

  ionViewDidLoad() {}

  getNewWord() {
    this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];

    for (var i = 0; i < 4; i++) {
      var index = Math.floor(Math.random() * this.toLearnWords.length);
      this.buttons.push(this.toLearnWords[index]);
    }

    var ind = Math.round(Math.random() * 3);
    this.buttons[ind] = this.randomWord;
  }

  start(type) {
    this.started = true;
    this.getNewWord();

    this.type = type;
  }

  updateWords()
  {
    this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
    this.toLearnWords = JSON.parse(localStorage.getItem("toLearnWords"));
    this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
    this.buttons = [];
  }

  checkWordENRU(word) {

    if (word.ruWord == this.randomWord.ruWord) {
      var ind = this.words.indexOf(this.randomWord);
      this.words.splice(ind, 1);
      this.learnedWords.unshift(this.randomWord);
      localStorage.setItem("learnedWords", JSON.stringify(this.learnedWords));
      localStorage.setItem("toRepeatWords", JSON.stringify(this.words));

      this.updateWords();
      this.getNewWord();

      var rateCounter = +localStorage.getItem("rateCounter");
      rateCounter++;

      localStorage.setItem("rateCounter", String(rateCounter));
    } 
    else
    {
      this.alertCtrl.create({
        title: 'Неверно',
        subTitle: this.eina(this.randomWord.enWord) + " -- " + this.randomWord.ruWord,
        buttons: ['OK']
      }).present();
    }
  }

  checkWordRUEN(word) {

    if (word.enWord == this.randomWord.enWord) {
      var ind = this.words.indexOf(this.randomWord);
      this.words.splice(ind, 1);
      this.learnedWords.unshift(this.randomWord);
      localStorage.setItem("learnedWords", JSON.stringify(this.learnedWords));
      localStorage.setItem("toRepeatWords", JSON.stringify(this.words));

      this.updateWords();
      this.getNewWord();

      
      var rateCounter = +localStorage.getItem("rateCounter");
      rateCounter++;

      localStorage.setItem("rateCounter", String(rateCounter));
    } 
    else
    {
      this.alertCtrl.create({
        title: 'Неверно',
        subTitle: this.randomWord.ruWord + " -- " + this.eina(this.randomWord.enWord),
        buttons: ['OK']
      }).present();
    }
  }

  eina(text)
  {
    return "<span class='eina'>" + text + "</span>";
  }

}
