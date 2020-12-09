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

  /**
   * @param randomWord is a word that is being displayed on a screen
   */
  randomWord: Word;

  /**
   * @param started states whether test has been started or not
   */
  started: boolean;

  /**
   * @param words are words that need to be repeated, taken from 'toRepeatWords' array
   */
  words: any;

  /**
   * @param wordsBank are words that are in a word bank, multiple choice words are taken from this array
   */
  wordsBank: any;

  /**
   * @param learnedWords are word that user has already learned
   */
  learnedWords: any;

  /**
   * @param button are multiple choices, each button has different translation of a word
   */
  buttons = [];

  /**
   * @param type stands for word test type -> from RU to EN or from EN to RU
   */
  type: string;

  constructor(public loadCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.started = false;
    this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
    this.wordsBank = JSON.parse(localStorage.getItem("wordsBank"));
    this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
  }

  ionViewDidLoad() {}

  /**
   * @return a new random word from a word bank
   */
  getNewWord() {
    this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];

    for (var i = 0; i < 4; i++) {
      var index = Math.floor(Math.random() * this.wordsBank.length);
      
      if(this.randomWord != this.wordsBank[index]) this.buttons.push(this.wordsBank[index]);
      else i--;
    }

    var ind = Math.round(Math.random() * 3);
    this.buttons[ind] = this.randomWord;
  }

  /**
   * @param type is a test type passed (ru->en or en->ru)
   */
  start(type) {
    this.started = true;
    this.getNewWord();

    this.type = type;
  }

  /**
   * information is being updated and displayed
   */
  updateWords()
  {
    this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
    this.wordsBank = JSON.parse(localStorage.getItem("wordsBank"));
    this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
    this.buttons = [];
  }

  /**
   * @param word is a word user clicks on
   * @function checkWordENRU checks whether user clicked the valid translation
   */
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

  /**
   * @param word is a word user clicks on
   * @function checkWordRUEN checks whether user clicked the valid translation
   */
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

  /**
   * @param word is a word typeof string
   * @return same string but in 'eina' font
   */
  eina(text)
  {
    return "<span class='eina'>" + text + "</span>";
  }
}
