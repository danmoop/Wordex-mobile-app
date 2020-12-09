webpackJsonp([0],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsViewerPageModule", function() { return WordsViewerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__words_viewer__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WordsViewerPageModule = /** @class */ (function () {
    function WordsViewerPageModule() {
    }
    WordsViewerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__words_viewer__["a" /* WordsViewerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__words_viewer__["a" /* WordsViewerPage */]),
            ],
        })
    ], WordsViewerPageModule);
    return WordsViewerPageModule;
}());

//# sourceMappingURL=words-viewer.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Word__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Word___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__model_Word__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordsViewerPage = /** @class */ (function () {
    function WordsViewerPage(navCtrl, navParams, alertCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
    }
    WordsViewerPage.prototype.ionViewDidEnter = function () {
        this.wordsType = this.navParams.data;
        this.refreshWords();
        if (this.wordsType == "knownWords")
            this.wordTypeHeader = "Известные слова";
        else if (this.wordsType == "learnedWords")
            this.wordTypeHeader = "Изученные слова";
        else if (this.wordsType == "toRepeatWords")
            this.wordTypeHeader = "Слова для повторного изучения";
    };
    /**
     * @return a word from a huge list if there is one -> it will display both translations and pronunciation
     */
    WordsViewerPage.prototype.findWord = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Найти слово',
            inputs: [{
                    name: 'enWord',
                    placeholder: 'Слово'
                }],
            buttons: [{
                    text: 'Найти',
                    handler: function (data) {
                        var word = data.enWord;
                        var enwords = [];
                        for (var i = 0; i < _this.words.length; i++) {
                            enwords.unshift(_this.words[i].enWord.toUpperCase());
                        }
                        if (enwords.indexOf(word.toUpperCase()) != -1) {
                            for (var q = 0; q < _this.words.length; q++) {
                                if (_this.words[q].enWord.toUpperCase() == word.toUpperCase()) {
                                    var _sender = {
                                        word: _this.words[q],
                                        type: _this.wordsType
                                    };
                                    _this.navCtrl.push('PreviewExactWordPage', _sender);
                                }
                            }
                        }
                        else
                            _this.wordNotFound(word);
                    }
                },
                {
                    text: 'Отмена',
                    handler: function (data) { }
                }
            ]
        });
        alert.present();
    };
    /**
     * @param word is word that is not found
     * @return an alert telling that there is not such word
     */
    WordsViewerPage.prototype.wordNotFound = function (word) {
        this.alertCtrl.create({
            title: 'Ошибка',
            subTitle: "<b>" + word + "</b> не найдено.",
            buttons: ['OK']
        }).present();
    };
    /**
     * @param word is a word that is already on the list
     * @return an alert telling that there is already such word added before
     */
    WordsViewerPage.prototype.wordExists = function (word) {
        this.alertCtrl.create({
            title: 'Ошибка',
            subTitle: word + ' уже в списке',
            buttons: ['OK']
        }).present();
    };
    /**
     * move all words from the current list to list for repeating
     */
    WordsViewerPage.prototype.repeatOnceMore = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '<span class="monts">Повторить слова</span>',
            subTitle: '<span class="monts">Вы хотите переместить все слова в список для повтора?</span>',
            buttons: [{
                    text: 'Да',
                    handler: function (data) {
                        var repeatList = JSON.parse(localStorage.getItem("toRepeatWords"));
                        for (var i = 0; i < _this.words.length; i++) {
                            repeatList.unshift(_this.words[i]);
                        }
                        localStorage.setItem("toRepeatWords", JSON.stringify(repeatList));
                        localStorage.setItem(_this.wordsType, "[]");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Нет'
                }
            ]
        }).present();
    };
    /**
     * @param this.words will be refreshed
     */
    WordsViewerPage.prototype.refreshWords = function () {
        this.words = JSON.parse(localStorage.getItem(this.wordsType));
    };
    /**
     * @param word is word that will be previewed
     * @return a new screen with a chosen word, where there are both translations
     */
    WordsViewerPage.prototype.previewWord = function (word) {
        var _sender = {
            word: word,
            type: this.wordsType
        };
        this.navCtrl.push('PreviewExactWordPage', _sender);
    };
    /**
     * display an alert message where you can manually add a word to the list
     */
    WordsViewerPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        var WORD = new __WEBPACK_IMPORTED_MODULE_3__model_Word___default.a(data.ruWord, data.enWord);
                        var wordsList = JSON.parse(localStorage.getItem(_this.wordsType));
                        wordsList.unshift(new __WEBPACK_IMPORTED_MODULE_3__model_Word___default.a(data.ruWord, data.enWord));
                        localStorage.setItem(_this.wordsType, JSON.stringify(wordsList));
                        _this.refreshWords();
                    }
                },
                {
                    text: 'Отмена',
                    handler: function (data) { }
                }
            ]
        });
        alert.present();
    };
    /**
     * @return an alert with 2 options - delete a word or move it to the list for repeating
     */
    WordsViewerPage.prototype.wordActions = function (word) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Выберете действие',
            subTitle: "Что сделать с этим словом?",
            buttons: [{
                    text: 'Удалить',
                    handler: function (data) {
                        _this.alertCtrl.create({
                            title: 'Действительно?',
                            subTitle: 'Вы точно хотите удалить <b>' + word.enWord + '</b>',
                            buttons: [{
                                    text: 'Да',
                                    handler: function (data) {
                                        var ind = _this.words.indexOf(word);
                                        _this.words.splice(ind, 1);
                                        localStorage.setItem(_this.wordsType, JSON.stringify(_this.words));
                                        _this.refreshWords();
                                    }
                                },
                                {
                                    text: 'Нет',
                                    handler: function (data) { }
                                }
                            ]
                        }).present();
                    }
                },
                {
                    text: 'На повторение',
                    handler: function (data) {
                        var ind = _this.words.indexOf(word);
                        _this.words.splice(ind, 1);
                        localStorage.setItem(_this.wordsType, JSON.stringify(_this.words));
                        var repeatWords = JSON.parse(localStorage.getItem("toRepeatWords"));
                        repeatWords.unshift(word);
                        localStorage.setItem("toRepeatWords", JSON.stringify(repeatWords));
                        _this.refreshWords();
                    }
                }
            ]
        }).present();
    };
    /**
     * @param word is a word typeof string
     * @return same string but in 'eina' font
     */
    WordsViewerPage.prototype.eina = function (word) {
        return '<span class="eina">' + word + '</span>';
    };
    WordsViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-words-viewer',template:/*ion-inline-start:"D:\apps\wordex\src\pages\words-viewer\words-viewer.html"*/'  <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <span class="w mono" (press)="repeatOnceMore();" *ngIf="this.wordsType != \'toRepeatWords\'">Wordex</span>\n\n      <span class="w mono" *ngIf="this.wordsType == \'toRepeatWords\'">Wordex</span>\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button style="font-size: 2.7rem;" (click)="findWord();">\n\n        <ion-icon name="search" style="color: #2cd8d7;"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button style="font-size: 2.7rem;" (click)="presentPrompt();">\n\n        <ion-icon name="add-circle-outline" style="color: #2cd8d7;"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="mainScreen" text-center>\n\n\n\n  <h3 class="w monts">{{ wordTypeHeader }}</h3>\n\n\n\n  <hr style="background: #34495e;">\n\n\n\n  <div *ngIf="words != null && words.length == 0">\n\n    <hr style="background: #777;">\n\n    <h2 class="w monts">Упс, кажется здесь пока ничего нет!</h2>\n\n    <br>\n\n    <img src="./assets/imgs/empty-box-open.png" alt="">\n\n    <hr>\n\n  </div>\n\n\n\n  <button ion-button color="light" class="monts" full *ngFor="let w of words" (click)="previewWord(w);" (press)="wordActions(w);" style="font-weight: bold; white-space: pre-wrap;">\n\n    {{ w.enWord }} -- {{ w.ruWord }}\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\apps\wordex\src\pages\words-viewer\words-viewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], WordsViewerPage);
    return WordsViewerPage;
}());

//# sourceMappingURL=words-viewer.js.map

/***/ })

});
//# sourceMappingURL=0.js.map