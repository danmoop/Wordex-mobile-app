import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, App } from 'ionic-angular';

import words from './../../model/wordsbase';
import Word from './../../model/Word';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

	/** 
	 * @param toLearnAmount is an amount of words that should be learned in future 
	 */
	toLearnAmount = 0;
	
	/**
	 * @param knownAmount is an amount of words user already knows
	 */
	knownAmount = 0;
	
	/**
	 * @param toRepeatAmount are words user has already seen but not learned, they should be repeated
	 */
	toRepeatAmount = 0;
	
	/**
	 * @param learnedAmount is an amount of words user has learned during using the app
	 */
    learnedAmount = 0;

    constructor(public appCtrl: App, public navCtrl: NavController, public alertCtrl: AlertController, public loadCtrl: LoadingController) {}

	/**
	 * @function ionViewDidEnter is executed when application is opened
	 */
    ionViewDidEnter() {
        if (+localStorage.getItem("words_imported") == 0) {
            this.importWords();
            localStorage.setItem("words_imported", "1");

            this.refreshWords();
        }

        var counter = +localStorage.getItem("rateCounter");
        var rateBool = localStorage.getItem("rateBool");
    }

	/**
	 * @function refreshWords refreshes counters to corresponding words
	 */
    refreshWords() {
        try {
            this.toLearnAmount = JSON.parse(localStorage.getItem("toLearnWords")).length;
            this.knownAmount = JSON.parse(localStorage.getItem("knownWords")).length;
            this.toRepeatAmount = JSON.parse(localStorage.getItem("toRepeatWords")).length;
            this.learnedAmount = JSON.parse(localStorage.getItem("learnedWords")).length;
        } catch (err) {
            console.warn(err);
        }
    }

	/**
	 * @param key is a key that will be obtained from a localstorage
	 * @return value corresponding to a key from a localstorage
	 */
    ls(key) {
        var value = localStorage.getItem(key);
        return value;
    }

	/**
	 * @return home page
	 */
    refreshPage() {
        this.navCtrl.setRoot(HomePage);
    }

	/**
	 * @function importWords imports words from a database
	 */
    importWords() {
        localStorage.setItem("toRepeatWords", "[]");
        localStorage.setItem("knownWords", "[]");
        localStorage.setItem("learnedWords", "[]");

        var data = words.split("\n");
        var _words = [];

        for (var i = 0; i < data.length; i++) {
            var en = data[i].split(" -- ")[0];
            var ru = data[i].split(" -- ")[1];

            var _word = new Word(ru, en);

            if (_word != null) _words.unshift(_word);
        }

        localStorage.setItem("toLearnWords", JSON.stringify(_words));
        localStorage.setItem("wordsBank", JSON.stringify(_words));
    }


	/**
	 * @param pageName is page where user will be redirected
	 * @return redirect to a page
	 */
	navigateTo(pageName) {
        this.navCtrl.push(pageName);
    }

	/**
	 * @param words is an array of words user already knows
	 * @return page where all known words are displayed
	 */
    viewKnownWords(words) {
        this.appCtrl.getRootNav().push('WordsViewerPage', words);
    }
}