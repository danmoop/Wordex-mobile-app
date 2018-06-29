import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Word from './../../model/Word';
import { HomePage } from '../home/home';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@IonicPage()
@Component({
  selector: 'page-learn-screen',
  templateUrl: 'learn-screen.html',
})
export class LearnScreenPage {

  started: boolean;
  randomWord: Word;

  toLearnWords: any;
  toRepeatWords: any;
  knownWords: any;
  learnedWords: any;

  constructor(private tts: TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {
    this.started = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnScreenPage');
  }

  start()
  { 
      this.started = true;

      this.toLearnWords = JSON.parse(localStorage.getItem("toLearnWords"));
      this.knownWords = JSON.parse(localStorage.getItem("knownWords"));
      this.toRepeatWords = JSON.parse(localStorage.getItem("toRepeatWords"));
      this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));

      this.randomWord = this.toLearnWords[Math.round(Math.random() * this.toLearnWords.length)];
  }

  listen() {
    this.tts.speak(this.randomWord.enWord)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  getNewWord()
  {
    this.randomWord = this.toLearnWords[Math.round(Math.random() * this.toLearnWords.length)];
  }

  toBeRepeated()
  {
    var index = this.toLearnWords.indexOf(this.randomWord);
    this.toLearnWords.splice(index, 1);
    this.toRepeatWords.unshift(this.randomWord);

    localStorage.setItem("toLearnWords", JSON.stringify(this.toLearnWords));
    localStorage.setItem("toRepeatWords", JSON.stringify(this.toRepeatWords));

    this.getNewWord();
  }

  wordIsLearned()
  {
    var index = this.toLearnWords.indexOf(this.randomWord);
    this.toLearnWords.splice(index, 1);
    this.learnedWords.unshift(this.randomWord);

    localStorage.setItem("toLearnWords", JSON.stringify(this.toLearnWords));
    localStorage.setItem("learnedWords", JSON.stringify(this.learnedWords));

    this.getNewWord();
  }

  wordIsKnown()
  {
    var index = this.toLearnWords.indexOf(this.randomWord);
    this.toLearnWords.splice(index, 1);
    this.knownWords.unshift(this.randomWord);

    localStorage.setItem("toLearnWords", JSON.stringify(this.toLearnWords));
    localStorage.setItem("knownWords", JSON.stringify(this.knownWords));

    this.getNewWord();
  }

}
