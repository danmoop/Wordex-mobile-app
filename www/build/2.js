webpackJsonp([2],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewExactWordPageModule", function() { return PreviewExactWordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_exact_word__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviewExactWordPageModule = /** @class */ (function () {
    function PreviewExactWordPageModule() {
    }
    PreviewExactWordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preview_exact_word__["a" /* PreviewExactWordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preview_exact_word__["a" /* PreviewExactWordPage */]),
            ],
        })
    ], PreviewExactWordPageModule);
    return PreviewExactWordPageModule;
}());

//# sourceMappingURL=preview-exact-word.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewExactWordPage; });
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



var PreviewExactWordPage = /** @class */ (function () {
    function PreviewExactWordPage(navCtrl, appCtrl, navParams, tts, alertCtrl) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.tts = tts;
        this.alertCtrl = alertCtrl;
        this.exactWord = navParams.data.word;
        this.type = navParams.data.type;
    }
    PreviewExactWordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviewExactWordPage');
    };
    /**
     * @function listen allows to listen the pronunciation of a word displayed
     */
    PreviewExactWordPage.prototype.listen = function () {
        this.tts.speak(this.exactWord.enWord)
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    /**
     * @function editWord allows you edit word -> change both translations
     */
    PreviewExactWordPage.prototype.editWord = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        var allTheWords = JSON.parse(localStorage.getItem(_this.type));
                        for (var i = 0; i < allTheWords.length; i++) {
                            if (allTheWords[i].ruWord == _this.exactWord.ruWord && allTheWords[i].enWord == _this.exactWord.enWord) {
                                allTheWords[i] = data;
                                console.log(allTheWords[i]);
                            }
                        }
                        localStorage.setItem(_this.type, JSON.stringify(allTheWords));
                        _this.exactWord = data;
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
     * @param word is a word typeof string
     * @return same string but in 'eina' font
     */
    PreviewExactWordPage.prototype.eina = function (word) {
        return '<span class="eina">' + word + '</span>';
    };
    PreviewExactWordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preview-exact-word',template:/*ion-inline-start:"D:\apps\wordex\src\pages\preview-exact-word\preview-exact-word.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <span class="w eina up">{{ exactWord.enWord }}</span>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button style="font-size: 2.7rem;" (click)="editWord();">\n\n        <ion-icon name="create" style="color: #2cd8d7;"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="mainScreen">\n\n\n\n  <ion-card class="c" text-center>\n\n    <ion-card-header>\n\n      <span class="w b fz-25 eina">{{ exactWord.enWord }}</span>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <span class="w b fz-40">{{ exactWord.ruWord }}</span>\n\n    </ion-card-content>\n\n\n\n    <button color="light" ion-button outline (click)="listen();">\n\n      <ion-icon name="musical-notes"></ion-icon>\n\n    </button>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\apps\wordex\src\pages\preview-exact-word\preview-exact-word.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PreviewExactWordPage);
    return PreviewExactWordPage;
}());

//# sourceMappingURL=preview-exact-word.js.map

/***/ })

});
//# sourceMappingURL=2.js.map