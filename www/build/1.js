webpackJsonp([1],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTestPageModule", function() { return WordTestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__word_test__ = __webpack_require__(278);
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

/***/ 278:
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
        this.buttons = [];
        this.started = false;
        this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
        this.toLearnWords = JSON.parse(localStorage.getItem("toLearnWords"));
        this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
    }
    WordTestPage.prototype.ionViewDidLoad = function () { };
    WordTestPage.prototype.getNewWord = function () {
        this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * this.toLearnWords.length);
            this.buttons.push(this.toLearnWords[index]);
        }
        var ind = Math.round(Math.random() * 3);
        this.buttons[ind] = this.randomWord;
    };
    WordTestPage.prototype.start = function (type) {
        this.started = true;
        this.getNewWord();
        this.type = type;
    };
    WordTestPage.prototype.updateWords = function () {
        this.words = JSON.parse(localStorage.getItem("toRepeatWords"));
        this.toLearnWords = JSON.parse(localStorage.getItem("toLearnWords"));
        this.learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
        this.buttons = [];
    };
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
    WordTestPage.prototype.eina = function (text) {
        return "<span class='eina'>" + text + "</span>";
    };
    WordTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-word-test',template:/*ion-inline-start:"C:\Users\MineDan\Desktop\ionic\Wordex\src\pages\word-test\word-test.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span class="w monts">Тест</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="mainScreen" text-center>\n  <div class="uk-animation-fade">\n    <hr style="background: #777;">\n\n    <div *ngIf="words.length == 0 && started == true">\n      <img src="./assets/imgs/medal.png" alt="">\n      <h2 class="w">Поздравляем! Вы прошли тест!</h2>\n      <h2 class="w">Отмечайте больше слов для повторения, чтобы пройти еще один тест!</h2>\n    </div>\n\n    <h2 class="w" *ngIf="started == false">Вы готовы начать?</h2>\n    <button *ngIf="started == false" ion-button color="secondary" round outline style="border-width: 2px;" (click)="start(\'en-ru\');">EN -> RU</button>\n    <button *ngIf="started == false" ion-button color="secondary" round outline style="border-width: 2px;" (click)="start(\'ru-en\');">RU -> EN</button>\n  </div>\n\n  <div *ngIf="randomWord != null && type == \'en-ru\'">\n    <ion-card class="c" text-center>\n      <ion-card-header>\n        <span class="w b fz-25 eina">{{ randomWord.enWord }}</span>\n      </ion-card-header>\n    </ion-card>\n    <hr>\n\n    <ion-list>\n      <ion-item color="light" round class="monts b" *ngFor="let btn of buttons" style="margin-top: 35px;" (click)="checkWordENRU(btn);">\n        {{ btn.ruWord }}\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <div *ngIf="randomWord != null && type == \'ru-en\'">\n    <ion-card class="c" text-center>\n      <ion-card-content>\n        <span class="w b fz-25 monts">{{ randomWord.ruWord }}</span>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-list>\n      <ion-item color="light" round class="monts b" *ngFor="let btn of buttons" style="margin-top: 35px;" (click)="checkWordRUEN(btn);">\n        {{ btn.enWord }}\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\MineDan\Desktop\ionic\Wordex\src\pages\word-test\word-test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WordTestPage);
    return WordTestPage;
}());

//# sourceMappingURL=word-test.js.map

/***/ })

});
//# sourceMappingURL=1.js.map