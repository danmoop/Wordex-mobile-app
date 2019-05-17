webpackJsonp([4],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpScreenPageModule", function() { return HelpScreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_screen__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpScreenPageModule = /** @class */ (function () {
    function HelpScreenPageModule() {
    }
    HelpScreenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help_screen__["a" /* HelpScreenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help_screen__["a" /* HelpScreenPage */]),
            ],
        })
    ], HelpScreenPageModule);
    return HelpScreenPageModule;
}());

//# sourceMappingURL=help-screen.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpScreenPage; });
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


var HelpScreenPage = /** @class */ (function () {
    function HelpScreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpScreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpScreenPage');
    };
    HelpScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help-screen',template:/*ion-inline-start:"D:\Wordex-app\src\pages\help-screen\help-screen.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><span class="w monts">Помощь</span></ion-title>\n  </ion-navbar>\n  <hr style="background: #324275;">\n\n</ion-header>\n\n\n<ion-content padding id="mainScreen" text-center>\n  <h1 class="w monts b">Работа со словами (1 / 6)</h1>\n    <li class="w monts">Первая кнопка позволяет выучить новые слова</li>\n    <li class="w monts">Вторая кнопка позволяет просмотреть слова помеченные вами для повторного изучения</li>\n    <li class="w monts">Пройти тест можно только если Вы пометили какое либо слово для повторного изучения</li>\n  <img class="c" src="./assets/imgs/help/1.png" alt="">\n\n  <hr style="background: #324275;">\n\n  <h1 class="w monts b">Изучения слов (2 / 6)</h1>\n    <li class="w monts">При нажатии \'На повторение\', слово можно будет закрепить в интерактивном тесте</li>\n    <li class="w monts">При нажатии на \'Я выучил это\', слово переместиться в список выученных слов</li>\n    <li class="w monts">При нажатии на \'Я это знаю\', слово переместиться в список раннее известных слов</li>\n  <img class="c" src="./assets/imgs/help/2.png" alt="">\n  <hr style="background: #324275;">\n\n  <h1 class="w monts b">Просмотр слов (3 / 6)</h1>\n    <li class="w monts">Любой список слов можно будет просмотреть, нажав на него</li>\n  <img class="c" src="./assets/imgs/help/3.png" alt="">\n  <hr style="background: #324275;">\n\n  <h1 class="w monts b">Прохождение теста (4 / 6)</h1>\n    <li class="w monts">Можно будет отработать новые слова как в переводе с русского на английский, так и наоборот</li>\n  <img class="c" src="./assets/imgs/help/4.png" alt="">\n  <hr style="background: #324275;">\n\n  <h1 class="w monts b">Повторное изучение слов (5 / 6)</h1>\n    <li class="w monts">Можно отправить все слова из любого списка в список для повторного изучения, <b>нажав и держав заглавие экрана (НАДПИСЬ WORDEX), все слова уйдут на повторение,</b> и с помощью теста Вы сможете усвоить их еще раз</li>\n\n  <img class="c" src="./assets/imgs/help/5.png" alt="">\n  <hr style="background: #324275;">\n\n  <h1 class="w monts b">Взаимодействие со словами (6 / 6)</h1>\n    <li class="w monts">Любое слово из любого списка можно изучить подробно, нажав на него в этом самом списке, в открывшемся окне можно будет прослушать это слово и отредактировать его.</li>\n    <li class="w monts">Если нажать и держать на любом слове из списка, то его можно будет удалить или переместить в список для повторного изучения</li>\n  <img class="c" src="./assets/imgs/help/6.png" alt="">\n  <hr style="background: #324275;">\n  <img class="c" src="./assets/imgs/help/7.png" alt="">\n\n</ion-content>\n'/*ion-inline-end:"D:\Wordex-app\src\pages\help-screen\help-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HelpScreenPage);
    return HelpScreenPage;
}());

//# sourceMappingURL=help-screen.js.map

/***/ })

});
//# sourceMappingURL=4.js.map