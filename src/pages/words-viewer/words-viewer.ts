import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';
import Word from './../../model/Word';

@IonicPage()
@Component({
  selector: 'page-words-viewer',
  templateUrl: 'words-viewer.html',
})

export class WordsViewerPage {

  /**
   * @param wordsType is a type of words - known words, words for repeating, etc.
   */
  wordsType: any;

  /**
   * @param words is an array of words in a corresponding array (array of known words, learned, etc.)
   */
  words: any;

  /**
   * @param wordTypeHeader is a header for each type of words, kind of identification of what words you are looking at
   */
  wordTypeHeader: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadCtrl: LoadingController) {}

  ionViewDidEnter() {
    this.wordsType = this.navParams.data;
    this.refreshWords();

    if (this.wordsType == "knownWords") this.wordTypeHeader = "Известные слова";
    else if (this.wordsType == "learnedWords") this.wordTypeHeader = "Изученные слова";
    else if (this.wordsType == "toRepeatWords") this.wordTypeHeader = "Слова для повторного изучения";
  }

  /**
   * @return a word from a huge list if there is one -> it will display both translations and pronunciation
   */
  findWord() {
    let alert = this.alertCtrl.create({
      title: 'Найти слово',
      inputs: [{
        name: 'enWord',
        placeholder: 'Слово'
      }],
      buttons: [{
          text: 'Найти',
          handler: data => {
            var word = data.enWord;

            var enwords = [];

            for (var i = 0; i < this.words.length; i++) {
              enwords.unshift(this.words[i].enWord.toUpperCase());
            }

            if (enwords.indexOf(word.toUpperCase()) != -1) {
              for (var q = 0; q < this.words.length; q++) {
                if (this.words[q].enWord.toUpperCase() == word.toUpperCase()) {

                  var _sender = {
                    word: this.words[q],
                    type: this.wordsType
                  }

                  this.navCtrl.push('PreviewExactWordPage', _sender);
                }
              }
            } else this.wordNotFound(word);
          }
        },
        {
          text: 'Отмена',
          handler: data => {}
        }
      ]
    });
    alert.present();
  }

  /**
   * @param word is word that is not found
   * @return an alert telling that there is not such word 
   */
  wordNotFound(word) {
    this.alertCtrl.create({
      title: 'Ошибка',
      subTitle: "<b>" + word + "</b> не найдено.",
      buttons: ['OK']
    }).present();
  }

  /**
   * @param word is a word that is already on the list
   * @return an alert telling that there is already such word added before
   */
  wordExists(word) {
    this.alertCtrl.create({
      title: 'Ошибка',
      subTitle: word + ' уже в списке',
      buttons: ['OK']
    }).present();
  }

  /**
   * move all words from the current list to list for repeating
   */
  repeatOnceMore() {
    this.alertCtrl.create({
      title: '<span class="monts">Повторить слова</span>',
      subTitle: '<span class="monts">Вы хотите переместить все слова в список для повтора?</span>',
      buttons: [{
          text: 'Да',
          handler: data => {
            var repeatList = JSON.parse(localStorage.getItem("toRepeatWords"));

            for (var i = 0; i < this.words.length; i++) {
              repeatList.unshift(this.words[i]);
            }

            localStorage.setItem("toRepeatWords", JSON.stringify(repeatList));
            localStorage.setItem(this.wordsType, "[]");

            this.navCtrl.setRoot(HomePage);
          }
        },
        {
          text: 'Нет'
        }
      ]
    }).present();
  }

  /**
   * @param this.words will be refreshed
   */
  refreshWords() {
      this.words = JSON.parse(localStorage.getItem(this.wordsType));
  }

  /**
   * @param word is word that will be previewed
   * @return a new screen with a chosen word, where there are both translations
   */
  previewWord(word) {
    var _sender = {
      word: word,
      type: this.wordsType
    }

    this.navCtrl.push('PreviewExactWordPage', _sender);
  }

  /**
   * display an alert message where you can manually add a word to the list
   */
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Добавить слово',
      inputs: [{
          name: 'enWord',
          placeholder: 'Английское слово'
        },
        {
          name: 'ruWord',
          placeholder: 'Русское слово'
        }
      ],
      buttons: [{
          text: 'Добавить',
          handler: data => {
            var WORD = new Word(data.ruWord, data.enWord);
            var wordsList = JSON.parse(localStorage.getItem(this.wordsType));

            wordsList.unshift(new Word(data.ruWord, data.enWord));
            localStorage.setItem(this.wordsType, JSON.stringify(wordsList));
            this.refreshWords();
          }
        },
        {
          text: 'Отмена',
          handler: data => {}
        }
      ]
    });
    alert.present();
  }

  /**
   * @return an alert with 2 options - delete a word or move it to the list for repeating
   */
  wordActions(word) {
    this.alertCtrl.create({
      title: 'Выберете действие',
      subTitle: "Что сделать с этим словом?",
      buttons: [{
          text: 'Удалить',
          handler: data => {
            this.alertCtrl.create({
              title: 'Действительно?',
              subTitle: 'Вы точно хотите удалить <b>' + word.enWord + '</b>',
              buttons: [{
                  text: 'Да',
                  handler: data => {
                    var ind = this.words.indexOf(word);
                    this.words.splice(ind, 1);
                    localStorage.setItem(this.wordsType, JSON.stringify(this.words));

                    this.refreshWords();
                  }
                },
                {
                  text: 'Нет',
                  handler: data => {}
                }
              ]
            }).present();
          }
        },
        {
          text: 'На повторение',
          handler: data => {
            var ind = this.words.indexOf(word);
            this.words.splice(ind, 1);
            localStorage.setItem(this.wordsType, JSON.stringify(this.words));

            var repeatWords = JSON.parse(localStorage.getItem("toRepeatWords"));
            repeatWords.unshift(word);
            localStorage.setItem("toRepeatWords", JSON.stringify(repeatWords));

            this.refreshWords();
          }
        }
      ]
    }).present();
  }

  /**
   * @param word is a word typeof string
   * @return same string but in 'eina' font
   */
  eina(word) {
    return '<span class="eina">' + word + '</span>';
  }
}