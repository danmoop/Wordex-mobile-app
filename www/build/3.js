webpackJsonp([3],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnScreenPageModule", function() { return LearnScreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__learn_screen__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LearnScreenPageModule = /** @class */ (function () {
    function LearnScreenPageModule() {
    }
    LearnScreenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__learn_screen__["a" /* LearnScreenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__learn_screen__["a" /* LearnScreenPage */]),
            ],
        })
    ], LearnScreenPageModule);
    return LearnScreenPageModule;
}());

//# sourceMappingURL=learn-screen.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LearnScreenPage = /** @class */ (function () {
    function LearnScreenPage(tts, navCtrl, navParams) {
        this.tts = tts;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.started = false;
        if (JSON.parse(localStorage.getItem("toLearnWords")).length == 0) {
            this.finished = true;
            this.started = null;
        }
    }
    LearnScreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LearnScreenPage');
    };
    LearnScreenPage.prototype.start = function () {
        this.started = true;
        this.toLearnWords = JSON.parse(localStorage.getItem("toLearnWords"));
        this.knownWords = JSON.parse(localStorage.getItem("knownWords"));
        this.toRepeatWords = JSON.parse(localStorage.getItem("toRepeatWords"));
        this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
        this.randomWord = this.toLearnWords[Math.round(Math.random() * this.toLearnWords.length)];
    };
    LearnScreenPage.prototype.listen = function () {
        this.tts.speak(this.randomWord.enWord)
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    LearnScreenPage.prototype.getNewWord = function () {
        if (JSON.parse(localStorage.getItem("toLearnWords")).length == 0) {
            this.finished = true;
            this.started = null;
        }
        this.randomWord = this.toLearnWords[Math.floor(Math.random() * this.toLearnWords.length)];
    };
    LearnScreenPage.prototype.toBeRepeated = function () {
        var index = this.toLearnWords.indexOf(this.randomWord);
        this.toLearnWords.splice(index, 1);
        this.toRepeatWords.unshift(this.randomWord);
        localStorage.setItem("toLearnWords", JSON.stringify(this.toLearnWords));
        localStorage.setItem("toRepeatWords", JSON.stringify(this.toRepeatWords));
        this.getNewWord();
    };
    LearnScreenPage.prototype.wordIsLearned = function () {
        var index = this.toLearnWords.indexOf(this.randomWord);
        this.toLearnWords.splice(index, 1);
        this.learnedWords.unshift(this.randomWord);
        localStorage.setItem("toLearnWords", JSON.stringify(this.toLearnWords));
        localStorage.setItem("learnedWords", JSON.stringify(this.learnedWords));
        this.getNewWord();
    };
    LearnScreenPage.prototype.wordIsKnown = function () {
        var index = this.toLearnWords.indexOf(this.randomWord);
        this.toLearnWords.splice(index, 1);
        this.knownWords.unshift(this.randomWord);
        localStorage.setItem("toLearnWords", JSON.stringify(this.toLearnWords));
        localStorage.setItem("knownWords", JSON.stringify(this.knownWords));
        this.getNewWord();
    };
    LearnScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-learn-screen',template:/*ion-inline-start:"D:\APPS\Wordex-app-master\src\pages\learn-screen\learn-screen.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span class="w monts">Изучение</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n<hr>\n\n\n<ion-content padding id="mainScreen" text-center>\n  <div class="uk-animation-fade">\n    <h2 class="w" *ngIf="started == false">Вы готовы начать?</h2>\n    <button  *ngIf="started == false" class="monts" ion-button color="secondary" round outline style="border-width: 2px;" (click)="start();">Изучить новые слова!</button>\n  </div>\n\n  <div class="uk-animation-fade" *ngIf="finished == true">\n      <img src="./assets/imgs/medal.png" alt="">\n      <h2 class="w">Поздравляем! Вы выучили все слова!</h2>\n  </div>\n\n  <ion-card class="c" text-center *ngIf="randomWord != null">\n    <ion-card-header>\n      <span class="w b fz-40">{{ randomWord.enWord }}</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-25">{{ randomWord.ruWord }}</span>\n      <br><br>\n      <button color="light" ion-button outline (click)="listen();">\n        <ion-icon name="musical-notes"></ion-icon>\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n  <hr>\n\n  <button *ngIf="started == true" class="monts" block ion-button color="danger" round outline style="border-width: 2px; margin-top: 40px;" (click)="toBeRepeated();"><ion-icon name="timer"></ion-icon> На повторение</button>\n  <button *ngIf="started == true" class="monts" block ion-button color="secondary" round outline style="border-width: 2px; margin-top: 40px;" (click)="wordIsLearned();"><ion-icon name="checkmark-circle-outline"></ion-icon> Я выучил это</button>\n  <button *ngIf="started == true" class="monts" block ion-button color="light" round outline style="border-width: 2px; margin-top: 40px;" (click)="wordIsKnown();"><ion-icon name="book"></ion-icon> Я знаю это</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\APPS\Wordex-app-master\src\pages\learn-screen\learn-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LearnScreenPage);
    return LearnScreenPage;
}());

//# sourceMappingURL=learn-screen.js.map

/***/ })

});
//# sourceMappingURL=3.js.map