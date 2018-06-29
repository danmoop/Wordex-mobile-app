import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  App
} from 'ionic-angular';
import {
  TextToSpeech
} from '@ionic-native/text-to-speech';
import { WordsViewerPage } from '../words-viewer/words-viewer';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-preview-exact-word',
  templateUrl: 'preview-exact-word.html',
})
export class PreviewExactWordPage {

  exactWord: any;
  type: string;

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams, private tts: TextToSpeech, private alertCtrl: AlertController) {
    this.exactWord = navParams.data.word;
    this.type = navParams.data.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewExactWordPage');
  }

  listen() {
    this.tts.speak(this.exactWord.enWord)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  editWord() {
    let alert = this.alertCtrl.create({
      title: this.eina('Edit <i>' + this.exactWord.enWord + "</i>"),
      inputs: [{
          name: 'enWord',
          placeholder: 'Английское слово',
          value: this.exactWord.enWord
        },
        {
          name: 'ruWord',
          placeholder: 'Русское слово',
          value: this.exactWord.ruWord
        }
      ],
      buttons: [{
          text: 'Принять',
          handler: data => {
            var allTheWords = JSON.parse(localStorage.getItem(this.type));

            for (var i = 0; i < allTheWords.length; i++) {
              if (allTheWords[i].ruWord == this.exactWord.ruWord && allTheWords[i].enWord == this.exactWord.enWord) {
                allTheWords[i] = data;
                console.log(allTheWords[i]);
              }
            }

            localStorage.setItem(this.type, JSON.stringify(allTheWords));

            this.exactWord = data;
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

  eina(word) {
    return '<span class="eina">' + word + '</span>';
  }
}
