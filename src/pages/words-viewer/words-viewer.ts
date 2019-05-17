import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from 'ionic-angular';
import Word from './../../model/Word';

import {
  HomePage
} from './../home/home';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//import { platform } from 'os';

@IonicPage()
@Component({
  selector: 'page-words-viewer',
  templateUrl: 'words-viewer.html',
})
export class WordsViewerPage {

  wordsType: any;
  words: any;
  hint: string;
  p_title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadCtrl: LoadingController) {}

  ionViewDidEnter() {
    this.wordsType = this.navParams.data;
    this.refreshWords();

    if (this.wordsType == "toRepeatWords") this.p_title = "Потворение";
    if (this.wordsType == "learnedWords") this.p_title = "Выученные";
    if (this.wordsType == "knownWords") this.p_title = "Известные";
  }

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

  wordNotFound(word) {
    this.alertCtrl.create({
      title: 'Ошибка',
      subTitle: "<b>" + word + "</b> не найдено.",
      buttons: ['OK']
    }).present();
  }

  wordExists(word) {
    this.alertCtrl.create({
      title: 'Ошибка',
      subTitle: word + ' уже в списке',
      buttons: ['OK']
    }).present();
  }

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

  refreshWords() {
      this.words = JSON.parse(localStorage.getItem(this.wordsType));

      if (this.wordsType == "knownWords") this.hint = "Известные слова";
      else if (this.wordsType == "learnedWords") this.hint = "Изученные слова";
      else if (this.wordsType == "toRepeatWords") this.hint = "Слова для повторного изучения";
  }

  previewWord(word) {
    var _sender = {
      word: word,
      type: this.wordsType
    }

    this.navCtrl.push('PreviewExactWordPage', _sender);
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Добавить словл',
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

  eina(word) {
    return '<span class="eina">' + word + '</span>';
  }

}
