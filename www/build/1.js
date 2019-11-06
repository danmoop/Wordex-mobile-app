webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTestPageModule", function() { return WordTestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__word_test__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WordTestPageModule = /** @class */ (function () {
    function WordTestPageModule() {
    }
    WordTestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__word_test__["a" /* WordTestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__word_test__["a" /* WordTestPage */]),
            ],
        })
    ], WordTestPageModule);
    return WordTestPageModule;
}());

//# sourceMappingURL=word-test.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordTestPage = /** @class */ (function () {
    function WordTestPage(loadCtrl, navCtrl, navParams, alertCtrl) {
        this.loadCtrl = loadCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        /**
         * @param button are multiple choices, each button has different translation of a word
         */
        this.buttons = [];
        this.started = false;
        this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
        this.wordsBank = JSON.parse(localStorage.getItem("wordsBank"));
        this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
    }
    WordTestPage.prototype.ionViewDidLoad = function () { };
    /**
     * @return a new random word from a word bank
     */
    WordTestPage.prototype.getNewWord = function () {
        this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * this.wordsBank.length);
            if (this.randomWord != this.wordsBank[index])
                this.buttons.push(this.wordsBank[index]);
            else
                i--;
        }
        var ind = Math.round(Math.random() * 3);
        this.buttons[ind] = this.randomWord;
    };
    /**
     * @param type is a test type passed (ru->en or en->ru)
     */
    WordTestPage.prototype.start = function (type) {
        this.started = true;
        this.getNewWord();
        this.type = type;
    };
    /**
     * information is being updated and displayed
     */
    WordTestPage.prototype.updateWords = function () {
        this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
        this.wordsBank = JSON.parse(localStorage.getItem("wordsBank"));
        this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
        this.buttons = [];
    };
    /**
     * @param word is a word user clicks on
     * @function checkWordENRU checks whether user clicked the valid translation
     */
    WordTestPage.prototype.checkWordENRU = function (word) {
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
        else {
            this.alertCtrl.create({
                title: 'Неверно',
                subTitle: this.eina(this.randomWord.enWord) + " -- " + this.randomWord.ruWord,
                buttons: ['OK']
            }).present();
        }
    };
    /**
     * @param word is a word user clicks on
     * @function checkWordRUEN checks whether user clicked the valid translation
     */
    WordTestPage.prototype.checkWordRUEN = function (word) {
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
        else {
            this.alertCtrl.create({
                title: 'Неверно',
                subTitle: this.randomWord.ruWord + " -- " + this.eina(this.randomWord.enWord),
                buttons: ['OK']
            }).present();
        }
    };
    /**
     * @param word is a word typeof string
     * @return same string but in 'eina' font
     */
    WordTestPage.prototype.eina = function (text) {
        return "<span class='eina'>" + text + "</span>";
    };
    WordTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-word-test',template:/*ion-inline-start:"D:\Apps\Wordex\src\pages\word-test\word-test.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <span class="w monts">Тест</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="mainScreen" text-center>\n\n  <div class="uk-animation-fade">\n\n    <hr style="background: #777;">\n\n\n\n    <div *ngIf="words.length == 0 && started == true">\n\n      <img src="./assets/imgs/medal.png" alt="">\n\n      <h2 class="w">Поздравляем! Вы прошли тест!</h2>\n\n      <h2 class="w">Отмечайте больше слов для повторения, чтобы пройти еще один тест!</h2>\n\n    </div>\n\n\n\n    <div *ngIf="words.length == 0 && !started">\n\n      <img src="./assets/imgs/empty-box-open.png" alt="">\n\n      <h2 class="w">Нет слов для тестирования! Добавьте несколько в секцию "Для повторения" и возвращайтесь!</h2>\n\n    </div>\n\n\n\n    <div *ngIf="words.length != 0 && !started">\n\n      <h2 class="w" *ngIf="started == false">Вы готовы начать?</h2>\n\n      <button *ngIf="started == false" ion-button color="secondary" round outline style="border-width: 2px;" (click)="start(\'en-ru\');">EN -> RU</button>\n\n      <button *ngIf="started == false" ion-button color="secondary" round outline style="border-width: 2px;" (click)="start(\'ru-en\');">RU -> EN</button>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="randomWord != null && type == \'en-ru\'">\n\n    <ion-card class="c" text-center>\n\n      <ion-card-header>\n\n        <span class="w b fz-25 eina">{{ randomWord.enWord }}</span>\n\n      </ion-card-header>\n\n    </ion-card>\n\n    <hr>\n\n\n\n    <ion-list>\n\n      <ion-item color="light" round class="monts b" *ngFor="let btn of buttons" style="margin-top: 35px;" (click)="checkWordENRU(btn);">\n\n        {{ btn.ruWord }}\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="randomWord != null && type == \'ru-en\'">\n\n    <ion-card class="c" text-center>\n\n      <ion-card-content>\n\n        <span class="w b fz-25 monts">{{ randomWord.ruWord }}</span>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <ion-list>\n\n      <ion-item color="light" round class="monts b" *ngFor="let btn of buttons" style="margin-top: 35px;" (click)="checkWordRUEN(btn);">\n\n        {{ btn.enWord }}\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Apps\Wordex\src\pages\word-test\word-test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WordTestPage);
    return WordTestPage;
}());

//# sourceMappingURL=word-test.js.map

/***/ })

});
//# sourceMappingURL=1.js.map