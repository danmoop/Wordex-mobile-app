webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_wordsbase__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_wordsbase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__model_wordsbase__);
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


//import {  homedir} from 'os';


var HomePage = /** @class */ (function () {
    function HomePage(appCtrl, navCtrl, alertCtrl, loadCtrl) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.toLearnAmount = 0;
        this.knownAmount = 0;
        this.toRepeatAmount = 0;
        this.learnedAmount = 0;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.refreshWords();
        if (+localStorage.getItem("words_imported") == 0) {
            this.importWords();
            localStorage.setItem("words_imported", "1");
        }
        var counter = +localStorage.getItem("rateCounter");
        var rateBool = localStorage.getItem("rateBool");
        if (counter >= 10 && rateBool != "true")
            this.alertCtrl.create({
                title: 'Оцените Wordex',
                subTitle: 'Вы выучили более 10 слов, не желаете ли оценить приложение в магазине?',
                buttons: [
                    {
                        text: 'Да',
                        handler: function (data) {
                            localStorage.setItem("rateBool", "true");
                            _this.alertCtrl.create({
                                title: '¯\\_(ツ)_/¯',
                                subTitle: 'Вам повезло, никакой ссылки еще нет',
                                buttons: ['OK']
                            }).present();
                        }
                    },
                    {
                        text: 'Нет',
                        handler: function (data) {
                            localStorage.setItem("rateBool", "true");
                        }
                    }
                ]
            }).present();
    };
    HomePage.prototype.refreshWords = function () {
        var _this = this;
        var loading = this.loadCtrl.create({
            content: 'Пожалуйста, подождите'
        });
        loading.present().then(function () {
            try {
                _this.toLearnAmount = JSON.parse(localStorage.getItem("toLearnWords")).length;
                _this.knownAmount = JSON.parse(localStorage.getItem("knownWords")).length;
                _this.toRepeatAmount = JSON.parse(localStorage.getItem("toRepeatWords")).length;
                _this.learnedAmount = JSON.parse(localStorage.getItem("learnedWords")).length;
            }
            catch (err) { }
        }).then(function () {
            loading.dismiss();
        });
    };
    HomePage.prototype.ls = function (key) {
        var key1 = localStorage.getItem(key);
        return key1;
    };
    HomePage.prototype.refreshPage = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.importWords = function () {
        localStorage.setItem("toRepeatWords", "[]");
        localStorage.setItem("knownWords", "[]");
        localStorage.setItem("learnedWords", "[]");
        var data = __WEBPACK_IMPORTED_MODULE_2__model_wordsbase___default.a.split("\n");
        var _words = [];
        for (var i = 0; i < data.length; i++) {
            var en = data[i].split(" -- ")[0];
            var ru = data[i].split(" -- ")[1];
            var _word = new __WEBPACK_IMPORTED_MODULE_3__model_Word___default.a(ru, en);
            if (_word != null)
                _words.unshift(_word);
        }
        localStorage.setItem("toLearnWords", JSON.stringify(_words));
        localStorage.setItem("wordsBank", JSON.stringify(_words));
    };
    HomePage.prototype.navigateTo = function (pageName) {
        this.navCtrl.push(pageName);
    };
    HomePage.prototype.viewKnownWords = function (words) {
        this.appCtrl.getRootNav().push('WordsViewerPage', words);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\APPS\Wordex-app-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" style="color: #2cd8d7;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button style="font-size: 2.7rem;" (click)="refreshPage();">\n        <ion-icon name="ios-refresh-outline" style="color: #2cd8d7;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <span class="mono w">WORDEX</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="mainScreen">\n\n  <ion-card class="c" text-center (click)="viewKnownWords(\'knownWords\');">\n    <ion-card-header>\n      <span class="w b fz-25 monts">Известные слова:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ knownAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="c" text-center (click)="viewKnownWords(\'learnedWords\');">\n    <ion-card-header>\n      <span class="w b fz-25 monts">Выученные слова:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ learnedAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="c" text-center (click)="viewKnownWords(\'toRepeatWords\');">\n    <ion-card-header>\n      <span class="w b fz-25 monts">Для повторения:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ toRepeatAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="c" text-center>\n    <ion-card-header>\n      <span class="w b fz-25 monts">Для изучения:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ toLearnAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <hr>\n\n  <ion-grid text-center>\n    <ion-row>\n      <ion-col>\n        <button ion-button round outline block style="border-width: 2px;" (click)="navigateTo(\'LearnScreenPage\');" class="monts">Выучить новые</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light" block round outline style="border-width: 2px;" (click)="viewKnownWords(\'toRepeatWords\');" class="monts">Повторить старые</button>\n      </ion-col>\n    </ion-row>\n    <button ion-button color="secondary" round outline style="border-width: 2px;" (click)="navigateTo(\'WordTestPage\');" class="monts">Пройти тест</button>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\APPS\Wordex-app-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/help-screen/help-screen.module": [
		272,
		4
	],
	"../pages/learn-screen/learn-screen.module": [
		273,
		3
	],
	"../pages/preview-exact-word/preview-exact-word.module": [
		274,
		2
	],
	"../pages/word-test/word-test.module": [
		275,
		1
	],
	"../pages/words-viewer/words-viewer.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

class Word
{
    constructor(ruWord, enWord)
    {
        this.ruWord = ruWord;
        this.enWord = enWord;
    }
}

module.exports = Word;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/help-screen/help-screen.module#HelpScreenPageModule', name: 'HelpScreenPage', segment: 'help-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/learn-screen/learn-screen.module#LearnScreenPageModule', name: 'LearnScreenPage', segment: 'learn-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview-exact-word/preview-exact-word.module#PreviewExactWordPageModule', name: 'PreviewExactWordPage', segment: 'preview-exact-word', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/word-test/word-test.module#WordTestPageModule', name: 'WordTestPage', segment: 'word-test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/words-viewer/words-viewer.module#WordsViewerPageModule', name: 'WordsViewerPage', segment: 'words-viewer', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

var data = `a -- неопределенный артикль
abandon -- отказываться, покидать, прекращать
abandoned -- заброшенный !NEW!
abate -- уменьшить
abbey -- Аббатство 
abbreviation -- сокращение
ABC -- алфавит, азбука, букварь, начатки, основы
abide -- ждать, терпеть
ability -- способность (-y не от слова capable)
able -- способный (-e)
aboard -- на корабле, на борту, в вагоне
abode -- местопребывание, жилище (не lodge)
abominable -- отвратительный, противный
about -- о
above -- над, выше, наверху
abroad -- за границей
abrupt -- резкий, внезапный, крутой, обрывистый
abruptly -- внезапно, резко, грубо !NEW!
absence -- отсутствие
absent -- отсутствующий
absolute -- совершенный, чистый
absolutely -- абсолютно, совершенно
absorb -- поглощать, всасывать, впитывать
absorbed -- увлечённый чем-либо !NEW!
absorption -- Поглощение 
abstract -- отвлеченный, абстрактный
absurd -- нелепый
absurdity -- нелепость
abundance -- богатство, изобилие
abundant -- обильный
acacia -- акация
accent -- подчеркивать, произносить
accept -- принимать
accepted -- принятый
access -- доступ, подход, доступность
accessible -- доступный
accident -- несчастный случай
accidental -- случайный, нечаянный
accidentally -- случайно, нечаянно
acclaim -- провозглашать
accommodate -- согласовывать, улаживать, примирять
accommodation -- удобство, согласование
accompany -- сопровождать
accompanying -- сопровождающий
accomplice -- сообщник
accomplish -- выполнять
accomplished -- Выполненный 
accord -- согласие, гармония
accordance -- согласованность, согласие, соответствие
according -- согласно -ing
accordingly -- согласно
account -- счет, оценка, причина
accounts -- Счета 
accuracy -- точность, аккуратность
accurate -- точный, правильный
accusation -- обвинение
accuse -- обвинять
accused -- Обвиняемый 
accustom -- приучать
accustomed -- Приученный 
ache -- боль a-
achieve -- достигать, успешно выполнять a-
achievement -- выполнение, достижение
acid -- кислый, кислота (не sour)
acknowledge -- признавать, вознаграждать
acknowledged -- Подтвержденный 
acorn -- желудь
acquaintance -- знакомство, знакомый
acquire -- приобретать
acquired -- приобретённый !NEW!
acquisition -- приобретение
acquit -- оправдывать
across -- через, поперек
act -- акт, дело, действовать
acted -- Действовал 
acting -- временно исполняющий обязанности, игра
action -- действие, поступок
active -- активный
actively -- активно, деятельно
activity -- деятельность, активность
actor -- актер
actress -- актриса
acts -- Действия 
actual -- текущий, современный
actually -- фактически, в настоящее время
acute -- острый, проницательный
adapt -- приспособить, переделать
adapted -- Приспособленный 
add -- добавлять, прибавлять
addition -- прибавление, сложение
additional -- дополнительный
additions -- Дополнения 
address -- адрес, обращение
adept -- знаток, сторонник
adequate -- достаточный, соответствующий
adhere -- прилипать, приставать ( to) , приклеиваться, хвататься
adjoining -- Смежный -ing 
adjust -- регулировать, приспосабливать
adjustment -- регулирование *d-
administration -- администрация
administrator -- администратор
admirable -- замечательный (не wonderful)
admiral -- адмирал
admiration -- восхищение
admire -- восхищаться
admired -- восхищался (от admire)
admiring -- Восхищающийся -ing 
admission -- допуск, вход, прием
admit -- допускать
admittance -- впуск, доступ a-ce
admitted -- Признанный(допущенный) 
adopt -- принимать, присваивать
adopted -- Принятый 
adore -- обожать
adorn -- украшать
adrift -- по течению, по воле волн
ads -- реклама
adult -- взрослый
adults -- взрослые (от adult)
advance -- продвижение вперед, продвигать
advanced -- передовой
advancing -- Продвижение -ing 
advantage -- преимущество, выгода
advantages -- Преимущества 
adventure -- рисковать, отваживаться
adventurer -- искатель приключений, авантюрист
adventurous -- отважный, предприимчивый (не undertaking)
adversary -- противник
adversity -- бедствие, несчастье
advertise -- помещать объявление, рекламировать
advertisement -- объявление, реклама
advice -- cовет
advise -- советовать
advised -- Рекомендованный 
advocate -- отстаивать, защищать
aerial -- воздушный, антенна
aeroplane -- самолет
afar -- далеко, вдали
affair -- дело, занятие
affairs -- делишки !NEW!
affect -- влиять, трогать, вредить
affected -- пораженный
affection -- привязанность, любовь
affectionate -- любящий, нежный
affectionately -- Нежно 
affections -- Привязанности 
affirmative -- утвердительный
afford -- позволить себе
afforded -- Предоставляемый *f- 
affray -- пугать
afore -- перед
afraid -- испуганный
afresh -- снова, опять
after -- после
afternoon -- время после полудня
afterward -- Позже 
afterwards -- впоследствии, позже
again -- снова
against -- против
age -- век, возраст
aged -- старый, в возрасте
agency -- агентство
agent -- деятель, исполнитель
aggregate -- совокупность
aggregated -- Соединенный 
aggregation -- Скопление 
agitated -- Взволнованный *g- (не thrilled) 
agitation -- агитация
agony -- мучение, сильная боль
agree -- соглашаться
agreeable -- приятный, милый
agreed -- согласился (от agree)
agreement -- согласие, соглашение
agricultural -- сельскохозяйственный
agriculture -- сельское хозяйство
aha -- Ага 
ahead -- вперед
aid -- помощь
aileen -- Эйлин 
ailing -- больной -ing
aim -- целиться, цель
air -- воздушный, авиационный, проветривать
airborne -- авиационный
airliner -- лайнер
airport -- аэропорт
ajar -- приоткрытый
alarm -- тревога, (вс)тревожить (alarm)
alas -- Увы 
albert -- Альберт 
album -- альбом
alec -- Алек 
alert -- бдительный, проворный
alexis -- Алексис 
alfred -- Альфред 
alias -- Псевдоним 
aliases -- Псевдонимы 
alibi -- Алиби 
alibis -- Алиби 
alight -- выходить, спускаться
alignment -- выравнивание, линия
alike -- похожий
alive -- живой
all -- все, весь
allegiance -- преданность, верность
allen -- Аллен 
alley -- аллея, переулок
allied -- союзный, родственный
allocate -- предназначать
allocation -- распределение, назначение
allow -- разрешать, разрешить
allowance -- дозволение, допущение (allowance)
allowing -- Разрешение -ing 
allows -- Позволяет 
alloy -- примесь, сплав
alluded -- Ссылался 
ally -- союзник, соединять
almond -- миндаль, миндалина
almost -- почти, едва не (a-)
aloft -- наверху, наверх
alone -- один, одинокий
along -- вдоль
alongside -- рядом
aloud -- громко, вслух
alphabet -- алфавит, азбука
already -- уже
also -- тоже, также
alter -- изменять
alteration -- изменение, перемена
altered -- Измененный (не changed) 
alternate -- переменный
alternative -- альтернатива, выбор
although -- хотя
altitude -- высота (не highness)
altogether -- всего, в общем
always -- всегда
am -- (я) есть (от be)
amateur -- любитель
amazed -- изумлённый, поражённый (не wonder) !NEW!
amazement -- удивление, изумление
amazing -- Удивительный -ing 
amber -- янтарь, янтарный
ambiguous -- двусмысленный
ambition -- честолюбие, желание
ambitious -- честолюбивый
ambulance -- полевой госпиталь, карета скорой помощи
amends -- возмещение
amiable -- любезный, милый
amid -- между, посреди, среди !NEW!
ammonia -- аммиак
ammunition -- боеприпасы
among -- среди (не midst)
amongst -- Среди 
amorous -- влюбленный, любовный
amount -- количество, сумма, составлять (сумму)
ample -- обширный, просторный
amuse -- забавлять, развлекать
amusement -- забава, развлечение
amusing -- забавный, интересный
amy -- Эми 
an -- неопределенный артикль (перед гласным звуком)
ana -- сборник изречений
analogous -- Аналогичный 
analyse -- анализировать, разбирать
analysis -- анализ
ancestor -- предок
anchor -- якорь
ancient -- древний
and -- и, а
anew -- снова, заново
angel -- ангел
angela -- Анжела 
angeles -- Анхелес 
anger -- гнев, злость
angle -- угол, точка зрения
angles -- Углы 
angrily -- сердито !NEW!
angry -- сердитый
anguish -- страдание
animal -- животное
animated -- оживленный, анимированный
ankle -- щиколотка, лодыжка
anna -- Анна 
anne -- Энн 
annihilation -- уничтожение
anniversary -- годовщина
announce -- объявлять
announced -- объявлял, объявленный (от announce)
announcement -- объявление, сообщение
annoy -- досаждать, надоедать
annoyance -- Раздражение 
annual -- годовой, ежегодный, ежегодник (не yearly)
annually -- ежегодно
anomaly -- аномалия
anonymous -- анонимный
another -- еще один, другой
answer -- ответ, отвечать
answered -- ответил (от answer)
ant -- муравей
antarctic -- антарктический
anthony -- Энтони 
anticipate -- предвидеть
anticipated -- Ожидаемый 
antidote -- противоядие
antique -- древний (не ancient)
antiquity -- древность
antony -- Энтони 
anvil -- наковальня
anxiety -- тревога, беспокойство
anxious -- беспокойный *n-
anxiously -- тревожно !NEW!
anyhow -- во всяком случае
anyone -- любой, всякий( утв предлож), кто-нибудь, никто (в отриц предлож) !NEW!
anyway -- во что бы то ни стало
anywhere -- где-нибудь !NEW!
apart -- в стороне, отдельно (не aside)
apartment -- квартира
ape -- обезьяна (человекообразная)
apes -- Обезьяны 
apex -- верхушка, вершина (не peak)
apiece -- за штуку, поштучно
apologies -- извинения (от apology)
apologize -- извиняться
apology -- извинение
app -- Приложение 
appalling -- ужасный, плачевный -ing
apparatus -- аппарат
apparel -- одевать, наряжать
apparent -- видимый, очевидный
apparently -- явно, очевидно
appeal -- апелляция, апеллировать (юр.), обращаться
appear -- появляться
appearance -- появление, внешность
appeared -- появился (от appear)
appears -- Появляется 
appendix -- приложение, аппендикс (анат.)
appetite -- аппетит, охота, желание
applause -- аплодисменты
apple -- яблоко
apples -- яблоки (от apple)
applet -- Апплет 
application -- заявление, применение
applications -- Заявления(применения) 
applied -- прикладной
apply -- обращаться, применять
appointed -- Назначенный 
appointment -- условленная встреча *pp*...
appreciate -- оценивать
approach -- приближаться, подступ
approbation -- одобрение (не approvement)
appropriate -- подходящий, соответствующий
approval -- одобрение
approve -- одобрять
approximate -- приблизительный
approximately -- приблизительно
apricot -- абрикос
April -- апрель
apron -- фартук
apt -- подходящий, уместный, склонный
arable -- пахотный
arbitrary -- произвольный
arbour -- беседка, дерево, ось
arc -- дуга (мат.)
arcadia -- Аркадия 
arch -- арка, дуга
archaic -- устарелый, архаический
arched -- Арочный 
archie -- Арчи 
archipelago -- Архипелаг 
architect -- архитектор
architecture -- архитектура
arctic -- полярный, арктический
ardent -- пылкий
ardour -- жар, пыл, рвение
arduous -- тяжелый, напряженный
are -- есть (от be)
area -- площадь, район
argue -- спорить
argument -- спор
arguments -- Аргументы(споры) 
arid -- сухой, засушливый
arise -- возникать, появляться
arithmetic -- арифметика
arm -- рука
armament -- вооружение
armed -- вооруженный
armies -- Армии 
armour -- броня
arms -- оружие
army -- армия
arose -- возник, появился !NEW!
around -- вокруг, по
arouse -- будить, пробуждать
aroused -- разбуженный !NEW!
arrange -- устраивать, договариваться
arrangement -- договоренность
arrangements -- Меры (не measurements) 
array -- массив, множество, наряжать, украшать
arrest -- арестовывать, арест
arrested -- Арестованный 
arrival -- прибытие
arrive -- приезжать
arrived -- приехал, прибыл (от arrive)
arriving -- прибывающий (-ing)
arrow -- стрела
arson -- поджог
art -- искусство
artful -- хитрый, ловкий
article -- статья, предмет, изделие
articles -- предметы (от article)
artificial -- искусственный
artillery -- артиллерия
artist -- художник
artistic -- художественный
arts -- Искусства 
as -- как, так, в то время как
asa -- Аса 
ascent -- восхождение, подъем a-
ascertain -- установить, удостовериться
ascertained -- Установленный 
ash -- ясень
ashamed -- пристыженный !NEW!
ashes -- Пепел 
ashore -- на берег
asia -- Азия 
aside -- в сторону
ask -- просить, спрашивать
asked -- просил, требовал (от ask)
asking -- спрашивающий, просящий
asks -- спрашивает (от ask)
asleep -- спящий (не sleepy)
aspect -- взгляд, точка зрения
ass -- осел (библ.)
assassination -- убийство
assault -- нападать, нападение
assemble -- созывать
assembled -- Собранный 
assembly -- собрание, ассамблея
asserted -- Утвержденный (не attested) 
asset -- имущество
assign -- назначать
assigned -- Назначенный 
assignment -- назначение
assist -- помочь, помогать
assistance -- помощь
assistant -- помощник
assisted -- Помогал 
associate -- соединять, присоединять
association -- ассоциация, соединение
assortment -- выбор, ассортимент
assume -- принимать на себя
assumed -- Принятый (не adopted) 
assumption -- предположение
assurance -- заверение, уверенность
assure -- уверять, обеспечивать
assured -- уверенный, застрахованный !NEW!
asterisk -- звездочка
astonished -- удивленный !NEW!
astonishing -- Удивительный -ing 
astonishment -- удивление, изумление
astronomy -- астрономия
at -- в, у
ate -- ел, съел (от eat)
athlete -- спортсмен, атлет
athletics -- атлетика
athwart -- через, вопреки (не through)
atlas -- атлас
atmosphere -- атмосфера
atmospheric -- атмосферный
atom -- атом
attach -- придавать
attached -- Приложенный (не embedded) 
attachment -- привязанность, прикрепление
attack -- нападение, наступать
attacked -- Атакованный 
attacks -- Нападения 
attempt -- пробовать, пытаться, попытка
attempting -- Попытка -ing 
attempts -- Попытки 
attend -- посещать, обслуживать
attendance -- присутствие, аудитория
attendant -- служитель, слуга
attendants -- Дежурные 
attended -- обслуженный, обслужил (от attend)
attending -- Посещение(сопровождение) -ing 
attention -- внимание
attentions -- Внимание 
attentive -- внимательный, заботливый
attest -- удостоверять
attic -- чердак
attire -- украшение, наряд
attitude -- позиция, отношение, поза
attorney -- адвокат, поверенный (не advocate)
attract -- привлекать
attraction -- привлекательность, аттракцион
attractive -- привлекательный
attribute -- приписывать
attributed -- Приписанный 
auction -- аукцион
audacity -- отвага, нахальство
audible -- слышный, слышимый
audience -- публика
auditorium -- зрительный зал
August -- август
aunt -- тетя
authentic -- подлинный
author -- автор
authoritative -- авторитетный
authorities -- Власти 
authority -- власть, полномочие, управление
authorize -- санкционировать
authors -- Авторы 
auto -- автомобиль
autobiography -- автобиография
autograph -- Автограф 
automatic -- автоматический
automatically -- автоматически
automobile -- автомобиль
autumn -- осень
auxiliary -- вспомогательный, дополнительный
available -- доступный
avalanche -- снежный обвал, лавина
ave -- прощание
avenge -- (ото)мстить
avenue -- проспект
average -- средний
aversion -- отвращение
avoid -- избегать, избежать
await -- ждать
awake -- бодрствующий
awakened -- Пробужденный 
aware -- сознающий
away -- прочь
awe -- (благоговейный) страх
awestruck -- пораженный
awful -- ужасный
awfully -- ужасно, очень (разг.), крайне
awhile -- некоторое время
awkward -- неуклюжий
awoke -- будил *w- !NEW!
axis -- ось
ay -- Да 
aye -- Утвердительный ответ, положительный ответ (не yes) 
bab -- Бэб 
babble -- бормотание, болтовня b-
baby -- ребенок
back -- спина, назад
backed -- Поддержанный 
background -- фон, задний план
backs -- Задние части b- 
backup -- Резервный *a- 
backward -- назад, обратно, наоборот
backwards -- Назад 
bacon -- бекон
bad -- плохой
bade -- Предлагал 
badge -- знак, символ, эмблема
badger -- барсук, травить
badly -- сильно, плохо
baffle -- озадачивать, мешать
bag -- сумка
bagful -- мешок b-
baggage -- багаж b-
bags -- сумки, багаж (от bag)
bail -- поручительство
bait -- приманка
baker -- пекарь, булочник
bakery -- пекарня
balance -- равновесие
balanced -- уравновешенный
balcony -- балкон
bald -- лысый, оголенный
ball -- мяч
ballast -- балласт, опыт, убеждения
ballet -- балет
balloon -- воздушный шар
balloons -- Воздушные шары 
balmy -- душистый, нежный, целебный
bamboo -- бамбук
ban -- запрещать
banana -- банан
bananas -- бананы (от banana)
band -- лента, оркестр, ансамбль (музыкальный)
bandage -- бинт, повязка, перевязывать, бинтовать
bands -- ансамбли (от band)
bandy -- перебрасываться, хоккей, клюшка
bang -- ударять, хлопать (дверью и т.п.)
banged -- ударенный !NEW!
banisters -- перила (лестницы)
bank -- банк
banner -- знамя
banquet -- банкет
bar -- бар
barbara -- Барбара 
barbed -- колючий, ядовитый
bare -- голый, бедный, простой
barefooted -- босой
barely -- только, едва (b-)
bargain -- сделка
barge -- баржа
bark -- кора дерева
barley -- ячмень
barn -- амбар
barnabas -- Барнабас 
barnacle -- Моллюск 
baron -- Барон 
barrel -- баррель
barren -- бесплодный, неплодородный
barrier -- барьер, преграда
barrow -- носилки
bars -- Бруски(бары) 
barton -- имение, поместье, усадьба (не estate) !NEW!
base -- основа
baseball -- бейсбол
based -- Основанный 
basement -- основание
basic -- основной b-
basically -- в основном
basin -- бассейн b-
basis -- основа, основание
basket -- корзина
bass -- бас, басовый
bat -- бить
batch -- выпечка, партия, группа
bates -- Убавляет 
bath -- ванна
bathe -- купаться
bathing -- купание, купальный
bathroom -- ванная комната
battery -- аккумулятор
battle -- бой, сражение
bay -- бухта, залив
be -- быть
beach -- пляж
beacon -- сигнальный огонь, маяк
beagle -- Гончая 
beak -- клюв
beaker -- кубок, чаша (не rummer)
beam -- сиять, излучать (свет)
beamed -- Сиял 
beaming -- Сияющий (от слова beam) 
beams -- Лучи 
bean -- боб
beans -- фасоль
bear -- медведь, спекулянт
bearable -- терпимый, сносный b-
beard -- борода
bearer -- носитель, податель, предъявитель
bearing -- Отношение(поведение) -ing 
bears -- Медведи 
beast -- зверь, животное
beastly -- противный (разг.) -- от слова ЗВЕРЬ!!!
beasts -- звери !NEW!
beat -- ударить, бить
beaten -- битый
beating -- поражение b-
beau -- кавалер, поклонник
beautiful -- красивый
beautifully -- красиво, прекрасно
beauty -- красота, косметический
became -- становился, стал (от become)
because -- потому что
beck -- кивок, приветствие
become -- становиться
becomes -- становится (от become)
becoming -- подобающий, приличествующий, соответственный, идущий (к лицу) (не eligible, suitable) -ing
bed -- постель
bedding -- спальные принадлежности (bedding)
bedroom -- спальня
beds -- Кровати 
bedside -- постель
bee -- пчела
beech -- бук
beef -- говядина
beehive -- улей
been -- быть (от be)
beer -- пиво
bees -- Пчелы 
beetle -- трамбовать, дробить камни
beetroot -- красная свекла
before -- перед, до того как
beforehand -- заранее
beg -- просить, умолять
began -- начинал, начал (от begin)
beggar -- нищий
begin -- начинать(ся)
beginner -- новичок (не newcomer)
beginning -- начало
begins -- начинается (от begin)
begun -- Начатый 
behalf -- Защита 
behave -- вести себя
behaved -- Вел себя 
behaviour -- поведение
beheld -- Созерцал 
behind -- позади
behold -- Созерцать 
being -- будучи (от be)
beings -- Существа 
belfry -- колокольня
belief -- вера, доверие
believe -- верить
believed -- верил, полагал (от believe)
believes -- Верит 
believing -- Вера -ing 
bell -- звонок (b-)
bella -- Белла 
bellamy -- Беллами 
bellow -- мычание, греметь, громыхать (не rattle)
belly -- живот, аппетит
belong -- принадлежать
belonged -- принадлежащий !NEW!
belongings -- вещи, пожитки
beloved -- любимый
below -- ниже, внизу
belt -- пояс, ремень
ben -- Бен 
bench -- скамейка
bend -- гнуться, изгибаться
bending -- Изгиб b- 
beneath -- под, ниже, внизу
benefit -- благо, польза
bennet -- Беннет 
bent -- склонность, наклонность
berenice -- Беренис 
berries -- ягоды (от berry)
berth -- койка, спальное место
bertram -- Бертрам 
beset -- окружать
beside -- рядом, около
besides -- кроме, кроме того
best -- наилучший
bestowed -- Подаренный 
bet -- держать пари, пари
beth -- Бет 
betray -- предавать
betrayed -- Преданный (от слова предательство) 
better -- лучше
betty -- Бетти 
between -- между
beverley -- Беверлей 
bewail -- оплакивать, скорбеть
beware -- осторожно *e-
bewildered -- пораженный, изумленный b-
beyond -- далеко, вдали, на расстоянии, вне, сверх
Bible -- библия
bicycle -- велосипед
bicyclelist -- велосипедист
bid -- Предложение 
bidding -- понижение цены -ing
big -- большой
bigger -- Больший 
bike -- велосипед
bikes -- Велосипеды 
bill -- счет, законопроект
billion -- биллион, миллиард (амер.)
billy -- Билли 
bin -- бункер !NEW!
binary -- Набор из двух предметов 
bind -- связывать (не link)
binding -- переплет -ing
bingo -- Лото 
biology -- биология
birch -- береза, розга
bird -- птица
birth -- рождение
birthday -- день рождения
biscuit -- сухое печенье
bishop -- епископ, слон (шахм.)
bit -- кусочек, немного
bite -- кусаться
biting -- острый, резкий b-ing
bits -- куски !NEW!
bitter -- горький, мучительный
bitterly -- горько, сильно
blab -- болтун, болтать (не от слова chat)
black -- черный
blackbird -- черный дрозд
blacken -- чернить, чернеть
blackened -- Почерневший 
bladders -- Пузыри 
blade -- лезвие
blades -- Лезвия 
blake -- Блак 
blame -- считать виноватым, вина, упрек, порицание (b-)
blank -- пустой, чистый b-
blanket -- одеяло
blast -- взрыв, взрывать, разрушать
blaze -- пламя, пылать, гореть (не flame)
blazing -- Сверкание -ing 
bleach -- белить (ткань)
bleeding -- Кровотечение 
blend -- смешивать, смесь
bless -- благословлять
blessed -- благословлённый !NEW!
blessing -- благословение -ing
blew -- дул !NEW!
blind -- слепой
blink -- мерцание, отблеск, блеснуть, моргать b-
blinked -- Мигал 
bliss -- блаженство, счастье
blizzard -- метель, пурга
blob -- капля, комочек (не drop)
blobs -- Капли (не drops) 
block -- блок, квартал
blockade -- блокада
blocked -- Блокированный 
blocks -- кварталы (от block)
blond -- белокурый
blonde -- блондин
blood -- кровь
bloody -- кровавый
bloom -- цветение
blossom -- цветок (на деревьях, кустах), расцветать
blot -- клякса, пятно, промокать
blouse -- блуза
blow -- дуть
blown -- Сдутый 
blue -- синий
blunt -- притуплять
blush -- (по)краснеть; краска стыда, смущения b-
board -- садиться на пароход, самолет; доска
boarding -- посадка (самолёта) -ing
boast -- хвастовство, хвастать
boat -- лодка, пароход
boats -- лодки !NEW!
bodies -- Органы(тела) 
bodily -- лично, сам, собственной персоной (не myself)
body -- тело
bog -- трясина
boil -- кипятить, кипеть
boiled -- вареный, кипяченый
boiler -- котел
boisterous -- неистовый, шумный
bold -- смелый (не dare)
boldly -- Смело 
bolt -- молния
bomb -- бомба, бомбить
bondage -- рабство, зависимость (не slavery)
bone -- кость
bones -- кости !NEW!
bonfire -- костер
bonnet -- капор, дамская шляпа
bonus -- премия
book -- книга, покупать (билет)
bookcase -- книжный шкаф
booking -- продажа билетов -ing
booklet -- брошюра, буклет
books -- книги (от book)
bookshelf -- книжная полка
boost -- повышение, повышать
boot -- ботинок, сапог
booth -- кабинка
boots -- ботинки, сапоги (от boot)
booty -- награбленное добро, добыча
border -- граница
bore -- скука
boring -- скучный
born -- рожденный
borne -- ограниченный, с узким кругозором, узколобый, закостенелый 
borrow -- брать в долг
borrowed -- брал в долг, взятый в долг (от borrow)
bosom -- грудь (не chest)
boss -- начальник
both -- оба
bother -- беспокойство, хлопоты; источник беспокойства
bottle -- бутылка
bottles -- бутылки (от bottle)
bottom -- дно, донышко
bough -- ветвь, сук
bought -- купил, купленный (от buy)
boulevard -- бульвар
bounce -- отскакивать
bound -- непременный, обязательный
boundary -- граница *o-
boundless -- безграничный
bounds -- граница, ограничение (от bound)
bout -- черед, круг
bow -- кланяться, сгибаться
bowed -- Поклонился 
bowl -- кубок, чаша
box -- ящик, коробка, ложа (театр.)
boxes -- ложи (от box)
boxing -- бокс
boy -- мальчик, юноша
brace -- связывать, скреплять (не clamp)
braces -- подтяжки
bracket -- скобка, подпорка, заключать в скобки
bradley -- Брадлей 
brain -- мозг
brake -- тормоз
brakes -- тормоза (от brake)
branch -- ветвь, отрасль
branches -- ветки !NEW!
brand -- головня, клеймо, фабричная марка, сорт, клеймить
brandy -- коньяк, бренди
brass -- установить
brave -- храбрый, смелый
bravely -- смело
bravery -- храбрость, смелость *r-
brawl -- уличный скандал
breach -- брешь, пробивать брешь
bread -- хлеб
breadth -- ширина, полотнище
break -- ломать
breakfast -- завтрак
breast -- грудь
breath -- дыхание
breathe -- дышать
breathing -- дыхание
breathless -- запыхавшийся
bred -- Разводимый 
breeches -- брюки, бриджи (не trousers)
breed -- порода
breeder -- производитель
breeding -- разведение
breeds -- Породы 
breeze -- легкий ветер
brew -- затевать, надвигаться
brewing -- затевающий, надвигающийся (от brew)
brick -- кирпич
bricks -- кубики (детские)
bride -- невеста
bridge -- мост
bridle -- узда, повод, взнуздывать
brief -- короткий, сводка, резюме
briefcase -- портфель
briefly -- кратко, сжато
brigade -- бригада
bright -- ясный
brightly -- Ярко 
brilliance -- блеск, великолепие, яркость (не brightness)
brilliant -- блестящий, брильянт
brim -- край, поля (шляпы)
bring -- приносить, приводить
brings -- Приносит 
brisk -- живой, проворный b-
Britain -- Британия
British -- британский
brittle -- хрупкий, ломкий (не fragile)
broad -- широкий
broadcast -- передача по радио
broadcasting -- радиовещание
broadly -- широко
broke -- (с)ломал, сломанный (от break)
broken -- разбитый, сломанный, нарушенный, ломаный (о языке)
bronze -- бронзовый
brooch -- брошь
brood -- высиживать (цыплят), выводок
brook -- ручей
broom -- метла, мести
brother -- брат
brought -- принес, принесенный (от bring)
brow -- бровь
brown -- коричневый
brows -- Брови 
bruise -- ушибать, синяк, ушиб
bruises -- Ушибы 
brush -- щетка, чистить щеткой
brushed -- Чистил (не cleaned) 
brutal -- грубый, жестокий
brutally -- грубо, жестоко
brute -- зверь, скотина (не beast)
bubble -- пузырь
bucket -- ведро
buckwheat -- гречиха
bud -- почка, бутон, давать почки, пускать ростки
budge -- шевелиться
buds -- почка, расцветать !NEW!
buffalo -- буйвол
buffer -- Буфер 
bug -- клоп, насекомое, жук (амер.)
bugs -- Ошибки(дефекты) 
build -- строить
builder -- строитель
building -- здание
builds -- Строит 
built -- строил, построенный (от build)
bulb -- луковица, электрическая лампочка
bulk -- груз, величина
bulky -- громоздкий
bull -- бык
bullet -- пуля
bully -- запугивать (не scare)
bum -- бездельник, бродяга
bump -- удар, толчок, шишка, ударять(ся), стукаться **m*
bun -- булочка
bunch -- связка, пучок
bundle -- узел, пакет
bungalow -- (одноэтажная) дача, бунгало
buoy -- буй, бакен
burden -- груз, бремя
bureau -- бюро, контора
burglary -- кража со взломом
burial -- похороны
buried -- спрятанный, похороненный !NEW!
burlap -- холст, мешковина (не canvas)
burly -- крепкий !NEW!
burn -- гореть, жечь, сжигать
burst -- заливаться, разражаться
bury -- хоронить, прятать
bus -- автобус
bush -- куст
bushes -- кусты !NEW!
busily -- Деловито 
business -- дело, бизнес, деловой
businessmen -- бизнесмены (от businessman)
bust -- бюст
bustle -- суетиться, суматоха, суета
busts -- Бюсты 
busy -- занятый
but -- но
butcher -- мясник
butler -- Дворецкий 
butter -- масло
button -- кнопка, пуговица
buttons -- Кнопки 
buy -- покупать, купить
buyer -- покупатель
buzz -- жужжать, гудеть, жужжание, гул
buzzer -- (фабричный) гудок
by -- по, при, путем
bye -- пока (при прощании)
byte -- Байт 
bytes -- Байты 
byword -- поговорка, олицетворение (не dictum)
cab -- наемный экипаж, извозчик, такси
cabbage -- капуста
cabin -- каюта
cabinet -- кабинет (не parlour)
cable -- кабельный
cache -- Тайник 
cadence -- ритм, интонация
caesar -- Каесар 
cafe -- кафе
cage -- клетка, кабина
cages -- Клетки 
cake -- торт
cakes -- пироги !NEW!
calamity -- стихийное бедствие, большое несчастье
calculate -- рассчитывать, вычислять
calculated -- Расчетный 
caleb -- Калеб 
calendar -- календарь
calf -- слоненок, теленок, молодой кит
call -- звонить, называть (call)
called -- звонил, названный (от call)
calling -- звонящий (от call)
calm -- успокаивать
calmly -- тихо, спокойно !NEW!
cambridge -- Кембридж 
came -- пришел (от come)
camera -- фотоаппарат
camp -- лагерь
campaign -- компания, проводить кампанию
can -- уметь, мочь
cancel -- отменить, сократить
candidate -- кандидат
candle -- свеча
candling -- Миражирование -ing 
cane -- трость, палка
canes -- Тростники(трости) 
canned -- консервированный
cannon -- пушка, орудие c-
cannot -- не уметь (отрицательная форма глагола can)
canoe -- челн, байдарка
canteen -- столовая
canvas -- холст, парус
canyon -- Каньон 
cap -- шапка
capable -- способный
capacious -- просторный, вместительный, объемистый
capacity -- емкость, способность
cape -- мыс
capital -- столица
capitalist -- капиталист, капиталистический
captain -- капитан
captive -- пленный
captivity -- Захват 
capture -- захват, поймать
captured -- Захваченный 
car -- машина
caravan -- фургон
carbon -- углерод
carbonate -- Карбонат 
card -- карточка
cardboard -- картон
cards -- карточки (от card)
care -- заботиться, переживать
career -- профессия, карьера
careers -- профессии (от career)
careful -- осторожный
carefully -- осторожно, внимательно
careless -- беззаботный
cares -- заботится, переживает (от care)
cargo -- груз
caricature -- карикатура
carla -- Карла 
carlos -- Карлос 
carpenter -- плотник
carpet -- ковер, устилать
carriage -- вагон
carrier -- носильщик, транспортное средство
carrot -- морковь
carry -- нести, носить, возить
carrying -- перевозка
cart -- телега, повозка
carter -- возчик; ломовой извозчик !NEW!
carton -- коробка
cartoon -- мультфильм
carve -- вырезать, отрезать
carved -- вырезанный (из дерева, из камня) !NEW!
case -- случай, состояние
cash -- деньги
casks -- Бочки 
cast -- бросать, ронять, менять
castle -- замок (не железный, а каменный)
casual -- случайный (не random)
cat -- кошка
catch -- уловить, понять, получить нагоняй
catching -- Ловля 
cathedral -- собор
catherine -- Кэтрин 
cats -- Коты 
cattle -- (рогатый) скот
caught -- ловил !NEW!
cauldron -- Котел 
cause -- дело, причина
causing -- Порождение -ing 
caution -- осторожность
cautious -- осторожный
cautiously -- осторожно !NEW!
cave -- пещера
cavern -- Пещера 
cavity -- впадина, полость
cease -- прекращать, останавливать
ceased -- Прекратил 
ceiling -- потолок
celebrate -- праздновать
celebrated -- праздновал (от celebrate)
celebration -- празднование
celebrity -- известность, знаменитость
cell -- камера, ячейка
cellar -- подвал, винный погреб
cells -- Ячейки 
cement -- цемент, основа
cemetery -- кладбище
cent -- цент
center -- центр
central -- центральный
centre -- центр -re
centuries -- Столетия 
century -- столетие, век
cereals -- хлебные злаки, зерновые
ceremony -- церемония
certain -- определенный, некоторый, некий c-
certainly -- конечно
certainty -- уверенность
certificate -- справка, аттестат
cessation -- прекращение (не interrupt)
chain -- цепь
chair -- стул
chairman -- председатель
chaise -- Фаэтон 
chalk -- мел
chalked -- Рисовавший мелом 
challenge -- вызывать, вызов
chamber -- палата
chambers -- Палаты *h- 
champagne -- шампанское
champion -- чемпион
championship -- чемпионат, звание чемпиона
chance -- случай, шанс
chances -- Возможности 
change -- мелкие деньги, сдача, менять, пересаживаться
changed -- поменял, изменил (от change)
changes -- меняется (от change)
changing -- Изменение(замена) 
channel -- канал
chap -- парень (разг.), малый c-
chapter -- глава (книги)
chapters -- Главы 
char -- Случайная работа 
character -- характер
characteristic -- особенность
charge -- плата, стоимость, взимать плату
charges -- издержки, расходы (от charge)
charity -- милосердие
charles -- Чарльз 
charley -- Чарли 
charlotte -- Шарлотта 
charm -- очарование
charming -- очаровательный, прелестный
charms -- Обаяния 
chase -- охотиться, преследовать, погоня, охота
chasing -- уклоняющийся (от chase)
chat -- беседа, болтовня (не blab)
chatter -- болтать, болтовня
chatterbox -- болтунья
chauffeur -- шофер
cheap -- дешевый
cheaply -- дешево, легко
cheat -- обманывать, надувать, обманщик, плут c-
check -- проверять, регистрировать
checking -- Проверка 
cheek -- щека
cheeky -- развязный
cheer -- настроение
cheerful -- жизнерадостный, веселый с-
cheerfully -- бодро !NEW!
cheers -- да здравствует (приветственное восклицание)
cheese -- сыр
chemical -- химический
chemist -- химик, аптекарь
chemistry -- химия
cheque -- банковский чек
cherish -- лелеять
cherries -- вишни (от cherry)
cherry -- вишня
chess -- шахматы
chest -- грудь
chestnut -- каштан
chevy -- охота, погоня, гнаться (не chase)
chew -- жевать
chicken -- цыпленок, кура
chief -- шеф, начальник
chiefly -- главным образом
child -- ребенок
childhood -- детство
childish -- детский, ребяческий
children -- дети
chill -- холод, простуда
chilly -- холодный, сухой, чопорный
chimney -- труба c-
chin -- подбородок
china -- фарфор
chip -- обломок, осколок
chisel -- резец, ваять, высекать
chivalrous -- рыцарский
chocolate -- шоколад
choice -- выбор (c-, не choose)
choked -- Забитый 
choose -- выбирать c-
chorus -- хор
chose -- выбирал, выбрал (от choose)
chosen -- выбранный (от choose)
chris -- Крис 
Christian -- христианский, христианин
Christmas -- Рождество
chronicle -- летопись, хроника, отмечать
chuckled -- Хихикал 
church -- церковь
churchill -- Черчилл 
churchyard -- кладбище
cigar -- сигара
cigarette -- сигарета
cigarettes -- сигареты (от cigarette)
cinema -- кино
circle -- амфитеатр, круг
circuit -- кругооборот, окружность
circular -- круглый, реклама
circulate -- повторяться, передаваться
circulation -- кровообращение, тираж
circumference -- окружность
circumstance -- обстоятельство, условие
circumstances -- обстоятельства, условия
circumstantial -- обстоятельный, случайный
circus -- цирк, арена
citizen -- гражданин
citizens -- Граждане 
city -- город
civil -- гражданский (-l)
civilization -- цивилизация
claim -- требовать
claimed -- Требуемый 
claims -- Требования 
clamour -- шум, крики
clamp -- складывать, скреплять (не brace)
clank -- бряцать, хлопать в ладоши
clap -- хлопать, аплодировать; удар, хлопок -p
clash -- столкновение, конфликт
clasp -- прижимать (к груди), обнимать, сжимать (в руке)
clasped -- Сжатый (не от слов squeeze, tight) 
class -- класс (не grade)
classes -- занятия, уроки -- не lessons
classic -- классический
classroom -- класс
clatter -- стук, звон; стучать, греметь
clause -- предложение, статья
claw -- коготь, клешня
clay -- глина, земля
clean -- чистить, чистый
cleaned -- чистил, (по)чищенный (от clean)
cleaning -- чистка
cleanliness -- чистоплотность
cleanup -- Уборка 
clear -- ясный, светлый, очищать, расплатиться
cleared -- рассчитался (от clear)
clearing -- clearing 
clearly -- ясно (не obvious)
clench -- сжимать (кулаки, зубы)
clenched -- Сжатый *l- 
cleopatra -- Клеопатра 
clergyman -- священник
clerk -- чиновник
clever -- умный
click -- щелкать
client -- клиент
clients -- Клиенты 
cliff -- утес, скала
cliffs -- Утесы 
climate -- климат
climax -- кульминационный пункт
climb -- подниматься, влезать
cling -- цепляться, (при)льнуть
clink -- звенеть, звон
clip -- стричь, обрезать, зажимать (не trim)
cloak -- плащ, камера хранения (багажа)
clock -- часы (не watch)
close -- закрывать(ся)
closed -- закрыл, закрытый (от close)
closely -- близко, тесно
closet -- чулан
closing -- заключительный
closure -- закрытие
cloth -- ткань
clothe -- одевать
clothes -- одежда
clothing -- одежда, обмундирование
cloud -- облако
club -- клуб
clue -- ключ (к разгадке), улика
clumsy -- неуклюжий
clung -- Цеплялся 
cluster -- гроздь; скопляться, тесниться
clutch -- захват (не snatch)
co -- Компания 
coach -- тренировать, инструктор
coal -- уголь
coarse -- грубый
coast -- побережье
coat -- пальто
coats -- Пальто 
coax -- уговаривать, задабривать
cobbler -- сапожник
cobweb -- паутина
cock -- петух, задирать
cocktail -- коктейль
cocoa -- какао
cocoon -- кокон
code -- код
coffee -- кофе
cognomen -- прозвище, фамилия (не nickname)
coil -- виток, катушка
coin -- монета
coincidence -- совпадение
coins -- монеты (от coin)
col -- Седло 
cold -- холод, холодный
colin -- Колин 
collapse -- крушение, крах, рушиться, потерпеть крах
collar -- воротник
collation -- Сопоставление 
collations -- Сопоставления 
colleague -- коллега
collect -- коллекционировать
collected -- коллекционировал (от collect)
collection -- коллекция
collections -- собирание, выемка (от collection)
collector -- сборщик, коллекционер
college -- колледж
collision -- столкновение
colon -- двоеточие
colonel -- полковник
colonial -- колониальный
colonize -- заселять, колонизировать
colony -- колония
color -- Цвет 
colored -- Цветной 
colorful -- красочный c-
colour -- цвет
coloured -- цветной
colourful -- красочный
colours -- цвета (от colour)
column -- графа, отдел
columns -- Колонки 
comb -- гребенка, расчесывать, расчесать
combat -- бой, борьба (не battle) c-
combination -- комбинация, объединение
combine -- объединять (не connect)
combined -- Объединенный 
come -- приходить, приезжать
comedy -- комедия
comely -- хорошенький, миловидный (не pretty, lovely)
comer -- приходящий
comfort -- удобство, утешение, утешать
comfortable -- удобный
comic -- кинокомедия, комический
comics -- комиксы
coming -- приход, приходящий (от come)
comma -- запятая
command -- приказ, управлять, приказывать
commander -- командир, начальник
commands -- Команды 
commend -- хвалить
comment -- комментарий, комментировать
commerce -- торговля, коммерция -e
commercial -- торговый
commission -- комиссионные
commit -- совершать (преступление)
committed -- Совершенный(переданный) 
committee -- комитет, комиссия
common -- общий
commonly -- обыкновенно, дешево, плохо
commonplace -- банальность, общее место; банальный
commotion -- смятение, волнение
communicate -- сообщать, общаться
communicated -- Сообщенный 
communication -- сообщение, связь, общение
community -- община
compact -- компактный
companion -- товарищ
company -- компания, общество (company)
comparable -- сравнимый
comparative -- сравнительный, относительный
comparatively -- Сравнительно 
compare -- сравнивать
compared -- сравнил (от compare)
comparison -- сравнение
compartment -- купе
compass -- объем, диапазон; компас; циркуль
compassion -- жалость, сострадание !NEW!
compatibility -- совместимость !NEW!
compelled -- Вынужденный 
compete -- состязаться, конкурировать
competition -- соревнование
compile -- составлять
complain -- жаловаться
complaint -- жалоба
complaints -- жалобы (от complaint)
complete -- полный, законченный
completed -- Законченный 
completely -- совершенно, полностью
completion -- завершение, окончание
complex -- сложный, составной, комплексный
complexion -- цвет лица
complicated -- сложный
complication -- сложность
compliment -- комплимент
compliments -- комплименты (от compliment)
comply -- уступать, соглашаться
component -- компонент
compose -- сочинять, составлять
composed -- спокойный
composite -- составной, сложный
composition -- сочинение, композиция
composure -- спокойствие, самообладание
compound -- составной -u**
comprehend -- Постигать 
comprehensive -- исчерпывающий, обширный
compress -- компресс
compromise -- компромисс
computer -- компьютер
con -- Подставить 
conceal -- скрывать, утаивать
concealed -- Скрытый 
concede -- уступать, допускать
conceit -- самомнение
conceited -- самодовольный, тщеславный
conceive -- постигать, понимать
conceived -- Задуманный 
concentrate -- сосредотачиваться
concentration -- концентрация, сосредоточенность
concept -- концепция, понятие, идея
concern -- забота c-
concerned -- заинтересованный, озабоченный, огорченный
concerning -- относительно (не relatively) -ing
concert -- концерт
concession -- концессия
conclude -- завершать, заключать
concluded -- завершенный, законченный (не completed) !NEW!
conclusion -- заключение
conclusions -- Заключения 
concrete -- бетон, сгущать, конкретный
concussion -- сотрясение (мозга)
condescending -- снисходительный -ing
condition -- условие
conduct -- вести, руководитель, проводить
conducted -- Проводимый 
conductor -- кондуктор
cone -- конус, шишка (еловая)
confer -- обсуждать, совещаться; вести переговоры с
conference -- конференция, съезд
confess -- признавать
confessed -- Признанный 
confession -- признание, исповедь
confide -- доверять, полагаться, признаваться
confidence -- доверие
confident -- уверенный
confidential -- конфиденциальный, доверчивый
configuration -- Конфигурация 
confined -- Ограниченный(заключенный) 
confinement -- Заключение 
confirm -- подтверждать, утверждать
confirmed -- Подтвержденный 
conflict -- конфликт, противоречить
conform -- соответствовать, подчиняться
confront -- стоять против
confuse -- смущать, приводить в замешательство
confused -- запутанный, смущённый !NEW!
confusion -- смущение
congratulate -- поздравлять
congratulated -- поздравил (от congratulate)
congratulations -- поздравления (от congratulation)
conjecture -- догадка, предположение, предполагать
conjure -- показывать фокусы
connect -- соединять
connecting -- Соединение -ing 
connection -- соединение
connections -- Связи 
conquer -- завоевывать, завоевать
conquered -- Побежденный 
conquest -- завоевание, покорение
conscience -- совесть, сознание
conscientious -- добросовестный
conscious -- сознающий, ощущающий
consciousness -- сознание, сознательность
consent -- разрешение
consented -- Соглашался 
consequence -- следствие, вывод, значение
consequences -- Последствия 
consequently -- следовательно, в результате
conservative -- консервативный, консерватор
consider -- считать
considerable -- значительный c-
considerably -- значительно (не tremendously)
considerate -- внимательный (к другим), чуткий
consideration -- рассмотрение, соображение
considering -- Рассмотрение -ing 
consist -- состоять
consisted -- Состоял 
consistent -- совместимый, согласующийся (не compatible)
consists -- состоит (от consist)
consolation -- утешение
console -- утешать
conspicuous -- заметный, выдающийся c-
constant -- постоянный
constantly -- постоянно
constellation -- созвездие
constitute -- назначать, учреждать
constitution -- конституция
constraint -- Ограничение 
constraints -- Ограничения 
construct -- строить, создавать
construction -- строительство
consulate -- консульство
consult -- советоваться
consultation -- консультация, совещание
consume -- потреблять
consumption -- потребление, расход
contact -- устанавливать связь
contain -- содержать, сдерживать
containing -- Содержащий 
contains -- Содержит 
contemporary -- современный
contempt -- презрение (не aversion)
contend -- бороться, соперничать *o-
content -- содержание
contented -- Удовлетворенный (не satisfied) 
contents -- содержание, содержимое, оглавление
contest -- спор, соревнование, спорить
context -- контекст, ситуация
continent -- континент
continental -- континентальный
continual -- беспрестанный
continually -- непрерывно
continuation -- продолжение
continue -- продолжать(ся)
continued -- продолжал (от continue)
continuous -- непрерывный
contract -- договор, контракт
contradict -- опровергать, противоречить
contrary -- противоположный (не opposite)
contrast -- противоположность, контраст
contribute -- делать вклад, способствовать
contribution -- вклад
contributor -- сотрудник
contrivance -- изобретение, приспособление
contrived -- Изобретенный 
control -- контроль, управление
convalesce -- выздоравливать
convenience -- удобство
conveniences -- удобства (от convenience)
convenient -- подходящий, удобный
convention -- собрание, съезд
conventional -- обычный, обусловленный
conversation -- разговор, беседа
conversion -- превращение, обращение
convert -- превращать, обращать, конвертировать
converted -- Преобразованный(конвертированный) 
convey -- перевозить, передавать, сообщать
conveyed -- Переданный 
convict -- признать виновным, осудить
conviction -- осуждение, убеждение, убежденность
convince -- убеждать c-
convinced -- убежденный
convincing -- убедительный
cook -- готовить, повар
cooked -- готовил (от cook)
cool -- прохладный, холодный
cooler -- холоднее (от cool)
cooling -- охлаждение -ing
coolly -- Прохладно 
coolness -- прохлада, хладнокровие
cooperative -- кооперативный
cope -- справиться, совладать
copies -- Копии 
copper -- медь
copy -- копия, копировать
copyright -- авторское право
coral -- Коралл 
cord -- шнур
cordial -- сердечный
core -- сущность, суть
cork -- поплавок
corn -- кукуруза
corner -- угол
corners -- Углы 
correct -- исправлять, правильный
correction -- исправление
correctly -- правильно, верно
correlation -- Корреляция 
correspondence -- корреспонденция, переписка
corresponding -- соответственный, соответствующий
corridor -- коридор
corrupt -- испорченный, развращенный, продажный
corruption -- продажность
cosmetic -- косметический
cost -- стоить, стоил
costume -- костюм
cosy -- уютный
cottage -- коттедж
cotton -- хлопок, хлопчатобумажный
couch -- кушетка
cough -- кашель
could -- мог, могли (бы)
council -- совет, совещание (не counsel)
councilman -- Член совета 
counsel -- обсуждение, совет, решение, адвокат
count -- считать, принимать во внимание
countenance -- Самообладание(лицо) 
counter -- прилавок, противостоять, противиться
counteract -- противодействовать (не contradict)
countless -- бесчисленный
countries -- страны (от country)
country -- страна
countryside -- сельская местность
county -- графство
couple -- пара
courage -- мужество, смелость
courageous -- смелый, отважный
course -- курс, блюдо
court -- корт, двор
courtyard -- двор
cousin -- двоюродный брат
cousins -- кузены !NEW!
cove -- сооружать
cover -- покрывало, крышка
covering -- Покрытие 
cow -- корова
coward -- трус
cowardly -- трусливый, малодушный
crab -- краб
crack -- попытка, проба, трещина
cracker -- печенье, хлопушка
crackle -- хрустеть, потрескивать
cradle -- колыбель, убаюкивать
craft -- искусство, судно
craftsman -- ремесленник
cram -- запихивать, пичкать, учить наспех, натаскивать (к экзаменам) -- не poke
crane -- журавль, подъемный кран
cranny -- скважина, трещина
crash -- потерпеть крах, потерпеть крушение
crashed -- Потерпел крах 
crawford -- Кравфорд 
crawl -- ползать (не creep)
crawled -- Ползал (не от слова creep) 
crazy -- безумный
creak -- скрип, скрипеть
cream -- сливки, крем
create -- создавать
created -- Созданный 
creating -- Создание -ing 
creation -- создание (похоже на creature)
creator -- творец, создатель, автор
creature -- творение, создание
creatures -- Существа 
credentials -- верительные грамоты, рекомендация
credit -- кредит
creep -- ползать, выползать
creeper -- вьющееся растение
creeping -- Ползающий 
crept -- ползал !NEW!
crescent -- полумесяц
crest -- гребешок, хохолок, гребень (волны, горы)
crevice -- трещина, расщелина
crew -- судовая команда, экипаж
cricket -- крикет (спорт.)
cries -- Крики 
crime -- преступление, преступность
criminal -- преступник, уголовный
crimson -- алый, малиновый (не scarlet)
cringe -- раболепствовать
cripple -- калечить, уродовать (не destroy, disable)
crisis -- кризис, перелом (в ходе болезни)
crisp -- хрустящий картофель
critical -- критический
criticism -- критика
criticize -- критиковать
crocodile -- крокодил
crook -- крюк, крючок, поворот
crooked -- кривой
crop -- урожай
cross -- пересекать
crossing -- переход, пересечение
crouch -- притаиться
crouched -- Присел 
crow -- ворона
crowd -- толпа, толпиться
crowded -- многолюдный
crown -- корона
crude -- сырой, необработанный
cruel -- жестокий, беспощадный
cruelty -- жестокость
cruise -- морское путешествие (c-)
crumb -- крошка
crumble -- крошить(ся)
crushed -- Сокрушенный 
crust -- корка, кора
cry -- кричать, восклицать
crying -- кричащий (-ing) !NEW!
crystal -- хрусталь
cub -- детеныш (зверя)
cubic -- кубический
cuckoo -- кукушка
cucumber -- огурец
cucumbers -- огурцы (от cucumber)
cuff -- наручники, лёгкий удар
culprit -- обвиняемый, преступник (не accused)
cultivate -- обрабатывать
cultivated -- Выращенный 
cultivation -- Культивирование 
cunning -- хитрость, хитрый, коварный -ing
cup -- чашка
cupboard -- буфет
cups -- чашки (от cup)
curb -- сдерживать
curdle -- свертываться (о молоке)
cure -- лекарство, лечить c-
curiosity -- любопытство, редкая вещь
curious -- любознательный
curiously -- странно (не strangely) !NEW!
curl -- виться, завивать(ся); локон, завиток
curled -- Вился 
curls -- Завитки 
currant -- коринка, смородина
current -- течение, ток
currently -- В настоящее время 
curse -- проклятие
cursor -- Курсор 
curt -- краткий, сжатый, грубый
curtain -- занавеска, занавес
curtains -- занавески !NEW!
curvature -- Искривление 
curve -- изгиб, гнуть c-
curved -- Изогнутый 
cushion -- подушка
custom -- обычай
customary -- обычный
customer -- клиент
cut -- разрез, фасон (стрижки волос)
cute -- изящный, прелестный
cutting -- сокращение, урезание -ing
cycle -- цикл, период
cyclist -- велосипедист
czar -- Царь c- 
dad -- папа, отец
dagger -- кинжал
daily -- ежедневно
dainty -- лакомство, деликатес
dairy -- молочный магазин
daisy -- маргаритка
dalton -- Далтон 
dam -- дамба, плотина
damage -- повреждать, причинять ущерб
dame -- дама, пожилая женщина (не lady)
damp -- сырой, влажный
dan -- Дэн 
dance -- танцевать
danced -- танцевал (от dance)
dancing -- танцы -ing
dandy -- нарядный, великолепный
danger -- опасность
dangerous -- опасный
dangers -- Опасности 
dangle -- качаться, подвешивать
darcy -- Дарси 
dare -- сметь, отважиться
dared -- осмелившийся !NEW!
daring -- смелость, отвага; смелый, отважный -ing
dark -- темный, печальный
darkened -- Затемненный *a- 
darker -- Более темный 
darkness -- темнота, мрак
darling -- любимый, дорогой
darn -- штопать
darted -- Брошенный (не dashed) 
darwin -- Дарвин 
dash -- оттолкнуть, отбросить
dashed -- брошенный !NEW!
data -- данные, факты
database -- База данных 
databases -- Базы данных 
date -- дата
dates -- даты (от date)
daughter -- дочь
daughters -- дочери (от daughter)
david -- Дэвид 
dawn -- рассвет, светать
day -- день
daybreak -- рассвет
daylight -- дневной свет
days -- дни (от day)
daytime -- дневное время
dazed -- ошеломленный
dead -- мертвый
deadlock -- тупик, безвыходное положение
deadly -- смертельно
deaf -- глухой
deal -- значительное количество
dealing -- раздачаv -ing
dean -- декан
dear -- дорогой
dearest -- Дорогой (не darling) 
death -- смерть
debate -- дебаты, спор, полемика
debris -- обломки, развалины
debt -- долг
debts -- долги (от debt)
decay -- гниение, разложение
deceive -- обманывать
deceived -- обманутый !NEW!
December -- декабрь
decency -- приличие, благопристойность
decent -- приличный, скромный
deception -- обман, хитрость -ion
deceptive -- обманчивый
decide -- решать
decided -- решил (от decide)
decidedly -- определённо, точно, бесспорно (не doubtless) !NEW!
decimal -- десятичный, десятичная дробь
decipher -- расшифровывать
decision -- решение
decisive -- решающий
deck -- палуба
declaration -- декларация
declare -- декларировать
declared -- Объявленный 
decline -- опускаться, уменьшаться, убывать
declined -- Отклоненный **c- 
decorate -- украшать
decoy -- западня, приманка; заманивать в ловушку d-
decrease -- уменьшать, уменьшить
decree -- декрет, указ; издавать декрет; постановлять
decrepit -- ветхий, дряхлый
dedicate -- посвящать, посвятить
deduction -- вычитание, вычет, удержание, вывод, заключение (-ion)
deed -- подвиг, дело
deep -- глубокий
deeper -- Глубже 
deeply -- глубоко
deer -- олень, лань
default -- Неплатеж, невыполнение обязательств 
defeat -- поражение
defeated -- побеждённый !NEW!
defect -- недостаток, недочет
defective -- неисправный, недостаточный, неполноценный, дефективный
defence -- оборона, защита
defend -- защищать, оборонять
defender -- защитник, чемпион (не champion)
defense -- оборона !NEW!
defensive -- оборонительный, оборона
defiance -- неповиновение, пренебрежение
defiant -- вызывающий, дерзкий
deficiency -- недостаток, дефицит -y
define -- определять, устанавливать
defined -- Определенный 
definite -- определенный, точный
definitely -- Определенно 
definition -- определение
defy -- действовать наперекор
degrade -- понижать, разжаловать
degree -- степень, звание
deity -- божество
dejected -- удрученный, угнетенный
delay -- отсрочка
delayed -- отложен (от delay)
delete -- Удалить 
deliberate -- умышленный, обдуманный
deliberately -- сознательно, обдуманно !NEW!
delicacy -- деликатность, тонкость, нежность (красок); хрупкость, болезненность
delicate -- изящный d-
delicious -- восхитительный, прелестный, вкусный (d-)
delight -- восхищение, восхищаться
delighted -- восхищался (от delight)
delightful -- восхитительный (не marvellous)
delirium -- бред
deliver -- доставлять, передавать
deliverance -- освобождение, избавление
delivered -- доставил (от deliver)
delivery -- доставка
deluge -- наводнение, ливень
delusion -- заблуждение
delve -- впадина, рытвина
demand -- требовать
demanded -- требовал (от demand)
demolition -- уничтожение
demonstrate -- демонстрировать
demonstration -- демонстрация
den -- берлога, притон
dene -- долина, дюны
denial -- отрицание, опровержение
denied -- Отклоненный 
denote -- означать, обозначать
dense -- густой, плотный (не bushy)
dentist -- зубной врач
deny -- отрицать, отвергать
depart -- отбывать, уезжать
departed -- Отбыл 
department -- отдел
departments -- отделы, отделения (от department)
departure -- отъезд, отправление
depend -- зависеть
dependant -- иждивенец
depended -- Зависел 
dependent -- зависимый, зависящий
deplore -- сожалеть
deploy -- развертывать
deployment -- развертывание
deposit -- взнос, вклад, залог, сдавать на хранение
depression -- уныние, депрессия (эконом.)
deprive -- лишать, отбирать
depth -- глубина
depths -- Глубины 
deputy -- депутат, делегат
derisive -- насмешливый, иронический (не ironical)
derived -- Полученный 
des -- Дес 
descend -- спускаться
descendant -- потомок
descended -- Спускался 
descent -- спуск, склон, десант, происхождение
describe -- описывать
description -- описание
desert -- пустыня
deserted -- брошенный, пустынный
deserter -- дезертир
deserts -- заслуги
deserve -- заслуживать
deserved -- заслуженный !NEW!
deserves -- Заслуживает 
design -- проектировать, спроектировать
designed -- предназначенный, намеренный
designer -- конструктор
designs -- Проекты 
desirable -- желательный
desire -- желание
desired -- Желательный 
desk -- письменный стол
desolate -- покинутый, заброшенный (-e)
despair -- отчаяние
desperate -- отчаянный, безнадежный
desperately -- отчаянно !NEW!
despise -- презирать -e
despite -- несмотря на
dessert -- десерт
destination -- место назначения
destitute -- (сильно) нуждающийся
destroy -- разрушать, уничтожать
destroyed -- Разрушенный 
destroyer -- эскадренный миноносец
destruction -- разрушение
detach -- отделять, посылать (воен.)
detached -- отдельный d-
detachment -- отряд
detail -- деталь
detailed -- детальный, подробный
detain -- задерживать, удерживать
detect -- открывать, обнаруживать d-
detected -- Обнаруженный 
detection -- открытие, обнаружение
detective -- детектив(ный)
detectives -- Детективы 
detention -- задержание
determination -- решимость, определение
determine -- определять, устанавливать, разрешать
determined -- решительный
detest -- питать отвращение, ненавидеть
detrimental -- приносящий ущерб (не destructive)
develop -- развивать
developed -- развил (от develop)
developer -- развивающийся (о человеке) !NEW!
development -- развитие
device -- прибор, схема, проект, прием, устройство
devil -- дьявол, сатана
devote -- посвящать
devoted -- преданный
devotion -- преданность
devour -- пожирать
dew -- роса
dexterity -- проворство, ловкость
diagram -- диаграмма, схема
dial -- набирать номер
dialect -- Диалект 
dialogue -- диалог
diameter -- диаметр
diamond -- алмаз, бриллиант
diana -- Диана 
diary -- дневник
dick -- Дик 
dictionary -- словарь
dictum -- изречение, поговорка (не byword)
did -- делал, действовал (от do)
die -- штамповать, чеканить
died -- умер, умерший (от die)
diet -- диета
differ -- различать
difference -- разница, различие
differences -- Различия 
different -- другой, отличный от
differently -- По-другому 
differs -- Отличается 
difficult -- трудный
difficulty -- препятствие, затруднение
dig -- копать
digest -- переваривать, усваивать, краткое изложение
digestion -- пищеварение
digging -- Рытье -ing 
dignified -- достойный
dignity -- достоинство
diligence -- прилежание
dim -- тусклый, неясный, слабый (о зрении), туманный, смутный
dime -- дайм (10 центов)
dimly -- смутно (не vague) !NEW!
din -- шум, долбить
dine -- обедать
dining -- обеденный
dinner -- обед
dip -- погружать
diploma -- диплом, свидетельство
dipper -- черпак, ковш
direct -- прямой, руководить
directed -- Направленный 
direction -- направление
directions -- Руководства(направления) 
directly -- прямо, немедленно (d-)
director -- режиссер
directory -- справочник
dirt -- грязь
dirty -- грязный
disable -- делать непригодным (не destroy)
disabled -- искалеченный, выведенный из строя
disadvantage -- неудобство
disagreeable -- неприятный
disappear -- исчезать, исчезнуть
disappearance -- исчезновение !NEW!
disappeared -- изчезнувший !NEW!
disappearing -- Исчезновение -ing 
disappoint -- разочаровывать
disappointed -- разочарованный (от disappoint)
disappointing -- печальный, неутешительный -ing
disappointment -- разочарование
disapproval -- неодобрение
disarm -- обезоруживать, разоружать(ся)
disarmament -- разоружение
disaster -- бедствие, несчастье
disastrous -- бедственный
disbelief -- недоверие
disc -- диск
discern -- различать, видеть
discharge -- разряжать
discipline -- дисциплина, обучение
disconnected -- разъединенный
discontent -- недовольство (не unpleasure)
discontented -- недовольный (не disagreeable)
discourage -- обескураживать
discover -- открывать, обнаруживать
discovered -- обнаруженный !NEW!
discovery -- открытие
discreet -- осторожный, сдержанный
discretion -- свобода действий; свободный выбор
discuss -- обсуждать
discussed -- обсуждал (от discuss)
discussing -- обсуждающий, обсуждение (от discuss)
discussion -- беседа
disdain -- презирать, пренебрегать; презрение, пренебрежение (не neglect)
disease -- болезнь *i-
disgrace -- позор, немилость
disgraceful -- позорный
disguise -- переодеваться, маскироваться, скрывать; маскировка
disguised -- замаскированный !NEW!
disguises -- Маскировки 
disgust -- отвращение, вызывать отвращение
dish -- блюдо
dishevelled -- растрепанный, взъерошенный
dishonest -- нечестный
disk -- Диск 
dislike -- нелюбовь, неприязнь; не любить
dismal -- мрачный, унылый (не gloomy, dreary)
dismay -- ужас d-
dismiss -- увольнять
dismissed -- уволенный !NEW!
dismount -- спешиваться
disorder -- беспорядок
disperse -- рассеиваться
display -- показ, выставка
displayed -- Показанный 
displeased -- недовольный
displeasure -- неудовольствие, недовольство, досада
disposal -- вручение, право распоряжаться
dispose -- располагать
disposed -- склонный, расположенный, имеющийся под рукой (не inclined) !NEW!
disposition -- характер
dispute -- диспут, полемика, обсуждать
disregard -- пренебрегать, пренебрежение
dissolve -- растворять
dissolved -- Распущенный 
distance -- расстояние
distant -- дальний, далекий
distinct -- отдельный (не separate, detached)
distinction -- различие
distinctly -- отчетливо
distinguish -- отличать, различать, разделять
distinguished -- выдающийся, почетный
distract -- отвлекать
distracted -- Отвлеченный 
distress -- горе, нужда; огорчать, расстраивать d-
distressed -- Обеспокоенный 
distribute -- распределять, распространять
distribution -- распределение
district -- район
distrust -- недоверие, не доверять
disturb -- нарушать, беспокоить d-
disturbance -- нарушение
disturbed -- взбудораженный *i- !NEW!
ditch -- канава
ditty -- песенка
dive -- нырять
dived -- Нырнул 
diver -- водолаз
diverse -- разный, различный (не various)
divide -- делить, отделять
divided -- Разделенный 
divine -- божественный
diving -- ныряние
division -- деление
dizzy -- головокружительный
do -- делать, действовать, вспомогательный глагол
dock -- док, пристань
doctor -- доктор, врач
doctrine -- Доктрина 
document -- документ
documentation -- Документация 
dodge -- уловка, хитрость (не trick)
doer -- исполнитель
does -- делать, действовать, вспомогательный глагол (от do)
dog -- собака
doing -- делающий (от do)
doll -- кукла
dollar -- доллар
dollars -- доллары (от dollar)
dolls -- Куклы 
domain -- Область 
dome -- купол
domestic -- домашний, внутренний
domesticated -- Одомашненный 
dominion -- владычество, владение, доминион
donation -- денежное пожертвование
done -- сделанный (от do)
donkey -- осел
doom -- обрекать
door -- дверь
doorway -- дверной проем !NEW!
dormitory -- спальня
dorothy -- Дороти 
dos -- ДОС 
dose -- доза, дозировать
dot -- точка
dots -- Точки 
double -- двойной, на двоих
doubloons -- Дублоны 
doubly -- вдвое
doubt -- сомнение, сомневаться
doubted -- Подвергнутый сомнению 
doubtful -- сомневающийся (полон сомнений)
doubtless -- несомненно
doubts -- Сомнения 
dough -- тесто d-
dove -- голубь
down -- внизу, вниз
downstairs -- вниз, внизу, на нижнем этаже
downward -- вниз, книзу
downy -- пушистый
doze -- дремать
dozen -- дюжина
dr -- Доктор 
draft -- чертеж, проект
drag -- тащить d-
dragged -- Тянул 
dragon -- дракон !NEW!
drain -- вытекание
dramatic -- драматический
drank -- (вы)пил (от drink)
draught -- сквозняк, набросок, черновик
draw -- рисовать
drawer -- чертежник
drawers -- кальсоны
drawing -- протаскивание, вытягивание, рисование, чертеж
drawn -- нарисованный (от draw)
dread -- страшиться, страх
dreadful -- ужасный (не terrible, horrible)
dreadfully -- Ужасно 
dream -- мечтать, видеть сны
dreams -- мечты !NEW!
dreamt -- мечтал (от dream)
dreary -- мрачный, унылый, скучный (не gloomy)
dress -- платье, одеваться
dressed -- одетый
dressing -- приправа
dressmaker -- портниха
drew -- рисовал (от draw)
dried -- сушеный
drift -- сносить, плыть по течению
drill -- дрель, тренировать
drink -- напиток, пить
drinks -- напитки (от drink)
drip -- капать
drive -- водить машину, ехать на машине
driver -- водитель, шофер
driveway -- проезд !NEW!
driving -- езда, вождение, движущий
droop -- поникать
drooping -- Свисающий -ing 
drop -- капля, падать, ронять
dropped -- потерянный, пролитый (не spoiled) !NEW!
dropping -- сбрасывающий
drops -- Снижения(капли) 
drove -- водил машину, ехал на машине (от drive)
drown -- тонуть, топить(ся), заглушать
drowsy -- сонный, дремлющий (не asleep, sleepy)
drug -- лекарство, наркотик
drugstore -- аптека d-
drum -- барабан
drunk -- выпитый, пьяный (от drink)
dry -- сухой
dubious -- сомнительный
duchess -- герцогиня
duck -- утка
ducked -- Увернулся 
ducks -- Утки 
dudley -- Дадли 
due -- должный, обязанный
dues -- сборы, взносы
dug -- сиська, вымя !NEW!
duke -- герцог
dull -- скучный
duly -- должным образом
dumb -- немой, бессловесный, бестолковый (амер.)
dummy -- манекен, макет
dump -- разгружать
dungeon -- Темница 
duplicate -- дубликат, копия
durable -- прочный
duration -- продолжительность
during -- во время
dusk -- сумеречный, неясный, сумерки
dust -- пыль, вытирать пыль
duster -- тряпка, щетка
dusty -- пыльный
duty -- долг, обязанность, пошлина
dwarf -- карлик, гном (миф.) (не gnome)
dwell -- жить
dwelling -- жилье -ing
dwight -- Дуайт 
dye -- красить, краска
dyed -- крашенный (от dye)
dying -- погибающий
dysentery -- дизентерия
each -- каждый
eager -- нетерпеливый
eagerly -- охотно (не willing)
eagerness -- пыл, рвение, желание
eagle -- орел
ear -- ухо
earl -- граф !NEW!
earlier -- Ранее 
earliest -- Самый ранний 
early -- рано
earn -- зарабатывать
earnest -- серьезный e-
earnestly -- Искренне (не sincerely) 
earnestness -- Серьезность (не seriousness) 
earth -- земля
earthquake -- землетрясение
ease -- покой, непринужденность e-
easel -- мольберт
easier -- Более легкий 
easily -- легко
east -- восток, восточный
Easter -- пасха
eastern -- восточный
easy -- легкий, простой
eat -- есть (принимать пищу)
eaten -- eat (3 форма) 
eater -- едок
eating -- прием пищи, еда (-ing)
ebb -- отлив, убывать
echo -- эхо, отголосок
economical -- бережливый, экономный
edge -- край, точить
edible -- съедобный
edinburgh -- Эдинбург 
edit -- редактировать
edition -- издание
editor -- редактор
editorial -- редакционный, передовая статья (амер.)
edmund -- Эдмунд 
educated -- образованный ed-
education -- образование
educational -- образовательный, воспитательный
edward -- Эдвард 
eerie -- Жуткий *e- 
effect -- действие, влияние
effected -- Произведенный (не produced) *f- 
effective -- действующий, успешный
effects -- Эффекты 
effectually -- Целесообразно 
efficiency -- эффективность
efficient -- эффективный
effort -- усилие, напряжение
egg -- яйцо
eggs -- яйца (от egg)
egypt -- Египет 
eight -- восемь
eighteen -- восемнадцать
eighth -- восьмой
eighty -- восемьдесят
either -- или
el -- Эль- 
elaborate -- тщательно разработанный, подробный
elapse -- проходить (о времени)
elastic -- эластичный, упругий, резинка
elated -- окрыленный
elbow -- локоть
elbows -- Локти 
elder -- старший
elderly -- пожилой
eldest -- (самый) старший
elect -- выбирать **e**
election -- избрание, выборы
electric -- электрический
electricity -- электричество
electronic -- электронный
elegant -- изящный
element -- элемент, стихия
elementary -- элементарный
elements -- Элементы 
elephant -- слон
elevate -- поднимать, возвышать
elevated -- Поднятый 
elevation -- Возвышение 
elevator -- лифт
eleven -- одиннадцать
elf -- Эльф 
eligible -- подходящий (не suitable)
eliminate -- исключать, уничтожать, ликвидировать
elinor -- Элеонор 
eliza -- Элиза 
elizabeth -- Элизабет 
elliot -- Эллиот 
eloise -- Элоиза 
elongated -- Удлиненный 
else -- еще, кроме
elsewhere -- В другом месте 
elton -- Эльтон 
embark -- садиться на корабль
embarrass -- смущать
embarrassment -- Затруднение 
embedded -- Вложенный 
embrace -- обнимать, включать
embroidery -- вышивка
emerald -- изумруд
emerge -- появляться, выясняться, возникать (не appear)
emerged -- Появился 
emergency -- крайняя необходимость e-
eminent -- выдающийся
emma -- Эмма 
emotion -- возбуждение
emotional -- эмоциональный
emotions -- Эмоции 
emperor -- император
emphasis -- подчеркивание, ударение, выразительность
empire -- империя, господство
employ -- держать на работе, нанимать
employed -- Используемый 
employee -- служащий, работник
employer -- наниматель
employment -- служба, занятие (не occupation, profession)
empty -- пустой
emulation -- соревнование
enable -- давать возможность, делать возможным
enabled -- Позволил 
enamel -- эмаль, глазурь
encampment -- лагерь
enclose -- окружать
enclosed -- Приложенный (не embedded, attached) 
encounter -- встретить, сталкиваться
encourage -- ободрять, поощрять, подстрекать
encouraged -- Поощренный 
encouragement -- ободрение
encyclopedia -- энциклопедия
end -- конец
endanger -- подвергать опасности
endeavour -- попытка
ended -- Законченный 
ending -- окончание, завершение -ing
endless -- бесконечный
endlessly -- нескончаемо
endurance -- выносливость, терпение (не tolerance)
endure -- Вынести 
enemies -- Враги 
enemy -- враг, противник
energy -- энергия, сила
enforce -- принуждать, навязывать, проводить в жизнь
engage -- нанимать, занимать, вовлекать (не employ)
engaged -- занятый, помолвленный (от engage)
engagement -- занятие *n-
engine -- двигатель, мотор, машина
enginedriver -- машинист
engineer -- инженер
engineering -- техника, машиностроение, махинации
England -- Англия
English -- английский язык, английский
enhanced -- Увеличенный 
enhancements -- Повышения 
enjoy -- любить, получать удовольствие
enjoyed -- получил удовольствие (от enjoy)
enjoyment -- удовольствие, наслаждение, обладание
enlarge -- увеличивать, расширять, распространяться **l****
enlighten -- просвещать
enormous -- громадный, ужасный
enormously -- чрезвычайно
enough -- достаточный
enquired -- Спрашивал e- 
enslave -- порабощать
ensued -- Последовал 
ensure -- обеспечивать, гарантировать
entangled -- запутанный
enter -- входить, поступать (enter)
entered -- поступил (от enter)
entering -- вступление e-
enterprise -- предприятие, предприимчивость
enterprising -- предприимчивый
entertain -- развлекать, развлечь
entertained -- Развлекал 
entertainment -- развлечение
enthusiasm -- энтузиазм, восторг
enthusiastic -- восторженный
entire -- полный, совершенный
entirely -- совершенно, полностью, исключительно
entitled -- Имеющий право 
entrance -- вход
entreaty -- мольба (prayment -- нет такого слова)
entry -- вход
enumerate -- перечислять
envelope -- конверт
envious -- завистливый (не jealous)
environment -- окружающая среда
envy -- зависть, завидовать
epidemic -- эпидемический, эпидемия
episode -- эпизод
equal -- равный
equality -- равенство, равноправие
equally -- поровну, одинаково, в равной степени
equator -- экватор
equipment -- снаряжение, оборудование
ER -- отделение (служба) экстренной медицинской помощи (Emergency Room) !NEW!
era -- эра
erase -- стирать (резинкой)
ere -- До, перед, прежде чем; скорее чем 
erect -- строить (не build)
ernest -- Эрнест 
ernie -- Ерни 
err -- Допустить ошибку 
errand -- поручение
erring -- грешный, заблудший -ing
erroneous -- ошибочный
error -- ошибка
errors -- Ошибки 
escape -- избежать, избегать
escort -- охрана (не guards)
especially -- особенно
essay -- очерк
essence -- сущность
essential -- обязательный, существенный, важный e-
establish -- учреждать, создавать, утверждать
established -- установленный
establishment -- установление, учреждение, положение
estate -- поместье, имущество, сословие
esteem -- уважать, почитать, уважение (не regard)
estimate -- оценка, проект, оценивать
estimated -- предполагаемый
et -- И 
etc -- И т.д 
eternal -- вечный (не forever)
ethel -- Етел 
eugene -- Юджин 
Europe -- Европа
European -- европейский
evaluation -- оценка (не estimation)
evaporate -- испаряться, выпаривать
even -- даже
evening -- вечер
evenings -- вечерние (спектакли) e-
event -- событие
eventful -- полный событий, знаменательный
events -- События 
eventually -- в конечном счете, в конце концов
ever -- когда-либо !NEW!
every -- каждый
everybody -- каждый, всякий, все
everyday -- повседневный
everyone -- все, каждый, всякий
everything -- все
everywhere -- всюду, везде
evidence -- доказательство e-
evident -- очевидный, ясный
evidently -- очевидно
evil -- зло, злой
evolution -- Развитие 
exact -- точный
exactly -- точно, именно
exam -- экзамен
examination -- экзамен
examine -- рассматривать, рассмотреть
example -- пример, образец (не pattern)
examples -- Примеры 
exams -- экзамены (от exam)
exasperation -- раздражение, ожесточение
excavator -- экскаватор
exceed -- превышать, превосходить
exceedingly -- чрезвычайно
excellent -- превосходный, отличный
except -- исключая, кроме
excepting -- за исключением -ing
exception -- исключение
excess -- избыток
excessively -- Чрезмерно 
exchange -- обмен, обменивать
exchanged -- обменивал (от exchange)
excite -- возбуждать, волновать
excited -- взволнованный, возбуждённый
excitedly -- Взволнованно (не thrilling) 
excitement -- возбуждение
exciting -- волнующий, великолепный
exclaim -- восклицать
exclamation -- восклицание
exclude -- исключать
exclusive -- исключительный, недоступный
exclusively -- исключительно ***l-
excursion -- экскурсия
excuse -- извинять
execute -- выполнять e-
executed -- Выполненный 
execution -- выполнение
exercise -- упражнение
exert -- напрягать(силы)
exertion -- напряжение, усилие
exhaust -- исчерпывать, истощать, выхлоп (тех.)
exhausted -- изнуренный
exhibit -- экспонат, показывать
exhibited -- Показанный (не displayed) 
exhibition -- выставка
exist -- существовать, жить
existence -- существование
existing -- Существующий -ing 
exists -- Существует 
exit -- выход, выезд
expanded -- Расширенный (не extended) 
expansion -- расширение, распространение **pa-
expect -- ожидать
expectation -- ожидание
expectations -- ожидания (от expectation)
expected -- предполагаемый, ожидаемый
expecting -- ожидающий (от expect)
expedition -- экспедиция
expel -- изгонять, исключать
expelled -- Удаленный 
expense -- расход
expensive -- дорогой
experience -- опыт
experienced -- опытный
experiment -- эксперимент
experimental -- экспериментальный
experiments -- Эксперименты 
expert -- эксперт
explain -- объяснять
explained -- объяснил (от explain)
explanation -- объяснение
explicit -- ясный  e-
explode -- взрывать, подрывать
exploit -- эксплуатировать
exploration -- исследование
explore -- исследовать
explosion -- взрыв, вспышка
explosive -- взрывчатый, взрывчатое вещество -ve
export -- экспорт, экспортировать
expose -- выставлять, подвергать, разоблачать
exposed -- Выставленный(подвергнутый) 
exposure -- Подвергание 
express -- экспресс, выражать
expressing -- выраженный -ing
expression -- выразительность, выражение
expressive -- выразительный
expulsion -- изгнание (не dejection)
exquisite -- изысканный
extend -- продлевать, растягивать
extended -- растянутый
extending -- Распространение(продление) 
extension -- расширение
extensive -- обширный
extent -- протяжение
exterior -- внешний, внешность, внешний вид
external -- наружный
extinct -- потухший (о вулкане), вымерший
extra -- сверх (не above)
extract -- удалять, извлекать; экстракт, выдержка (из книги)
extraordinary -- необычный
extreme -- чрезвычайный, крайность
extremely -- крайне
extremity -- конец, край, крайность, конечности
eye -- глаз
eyebrow -- бровь
eyebrows -- брови !NEW!
fable -- басня, сюжет
face -- лицо
faces -- выходит, стоит лицом (от face)
facilitate -- облегчать
facility -- легкость, способность, умение
facing -- сидящий лицом (от face)
fact -- сущность, факт
fade -- увядать
faded -- Исчез 
fail -- недоставать, не хватать;  обмануть ожидания
failed -- потерпел неудачу, не удалось (от fail)
failing -- Неудача -ing 
failure -- неудача
faint -- слабый
faintest -- малейший (от faint)
faintly -- слабо !NEW!
fair -- любезно, хорошо, справедливый
fairfax -- Фаирфакс 
fairly -- довольно (не rather)
fairy -- волшебный
faith -- вера
faithful -- верный
faithfully -- Искренне 
faithless -- ненадежный
fake -- подделка !NEW!
falcon -- сокол
fall -- падать
fallen -- упавший !NEW!
falling -- падение
false -- ложный
fame -- слава, известность
familiar -- близкий (f-)
family -- семья
famine -- голод *a- (не hanger)
famous -- известный
fan -- болельщик, поклонник
fancied -- Представлял себе 
fancy -- воображать, представлять себе
fang -- клык, корень зуба, зубец
fangs -- Клыки 
fanny -- Фанни 
fantastic -- фантастический
fantasy -- воображение
far -- далеко
farewell -- прощание; прощайте! до свидания!
farm -- ферма
farmer -- фермер
farrier -- Кузнец 
farther -- дальше
fascinated -- очаровал (от fascinate)
fashion -- мода
fashionable -- модный
fashioned -- Вылепленный 
fast -- спешащий, сильно, быстро (fast)
fasten -- прикреплять f-
fastened -- Закрепленный (не attached) 
faster -- быстрее
fat -- жирный
fatal -- фатальный
fate -- судьба
father -- папа
fatigue -- усталость, утомлять(ся)
fatty -- жирный !NEW!
faucet -- водопроводный кран, вентиль
fault -- вина, недостаток, ошибка
faults -- Ошибки f- 
favor -- Польза(покровительство) 
favorite -- любимый !NEW!
favour -- одолжение, услуга, польза
favourable -- благоприятный
favourite -- любимый
fear -- страх, опасение, бояться, опасаться
fearful -- страшный
feasible -- осуществимый
feast -- пир (f-)
feat -- подвиг, ловкость, искусство
feather -- предмет гордости, достижение
feathers -- перья !NEW!
feature -- особенность, характерная черта
features -- Особенности 
February -- февраль
fed -- Кормивший(питаемый) 
fee -- гонорар, платить гонорар
feeble -- слабый, бледный
feed -- кормить
feeding -- питание f-
feel -- чувствовать
feeling -- чувство, чувствующий (от feel)
feelings -- страсти (от feeling)
feels -- Чувства 
feet -- ноги, ступни
fell -- упал (от fall)
fellow -- человек, парень, приятель
felt -- чувствовал (от feel)
female -- женщина, самка
females -- Женщины 
feminine -- женский, женского рода (грам.)
fence -- забор
fencing -- ограждение -ing
feral -- Дикий (не от слова wild) 
ferment -- закваска, фермент; бродить (о вине, варенье)
ferocious -- дикий
ferocity -- свирепость
ferry -- перевоз f-
fertile -- плодородный
fertilised -- Оплодотворенный 
fertility -- Изобилие (не abundance) 
fertilizer -- удобрение
festival -- праздник, фестиваль
fetch -- приносить f-
fetched -- принесённый, достанный !NEW!
fever -- жар, лихорадка
few -- мало
fickle -- непостоянный, изменчивый
fiddlesticks -- вздор
field -- поле
fiend -- дьявол, злой дух (не devil)
fierce -- свирепый
fiery -- Пламенный 
fifteen -- пятнадцать
fifteenth -- пятнадцатый
fifth -- пятый
fifty -- пятьдесят
fig -- Рис. 
fight -- бороться, бой
fighting -- бой, сражение
figure -- фигура
figured -- Изображенный 
filament -- Нить 
filch -- Украсть (не steal) 
file -- картотека
files -- Файлы 
fill -- заполнить, наполнить
filling -- заполнение, наполнение
film -- фотопленка, фильм
filter -- фильтр; фильтровать, просачиваться
fin -- плавник
final -- окончательный
finalize -- завершать f-
finally -- в конце концов
financial -- финансовый
find -- найти, находить
finding -- находка, открытие, решение
finds -- Находит 
fine -- прекрасно, прекрасный
fined -- штрафовал, оштрафованный (от fine)
finest -- Самый прекрасный 
finger -- палец
finish -- кончать(ся), заканчивать(ся), конец, финиш
finished -- закончил (от finish)
finishing -- завершение
fir -- пихта, ель
fire -- огонь, пожар
fireplace -- Камин 
fires -- Огни(пожары) 
firewood -- дрова
fireworks -- фейерверк
firing -- Увольнение(обстрел) -ing 
firm -- фирма, твердый, твердо, крепко
firmly -- твердо, решительно
first -- первый
fish -- рыба
fisherman -- рыбак
fishing -- рыбная ловля
fishy -- подозрительный, сомнительный
fist -- кулак
fit -- подходить, соответствовать, устраивать
fitness -- годность
fits -- подходит (от fit)
fitting -- примерка
five -- пять
fix -- починить, наладить, назначить
fixed -- назначил (от fix)
fixes -- Устанавливает 
flabbergasted -- поражен, изумлен
flag -- флаг
flakes -- хлопья
flame -- пламя (не blaze)
flames -- Огонь 
flaming -- Пылающий -ing 
flank -- фланг
flannel -- фланель
flap -- развеваться, взмахивать (крыльями); взмах (крыльев), клапан
flare -- вспыхивать; вспышка, осветительная ракета (не flash)
flash -- вспышка, сверкать
flashlight -- карманный фонарь !NEW!
flashlights -- Прожектора 
flask -- фляжка
flat -- квартира, плоский
flatter -- льстить
flattering -- льстивый, лестный
flavour -- вкус, аромат
flaw -- изъян, недостаток (не lack)
flax -- лен, льняное полотно
flea -- блоха
fled -- убегал, спасался бегством !NEW!
flee -- бежать
fleet -- флот
flesh -- тело, плоть, мясо
flew -- летал (от fly)
flexible -- гибкий
flight -- полет
flinch -- отступать, вздрагивать
fling -- бросать(ся), швырять(ся)
flint -- Кремень 
float -- плавать, поплавок
flock -- стадо, стая
flood -- наводнение
floor -- пол, этаж; одолеть, смутить
floored -- поставил в тупик, сразил (от floor)
flora -- Флора 
flour -- мука
flourish -- процветать, размахивать; росчерк
flourishing -- цветущий
flow -- течение, поток, разливаться, течь
flower -- цветок
flowerbed -- клумба
flowery -- цветистый
flowing -- течение f-
flu -- грипп
fluently -- бегло, гладко
fluid -- жидкий, жидкость
flung -- бросал, швырял (не threw) !NEW!
flurry -- будоражить
flush -- (по)краснеть f-
flutter -- махать
fly -- летать
flying -- летающий, летный (от fly)
foal -- жеребенок
foam -- пена
focus -- фокусировать
fodder -- фураж, корм
foe -- враг
fog -- туман
foggy -- туманный
fold -- складывать, сгибать, скрещивать (руки); складка
folded -- складчатый (не crease) !NEW!
folder -- папка (для дел), брошюра (амер.)
folding -- складной -ing
foliage -- листва
folk -- народная
folks -- Люди 
follow -- следовать
following -- следующий -ing
follows -- Следует 
folly -- глупость
fond -- нежный
food -- пища (не meal)
fool -- дурак, глупец
foolish -- глупый
foot -- нога, фут
football -- футбол
footprint -- След 
footprints -- следы !NEW!
footstep -- звук шагов, след ноги
for -- для, за, на
forbes -- Форбес 
forbid -- запрещать
forbidden -- Запрещенным 
force -- сила
forced -- принудительный, принужденный
forcible -- насильственный, убедительный
ford -- брод, переходить вброд (не wade)
fore -- передний
foregoing -- Предшествующий (не preceding) -ing 
foreground -- передний план
forehead -- лоб
foreign -- иностранный
foreigner -- иностранец
foreman -- мастер, старший рабочий, техник, прораб
foremost -- передовой f-
forepaws -- Передние лапы 
foresight -- предвидение, предусмотрительность
forest -- лес
forester -- Лесник 
forests -- Леса 
forever -- вечно !NEW!
foreword -- предисловие
forge -- выдумывать
forgery -- подделка, подлог
forget -- забыть
forgetful -- забывчивый
forgive -- прощать
forgot -- забыл (от forget)
forgotten -- забытый (от forget)
fork -- вилка
form -- бланк, форма, формировать
formal -- официальный, формальный
formally -- формально
formation -- образование, структура, формирование
formed -- сформировавшийся, организованный
former -- бывший
formerly -- прежде, некогда
formidable -- внушительный (не tremendous)
forming -- Формирование 
forms -- формы (от form)
formula -- формула
fort -- Форт 
forth -- вперед, впредь, далее (f-)
forthwith -- тотчас, немедленно f-
fortitude -- стойкость, мужество
fortnight -- две недели
fortress -- крепость
fortunate -- счастливый
fortunately -- к счастью
fortune -- удача, счастье
fortunes -- Благосостояния (не welfares) 
forty -- сорок
forward -- передовой, вперед, впредь
fossil -- ископаемое
foster -- воспитывать
fought -- сражался !NEW!
foul -- загрязненный, грязный, бесчестный
found -- нашел, найденный (от find)
foundation -- основание
fountain -- источник, фонтан
four -- четыре
fourteen -- четырнадцать
fourteenth -- четырнадцатый
fourth -- четвертый
fowl -- птица (домашняя)
fowls -- Домашние птицы 
fox -- лиса
fraction -- дробь, частица f-
fracture -- перелом, излом; ломать
fragile -- хрупкий
fragment -- отрывок, обрывок
frail -- хрупкий, хилый
frame -- оправа, рамка
frames -- оправы, рамки (от frame)
framework -- каркас
France -- Франция
frank -- искренний, откровенный, открытый
frankly -- откровенно
frantic -- неистовый ******c
frantically -- неистово !NEW!
franz -- Франз 
fraud -- обман, фальшивка
fray -- шумная ссора, обтрепываться
freakish -- капризный, причудливый
free -- свободный
freedom -- свобода f-
freely -- свободно
freeman -- полноправный гражданин !NEW!
freeze -- замерзать
freezing -- замерзание
freight -- груз, грузовой
French -- французский
frequent -- частый
frequently -- часто
fresh -- свежий, бодрый
Friday -- пятница
fried -- жареный
friend -- друг
friendly -- дружеский, дружелюбный
friends -- друзья (от friend)
friendship -- дружба -ship
fright -- испуг
frighten -- пугать
frightful -- страшный, ужасный
fringe -- бахрома, край
fritter -- пончик, крошить
fro -- обратно !NEW!
frog -- лягушка
frolic -- веселиться, проказничать
from -- от, из
front -- перед, передняя сторона, фронт
frontier -- граница *r-
frost -- мороз
frosty -- морозный
frown -- нахмуриться, недовольное выражение лица
fruit -- фрукты
fruitless -- бесплодный
frustration -- расстройство
fry -- (за)жарить
fudge -- глупость, чушь
fuel -- топливо, горючее
fugitive -- беглый, мимолетный, беглец
fulfil -- выполнить
full -- полный
fully -- вполне, полностью f-
fun -- шутка, веселье
function -- функция, торжество
functions -- Функции 
fund -- фонд
funeral -- похороны, похоронный
funnel -- воронка, труба (паровоза, парохода)
funny -- смешной, забавный
fur -- мех, шкура
furious -- взбешенный, бешеный, неистовый
furnace -- печь, топка, горн
furnish -- снабжать, меблировать, обставлять
furnished -- снаряженный, оборудованный, экипированный !NEW!
furniture -- мебель
furrow -- борозда, колея
furry -- пушистый (не downy)
furs -- меха (от fur)
further -- дальнейший, дополнительный (*u*****)
furthermore -- кроме того
fury -- неистовство
fuse -- плавить(ся), сплавлять(ся), перегорать
fuss -- суета; суетиться, беспокоиться, хлопотать f- (не stir)
futile -- бесполезный, тщетный, пустой (о человеке)
future -- будущее
gag -- затычка, кляп
gaily -- весело, оживленно (g -- первая буква)
gain -- прибыль
gained -- Полученный 
galactic -- Галактический 
galaxy -- Галактика 
gale -- шторм
gallant -- доблестный, отважный, смелый, храбрый (g-)
gallery -- галерея
game -- игра
games -- игры (от game)
gang -- шайка, банда
gangster -- бандит, гангстер
gap -- брешь
garage -- гараж
garbage -- мусор
garden -- сад
gardener -- садовник
gardening -- садоводство -ing
gargling -- полоскающий (от gargle)
garlic -- чеснок
garment -- одежда, одеяние g-
garments -- Предметы одежды 
garret -- мансарда, чердак
garrison -- гарнизон, ставить гарнизон
gas -- газ
gasoline -- газолин, бензин (амер.)
gasp -- задыхаться (не pant)
gasped -- Задыхался (не от слова pant) 
gate -- ворота, проход
gates -- стойки (от gate)
gather -- собираться
gathering -- собрание, сборище -ing
gaunt -- Изможденный 
gave -- дал (от give)
gay -- веселый g-
gaze -- пристально глядеть, пристальный взгляд g-
gear -- механизм
gem -- драгоценный камень
gene -- ген
general -- общий
generally -- вообще, обычно
generate -- порождать
generation -- поколение
generations -- Поколения 
generator -- Генератор 
generosity -- благородство, щедрость
generous -- великодушный
genius -- гений
gentle -- нежный, ласковый g-
gentleman -- господин, джентльмен
gentlemen -- господа (от gentleman)
gently -- мягко, кротко g-
genuine -- подлинный
genus -- Род 
geoff -- Джеф 
geoffrey -- Джеффри 
geographical -- географический
geological -- Геологический 
geology -- геология
geometry -- геометрия
georgiana -- Георгиана 
germ -- зародыш (биолог.), микроб
german -- Немец 
germany -- Германия 
gesture -- жест
get -- получать, доставать, достигать, добраться
gets -- действует (от get)
getting -- передвижение
ghost -- привидение, дух
ghosts -- Призраки 
giant -- гигант, гигантский
gift -- подарок
gifted -- одаренный
gigantic -- гигантский
ginny -- Гинни 
Gipsy -- цыганский, цыган(ка)
girl -- девочка, девушка
give -- давать
given -- данный (от give)
glacier -- ледник, глетчер
glad -- рад
gladly -- С удовольствием 
glance -- взглянуть, мелькнуть
glanced -- Поглядел 
glancing -- Глядящий -ing 
gland -- железа
glands -- Гланды 
glare -- сверкать
glass -- стакан, бокал
glasses -- очки
gleam -- проблеск, светиться
gleamed -- Мерцал (не blinked) 
gleaming -- Блеск -ing 
glide -- скользить, планировать (авиа)
glimpse -- мелькание, мельком взглянуть !NEW!
glitter -- блеск, блестеть
glittering -- Сверкание -ing 
globe -- земной шар, глобус
gloom -- мрак, уныние
gloomily -- Уныло (не ruefully) 
gloomy -- мрачный (не dreary)
gloria -- Глория 
glorious -- великолепный, славный
glory -- слава
glossy -- глянцевитый, блестящий (о волосах)
glove -- перчатка
gloves -- перчатки (от glove)
glow -- сильный жар, накаляться (не heat)
glowing -- Пылающий *l-ing 
glue -- клей; клеить, приклеивать
gnaw -- грызть, глодать
go -- идти
goal -- цель, гол
goat -- козел, коза
goats -- Козлы 
god -- бог, божество
goes -- идет (от go)
going -- идущий (от go)
golan -- Голанский 
gold -- золото, золотой
golden -- золотой, золотистый
good -- хороший, добрый, добро, польза
goodbye -- прощание
goodness -- доброта; великодушие; любезность !NEW!
goods -- товары
goodwill -- добрая воля
goon -- придурок !NEW!
goose -- гусь
gooseberry -- крыжовник
gos -- Идет 
gosh -- боже !NEW!
gossip -- сплетня
got -- получил, полученный (от get)
govern -- управлять g-
government -- правительство
governor -- губернатор
gown -- платье
grab -- внезапно схватывать
grabbed -- Захваченный 
grace -- грация, изящество
graceful -- грациозный
gracious -- милосердный gr-
grade -- сортировать, степень
gradual -- постепенно
gradually -- постепенно
graduated -- окончил, окончивший учебное заведение (от graduate)
grain -- зерно
grains -- Зерно *r-s 
gram -- грамм
grammar -- грамматика
grand -- величественный
grandchildren -- внуки
grandeur -- величие, великолепие, грандиозность g-
grandfather -- дедушка
grandmother -- бабушка
grandparents -- дедушка и бабушка
grandson -- внук
granite -- гранит
grant -- дарить, дар
granted -- дарованный !NEW!
grapes -- виноград
graphic -- графический, наглядный, образный
grasp -- понять, схватить
grass -- трава
grasshopper -- кузнечик
grate -- каминная решетка
grateful -- благодарный g-
grater -- терка
gratified -- Удовлетворенный (*r-) 
gratitude -- благодарность
grave -- могила, серьезный, важный
gravel -- гравий
gravely -- серьезно, здраво, рассудительно (*r-) !NEW!
graveyard -- Кладбище 
gravity -- серьезность
gravy -- подливка, соус
gray -- Серый 
graze -- задевать, оцарапать, содрать (кожу)
grease -- жир, сало, мазь, смазка; смазывать (жиром)
greasy -- жирный, сальный
great -- великий
greater -- больше !NEW!
greatest -- самый большой (от great)
greatly -- очень
greedy -- жадный
greek -- Грек 
green -- зеленый
greenhouse -- Оранжерея 
greet -- приветствовать
greeted -- приветствовал (от greet)
greeting -- приветствие, поклон -ing
greetings -- приветствия (от greeting)
grew -- рос (от grow)
grey -- серый
gride -- Скрип (не creak) 
grief -- горе
grieved -- Огорченный 
grievously -- горестно
grill -- решетка
grim -- жестокий, свирепый, мрачный
grimly -- жестоко, решительно !NEW!
grin -- ухмыляться, усмешка
grind -- молоть, толочь, точить
grip -- схватывание
groan -- стон, стонать
grocer -- бакалейщик
gross -- большой (не large)
grotesque -- преувеличение
ground -- земля
grounds -- Основания(земля) 
group -- группа
grouping -- классификация g-ing
groups -- Группы 
grow -- расти
growing -- растущий
growl -- рычать, ворчать; рычание, ворчание g-
growled -- Рычал 
grown -- выращенный (от grow)
growth -- рост
grudge -- завидовать, жалеть (время, деньги)
grumble -- ворчать
grunt -- хрюкать, хрюканье
guarantee -- гарантия, гарантировать
guard -- охрана, стража
guarded -- Охраняемый 
guardian -- опекун, попечитель
guards -- Охраны 
guess -- отгадывать, догадка
guessing -- гадание
guest -- гость
guests -- гости (от guest)
guffaw -- хохот
guidance -- руководство
guide -- гид, экскурсовод
guided -- Управляемый(руководствуемый) 
guilt -- вина, виновность g-
guilty -- виноватый (g-)
guinea -- гинея (золотая монета, денежная единица; = 21 шиллингу)
gulf -- залив, бухта
gull -- чайка
gulped -- Проглоченный 
gum -- смола, клей; склеивать(ся) (не tar)
gums -- десны
gun -- ружье, пушка
gunpowder -- порох
gurgle -- бульканье (g-)
gus -- Гас 
gust -- порыв (ветра)
gutter -- водосточный желоб, канава
guy -- парень g- !NEW!
habit -- привычка
habits -- Привычки 
had -- вспомогательный глагол, имел (от have), не has
hail -- приветствовать
hair -- волосы
hairpin -- шпилька
hairs -- Волосы 
hairy -- волосатый
half -- половина
halfway -- на полпути !NEW!
hall -- зал
halt -- остановка, останавливать (не stop)
halted -- Приостановленный *a- 
ham -- ветчина
hammer -- молоток
hammock -- гамак
hamper -- препятствие
hand -- рука
handbag -- дамская сумочка
handbook -- справочник, руководство (не guidance)
handful -- горсть
handkerchief -- носовой платок
handle -- обращаться с, управлять (не manage)
handled -- Обработанный 
handling -- обращение -ing
hands -- руки (от hand)
handsome -- красивый
handy -- удобный; ловкий, искусный (h-)
hang -- повесить, висеть
hanging -- подвешивание
hanky -- носовой платок !NEW!
hannah -- Ханна 
hans -- Ханьшуй 
happen -- случаться, происходить
happened -- случился (от happen)
happening -- случай, событие
happily -- счастливо
happiness -- счастье
happy -- счастливый
harass -- беспокоить
harassment -- беспокойство
harbour -- гавань
hard -- с трудом, тяжело
harden -- твердеть
harder -- больше, упорнее (от hard)
hardly -- едва (не barely, merely)
hardship -- лишение
hardworking -- трудолюбивый
hare -- заяц
hari -- Хари 
harm -- беда, неприятность
harmless -- безвредный, безобидный
harmony -- гармония, согласованность
harness -- упряжь, запрягать
harold -- Гарольд 
harp -- арфа
harriet -- Гарриет 
harsh -- грубый, резкий (не sharp)
harshly -- грубо, резко
hart -- олень h-
harvest -- урожай
has -- имеет (от have)
haste -- спешка
hasten -- торопить(ся)
hastened -- поторопленный !NEW!
hastily -- поспешно, опрометчиво
hasty -- поспешный, необдуманный
hat -- шляпа
hatch -- высиживать
hatchet -- топор(ик)
hate -- ненавидеть
hated -- ненавидел (от hate)
hateful -- ненавистный
hatred -- ненависть
hats -- Шляпы 
haughty -- высокомерный, надменный
haul -- тянуть (не pull)
hauled -- Буксируемый 
haunt -- преследовать (о мыслях), появляться (как призрак)
haunted -- Часто посещаемый 
have -- иметь, вспомогательный глагол
haven -- гавань, убежище
having -- имеющий, обладающий (от have)
hay -- сено
hazard -- шанс, опасность h-
haze -- легкий туман (не mist)
he -- он
head -- голова, главный, руководить
headache -- головная боль
header -- Удар головой 
heading -- заголовок
headless -- Безголовый 
headlight -- фара (автомобиля), огни (паровоза)
headline -- заголовок
headlong -- очертя голову
headmaster -- Директор школы 
headphones -- наушники
headquarters -- штаб
heads -- головы (от head)
headstone -- Надгробный камень 
heal -- излечивать
health -- здоровье
healthy -- здоровый
heap -- куча
hear -- слышать
heard -- слушал, услышанный (от hear)
hearing -- слух
heart -- сердце
hearth -- печь, камин, домашний очаг
heartily -- сердечно
hearty -- искренний, (чисто)сердечный, радушный
heat -- жара
heating -- отопление
heaven -- небо, небеса, бог, провидение
heavily -- тяжело
heavy -- тяжелый
hedge -- ограда
hedgehog -- еж
hedwig -- Хедвиг 
heed -- внимание, слушать внимательно
heedless -- невнимательный, небрежный
heel -- пятка, каблук
heels -- пятки !NEW!
height -- высота
heir -- наследник
held -- держал !NEW!
helium -- Гелий 
hell -- черт
hello -- привет
helm -- руль
helmet -- шлем, каска
help -- помощь, помогать
helped -- помогал (от help)
helpful -- полезный h-
helping -- помощь
helpless -- беспомощный
hem -- рубец, кромка, кайма; подшивать, подрубать
hemp -- конопля, пенька
hen -- курица
hence -- следовательно
henceforward -- впредь, отныне
henrietta -- Генриетта 
her -- ее, ей
herd -- стадо
here -- здесь, вот
hereafter -- После этого(в будущем) (не afterward) 
hereditary -- наследственный
herein -- в этом, при сем
hermione -- Хермион 
hermit -- отшельник
hero -- герой
heroic -- героический
heroism -- героизм, доблесть
heron -- цапля
herring -- сельдь
hers -- ее
herself -- себя
hesitate -- колебаться
hesitation -- Колебание 
hey -- эй !NEW!
hi -- привет
hick -- провинциал, деревенщина !NEW!
hide -- прятать, спрятать
hideous -- безобразный, уродливый, страшный (не fearful)
high -- высокий (h-)
higher -- выше
highly -- очень, весьма
highness -- высота, возвышенность (не altitude)
highway -- большая дорога, шоссе
hike -- путешествовать пешком
hiking -- пеший поход
hill -- холм, гора
hills -- Холмы 
hillside -- Склон 
him -- его, ему
himself -- себя, себе, сам
hinder -- препятствовать, мешать
hinge -- петля, шарнир; висеть, вращаться на петлях
hint -- намек, намекать
hip -- ягода шиповника
hire -- взять напрокат
his -- его (-s)
hiss -- свистеть, шипеть, свист
hissed -- шипящий (-ed) !NEW!
hist -- тише!, тс! 
historic -- исторический
historical -- исторический
history -- история
hit -- успех, удача, попадать в цель
hitherto -- до сих пор
hive -- улей
hoard -- запас; запасать, копить (не spare, stock)
hoarse -- хриплый
hoax -- разыгрывать
hobble -- хромота, прихрамывать, ковылять
hobby -- хобби
hockey -- хоккей
hoe -- мотыга, рыхлить землю
hog -- свинья, боров
hoist -- поднимать (флаг, парус)
hold -- держать(ся), выдерживать, захват, владение
holder -- владелец, ручка, рукоятка
holding -- удерживание, держащий (от hold)
holds -- Держится 
hole -- отверстие, яма
holes -- Отверстия 
holiday -- отпуск, праздник
holidays -- каникулы (не vacation)
hollow -- пустой
hols -- каникулы, отпуск !NEW!
holy -- священный, святой
home -- дом
homes -- дома (от home)
homework -- домашнее задание
honest -- честный
honestly -- честно !NEW!
honey -- мед
honeycomb -- соты
honor -- Честь 
honorable -- Благородный 
honorary -- почетный
honour -- честь
honourable -- почетный, почтенный, честный
honoured -- Чтимый(удостоенный) 
hood -- капюшон, капор, колпак, крышка (тех.)
hoof -- копыто
hook -- крючок
hooker -- Проститутка 
hookup -- Соединение 
hoop -- обруч
hooter -- Гудок (не buzzer) 
hop -- хмель (бот.)
hope -- надеяться
hoped -- надеялся (от hope)
hopeful -- надеющийся, подающий надежды, многообещающий
hopefully -- с надеждой !NEW!
hopeless -- безнадежный
hopes -- Надежды 
hopped -- Прыгал (не sprang, leaped, jumped) 
hopper -- Бункер 
horace -- Хорас 
horizon -- горизонт
horizontal -- горизонтальный
horizontally -- Горизонтально 
horn -- рог, забодать
horns -- Рожки 
horrible -- ужасный h-
horrid -- ужасный *o- !NEW!
horror -- ужас h-
horse -- лошадь
horseman -- наездник
hose -- чулки
hospital -- больница
hospitality -- гостеприимство
host -- хозяин
hostess -- хозяйка
hostile -- враждебный (не adverse)
hostility -- враждебность (не adversity)
hot -- горячий
hotel -- гостиница
hotter -- жарче (от hot)
hour -- час
hours -- часы (от hour)
house -- дом
household -- домашнее хозяйство
housekeeper -- экономка
housewife -- домашняя хозяйка
housework -- работа по дому
hover -- парить, вертеться
how -- как
however -- однако
howl -- выть, вой (не wail)
hrs -- Часы 
hug -- крепко обнимать
huge -- огромный (не bulk)
hugo -- Хьюго 
hum -- жужжать, гудеть
human -- человеческий
humanity -- человечество
humble -- скромный h-
humbug -- обманщик, ханжа
humor -- юмор
humorous -- смешной
humour -- юмор, настроение
hump -- горб
hunchback -- горбун
hundred -- сто
hundreds -- Сотни 
hundredth -- сотый
hung -- вешал, был склонным !NEW!
hunger -- голод (h-)
hungry -- голодный (не от слова starve)
hunt -- охотиться
hunter -- охотник
hunting -- охота
hurricane -- ураган h-
hurried -- спешил, торопился (от hurry)
hurriedly -- поспешно !NEW!
hurry -- спешить, торопиться, спешка
hurt -- рана, болеть, причинить боль, повредить
hurts -- болеет, причиняет боль, повреждает (от hurt)
husband -- муж
hush -- водворять тишину
hut -- хижина
hybrid -- Гибрид 
hybrids -- Гибриды 
hygienic -- гигиенический
hypothesis -- Гипотеза 
hysteria -- истерия
hysterical -- истерический
I -- я
ice -- лед
icebox -- холодильник (морозильник) (не fridge)
icicle -- сосулька
icy -- ледяной
idea -- идея, мысль
ideal -- идеал, идеальный
identical -- тождественный
identification -- отождествление
identifier -- Идентификатор 
identifiers -- Идентификаторы 
identify -- опознавать, распознавать; устанавливать личность
idiot -- идиот
idle -- бесполезный
if -- если
ignition -- зажигание, воспламенение
ignorance -- незнание, невежество
ignorant -- невежественный, неосведомленный, несведущий
ignore -- игнорировать
ill -- больной
illegal -- нелегальный
illiterate -- неграмотный
illness -- болезнь
illuminate -- освещать
illuminated -- Освещенный 
illumination -- освещение
illusion -- иллюзия
illustration -- Иллюстрация 
image -- изображение, образ, имидж
imagination -- воображение
imagine -- думать, воображать
imitate -- подражать
imitation -- подражание, имитация
immediate -- непосредственный
immediately -- немедленно
immense -- громадный, необъятный
immensely -- чрезвычайно i-
immersed -- Погруженный 
imminent -- надвигающийся
immortal -- бессмертный
impact -- удар (не stroke)
impatience -- нетерпение
impatient -- нетерпеливый
impatiently -- нетерпеливо
impediment -- препятствие
impenetrable -- непроницаемый
imperative -- повелительное наклонение (грам.)
imperfect -- несовершенный
imperial -- Имперский 
impertinence -- дерзость
implement -- выполнять
implementation -- Выполнение 
implemented -- Осуществленный 
implied -- подразумеваемый (i-)
impolite -- невежливый, неучтивый
import -- импорт, ввоз
importance -- важность
important -- важный
impose -- налагать
impossible -- невозможный
impostor -- самозванец, плут
impress -- производить впечатление
impression -- впечатление
impressive -- впечатляющий -ve
imprison -- заключать в тюрьму
improbable -- невероятный
improve -- улучшать
improved -- улучшил (от improve)
improvement -- улучшение
improvements -- Усовершенствования 
impulse -- побуждение, порыв
impure -- нечистый, грязный, с примесью
in -- в
inability -- неспособность
inaccessible -- недоступный
incessant -- непрерывный, вечный
inch -- дюйм
inches -- Дюймы 
incident -- инцидент
incidentally -- между прочим
inclination -- склонность
incline -- склонять
inclined -- наклонный
include -- включать
included -- включенный (от include)
including -- включая
inclusion -- включение
income -- доход, заработок
incomprehensible -- непонятный, непостижимый i-
inconsistent -- непоследовательный
inconvenient -- неудобный
incorrect -- неверный, неправильный
increase -- рост
increasing -- возрастающий
increasingly -- все больше и больше
incredible -- невероятно
incur -- подвергаться
indebted -- обязанный
indeed -- неужели, действительно (не really)
indefinite -- неопределенный, неограниченный
independence -- независимость
independent -- независимый
independently -- независимо
index -- индекс, указатель, показатель
indexes -- Индексы 
indians -- Индусы(индейцы) 
indicate -- показывать, указывать
indices -- Индексы (не indexes) 
indifference -- безразличие
indifferent -- безразличный
indigenous -- местный
indigestion -- несварение, расстройство
indignant -- негодующий, возмущенный
indignation -- негодование, возмущение
indirect -- косвенный
individual -- личность, индивидуальный
indolent -- ленивый, праздный, безболезненный
indoors -- в помещении
induce -- убеждать
induced -- Вынужденный(вызванный) 
industrial -- промышленный
industrious -- трудолюбивый, прилежный (не hardworking)
industry -- промышленность
ineffective -- неэффективный
inevitable -- неизбежный
infant -- младенец
infer -- заключать, делать вывод
inferior -- худший, плохой
infinite -- безграничный, бесконечный
infinitely -- бесконечно
inflected -- Склоняемый 
inflection -- Сгибание 
inflict -- наносить удар
influence -- влияние, влиять
influenced -- влиял (от influence)
info -- Информация 
inform -- сообщать
information -- информация
informed -- осведомленный
informs -- Сообщает 
inga -- Инга 
ingenious -- изобретательный, остроумный, находчивый
ingratitude -- неблагодарность
ingredient -- составная часть
inhabit -- жить, обитать
inhabitant -- житель
inhabitants -- Жители 
inhabited -- Населенный *n- 
inhale -- вдыхать
inherent -- неотъемлемый, присущий, свойственный (не Integral)
inherit -- (у)наследовать
inheritance -- наследство
inherited -- Унаследованный 
initial -- начальный, первоначальный
initially -- вначале i-
initiate -- начинать (не commence)
inject -- впрыскивать
injunction -- предписание
injure -- ушибиться -e
injured -- поврежденный i-
injury -- телесное повреждение
injustice -- несправедливость
ink -- чернила
inland -- внутренний
inn -- гостиница, постоялый двор
inner -- внутренний
innocence -- невинность, невиновность
innocent -- наивный, невинный
innumerable -- бесчисленный
input -- Вход 
inquire -- спрашивать, узнавать
inquired -- осведомлённый (не informed) !NEW!
inquiries -- справочное (от inquiry)
inquiry -- расспросы, наведение справок
inquisitive -- любопытный
insane -- душевнобольной, ненормальный
inscription -- надпись
insect -- насекомое
insects -- Насекомые 
insecure -- ненадежный, небезопасный (insecure)
insert -- вставлять, помещать (в газете)
inside -- внутрь, внутри
insignificant -- незначительный, ничтожный
insist -- настаивать
insolent -- наглый, дерзкий, оскорбительный
inspect -- осматривать, инспектировать
inspection -- осмотр
inspector -- контролер, инспектор i-
inspiration -- вдохновение
inspired -- Вдохновленный 
install -- водворять, устраивать, устанавливать
installation -- Установка 
installed -- Установленный 
installer -- Монтажник 
installing -- Монтаж -ing 
installs -- Устанавливает 
instance -- пример
instances -- Случаи *n- 
instant -- мгновение
instantly -- немедленно
instead -- вместо, взамен
instinct -- инстинкт
instinctive -- инстинктивный
institution -- учреждение
instruct -- инструктировать
instruction -- инструкция
instructor -- инструктор
instrument -- инструмент
insufficient -- недостаточный
insult -- оскорбление
insurance -- страхование, страховка
intake -- поглощение
integer -- Целое число 
integral -- неотъемлемый
intellectual -- интеллигент
intelligence -- интеллект
intelligent -- умный
intend -- намереваться
intended -- предполагаемый i-
intense -- интенсивный, напряженный
intent -- намерение, цель i-
intention -- намерение, замысел
intentional -- умышленный
intentions -- Намерения 
intently -- внимательно !NEW!
interbase -- Межоснова 
intercept -- перехватывать
intercourse -- общение
interdependent -- взаимозависимый
interest -- интересовать, заинтересовывать
interested -- заинтересованный, интересующийся (от interest)
interesting -- интересный
interface -- Интерфейс 
interfere -- мешать
interference -- вмешательство
interfering -- Вмешательство -ing 
interior -- внутренний (не internal)
intermediate -- Промежуточное звено 
internal -- внутренний
international -- международный
interposed -- Вставленный 
interpret -- интерпретировать, переводить(устно) i-
interrupt -- прерывать, мешать
interruption -- прерывание
interval -- антракт, промежуток
intervals -- Интервалы 
intervention -- посредничество
interview -- встреча, беседа
intimate -- глубокий, интимный
intimidate -- пугать, запугивать
into -- в
intolerable -- невыносимый, нестерпимый
intricate -- запутанный (не entangled)
intrigue -- интрига
introduce -- предстaвлять, знакомить
introduction -- введение
intrude -- вторгаться, вмешиваться, навязываться
invade -- вторгаться
invader -- захватчик
invalid -- недействительный (не Illegal)
invaluable -- неоценимый
invariably -- неизменно
invent -- изобретать, изобрести
invention -- выдумка, изобретательность
inventor -- изобретатель
inventory -- опись
invest -- вкладывать, помещать (капитал)
investigate -- исследовать
investigation -- исследование
investigator -- исследователь
invisible -- невидимый
invitation -- приглашение
invitations -- приглашения (от invitation)
invite -- приглашать
invited -- пригласил, приглашенный (от invite)
involuntary -- невольный
involve -- втягивать, вовлекать
involved -- сложный
inward -- внутрь
irene -- Ирэн 
iron -- железо, утюг
ironic -- иронический
ironical -- иронический
irregular -- неправильный
irresistible -- непреодолимый
irresolute -- нерешительный
irresponsibility -- безответственность
irritation -- раздражение
is -- есть (от be)
isabella -- Изабелла 
island -- остров
isle -- остров(ок)
iso -- Международная организация по стандартизации 
isobel -- Исобел 
isolation -- изоляция
issue -- выпуск, издание, выпускать
issued -- Выпущенный 
issues -- Проблемы(выпуски) 
it -- это, он, она (для предметов и животных)
italian -- Итальянец 
italy -- Италия 
item -- вещь, предмет
its -- его, ее (от it)
itself -- себя, себе
ivan -- Иван 
ivory -- слоновая кость
ivy -- плющ
jack -- домкрат
jackal -- шакал
jacket -- куртка
jackson -- Джэксон 
jail -- тюрьма
jake -- Джейк 
jam -- варенье, джем
james -- Джеймс 
jan -- Январь 
January -- январь
jar -- ссора
jaw -- челюсть
jaws -- Челюсти 
jazz -- джаз
jealous -- ревнивый
jealousy -- ревность
jean -- Хлопчатобумажная ткань 
jeanne -- Джин 
jeans -- джинсы
jeer -- насмешка *e-
jeff -- Джеф 
jelly -- желе
jenny -- Дженни 
jerk -- резкий толчок, подергивание; резко толкать, дергать
jersey -- джемпер (-.....s....-)
jerusalem -- Иерусалим 
jessamy -- Джессами 
jessie -- Джесси 
jest -- шутка; шутить, высмеивать (не joke)
jet -- струя (воды, пара, газа)
jew -- Еврей 
jewel -- драгоценность
jeweller -- ювелир
jewellery -- ювелирные изделия
jewels -- драгоценности
jill -- Джилл 
jim -- Джим 
jo -- Джо 
joan -- Джоан 
job -- работа
jobs -- работы (от job)
joe -- кофе !NEW!
join -- соединяться
joining -- соединение
joint -- совместный, объединенный (j-)
joke -- шутка, шутить
joking -- шутка, шутящий (от joke)
jolly -- очень, веселый
jonas -- Джонас 
joseph -- Джозеф 
josephine -- Джозефина 
josie -- Джоси 
journal -- журнал j-
journey -- путешествие
joy -- радость
joyful -- радостный, довольный
joyfully -- Радостно *o- 
judge -- судья
judged -- Оцененный *u- (не valued) 
judgement -- приговор, суждение
judgment -- Суждение 
jug -- кувшин
juice -- сок
juicy -- сочный, дождливый
July -- июль
jumble -- толкаться
jump -- прыгать
jumped -- прыгал(а) (от jump)
jumper -- джемпер
June -- июнь
jungle -- джунгли
junior -- младший
junk -- рухлядь !NEW!
jury -- присяжные, жюри
just -- только, всего лишь, справедливый
justice -- справедливость
justin -- Джастин 
justly -- справедливо
juvenile -- юноша, подросток *u-
kalgan -- Калган 
kate -- Кейт 
kazan -- Казань 
keel -- киль
keen -- страстный
keep -- (со)держать, сохранять
keeper -- хранитель, смотритель, сторож
keeping -- хранение, содержание, согласие (k...ing)
kennel -- (собачья) конура, собачий питомник
kenneth -- Кеннет 
kept -- заставил (от keep)
kerb -- обочина
kernel -- ядро, зерно
kettle -- чайник
key -- ключ
keyhole -- замочная скважина
kick -- пинать, пнуть
kid -- ребенок (разг.), обманывать (сленг.)
kidding -- шутящий, высмеивающий (от kid)
kidnap -- похищать (человека)
kidney -- почка (анатом.)
kids -- дети (от kid)
kill -- убивать
killed -- убил (от kill)
killing -- убийственный (-ing)
kind -- добрый, вид, род
kindly -- добрый, добродушный, ласково, любезно
kindness -- доброта, любезность (k-)
king -- король
kingdom -- королевство
kings -- Короли 
kiss -- целовать
kit -- ранец, багаж
kitchen -- кухня
kitten -- котенок
kitty -- цель (в игре в кегли)
knee -- колено
knees -- колени !NEW!
knelt -- стоял на коленях !NEW!
knew -- знал (от know)
knife -- нож
knight -- рыцарь
knights -- Рыцари 
knit -- вязать, связывать
knitted -- вязанный, трикотажный
knob -- knob -- НЕВЫУЧЕННОЕ СЛОВО 
knock -- стучать, стук
knocked -- стучать (2 форма) *n- !NEW!
knot -- узел, завязывать узел (не kink)
know -- знать
knowing -- знание, знающий
knowledge -- знание
konrad -- Конрад 
la -- Ла 
label -- этикетка, приклеивать ярлык
labor -- Рабочая сила 
laboratory -- лаборатория
labour -- труд, трудиться
labourer -- рабочий
lace -- кружево, шнурок
lack -- недостаток
lad -- мальчик, юноша, парень (не guy)
ladder -- лестница (не stairs)
laden -- Груженый, нагруженный, обремененный 
ladies -- дамы (от lady)
lads -- парни (не guys) !NEW!
lady -- дама, госпожа
laid -- происходил, совершался (от lay)
lake -- озеро
lamb -- ягненок, баранина
lame -- хромой
lament -- сетование, жалоба (l-)
lamp -- лампа
land -- земля, суша, приземляться, высаживаться на берег
landed -- земельный
landing -- высадка на берег -ing
landlady -- хозяйка (дома, гостиницы) (не mistress)
landlord -- домовладелец
landscape -- ландшафт, пейзаж
landslide -- оползень, обвал (не avalanche)
lane -- дорожка (не road)
language -- язык
lantern -- фонарь
lap -- подол
lapse -- описка
lard -- топленое свиное сало
large -- большой
largely -- обильно *a-
larger -- Больший 
largest -- Самый большой 
lark -- жаворонок
larva -- личинка, головастик
lash -- хлестать, ударять; плеть
last -- прошлый, последний, продолжаться, длиться
lastly -- Наконец 
latch -- запирать(ся)
late -- поздно
lately -- за последнее время
later -- позже
lateral -- Боковой *a- 
latest -- последний (не latter)
latter -- последний
laugh -- смех, смеяться
laughed -- смеялся, хохотал (от laugh)
laughing -- смех, смеющийся
laughter -- смех, хохот
launch -- начинать
launching -- спуск (на воду), начало -ing
laundry -- прачечная, стирка
laurie -- Лаури 
lavish -- щедрый, обильный
law -- закон, право
lawn -- лужайка
laws -- Законы 
lawyer -- адвокат, юрист
lay -- класть, положить
laying -- Наложение -ing 
laziness -- лень
lazy -- ленивый
lead -- вести, руководить
leader -- глава, лидер
leadership -- руководство
leading -- лидирование, руководящий
leads -- Лидерство 
leaf -- лист
leaflet -- Рекламный листок 
leaflets -- Рекламные листки 
league -- союз, лига
leak -- просачиваться
lean -- прислоняться, наклоняться, наклон
leap -- високосный, прыжок, прыгать
leaped -- Прыгал (не sprang, jumped, hopped) 
leapt -- прыгал !NEW!
learn -- узнать, учиться
learned -- ученый
learning -- учение
learnt -- узнал, выученный (от learn)
lease -- аренда, сдавать в аренду
leash -- поводок, цепь (не strap)
least -- наименьший, менее всего
leather -- кожа, кожаный
leave -- оставлять, покидать, уезжать
leaving -- уезжающий (от leave)
lecture -- лекция
ledge -- выступ, край l-
lee -- Защита 
left -- покинутый, оставленный (от leave)
leg -- нога
legacy -- наследство
legal -- законный
legally -- законно
legend -- легенда
legitimate -- обоснованный
leisure -- досуг
leisurely -- не спеша
lemon -- лимон
lemonade -- лимонад
lend -- дать в долг
length -- длина
lens -- линза
lent -- одолжил, дал в долг (от lend)
less -- менее, в меньшей степени (от little)
lessen -- уменьшать l-
lesson -- урок
let -- позволять, давать, разрешать
letter -- письмо
letters -- письма (от letter)
letting -- Разрешение -ing 
lettuce -- салат
level -- уровень
lever -- рычаг
liable -- подлежащий, обязанный, ответственный
liar -- лгун
liberal -- либеральный, щедрый; либерал
liberty -- свобода
librarian -- библиотекарь
libraries -- Библиотеки 
library -- библиотека
licence -- лицензия, разрешение (*****c*)
license -- давать разрешение
lick -- лизать
lid -- крышка
lie -- ложь, лгать, лежать
life -- жизнь
lifeboat -- спасательная лодка
lift -- поднимать, подъемник, лифт
light -- свет, освещение, фара, освещать, зажигать
lighter -- зажигалка
lighthouse -- маяк
lighting -- освещение
lightly -- слегка !NEW!
lightning -- молния
lights -- фары (от light)
like -- любить, нравиться, похожий, подобный
liked -- нравился, любил (от like)
likelihood -- вероятность
likely -- вероятно
likeness -- сходство l-
likewise -- так же !NEW!
lilac -- сирень, сиреневый
lily -- лилия
limb -- конечность (анат.)
limbs -- конечности !NEW!
lime -- известь
limit -- предел, граница
limitation -- ограничение
limited -- ограниченный
limits -- Пределы 
limp -- хромота, прихрамывать
line -- линия, специальность
lined -- Выровненный 
linen -- белье
linger -- медлить, задерживаться
lining -- подкладка
link -- соединять, соединить (link)
lion -- лев
lip -- губа
liquid -- жидкость
liquor -- крепкий спиртной напиток
list -- список
listen -- слушать
listened -- слушал (от listen)
listener -- слушатель
lit -- освещённый !NEW!
literal -- буквальный
literary -- литературный
literature -- литература
litter -- мусор, сорить
little -- мало, маленький
live -- жить
lived -- жил, живший (от live)
lively -- живой, оживленный
liver -- печень
living -- средства к существованию, жизнь
lizard -- ящерица
lizzie -- Автомобильчик 
load -- нагрузка, нагружать
loaded -- загруженный
loaf -- безделье
loan -- заём, ссуда
lobby -- вестибюль
lobes -- Лепестки 
lobster -- омар
local -- местный
locate -- определять местоположение !NEW!
located -- Расположенный 
location -- местоположение
locations -- Местоположения 
lock -- замок, запирать на замок
locked -- запертый l-
locking -- Захват -ing 
locks -- Замки 
locksmith -- слесарь
lodge -- разместить
lodging -- квартира, жилье
loft -- сеновал, чердак
lofty -- высокий, возвышенный
log -- бревно
logic -- логика
login -- Логин 
logs -- Бревна 
loneliness -- одиночество !NEW!
lonely -- одинокий
long -- длинный, долгий, долго
longer -- длиннее (от long)
look -- смотреть, выглядеть, взгляд, внешность
looking -- смотрящий (от look) -ing
looks -- выглядит (от like)
loom -- принимать размеры
loop -- петля
loose -- свободный
loosen -- развязывать, распускать, ослаблять
loot -- ограбление
lord -- лорд
lorry -- грузовик (не truck)
los -- Лос 
lose -- терять, проигрывать
losing -- проигрыш, проигранный
loss -- потеря, утрата
lost -- потерял, проиграл, потерянный, проигранный (от lose)
lot -- много
lots -- уйма, куча, множество (не pile) !NEW!
loud -- громкий
louder -- громче
loudly -- громко
louisa -- Луиза 
louise -- Луиза 
love -- любовь, любить
loved -- любил (от love)
lovely -- прекрасный, восхитительный l-
lover -- любитель, возлюбленный
lovers -- Любители(возлюбленные) 
loving -- любящий
low -- низкий
lower -- нижний, снижать, опускать
lowered -- Пониженный 
loyal -- верный, лояльный
loyalty -- верность
lucidly -- понятно, ясно *u-
lucius -- Лусиус 
luck -- удача, везение
luckily -- к счастью
lucky -- счастливый, удачный
lucy -- Люси 
luggage -- багаж
luke -- Лук 
lumber -- лесоматериалы *u-
lump -- глыба, ком
lunch -- второй завтрак, обед
luncheon -- обед, лёгкая закуска
lustre -- блеск, лоск, глянец, люстра
luxurious -- роскошный
luxury -- роскошь
lydia -- Лидия 
machine -- машина
machinery -- машины, механизмы
mad -- обезумевший
madam -- госпожа
madame -- Мадам 
made -- делал, сделанный (от make)
madeira -- Мадейра 
madly -- безумно !NEW!
magazine -- журнал
magazines -- журналы (от magazine)
magic -- волшебный m-
magician -- волшебник
magnificent -- великолепный m-
maid -- горничная
mail -- почта, отправлять (по почте)
main -- главный
mainland -- материк
mainly -- главным образом
maintain -- поддерживать
maintained -- Обслуженный(поддержанный) 
maintenance -- поддержание
majesty -- величественность, величество (титул)
major -- специализироваться, главный m-
majority -- большинство
make -- делать, производить
maker -- производитель (m-)
makes -- делает (от make)
making -- создание, становление (процесс) !NEW!
male -- мужчина, самец
malice -- злоба
malicious -- злобный
malignant -- злобный, злостный, злокачественный (****g)
mallet -- деревянный молоток
mallow -- Просвирник 
mama -- Мама 
mamma -- Мама 
man -- мужчина, человек
manage -- справляться, ухитряться, управлять
management -- управление
manager -- управляющий
manages -- ухитряется (от manage)
mane -- грива
mania -- мания
manifest -- явный, проявлять(ся) m-
manipulate -- манипулировать
manipulation -- Манипуляция 
mankind -- человечество
manner -- способ, образ действия, манера
manners -- способы (не methods) !NEW!
manoeuvre -- маневр, маневрировать
mansfield -- Мансфилд 
mansion -- дворец
mantle -- покрывать, окутывать
manual -- ручной
manufacture -- производство, производить m-
manure -- удобрение
manuscript -- рукопись
many -- много (с исчисляемыми существительными)
map -- карта
marble -- мрамор
march -- маршировать
marched -- Прошел 
marco -- Марко 
margaret -- Маргарет 
margarita -- Маргарита 
margin -- минимум, нижняя грань, предел
maria -- Мария 
marianne -- Мэрианн 
marine -- морской флот, морской
mariner -- моряк
mark -- норма, состояние, оценка, отметка
market -- рынок
marks -- оценки (от mark)
marmot -- сурок
marquis -- Маркиз 
marriage -- свадьба
married -- женатый, замужняя
marry -- жениться, выходить замуж
marrying -- Бракосочетание -ing 
marsh -- болото m-
martial -- военный
marvel -- удивляться, поражаться m-
marvellous -- удивительный, замечательный m-
mask -- маска
mason -- каменщик
masquerade -- маскарад, маскироваться
mass -- масса, множество
masses -- Массы 
massive -- массивный
mast -- мачта
master -- хозяин (не hoster)
masterpiece -- шедевр
mat -- коврик (не rug)
match -- спичка, матч
matches -- Сделки, спички 
mate -- товарищ
material -- материал
materials -- Материалы 
mathematical -- математический
maths -- математика
matter -- дело, сущность, материал
matters -- дела, материалы (от matter)
mattress -- матрац
mature -- зрелый, созреть
maturity -- зрелость
maud -- Дорожный плед 
maxim -- принцип
maximum -- Максимум 
May -- май
maybe -- мoжет быть
mayor -- мэр
me -- мне, меня
meadow -- луг
meal -- еда, есть, принимать пищу (не food)
meals -- еда (от meal)
mean -- означать
meaning -- значение
meaningless -- бессмысленный
means -- средство, способ
meant -- означаемый, подразумеваемый !NEW!
meantime -- между тем
meanwhile -- тем временем, между тем
measles -- корь
measure -- мера
measured -- Измеренный 
measures -- Меры 
measuring -- измерения (от measure)
meat -- мясо, мясной
mechanic -- механик
mechanical -- механический
mechanics -- механика
mechanism -- устройство
medal -- медаль
meddle -- вмешиваться
medical -- медицинский
medicine -- медицина, лекарство
medieval -- средневековый
meditate -- размышлять, обдумывать
medium -- средство, середина
meek -- кроткий
meet -- встречать(ся), знакомиться
meeting -- встреча
meg -- Мэг 
melancholy -- Меланхолия 
melon -- дыня
melt -- таять
member -- член
members -- члены (от member)
memorable -- памятный
memorandum -- памятная записка
memory -- память
men -- мужчины (от man)
menace -- опасность (не danger)
mend -- чинить, ремонтировать
mended -- починил, починенный (от mend)
mental -- умственный
mentally -- умственно
mention -- благодарность, упоминать
mentioned -- упомянул (от mention)
menu -- меню
merchandise -- торговля
merchant -- торговец (не salesman)
merciful -- милосердный (не gracious)
mercury -- ртуть
mercy -- милость
mere -- простой
merely -- единственно
merge -- Слиться 
merit -- достоинство
merry -- веселый, радостный m-
mess -- беспорядок, путаница
message -- сообщение, поручение
messenger -- посыльный, курьер
met -- встречались, встреченный (от meet)
metal -- металл, металлический
meter -- счетчик
method -- метод
metropolitan -- столичный
mexican -- Мексиканец 
mice -- мыши
microphone -- микрофон
microscope -- микроскоп
mid -- средний
midday -- полдень
middle -- средний
midnight -- полночь
midst -- середина
might -- можно, возможно (от may)
mighty -- могущественный
mild -- мягкий (не soft)
mildred -- Милдред 
mile -- миля
miles -- мили (от mile)
military -- военный
milk -- молоко
mill -- фабрика, завод, мельница
millet -- просо, пшено
million -- миллион
millions -- Миллионы 
mind -- память, мнение, помнить, возражать
minded -- Склонный 
minds -- ум !NEW!
mine -- мой (употребляется без последующего существительного)
mineral -- минeральный
mingled -- Смешанный 
miniaturization -- Миниатюризация 
minims -- Мельчайшая частица, очень маленькая доля, капля 
minimum -- минимум
mining -- горный -ing
minister -- министр
ministry -- министерство
minor -- младший, незначительный, второстепенный
minority -- меньшинство
mint -- мята
minus -- минус
minute -- минута
minutes -- минуты (от minute)
miracle -- чудо
mirror -- зеркало
mirth -- веселье, радость
miscellaneous -- смешанный, разнообразный m-
mischief -- зло, беда
mischievous -- злонамеренный, злобный, шаловливый, озорной
miserable -- несчастный
misery -- страдания, нищета
misfortune -- несчастье (m-)
mishap -- неудача (не unluck)
mislead -- вводить в заблуждение
miss -- промах, промахнуться, пропустить, скучать
missing -- недостающий, отсутствующий, пропавший (без вести)
mission -- миссия
missionary -- миссионер
mist -- дымка
mistake -- ошибка
mistaken -- ошибочный (от mistake)
mistress -- хозяйка, госпожа
misty -- туманный mi-
mix -- смешивать, мешать
mixture -- микстура
mm -- Мм 
moan -- оплакивать, стонать
moaning -- Стенание -ing 
mob -- толпа, сборище
mobile -- подвижный
mock -- насмехаться (не jeer)
mockery -- издевательство
mode -- способ
model -- модель
moderate -- умеренный
moderately -- Умеренно 
modern -- современный
modest -- скромный m-
modification -- Модификация 
modified -- видоизменённый !NEW!
modify -- модифицировать
module -- Модуль 
moist -- сырой, влажный m-
moisture -- влажность (не humidity)
mole -- крот
molly -- Молли 
moment -- момент, миг
momentary -- Мгновенный 
momentum -- импульс
monarch -- монарх
Monday -- понедельник
money -- деньги
monkey -- обезьяна
monks -- Монахи 
monotonous -- однообразный, монотонный
monsieur -- Господин 
monster -- чудовище
monsters -- Монстры 
monstrous -- чудовищный
month -- месяц
monthly -- (еже)месячный, ежемесячно
months -- месяцы (от month)
monument -- памятник (не memorial)
monuments -- памятники (от monument)
mood -- настроение
moon -- луна
moonlight -- лунный свет !NEW!
mop -- швабра, подтирать
moral -- нравственный
more -- еще, больше
moreover -- кроме того
morning -- утро
morrow -- завтра, завтрашний день; следующий день !NEW!
morsel -- кусочек -l
mortal -- смертный, смертельный (не lethal)
mortgage -- заклад, залог
mortimer -- Мортимер 
morton -- Мортон 
Moscow -- Москва
mosquito -- комар
moss -- мох
mossy -- мшистый
most -- самый, весьма
mostly -- главным образом (не mainly)
motel -- мотель, гостиница
moth -- моль, мотылек
mother -- мама
motion -- движение
motionless -- неподвижный
motive -- повод, мотив
motives -- Поводы 
motley -- разноцветный, пестрый
motor -- мотор
mould -- плесень; плесенный грибок
mound -- насыпь, холмик
mount -- взбираться m-
mountain -- гора
mourn -- сетовать
mournful -- грустный
mourning -- траур
mouse -- мышь
moustache -- усы
mouth -- рот
move -- двигать(ся), переезжать
movement -- движение
movements -- Движения 
movie -- кино, фильм
movies -- кино, фильмы (от movie)
moving -- трогательный
mow -- косить
ms -- Госпожа 
much -- много (с неисчисляемыми существительными)
mud -- грязь
muddy -- грязный, мутный
muffled -- закутанный, укутанный, завёрнутый (не wrapped) !NEW!
muffler -- шарф
mug -- кружка
muggy -- теплый, влажный, удушливый
mulberry -- Тутовое дерево 
mule -- мул, тупица, гибрид, туфля без задников
multi -- Много 
multiple -- многократный -e
multitude -- множество
mumble -- бормотание m-
mummy -- Мумия 
munch -- чавкать
mural -- стенная живопись, фреска
murder -- убийство
murderer -- убийца
murmur -- шорох, шепот m-
muscle -- мышца
muscles -- Мускулы 
muscular -- мускулистый
museum -- музей
music -- музыка
musical -- музыкальный, мюзикл
musician -- музыкант
must -- должен, надо
mute -- немой (не dumb)
mutiny -- мятеж, поднять мятеж
mutter -- бормотать
muttered -- Бормотал 
muttering -- Бормотание -ing 
mutton -- баранина
mutual -- взаимный, общий (не common)
muzzle -- морда, намордник, дуло
my -- мой, моя, мое, мои
myrtle -- Мирт 
myself -- себя, меня самого, себе, сам
mysterious -- таинственный
mystery -- тайна
myth -- миф
nab -- курок
nail -- ноготь, гвоздь
nails -- ногти (от nail)
naive -- наивный
naked -- обнаженный, голый
name -- имя, фамилия, называть
namely -- а именно
nan -- Нэн 
nancy -- Нэнси 
napkin -- салфетка, пеленка
napoleon -- Наполеон 
narrative -- повествование, рассказ
narrow -- узкий
nasty -- скверный, плохой
nat -- Нат 
nation -- нация, народ
national -- национальный
nations -- Нации 
native -- родной
natives -- Аборигены 
natural -- естественный
naturalist -- Натуралист 
naturalists -- Натуралисты 
naturally -- естественно
nature -- природа
naughty -- непослушный
navigation -- судоходство, плавание, навигация
navy -- военный флот
nay -- более того, даже; отрицательный ответ; отказ;
near -- близко от, около
nearby -- поблизости (nearby)
nearest -- ближайший (от near)
nearly -- почти, приблизительно (не almost)
neat -- чистый, опрятный n-
neatly -- аккуратно !NEW!
necessarily -- обязательно
necessary -- нужный, необходимый
necessity -- необходимость
neck -- шея
necklace -- ожерелье
ned -- Нед 
need -- нуждаться в, надо, нужда, потребность
needle -- игла
needlework -- шитье
negative -- отрицательный, отрицание, негатив
neglect -- пренебрегать
neglected -- Пренебрег 
negligence -- небрежность
negotiate -- договариваться
neighbour -- сосед
neighbourhood -- соседство
neighbouring -- соседний
neither -- также не
nell -- Нелл 
nephew -- племянник
nerve -- нерв
nerves -- нервы (от nerve)
nervous -- нервный
nest -- гнездо
net -- сеть
network -- сеть
neutral -- нейтральный
never -- никогда
nevertheless -- тем не менее
neville -- Невилл 
new -- новый
newcomer -- новичок (не beginner)
newly -- вновь (не again)
news -- новости, известия
newsletter -- новости
newspaper -- газета
newspapers -- газеты (от newspaper)
next -- следующий, соседний, затем, потом
nice -- хороший, чудесный, приятный
nicely -- хорошо
nicer -- лучше (от nice)
nicest -- самый вкусный (от nice)
niche -- ниша
nicholas -- Николас 
nick -- Зарубка 
nickel -- никл (монета в 5 центов)
nickname -- прозвище
niece -- племянница
nieces -- Племянницы 
night -- ночь
nightingale -- соловей
nightmare -- кошмар
nights -- ночи (от night)
nine -- девять
nineteen -- девятнадцать
nineteenth -- девятнадцатый
ninety -- девяносто
ninth -- девятый
nip -- укус, щипать, пересечь
no -- нет, никакой
noble -- благородный, знатный
nobleman -- дворянин
nobles -- Знать (знатные люди) 
nobody -- никто
nod -- кивать головой, кивок
nodding -- Кивающий 
node -- Узел (не knot) 
noise -- шум
noiseless -- бесшумный
noises -- Шумы 
noisy -- шумный
non -- не
none -- нисколько, совсем не, вовсе не
nonsense -- чепуха, ерунда
noon -- полдень
nor -- и не, также не
normal -- нормальный
normally -- обычно n-
normandy -- Нормандия 
norris -- Норрис 
North -- север
northern -- северный
nose -- нос
nostril -- ноздря
nostrils -- Ноздри 
not -- не
notable -- заметный
notably -- исключительно
note -- запись, записка, банкнота, записывать
notebook -- тетрадь (n-)
nothing -- ничто, ничего
notice -- извещение, сообщение, замечать, обращать внимание
notify -- извещать, уведомлять (не inform)
notion -- понятие
notions -- Понятия 
notorious -- известный, отъявленный
notwithstanding -- несмотря на, тем не менее, однако
nourishing -- питательный (-ing)
nourishment -- питание, пища
novel -- роман
novelty -- новизна, новинка
November -- ноябрь
now -- сейчас
nowadays -- в наше время
nowhere -- нигде, никуда
nuisance -- досада
null -- Пустой указатель 
nulls -- Пустые указатели 
numb -- онемелый, оцепенелый (не dumb, )
number -- номер
numbers -- Номера(числа) 
numerals -- числительные (от numeral)
numeric -- Числовой 
numerous -- многочисленный
nurse -- няня (не nanny)
nursery -- детский, ясли
nut -- орех
nuts -- орехи (от nut)
nylon -- нейлон, нейлоновый
oak -- дуб
oar -- весло
oars -- вёсла !NEW!
oath -- клятва, присяга
obedience -- послушание
obedient -- послушный
obey -- подчиняться, слушаться
object -- возражать, предмет
objected -- Возразил (не retorted) 
objection -- возражение, протест
objections -- возражения (от objection)
objective -- цель, стремление (-ve)
objects -- Объекты(цели) 
obligation -- обязательство
oblige -- обязывать
obliged -- обязан, признателен (от oblige)
obscure -- затемнять, затруднять понимание
observation -- наблюдение, замечание
observe -- наблюдать, замечать (не outlook)
observed -- наблюдаемый !NEW!
observer -- наблюдатель
obstacle -- препятствие
obtain -- добиваться
obtained -- Полученный *b- 
obvious -- очевидный o-
obviously -- очевидно o-
occasion -- случай, обстоятельство
occasional -- случайный
occasionally -- изредка
occasioned -- Причиняемый 
occupation -- занятие
occupied -- занятый !NEW!
occupy -- занимать, завоёвывать
occur -- случаться
occurrence -- Возникновение 
occurs -- Происходит 
ocean -- океан
octavian -- Октавиан 
October -- октябрь
odd -- странный
odds -- разница, неравенство
odour -- запах, аромат o-
of -- предлог родительного падежа (кого?, чего?)
off -- прочь, от
offence -- обида
offend -- обижать, обидеть (o-)
offended -- обиженный !NEW!
offensive -- наступление
offer -- предлагать
offering -- предложение
office -- офис, контора
officer -- служащий, офицер
official -- официальный, чиновник
officially -- официально
offset -- смещенный
offspring -- Потомство 
often -- часто
oh -- O!
oil -- масло
OK -- все в порядке
old -- старый
oldest -- старший, самый старый
olive -- олива, маслина; оливкового цвета
omelette -- омлет
ominous -- зловещий
omit -- опускать, пропускать, упускать
on -- на, вперед, дальше
once -- один раз, однажды
oneself -- (самого) себя o-
onion -- лук
only -- только, единственный
onto -- на (не upon)
onward -- вперед, далее, продвигающийся вперед
open -- открывать
opened -- открыл, открытый (от open)
opening -- начало, открытие
openly -- открыто
opera -- опера
operate -- действовать
operating -- управляющий -ing
operation -- действие, операция
operative -- действующий o-ve
operator -- оператор
opinion -- мнение
opponent -- соперник
opportunity -- возможность
opposed -- Противопоставленный 
opposite -- противоположный
opposition -- противодействие
oppressive -- гнетущий, деспотический
opt -- выбирать
option -- выбор (o-)
optional -- Дополнительный 
options -- Выбора 
or -- или
orange -- апельсин, оранжевый
oranges -- апельсины (от orange)
orchard -- фруктовый сад
orchestra -- партер, оркестр
order -- порядок, приказ, заказ, заказывать, приказывать
ordered -- приказал (от order)
orderly -- аккуратный
ordinal -- порядковый
ordinarily -- обыкновенным, обычным путем; обычно; нормально; в обычной степени
ordinary -- обычный, простой
organ -- орган
organic -- органический
organization -- организация
organize -- организовывать
organized -- организовывал (от organize)
organizer -- организатор
organs -- Органы 
oriental -- восточный
origin -- происхождение
original -- оригинал, первоначальный
originally -- первоначально
originate -- возникать, происходить, давать начало, порождать; создавать
ornament -- украшение, орнамент; украшать
orphan -- сирота, сиротский
ostrich -- страус
other -- другой
otherwise -- иначе
ought -- долженствование
our -- наш
ours -- наш
ourselves -- себя, себе, сами
out -- вне, вон, из, снаружи, наружный
outbreak -- взрыв, вспышка, начало (войны и т.п.)
outcome -- результат
outcry -- крик, протест
outdoor -- на открытом воздухе
outer -- внешний
outfit -- снаряжение, обмундирование, оборудование
outlaw -- человек вне закона, изгнанник
outlet -- выход, выходное отверстие
outline -- контур, конспект, план, схема; краткое содержание
output -- выпуск, продукция
outrage -- нарушение закона, насилие, оскорблять
outright -- открыто, прямо; без утайки (не straight, directly)
outside -- снаружи, наружный
outskirts -- окраина (города), опушка (леса)
outstanding -- выдающийся *u-
outward -- внешний, наружный (не outside)
outwit -- перехитрить
oven -- печь
over -- через, над, сверх
overall -- всеобщий o-
overcoat -- пальто
overcome -- преодолеть
overflow -- переливаться через край, заливать, переполнять
overhead -- наверху, над головой, верхний
overhear -- подслушивать
overjoyed -- вне себя от радости, очень довольный
overload -- перегружать
overlook -- надзирать
override -- наехать, переехать; задавить Отвергнуть 
overthrow -- свергать
overtime -- сверхурочные
overturn -- опрокидывать(ся), ниспровергать
overwhelm -- засыпать, забрасывать (вопросами), сокрушать
overwhelming -- несметный
owe -- быть должным
owen -- Оуэн 
owing -- должный
owl -- сова
own -- иметь, владеть, свой, собственный
owner -- владелец
owners -- Владельцы 
ownership -- собственность
ox -- бык
oxbow -- ярмо
oxygen -- кислород
oyster -- устрица
oysters -- устрицы (от oyster)
oz -- Унция 
pace -- шагать
pacific -- мирный
pack -- упаковывать, упаковать
package -- пакет
packet -- пакет (не bundle)
pad -- мягкая прокладка, подушка; подбивать (ватой и т.п.)
paddle -- короткое весло, грести одним веслом; шлепать по воде
padlock -- висячий замок
page -- страница
paid -- платил, оплаченный (от pay)
pail -- ведро
pain -- боль, страдание
painful -- причиняющий боль, мучительный
pains -- боли, страдания (от pain)
paint -- красить, краска
painter -- художник
painting -- живопись
pair -- пара
pairs -- Пары 
pal -- приятель, товарищ, дружок
palace -- дворец
pale -- бледный
palm -- ладонь
pamphlet -- брошюра, памфлет
pan -- сковорода
pane -- оконное стекло
panel -- комиссия
pang -- острая боль
panic -- паника
pant -- задыхаться (не gasp)
pantomime -- Пантомима 
pantry -- кладовая, чулан (не closet)
paper -- бумага, газета
parade -- парад
paragraph -- параграф
parallel -- параллельный
parameter -- Параметр 
parameters -- Параметры 
parcel -- пакет *a-
parchment -- Пергамент 
pardon -- извинение
parent -- родитель, родственник
parents -- родители (от parent)
park -- парк, (при)парковать(ся)
parked -- Припаркованный 
parking -- стоянка
parliament -- парламент
parlor -- Комната 
parlour -- кабинет p-
parrot -- попугай
parrots -- Попугаи 
parsley -- петрушка (бот.)
part -- часть, доля, роль, делить, расставаться, расходиться
parted -- Разделенный 
partial -- частичный
partially -- Частично 
participate -- участвовать
particles -- Частицы 
particular -- особый
particularly -- особенно, в особенности
parties -- вечеринки (от party)
parting -- прощание
partition -- разделение
partly -- частично
partner -- участник
parts -- части (от part)
party -- вечеринка, группа
pass -- передавать, проходить, пропуск, перевал
passage -- проход
passages -- проходы !NEW!
passed -- прошел (от pass)
passenger -- пассажир
passengers -- Пассажиры 
passing -- прохождение
passion -- страсть
passionate -- страстный
password -- Пароль 
passwords -- Пароли 
past -- после, за
paste -- тесто, клейстер, паста; клеить, склеивать
pasture -- пастбище
pat -- хлопок
patch -- заплатка
path -- тропинка, беговая дорожка
pathetic -- трогательный
paths -- Дорожки (не roads, lanes) 
patience -- терпение
patient -- пациент, терпеливый
patiently -- Терпеливо 
patrol -- патруль
patsy -- Паци 
patted -- Ласкал 
pattern -- модель
paul -- пол !NEW!
pause -- пауза
pausing -- Приостановка -ing 
pavement -- тротуар (не sidewalk)
paw -- лапа
paws -- Лапы 
pay -- платить, зарплата
paying -- платеж
payment -- плата
pea -- горох
peace -- мир
peaceable -- миролюбивый, мирный
peaceful -- мирный, спокойный
peacefully -- мирно
peach -- персик
peaches -- персики (от peach)
peacock -- павлин
peak -- вершина
peal -- трезвон, раскат грома
peanut -- земляной орех
pear -- груша
pearl -- жемчуг, жемчужный
pearls -- Жемчуг 
pears -- груши (от pear)
peas -- горошек, горох
pebble -- галька, горный хрусталь
peck -- клевать
peculiar -- особенный p-
peculiarities -- Особенности 
pedal -- педаль
pedestrian -- пешеход
peeks -- (он) Посмотрит -s 
peel -- чистить, почистить
peep -- проблеск, выглядывать
peer -- вглядываться, всматриваться p-
peered -- Глядел (*e-) 
peering -- Глядя -ing 
peeves -- Обиды 
peg -- целиться
pen -- ручка
pencil -- карандаш
pending -- во время, в течение
penetrate -- проникать внутрь
penholder -- ручка (для пера)
penknife -- перочинный нож
penny -- пенни
pensioner -- пенсионер
people -- люди
pepper -- перец
per -- в
perceive -- воспринимать, ощущать
perceived -- Воспринятый 
percent -- процент
percy -- Перси 
perfect -- совершенный
perfection -- совершенство
perfectly -- совершенно, вполне
perform -- делать, выполнять
performance -- спектакль
performed -- Выполненный (не от слова fulfil) 
perfume -- духи
perhaps -- возможно, может быть
peril -- опасность
perilous -- опасный, рискованный
period -- период
periodic -- периодический
periods -- Периоды 
permanent -- постоянный
permanently -- постоянно
permissible -- допустимый
permission -- разрешение
permit -- разрешать
permitted -- Разрешенный 
perpendicular -- перпендикулярный
perpetual -- вечный, постоянный p-
perry -- Перри 
persecution -- преследование
perseverance -- настойчивость, упорство
persian -- Персидский 
persistent -- настойчивый
person -- человек, особа, лицо, личность
personal -- личный
personally -- лично
persons -- Люди 
perspective -- перспектива, перспективный
persuade -- убеждать
persuaded -- Убежденный (не convinced) 
perverse -- извращенный, испорченный, превратный
pest -- паразит, вредитель, бич
pet -- любимое домашнее животное, любимец
peter -- Питер 
petition -- петиция, прошение, подавать петицию
petrol -- бензин
pets -- домашние животные (от pet)
phantom -- Фантом 
phase -- фаза, фазировать
philadelphia -- Филадельфия 
philip -- Филип 
philosophical -- философский
philosophy -- философия
phone -- телефон
phosphate -- Фосфат 
photo -- фотография
photograph -- фотография, фотографировать
photographer -- фотограф
photographic -- фотографический
photographing -- фотографирование
photography -- фотография
phrase -- фраза
physical -- физический
physically -- физически
physician -- врач
piano -- пианино
pick -- собирать, подбирать, выбирать
picked -- собранный, выбранный !NEW!
pickles -- маринованные огурцы
picnic -- пикник
picture -- картина, изображение, рисовать, описывать
pictures -- картины (от picture)
picturesque -- живописный
pie -- пирог
piece -- кусок
pier -- пристань, мол, свая, бык
pierce -- пронзать, протыкать, пронизывать, проникать
pierre -- Пирр 
pig -- свинья
pigeon -- голубь
pigeons -- Голуби 
pigs -- Свиньи 
pike -- щука (не lung)
pile -- куча, груда, кипа, пачка
piled -- Сложенный 
pillar -- колонна, столб p-
pillow -- подушка
pills -- таблетки (от pill)
pilot -- пилот
pin -- булавка, значок, прикалывать
pincers -- клещи, щипцы
pinch -- щипать, прищемить, щипок
pinching -- Зажимание -ing 
pine -- сосна
pineapple -- ананас
pink -- розовый
pins -- значки (от pin)
pious -- набожный
pipe -- труба (не tube)
pirate -- пират
pistol -- револьвер, пистолет
pit -- яма, партер (не dig)
pitch -- бросок, уровень, сооружать
pitched -- Переданный 
pitcher -- подающий
piteous -- жалкий, жалобный
pitiful -- жалкий, ничтожный
pity -- жалость
pizza -- пицца
place -- место
placing -- Размещение -ing 
plain -- ясный, очевидный, равнина
plainly -- Явно (не clearly, obvious) 
plains -- Равнины 
plan -- план, планировать
plane -- самолет
planes -- самолеты (от plane)
planet -- планета
planets -- Планеты 
plank -- доска (p-)
planned -- плановый
planning -- планирование
plans -- планы (от plan)
plant -- завод, растение, сажать, внедрять, посадить
plantation -- плантация
plants -- Заводы(растения) 
plaster -- пластырь, штукатурка, штукатурить
plastic -- пластмасса, пластичный
plate -- тарелка
plates -- тарелки (от plate)
platform -- платформа
platforms -- Платформы 
play -- играть, игра (play)
played -- играл (от play)
player -- плейер, игрок
playing -- играющий (от play)
plays -- играет (от play)
playwright -- драматург
pleaded -- Умолял 
pleasant -- приятный
pleasantly -- приятно !NEW!
please -- пожалуйста (только в просьбе)
pleased -- довольный
pleasure -- удовольствие
plenty -- изобилие, избыток, вполне, довольно
plot -- заговор
plough -- пахать
pluck -- ощипывать, выщипывать, рвать (цветы)
plucky -- смелый, отважный (не manful)
plug -- пробка (не cork)
plum -- слива
plumage -- Оперение 
plume -- перо
plump -- пухлый, полный (не swell)
plums -- сливы (от plum)
plunder -- добыча, грабить
plunge -- нырять p-
plunged -- Погруженный 
plural -- множественное число (грам.)
plus -- плюс
pocket -- карман
pockets -- карманы !NEW!
pod -- стручок, лущить
poem -- стихотворение, поэма
poems -- стихи (от poem)
poet -- поэт
poetry -- поэзия, стихи
point -- точка, пункт, суть дела, указывать, показывать
pointed -- острый, многозначительный, совершенно очевидный
pointing -- указывающий (-ing) !NEW!
points -- Пункты(точки) 
poison -- яд, отравлять
poisonous -- ядовитый
poke -- толчок, тыкать
poking -- Тыкание -ing 
polar -- полярный
pole -- полюс
police -- полиция
policeman -- полицейский
policy -- политика
polish -- лак
polite -- любезный, вежливый
politely -- вежливо !NEW!
politeness -- Вежливость 
political -- политический
politics -- политика
poll -- подсчет (голосов), голосование; голосовать, подсчитывать голоса
pollen -- Пыльца 
pompey -- Помпей 
pond -- пруд (не pool)
pony -- пони
pool -- пруд, бассейн
poor -- бедный
poorly -- плохо, неважно
pop -- поп, популярный
popped -- Совавший 
popular -- популярный
population -- население, жители
porcelain -- фарфор
porch -- крыльцо, (амер.) веранда, терраса
pore -- пора
pork -- свинина
porridge -- каша
port -- порт
portable -- переносной
ported -- Перенесенный, транспортированный 
porter -- носильщик
portion -- часть, доля (не section, segment)
portions -- Части *o- 
portrait -- портрет
ports -- порты (от port)
pose -- поза, ставить (вопрос, задачу)
position -- положение
positive -- положительный
positively -- Положительно 
possess -- обладать
possessed -- хладнокровный, владеющий собой, одержимый !NEW!
possession -- владение
possibility -- возможность p-
possible -- возможный
possibly -- возможно
post -- почта, после
postage -- почтовые расходы
postal -- почтовый
postcard -- почтовая открытка
poster -- плакат
postman -- почтальон
postpone -- отсрочивать
pot -- котелок
potato -- картофель
potatoes -- картофель (от potato)
potential -- потенциал, потенциальный
potentially -- потенциально
potion -- Микстура 
potions -- Микстуры 
pots -- Горшки 
potter -- Гончар 
poultry -- домашняя птица
pounce -- налетать
pound -- фунт, фунт стерлингов
pounds -- фунты (от pound)
pour -- лить
poured -- Лил 
poverty -- бедность
powder -- пудра
power -- держава, энергия, сила, мощность (не force)
powerful -- могущественный, сильный
powerfully -- сильно (p-)
powers -- Полномочия 
practicable -- осуществимый
practical -- практический
practically -- практический
practice -- практика
practiced -- применял, практиковал (от practice)
practise -- заниматься
praise -- хвалить
praised -- хвалил (от praise)
prank -- проделка, разряжаться
pray -- молить
prayer -- молитва, просьба
prayers -- Просьбы(просители) 
pre -- Пред 
preach -- проповедовать
precarious -- ненадежный *r-
precaution -- предосторожность
preceding -- предшествующий -ing
precious -- драгоценный
precise -- точный
precisely -- точно
precision -- точность
predator -- хищник
predicate -- сказуемое (грам.)
prediction -- предсказание
prefer -- предпочитать
preference -- предпочтение
preferred -- предпочитал (от prefer)
prefix -- (грам.) префикс, приставка
pregnant -- беременная, чреватый (последствиями и т. п.)
preliminary -- предварительный (p- не preparatory)
preparation -- приготовление
preparations -- Приготовления 
prepare -- готовить(ся)
prepared -- готовился, готовый (от prepare)
preparing -- Подготовка 
preponderant -- преобладающий
prescription -- рецепт
presence -- присутствие
present -- настоящее время, подарок, настоящий, присутствующий
presented -- Представленный 
presentiment -- предчувствие
presently -- вскоре
presents -- подарки (от present)
preservation -- сохранение, сохранность, консервирование
preserve -- сохранять
preserved -- Сохраненный 
president -- президент
press -- (по)гладить, сжимать, нажимать, печать, пресса
pressed -- поглаженный, сжатый (от press)
pressing -- срочный, настойчивый
pressure -- давление
presumably -- возможно
presume -- предполагать (не suppose)
pretence -- притворство
pretend -- притворяться, делать вид
pretty -- хороший, значительный
prevail -- торжествовать (не triumph)
prevailed -- Преобладал 
prevent -- предотвращать, препятствовать
prevented -- Предотвращенный 
preview -- предварительный просмотр
previous -- предшествующий
previously -- предварительно
prey -- жертва
price -- цена
priceless -- бесценный
prick -- (у)колоть(ся)
prickly -- колючий
pride -- гордость
priest -- священник
primary -- первичный
prime -- главный (не chief, major)
prince -- принц
princess -- Принцесса 
principal -- главный, основной, важнейший p-
principle -- принцип
principles -- Принципы 
print -- печатать, напечатать
printing -- печатание
prior -- прежний
priority -- приоритет
prison -- тюрьма
prisoner -- заключенный
prisoners -- Заключенные 
privacy -- уединенность
private -- частный
privately -- конфиденциально
privilege -- привилегия
privileged -- привилегированный
prize -- приз
probability -- вероятность
probable -- вероятный (-e)
probably -- вероятно (-y)
problem -- проблема
problems -- проблемы (от problem)
procedure -- процедура
procedures -- Процедуры 
proceed -- продолжать
proceeding -- поступок, мероприятие, протоколы, записки
proceedings -- труды, записки
process -- процесс
processes -- Процессы 
procession -- процессия
proclamation -- воззвание, прокламация
procurator -- Поверенный 
procure -- доставать, добывать
procured -- Обеспеченный (не provided, supplied) 
produce -- производить
produced -- производил (от produce)
producer -- режиссер
produces -- Производит 
producing -- Создание -ing 
product -- продукция
production -- производство
productions -- Производство 
profession -- профессия
professional -- профессиональный
professor -- профессор
profit -- прибыль
profitable -- прибыльный, выгодный, полезный
profound -- глубокий
program -- программа
programme -- программа
programmes -- программы, передачи (от programme)
programming -- программирование
programs -- программы (от program)
progress -- прогресс, успех
prohibited -- запрещенный (от prohibit)
project -- проект
projects -- проекты (от project)
prolong -- продлевать
prominent -- выдающийся
promise -- обещать
promised -- обещал (от promise)
promising -- многообещающий -ing
promotion -- поощрение
prompt -- проворный, быстрый
promptly -- быстро
prone -- склонный
pronounce -- произносить
pronounced -- Явный 
pronunciation -- произношение
proof -- доказательство
prop -- подпорка, опора, подпирать
proper -- правильный
properly -- правильно, должным образом
property -- собственность, имущество
prophet -- пророк
proportion -- пропорция
proposal -- предложение
propose -- предлагать (не suggest)
proposed -- Предложенный 
proposition -- предложение
prospect -- перспектива
prospects -- Перспективы 
prosper -- процветать
prosperity -- процветание, благосостояние
prosperous -- преуспевающий
protect -- защищать, предохранять
protected -- Защищенный 
protection -- защита
protective -- защитный
protest -- протестовать, протест
protocol -- Протокол 
proud -- гордый
proudly -- гордо
prove -- доказывать, доказать
proved -- Доказанный 
provide -- обеспечивать
provided -- при условии
providence -- провидение
provision -- заготовка
provisions -- Условия (не conditions) 
provocative -- вызывающий, провокационный
provoke -- вызывать, провоцировать
prudent -- осторожный, благоразумный (не careful)
pry -- любопытный человек
psychology -- психология
pub -- трактир, гостиница
public -- общественный (не social)
publication -- публикация
publicity -- гласность
publicly -- публично
publish -- публиковать
published -- публиковал, опубликованный (от publish)
pudding -- пудинг
puddle -- лужица, смущать, барахтаться в воде
puff -- дымок, дуновение (ветра); дымить, попыхивать p-
pug -- мопс, моська, курносый нос
pull -- тянуть, тащить
pullover -- пуловер
pulp -- мякоть, бумажная масса
pulse -- пульс, пульсировать
pump -- насос
pumpkin -- тыква
pun -- каламбур
punch -- пробивать (отверстия), ударять кулаком, удар кулаком, пунш
punctual -- пунктуальный, аккуратный
punish -- наказывать, наказать
punishment -- наказание
pupil -- ученик
purchase -- покупка, покупать
purchaser -- покупатель
pure -- чистый
purge -- чистка (не clean)
purple -- лиловый, малиновый
purpose -- цель
purposes -- Цели 
purse -- кошелек
pursue -- преследование
pursued -- Преследуемый 
pursuing -- Преследование -ing 
pursuit -- преследование, погоня, занятие
push -- толкать
pushed -- вытолкнутый !NEW!
pushing -- Подталкивание(выдвижение) -ing 
put -- класть, размещать
puzzle -- приводить в затруднение, загадка
puzzled -- озадачен, поставлен в тупик (от puzzle)
pyjamas -- пижама
pyramid -- пирамида
qualify -- квалифицировать
qualities -- Качества 
quality -- качество
quantity -- количество
quarrel -- ссора, ссориться
quarter -- четверть, квартал
quarx‡ -- d‡z ноломня, карьер
quay -- набережная
Queen -- королева
queer -- странный, эксцентричный
quench -- утолять (жажду)
query -- вопрос, спрашивать
quest -- поиски
question -- вопрос
questionable -- сомнительный
questions -- вопросы (от question)
quick -- быстрый
quicker -- быстрее (от quick)
quickly -- быстро
quiet -- тихий, спокойный
quietly -- тихо, спокойно
quill -- катушка q-
quit -- прекращать
quite -- вполне, совсем
quiver -- дрожать, трепетать; дрожь; трепет
quivering -- дрожащий -ing (не от слов tremble, shiver)
quiz -- опрос, проверять знания
quotation -- цитата
quote -- цитировать
quoted -- Указанный 
rabbit -- кролик
rabbits -- Кролики 
race -- раса, гонка
races -- Гонки(расы) 
racing -- гоночный (-ing)
rack -- полка для багажа над сиденьем
racket -- ракетка
radiant -- лучистый, сияющий, лучезарный
radiator -- радиатор
radio -- радио
radioactive -- радиоактивный
raft -- плот !NEW!
rag -- тряпка, лохмотья
rage -- гнев, ярость (не fury)
ragged -- истрепанный, оборванный, рваный r-
raid -- нападение
rail -- рельс
railing -- ограда, перила -ing
railroad -- железная дорога
railway -- железная дорога
rain -- дождь
rainbow -- радуга
raincoat -- плащ
rainy -- дождливый
raise -- поднимать, возвышать
raised -- рельефный
raising -- воспитание
rake -- грабли, сгребать
ralph -- Ральф 
ram -- баран
ran -- бежал, убежавший (от run)
ranch -- ранчо
random -- случайный, беспорядочный
rang -- звонил !NEW!
range -- ряд, линия, диапазон
ranger -- скиталец
rank -- ряд, чин, выстраивать
ransom -- выкуп, выкупать
rapid -- быстрый r-
rapidly -- быстро
rapt -- восхищенный, похищенный
rapture -- восторг, восхищение (не delight)
rare -- редкий, недожаренный
rarely -- редко
rash -- стремительный, поспешный, опрометчивый; сыпь
raspberry -- малина
rat -- крыса
rate -- тариф, расценка, степень, оценивать
rates -- стоит (от rate)
rather -- скорее, лучше
rational -- рациональный
rattle -- трещать, греметь, грохотать; треск, грохот, погремушка, трещотка
raw -- сырой
ray -- луч
raymond -- Раймонд 
razor -- бритва
reach -- достигать
react -- реагировать
reaction -- реакция
read -- читать
reader -- читатель
readily -- охотно r-
readiness -- находчивость
reading -- чтение
ready -- готовый
real -- реальный, настоящий
realistic -- реалистический
reality -- действительность
realize -- представлять себе, реализовать
really -- на самом деле, действительно r-
realm -- Царство 
rear -- задняя часть
reared -- Воздвигнутый 
reason -- причина, довод, разум, рассудок
reasonable -- разумный r-
reasonably -- разумно
reasoning -- Рассуждение -ing 
reassure -- заверять
rebellion -- восстание, бунт
rebellious -- мятежный, бунтарский
rebuff -- неудача, отпор
recall -- припомнить, отозвать
recalled -- Отозванный 
receipt -- квитанция
receive -- получать
receiver -- приемник
receiving -- Получение -ing 
recent -- недавний
recently -- недавно
reception -- прием
recipe -- рецепт
recite -- рассказывать, перечислять
reckless -- отчаянный, безрассудный, опрометчивый
reckon -- считать
recognition -- узнавание
recognize -- узнавать, узнать
recoil -- отдача, отпрянуть, испытывать ужас
recollect -- припоминать
recollection -- воспоминание (не reminiscence)
recommend -- рекомендовать
recommended -- Рекомендуемый 
reconnaissance -- разведка
reconstruct -- реконструировать
record -- запись, пластинка, отчет, рекорд
recorded -- Зарегистрированный 
recorder -- записывающее устройство
recording -- регистрация -ing
records -- пластинки (от record)
recover -- выздоравливать
recovery -- выздоровление
recreate -- Заново создавать, воскрешать, освежиться 
recruit -- вербовать, нанимать
red -- красный
redeem -- выкупать, искупать, выполнять (обещание и т.п.)
reduce -- уменьшать, понижать, сокращать
reduced -- Уменьшенный (не lowered) 
reducing -- понижает (от reduce)
reduction -- снижение
reed -- тростник, камыш (не cane)
reeds -- Тростники (не canes) 
reel -- катушка, барабан (тех.); пошатываться, спотыкаться (не coil)
refer -- отсылать, ссылаться r-
reference -- рекомендация, ссылка, справка
references -- рекомендации (от reference)
referred -- Отнесенный 
refers -- Обращается(относится) 
reflect -- отражать, размышлять
reflected -- Отраженный 
reflecting -- отражающий
reflection -- отражение, размышление
reflections -- Отражения 
reform -- улучшать, реформа
refrain -- удерживать, сдерживать, воздерживаться
refresh -- освежать
refreshment -- подкрепление
refreshments -- закуски и напитки
refrigerator -- холодильник
refuge -- убежище
refusal -- отказ
refuse -- отказывать
refused -- отказался (от refuse)
regain -- достичь
regard -- взгляд, внимание, смотреть, считать *e-
regarded -- Расцененный 
regarding -- Относительно *e-ing 
regardless -- независимо от
regards -- привет, поклон
regiment -- полк
region -- район, область
regions -- Области(регионы) 
register -- (за)регистрировать
registered -- зарегистрированный, заказной (от register)
registration -- регистрация
registry -- Регистрация(регистратура) 
regret -- жалеть
regular -- регулярный
regularly -- регулярно
regulate -- регулировать, приспосабливать
rehearsal -- репетиция
reign -- царить, господствовать
reins -- поводья, вожжи
reject -- отвергать
rejection -- отказ
rejoice -- радовать(ся)
rejoined -- Воссоединенный 
relate -- относиться, связывать
relation -- отношение, связь
relations -- отношения, связи (от relation)
relationship -- родственные связи
relative -- родственник
relax -- ослаблять
relay -- смена (не shift)
release -- освобождение, освобождать
released -- освобожденный
reliable -- надежный
reliance -- доверие, уверенность
relic -- след, остаток, пережиток
relief -- облегчение, утешение
relieve -- облегчать
relieved -- избавленный !NEW!
religion -- религия
religious -- религиозный
relish -- вкус, привкус, смаковать
reluctant -- делающий что-л. с большой неохотой, по принуждению; сопротивляющийся
reluctantly -- неохотно (не unwillingly)
rely -- полагаться, доверять
remain -- оставаться
remainder -- остаток
remained -- оставшийся !NEW!
remains -- Остается 
remark -- замечать, замечание (не notice)
remarkable -- замечательный  r-
remarkably -- замечательно -y
remarks -- Замечания *e- 
remedy -- лекарство
remember -- помнить
remembered -- помнил (от remember)
remembrance -- воспоминание, память
remind -- напоминать, напомнить
remiss -- небрежный, вялый
remote -- дистанционный, удаленный
removal -- перемещение r-
remove -- удалять, убирать, перемещать
removed -- удалённый !NEW!
renamed -- Переименованный 
render -- отдавать
rendered -- Предоставленный (не supplied) 
renew -- обновлять
renewal -- обновление (не refresh)
renewed -- Возобновленный (не resumed) 
rent -- брать напрокат, снимать жилье, квартирная плата
renting -- аренда, снятие комнаты -ing
reopen -- возобновлять (не resume)
repair -- ремонтировать, ремонт, починка
repaired -- ремонтировал, отремонтированный (от repair)
repay -- оплачивать
repeat -- твердить, говорить наизусть
repeatedly -- неоднократно
repel -- отталкивать, внушать отвращение
repent -- раскаиваться
repentance -- раскаяние
repetition -- повторение
replace -- заменять, замещать
replacement -- замещение
reply -- отвечать, ответ
report -- доклад, сообщать, рассказывать
reporter -- репортер
reporting -- Сообщение -ing 
repose -- полагаться, доверяться
represent -- изображать, представлять
representation -- изображение
representative -- представитель
reproach -- упрек, осуждение, упрекать
reproduce -- воспроизводить
reproof -- порицание, выговор (не reprove)
reprove -- порицать, делать выговор
reptile -- пресмыкающееся
republic -- республика
repulse -- отражать (врага), отвергать, отталкивать, отпор
reputation -- репутация
request -- просьба
requested -- Требуемый 
requests -- просьбы (от request)
require -- требовать
required -- потребованный (не demanded) !NEW!
requirement -- требование
requires -- Требует 
rescue -- спасение, спасать
research -- исследование
resemblance -- сходство
resemble -- походить
resent -- обижаться, возмущаться *e-
resentment -- возмущение
reservation -- предварительный заказ, резервирование
reserve -- заказывать
reserved -- заказал, заказанный (от reserve)
reservoir -- резервуар
reside -- жить, проживать (r-)
residence -- резиденция
resident -- постоянный житель
residential -- жилой
resign -- уходить в отставку
resignation -- отставка, заявление об отставке, покорность, смирение
resigned -- покорный, безропотный **s-
resist -- сопротивляться
resistance -- сопротивление
resolution -- решение, резолюция, решимость
resolve -- решать
resolved -- решился, принял решение !NEW!
resort -- обращение, обращаться
resource -- ресурс, средство
resources -- Ресурсы 
respect -- уважение, уважать
respectable -- почтенный, порядочный
respected -- Уважаемый 
respectful -- почтительный
respective -- соответственный
respectively -- соответственно
respond -- отвечать
responded -- Отвечал 
response -- реакция, ответ (не reaction)
responsibility -- ответственность
responsible -- ответственный
responsive -- отзывчивый
rest -- остальное, остальные, остаток
restart -- Переначало 
restaurant -- ресторан
rested -- отдыхал (от rest)
restless -- беспокойный, неугомонный
restoration -- реставрация
restore -- восстанавливать
restrain -- сдерживать
restrict -- ограничивать
restriction -- ограничение
restrictions -- ограничения (от restriction)
result -- результат
resume -- итог, сводка, возобновлять, подводить итог
resumed -- Возобновленный 
retain -- удерживать
retained -- Сохраненный 
retire -- уходить, удаляться, оставлять должность
retired -- отставной
retirement -- отставка
retiring -- скромный r-
retorted -- Парировал 
retreat -- отступать, отступление, убежище
return -- вернуть(ся), возвращение
rev -- оборот
reveal -- обнаруживать r-
revealed -- Показанный 
revenge -- месть, мстить
revenue -- доход
reverence -- почтение, благоговение (не deference)
reverse -- противоположное, обратное r-
reversion -- Возвращение (не returning) 
revert -- возвращаться (не return)
review -- обзор, смотр (не survey)
revision -- пересмотр
revive -- оживать
revolution -- революция
revolutionary -- революционный, революционер
revolve -- вращаться
reward -- награда
rex -- Рекс 
rhinoceros -- носорог
rhyme -- рифма, рифмовать
rhythm -- ритм
rib -- ребро (не hip)
ribbon -- лента
rice -- рис
rich -- богатый
richard -- Ричард 
riches -- богатство, изобилие
rick -- стог, складывать в стог
rid -- освобождать
riddle -- загадка (не enigma)
ride -- езда, прогулка (не пешая), ехать (на поезде, велосипеде и т.п.)
rider -- наездник, всадник
ridge -- горный хребет, гребень (горы и т.п.) (не crest)
ridiculous -- нелепый, смехотворный, смешной
riding -- еду (от ride), верховая езда
rifle -- ружье, винтовка
rift -- трещина, щель, ущелье
rig -- снаряжение, экипаж
right -- правильный, правый
rightly -- справедливо r-
rigid -- жесткий (не tough)
rigorous -- суровый (не severely) r-
rim -- ободок
rind -- кожура, кора, корка (не pool)
ring -- кольцо, звон, звонок, звенеть, звонить
rings -- Кольца 
rip -- рвать
ripe -- спелый
ripen -- зреть, созревать
rise -- подниматься, восходить, подъем, повышение
risen -- Повышенный 
rising -- возрастающий
risk -- риск, рисковать
rival -- соперник, соперничающий
river -- река
rivers -- Реки 
rivulet -- ручеек, речушка
road -- дорога
roam -- бродить, скитаться
roar -- реветь, орать, хохотать
roast -- жареный
rob -- грабить, обворовывать
robber -- грабитель
robbery -- грабеж
robes -- Одежды 
robin -- малиновка
robot -- Робот 
robots -- Роботы 
rochester -- Рочестер 
rock -- скала
rocky -- скалистый !NEW!
rod -- прут, жезл, удочка
rode -- ехать (2 форма) !NEW!
rogue -- плут, мошенник (не valet)
role -- роль
roll -- вращение, список, булочка, вращаться, катить(ся)
rollback -- Обратная перемотка 
roller -- ролик
roman -- Католик 
romance -- романтика, романтическая история
romantic -- романтичный
rome -- Рим 
ron -- Рон 
roof -- крыша
room -- комната
rooms -- комнаты (от room)
root -- корень
rope -- канат
ropes -- Веревки 
rose -- роза
rosy -- розовый, румяный (не pink)
rot -- вздор, нелепость
rotten -- гнилой, отвратительный
rouge -- румяна, губная помада
rough -- грубый
round -- круг, цикл, полный, круглый
rounded -- Округленный 
rouse -- будить, побуждать (первая буква НЕ a)
roused -- Разбуженный (не awoken) 
route -- маршрут, путь, направлять
rover -- скиталец, странник
row -- грести
rowing -- гребля, выговор
royal -- королевский (не queen)
rpm -- Оборот в минуту 
rub -- тереть, стирать, трение
rubber -- резина
rubbing -- Протирка (не от слова wash) -ing 
rubbish -- ерунда, мусор (не garbage)
ruby -- рубиновый
rudder -- руль
rude -- грубый, резкий, невоспитанный
rudimentary -- Элементарный(рудиментарный) 
rueful -- унылый
ruffle -- ерошить (волосы), рябить (воду)
rug -- ковер
ruin -- гибель
ruins -- Руины 
rule -- правило, принцип, норма, управлять, решать
ruler -- линейка, правитель
rules -- правила (от rule)
ruling -- правящий (-ing)
rum -- ром, странный
rumour -- слух, молва
run -- бегать, двигаться, бег, движение, направление
rung -- ступенька, спица колеса
runner -- бегун
runners -- Бегуны 
running -- пробег, бегущий
runs -- Пробега 
ruse -- уловка, хитрость
rush -- устремляться, бросаться, мчаться
russell -- Русселл 
Russia -- Россия
Russian -- русский
rust -- ржавчина, ржаветь
rustle -- шелест, шорох, шелестеть, шуршать r-
rusty -- заржавленный, порыжевший
rut -- колея, привычка
ruth -- жалость, сочувствие, участие, сострадание *u- !NEW!
rye -- рожь
sabotage -- саботаж, саботировать
sack -- мешок
sacred -- священный
sacrifice -- жертва
sad -- печальный
saddle -- седло, седлать
sadly -- печально
sadness -- печаль
safe -- сейф, безопасный, надежный
safeguard -- гарантия s-
safety -- безопасность
said -- сказал (от say)
sail -- парус, плыть
sailor -- матрос
saint -- святой
sake -- ради, для
salad -- салат, винегрет
salary -- оклад
sale -- распродажа
sally -- поездка, прогулка
salmon -- лосось
salt -- соль, соленый, солить
salts -- Соли 
salute -- приветствовать, салют
salvage -- спасать !NEW!
salvation -- спасение
sam -- Сэм 
same -- тот же, так(ой) же
sample -- образец
sanction -- санкция
sand -- песок
sandwich -- бутерброд
sandwiches -- Бутерброды 
sandy -- песчаный
sang -- пел, спел (от sing)
sanguine -- живой, жизнерадостный, румяный (не spirited)
sank -- тонул !NEW!
santos -- Сантус 
sap -- сок (растений); подрывать
sat -- сидел (от sit)
satisfaction -- удовлетворение
satisfactorily -- удовлетворительно
satisfactory -- удовлетворительный
satisfy -- удовлетворять
Saturday -- суббота
sauce -- соус, приправа, поливать соусом
saucepan -- кастрюля
saucer -- блюдце
sausage -- колбаса, сосиска
savage -- дикарь
savagely -- свирепо, дико s-
save -- спасать, хранить, экономить
saved -- спасал (от save)
saving -- экономия -ing
saviour -- спаситель
savoury -- вкусный, пикантный, приятный
saw -- видел, смотрел (от see)
say -- сказать, говорить
saying -- говорящий (от say)
scaffold -- эшафот
scale -- масштаб
scan -- Просмотр 
scar -- шрам, рубец
scarce -- редкий, едва (не barely, merely, hardly)
scarcely -- едва sc-
scare -- испуг
scared -- напуганный !NEW!
scarf -- шарф
scarlet -- алый
scatter -- разбрасывать, рассеивать
scattered -- Разбросанный, раскиданный 
scene -- действие, картина, сцена
scenery -- декорации
scenes -- сцены, эпизоды (от scene)
scent -- запах, духи, след, почуять, нюхать (не smell)
schedule -- расписание, таблица, планировать
scheme -- проект
schemes -- Схемы 
scholar -- ученый
scholars -- Ученые 
school -- школа, обучать
schoolboy -- школьник
schoolmaster -- учитель
science -- наука, умение
scientific -- научный
scientist -- ученый
scissors -- ножницы
scold -- бранить, ругать
scope -- пределы
score -- счет, отметка, выигрывать
scorn -- презрение, презирать
scornful -- презрительный
scotch -- надрез, метка, уничтожать
scoundrel -- негодяй
scout -- разведчик
scowled -- Хмурился (не от слова frown) 
scramble -- карабкаться
scrambled -- Боролся(взбирался) 
scrap -- клочок, кусочек, отрывок
scratch -- царапать
scratched -- Поцарапанный 
scream -- вскрикнуть, зареветь, визг, вопль (не shriek)
screen -- экран, перегородка, прикрывать
screw -- привинчивать, завинчивать, принуждать, винт
scribble -- каракули, писать неразборчиво
script -- сценарий
scripts -- Подлинники(сценарии) 
scrub -- тереть
scuba -- Акваланг 
scuffle -- драка, потасовка
sculpture -- скульптура
sea -- море, океан
seal -- печать, запечатывать
seam -- шов
seaman -- моряк *e-
search -- искать, обыскивать, поиск, обыск
seasick -- страдающий морской болезнью
seaside -- морское побережье
season -- время года, сезон, созревать
seat -- место, сиденье, сажать, усаживать
seated -- Помещенный 
seats -- места (от seat)
seaweed -- Морская водоросль 
second -- второй, помощник, секунда
secondary -- средний, второстепенный
secondly -- Во-вторых 
secret -- секрет
secretary -- секретарь
secretion -- Укрывательство 
section -- отделение, делить на части s-
secure -- страховать s-
security -- безопасность
sedate -- спокойный
see -- (у)видеть, встретиться
seed -- семя, семена
seedling -- Рассада 
seedlings -- Рассада 
seeds -- Семена 
seeing -- видящий (от see)
seek -- искать (не find)
seem -- казаться
seeming -- видимый, мнимый (не visible)
seen -- увиденный (от see)
segment -- Доля (не portion, section) 
seize -- хватать -e
seized -- захваченный !NEW!
seldom -- редко
select -- выбирать, сортировать, избранный
selected -- Отобранный 
selection -- отбор
self -- сам, себя
selfish -- эгоистичный
sell -- продавать, торговать
seller -- торговец (не trader)
selling -- продажа
semi -- Полу 
semicolon -- точка с запятой
send -- отправлять, посылать
senior -- старший s-
sensation -- чувство s-
sense -- чувство, здравый смысл, чувствовать
senses -- Чувства 
sensible -- разумный
sensitive -- чувствительный
sensitiveness -- Чувствительность 
sent -- отправил, послал, отправленный, посланный (от send)
sentence -- предложение s-
sentiment -- настроение
sentiments -- Чувства 
separate -- отдельный
separated -- Отделенный 
separation -- отделение, разделение
September -- сентябрь
sequel -- продолжение, результат
sequence -- последовательность
sergeant -- сержант
series -- серия
serious -- серьезный
seriously -- серьезно
sermon -- проповедь
serpent -- змея, змей
servant -- слуга
serve -- служить, обслуживать, подавать
server -- Прислуга 
servers -- Прислуга 
service -- сервис, обслуживание
services -- Услуги 
serving -- порция s-ing
session -- заседание (не sitting)
set -- класть, ставить, помещать, комплект
sets -- декорации (от set)
setting -- окружение -ing
settle -- поселять, устраивать, оплачивать
settlement -- поселение
seven -- семь
seventeen -- семнадцать
seventh -- седьмой
seventy -- семьдесят
several -- несколько
severe -- суровый, жестокий (s-)
severely -- строго (*e-)
sew -- шить
sex -- пол
sexual -- сексуальный
shabby -- потрепанный, поношенный
shade -- оттенок, тень, затенять
shades -- оттенки (от shade)
shadow -- тень, покров, заслонять
shady -- тенистый, сомнительный, темный
shaft -- древко, ручка, рукоятка, вал (тех.)
shaggy -- лохматый
shake -- пожать (руки), дрожать, трясти
shall -- модальный глагол долженствования
shallow -- мелкий, поверхностный, (от)мель
sham -- притворство, обман
shame -- стыд, стыдить, стыдиться
shape -- форма
shaped -- Форменный 
shapeless -- бесформенный
share -- разделять, доля, часть
shark -- акула
sharp -- точно, ровно, резкий, крутой, плутовать
sharpen -- точить
sharply -- резко
shave -- (по)бриться, бритье, подстригать
shaving -- бритье (-ing)
shawl -- платок, шаль
she -- она
shed -- сарай
sheep -- овца, овцы
sheer -- настоящий
sheet -- простыня, лист, пласт
shelf -- полка
shell -- раковина, скорлупа
shells -- Снаряды(раковины) 
shelter -- приют, убежище
shelves -- Полки 
shepherd -- пастух
sheriff -- Шериф 
shield -- щит
shift -- смена, перемещать
shilling -- шиллинг
shindy -- шум, скандал
shine -- сиять, светить
shiny -- Солнечный (не sunny) 
ship -- корабль, пароход, грузить, перевозить
shipwreck -- кораблекрушение
shirt -- рубашка, блузка
shiver -- дрожать, дрожь, трепет s-
shock -- удар s-
shocking -- потрясающий
shoe -- ботинок, туфля
shoemaker -- сапожник
shoes -- обувь, туфли (от shoe)
shone -- сиял, блестел !NEW!
shook -- трёс !NEW!
shoot -- стрелять, застрелить
shooting -- Стрельба 
shop -- магазин, мастерская
shopping -- делать покупки
shops -- магазины (от shop)
shore -- берег
short -- короткий, слабый, внезапно
shorter -- короче (от short)
shortest -- ближайший, самый короткий (от short)
shorthand -- стенография
shortly -- вскоре
shorts -- трусики
shot -- попытка, выстрел
should -- следует (от shall)
shoulder -- плечо, толкать
shout -- кричать, крик
shove -- толкать(ся), пихать, толчок
shoved -- Пихал (не popped) 
shovel -- лопата
show -- показывать, демонстрировать, выставка, зрелище
showed -- показал (от show)
shower -- душ, ливень
shown -- Показанным 
shrewd -- проницательный, ловкий (делец)
shriek -- кричать, вскрикнуть, пронзительный крик (не scream)
shrill -- резкий, пронзительный
shrimp -- креветка
shrine -- сохранять
shrink -- отпрянуть, садиться (о материи)
shrub -- куст
shrubs -- кусты (не bushes) !NEW!
shrug -- пожимать плечами
shrugged -- Пожал 
shudder -- дрожь, вздрагивать; содрогаться
shuffle -- шаркать
shut -- закрывать, запирать, замолчать
shutdown -- Закрытие 
shutter -- ставень, затвор
shy -- застенчивый, робкий
sibilant -- шипящий звук
sick -- больной
sickly -- болезненный, нездоровый, тошнотворный
sickness -- болезнь, заболевание
side -- сторона, бок, край
sidenote -- Заметка на полях 
sideways -- боком, косвенно
sierra -- горная цепь
sieve -- решето, сито
sigh -- вздыхать, вздох
sight -- зрелище, вид, заметить, разглядеть
sights -- достопримечательности
sign -- подписывать(ся), знак, вывеска
signal -- сигнал, сигнализировать
signature -- подпись
signed -- Подписанный 
significance -- значение
significant -- значительный s-
significantly -- значительно
signify -- значить, означать, иметь значение
signs -- знаки, вывески (от sign)
silas -- Силас 
silence -- молчание, тишина
silent -- молчаливый, бесшумный
silk -- шелковый, шелк
sill -- подоконник
silly -- глупый
silver -- серебро, серебряный
similar -- похожий
similarly -- также
simple -- простой, однозначный
simplicity -- Простота (-t*) 
simply -- просто, абсолютно
simulator -- симулянт
simultaneous -- одновременный
simultaneously -- одновременно
sin -- грех, (со)грешить
since -- с тех пор как
sincere -- искренний (-e)
sincerely -- Искренне (не earnestly) 
sing -- пение, петь
singing -- Пение 
single -- один, одинокий s-
singular -- странный, необычный, единственное число (грам.)
sinister -- зловещий s-
sink -- тонуть
sinking -- погружение
sir -- сэр
sire -- Родитель 
sister -- сестра
sit -- сидеть, заседать, годиться
site -- местоположение
sitting -- заседание
situated -- расположенный
situation -- положение
six -- шесть
sixpence -- сумма в 6 пенсов
sixteen -- шестнадцать
sixth -- шестой
sixty -- шестьдесят
size -- размер, величина, измерить
skeleton -- скелет, остов
sketch -- эскиз
ski -- ходить на лыжах
skiing -- катание на лыжах
skilful -- квалифицированный, умелый, ловкий
skill -- мастерство
skilled -- квалифицированный, умелый, ловкий
skim -- просматривать, скользить
skin -- кожа
skinner -- погонщик !NEW!
skinny -- худой, тощий, кожа да кости !NEW!
skins -- Кожи 
skip -- пропускать (часто бывает при устано !NEW!
skirt -- юбка
skull -- череп
sky -- небо
slab -- плита
slack -- ленивый, слабый, ослаблять, утихать
slacken -- ослаблять, ослабевать
slam -- хлопать, хлопнуть -m
slammed -- Хлопнул 
slang -- жаргон
slant -- наклонный
slap -- хлопать
slaughter -- резня, убой, резать, убивать
slave -- раб
slaves -- рабы !NEW!
sledge -- ехать на санях
sleek -- гладкий, приглаживать
sleep -- спать, сон
sleepy -- сонный, сонливый (не asleep)
sleeve -- рукав
sleigh -- сани, салазки
slender -- тонкий, стройный
slept -- спал (от sleep)
slice -- ломоть
slid -- скользить (не slip) !NEW!
slide -- скользить
slight -- проявление пренебрежительного равнодушия;неуважение, пренебрежение, игнорирование
slightest -- малейший (от slight)
slightly -- слегка
slim -- стройный
slime -- слизь, липкая грязь, ил; комбинация (белье)
slip -- скольжение, скользить -p
slippery -- скользкий
slogan -- лозунг
slope -- склон, наклон, гора для катания
slow -- медленный, замедлять
slower -- медленнее (от slow)
slowly -- медленно
slumber -- сон, дремота, дремать
sly -- хитрый
smack -- рыболовное судно
small -- маленький, тонкий, скромный
smallest -- Самый маленький 
smart -- изящный (не grace)
smartly -- ловко
smash -- бить, разбивать
smashed -- Разбитый 
smear -- масляное пятно, пачкать, мазать
smell -- запах
smelt -- плавить
smile -- улыбаться, улыбка
smiles -- Улыбки 
smoke -- курить, курение, дым
smoked -- курил (от smoke)
smoker -- курящий, вагон для курящих
smoking -- курение
smooth -- гладкий
smoothly -- гладко !NEW!
snack -- закуска, часть, доля
snake -- змея
snap -- щелкать (snap)
snapped -- Сфотографированный 
snare -- ловушка
snarl -- рычать, огрызаться; рычание, ворчание
snatch -- схватить
sneer -- усмешка, насмешка; насмехаться, издеваться
sneeze -- чихать, чиханье
sniff -- фыркать, сопеть
sniffed -- Фыркал 
sniffing -- Фыркающий 
snigger -- хихикать, хихиканье s-
snoop -- подсматривать !NEW!
snore -- храпеть, храп
snorted -- Фыркал (не от слова sniff) 
snow -- снег, падать (о снеге)
snowman -- снежная баба
snuff -- Нюхнуть 
so -- так, таким образом, итак
soap -- мыло
sob -- рыдание
sobbing -- Рыдание 
sober -- трезвый
sociable -- общительный
social -- общественный
society -- общество
sock -- носок
socket -- патрон (эл. лампочки), глазная впадина
socks -- носки (от sock)
sofa -- диван
soft -- мягкий, тихий (не calm)
soften -- смягчать(ся)
softened -- Смягченный 
softly -- мягко, нежно
software -- Программное обеспечение 
soil -- почва
sold -- продавал, проданный (от sell)
solder -- паять
soldier -- солдат
sole -- подошва, подметка; ставить подметку
solely -- Исключительно 
solemn -- серьезный, торжественный
solemnly -- торжественно
solid -- твердый
solitary -- одинокий, уединенный
solitude -- одиночество, уединение
solution -- решение, разрешение
solve -- (раз)решать
some -- немного, несколько
somehow -- как-нибудь, так или иначе !NEW!
sometimes -- иногда
somewhat -- что-то, отчасти !NEW!
somewhere -- где-нибудь !NEW!
son -- сын
song -- песня
sons -- сыновья (от son)
soon -- скоро, рано
sooner -- охотнее (от soon)
soot -- сажа
soothe -- успокаивать, утешать, облегчать (боль)
soothing -- Успокаивающий -ing 
sophia -- София 
sophisticated -- сложный
sore -- больной, воспаленный (не sick)
sorrow -- печаль
sorrowful -- печальный, скорбный
sorry -- сожалеющий, печальный, унылый
sort -- сорт, род, вид, сортировать
sorting -- Сортировка 
sought -- Искавший(разысканный) 
soul -- душа, воплощение
souls -- Души 
sound -- звук, звучать, играть
sounding -- звучащий
sounds -- звучит (от sound)
soup -- суп
sour -- раздражительный, сердитый, кислый
source -- источник
South -- юг
southern -- южный
souvenir -- сувенир
souvenirs -- сувениры (от souvenir)
sovereign -- суверенный
soviet -- Советский 
sow -- сеять
space -- пространство, место, космос
spacious -- просторный, обширный
spade -- лопата, заступ
spare -- уделять, лишний, запасный
spared -- Сэкономленный 
spark -- искра
sparkle -- сверкать, искриться
sparkler -- Бриллиант 
sparrow -- воробей
spasmodic -- судорожный
spat -- размолвка, звонкий удар
speak -- говорить, убеждать
speaker -- оратор
speaking -- говоря(щий) (от speak)
speaks -- Говорит 
spear -- дротик, копье
special -- специальный, особенный
specialist -- специалист
speciality -- фирменное блюдо
specialize -- специализировать
specially -- особенно
species -- порода
specific -- специфический
specifically -- специфически
specification -- Спецификация 
specified -- Указанный 
specify -- точно определять, устанавливать, предписывать; детально излагать
specimen -- образец
specimens -- Экземпляры, образцы 
spectacle -- зрелище
spectacles -- очки
spectacular -- производящий глубокое впечатление; впечатляющий; эффектный
speculation -- размышление
speech -- речь
speechless -- безмолвный
speed -- скорость, ускорять, спешить
speedily -- быстро
speedometer -- спидометр
speedy -- быстрый, скорый
spell -- писать или произносить (слово) по буквам
spelling -- орфография, правописание
spend -- тратить
spends -- проводит (время) (от spend)
spent -- проводил, тратил, проведенный, потраченный (от spend)
sphere -- сфера
spider -- паук
spiders -- Пауки 
spike -- острие !NEW!
spill -- проливать(ся), рассыпать(ся)
spin -- прясть, крутить(ся)
spine -- позвоночный столб
spirit -- дух
spirited -- живой, бойкий
spirits -- души !NEW!
spit -- плеваться, фыркать
spite -- злость
spiteful -- злобный
splash -- брызгать(ся), забрызгать, плескать(ся); плеск, брызги
splendid -- замечательно
splinter -- щепка, осколок, заноза
split -- раскалывать
spoil -- портить, баловать
spoke -- говорил, говоривший (от speak)
spoken -- сказанный !NEW!
sponsorship -- попечительство
spoon -- ложка
spoons -- ложки (от spoon)
sport -- спорт, заниматься спортом
sporting -- спортивный (-ing)
sports -- спорт, спортивные соревнования (от sport)
sportsman -- спортсмен
spot -- пятно
spotless -- безупречный
spots -- Пятна(места) 
spotted -- Определенный *p- 
spout -- носик (посуды), желоб
sprang -- Прыгал (от слова spring) 
spray -- брызги, обрызгивать
spread -- распространяться
spreading -- Распространение -ing 
spree -- веселье, шалость *p-
spring -- весна
sprout -- пускать ростки; отросток, побег
spruce -- Ель 
sprung -- Прыгал (от слова spring) 
spur -- стимул
spurt -- бить струей, делать внезапное усилие
spy -- шпион, шпионить
squad -- команда
squadron -- эскадрон, эскадра (мор.)
squall -- писк, визг
square -- площадь, квадратный
squeal -- Визг -a* 
squeeze -- выжимать, сжимать, давить, впихивать, сжатие, давка
squeezed -- Сжатый 
squint -- косоглазие, косить (о глазах)
squirrel -- белка
st -- C- 
stability -- устойчивость
stable -- конюшня
stack -- стог, куча, груда
stadium -- стадион
staff -- штат, персонал, штаб
stage -- сцена, эстрада, ставить
stagger -- шатание, шатать
staggered -- Пораженный *t- 
stain -- пятно, пятнать, пачкать
stair -- лестница
staircase -- лестница
stake -- ставка, делать ставку
stale -- черствый, затхлый
stalk -- стебель
stall -- партер
stalls -- кресла в партере ( от stall)
stammer -- заикаться, запинаться
stamp -- марка, печать, штемпелевать
stamps -- марки (от stamp)
stand -- остановка, позиция, стенд, киоск, стоять, останавливаться
standard -- стандарт
standing -- репутация, вес, положение в обществе, стоящий (-ing)
standstill -- застой (не stagnation)
star -- звезда
stare -- пристальный взгляд
stared -- пристальный !NEW!
starling -- скворец
start -- начинать, отправляться s-
starter -- стартер
startle -- испугать, сильно удивить
starts -- Запуски 
starve -- умирать от голода
state -- государство, состояние
stated -- зафиксированный, высказанный, изложенный Заявленный 
stately -- величавый, величественный
statement -- утверждение, заявление
statements -- Утверждения(заявления) 
states -- Государства 
statesman -- государственный деятель
station -- станция, место, размещать
stationery -- писчебумажные принадлежности
statistics -- статистика
statue -- статуя, памятник
stature -- рост *t-
status -- статус
statute -- закон, устав
stay -- оставаться, жить (временно)
stayed -- остался (от stay)
staying -- остающийся, живущий (от stay)
steadily -- неуклонно
steady -- прочный
steak -- бифштекс
steal -- (с)воровать
stealing -- Кража 
steam -- пар
steel -- сталь
steep -- крутой (не sharp)
steer -- править (рулём)
stem -- стержень
stems -- Стебли 
step -- шаг, шагать (step)
stepfather -- отчим
stephen -- Стивен 
sterile -- бесплодный !NEW!
sterility -- Бесплодие 
stern -- строгий
sternly -- строго !NEW!
steve -- Стив 
stew -- тушеное мясо
stick -- палка, приставать
sticking -- торчащий, приклеенный (-ing) !NEW!
sticks -- Палки 
sticky -- липкий, клейкий
stiff -- негнущийся, застывший, холодный, натянутый
stiffen -- (о)коченеть, (о)деревенеть
still -- все еще, однако, тихий
stir -- суета, суматоха, мешать, помешивать, волновать
stitch -- стежок, петля (в вязании), шить
stock -- запас, снабжать (не spare, hoard)
stocking -- чулок
stockings -- чулки (от stocking)
stocks -- Акции(запасы) 
stocky -- коренастый, низкий, приземистый !NEW!
stolen -- украденный (от steal)
stomach -- живот, желудок
stone -- камень
stool -- табуретка
stoop -- наклонять(ся), нагибать(ся), сутулиться, горбиться
stooped -- Наклоненный 
stop -- остановка, перестать, остановиться
stoppage -- остановка, задержка
stopped -- остановились (от stop)
stopper -- пробка, затычка
stops -- остановки (от stop)
storage -- хранение *t-
store -- магазин, имущество, запасать, снабжать
stored -- Запасенный 
storey -- этаж
stories -- истории, рассказы (от story)
stork -- аист
storm -- буря, взрыв (не blast)
stormy -- бурный
story -- рассказ, история
stout -- тучный, дородный
stove -- печь, плита
straight -- прямо, сразу, прямой, достоверный s-
straighten -- выпрямлять(ся)
straightened -- Выправляемый 
straightforward -- прямой
strain -- натягивать, напрягать(ся), напряжение
strait -- узкий, пролив, затруднительное материальное положение, нужда
strange -- странный
strangely -- странным образом
stranger -- незнакомец, иностранец
strangers -- Незнакомцы 
strangle -- задушить
strap -- ремень, стягивать ремнем
strategy -- стратегия
straw -- пустяк, мелочь
strawberries -- клубника
strawberry -- земляника
stray -- сбиваться с пути, заблудившийся
stream -- ручей, поток
street -- улица
strength -- численность, сила, прочность
strengthen -- усиливать, укреплять
stretch -- растягивать, вытягиваться
stretched -- растянутый !NEW!
stretching -- Протяжение 
strict -- точный
strictly -- строго *t-
strike -- ударять, забастовка
striking -- бьющий, ударяющий (от strike)
string -- вереница, ряд, струна, связывать
strings -- Вереницы(нити) (не threads) 
strip -- полоса
striped -- полосатый
stripes -- Полосы 
strode -- походка, большой шаг (прошедшее время) !NEW!
stroke -- удар, гладить *t
stroll -- прогулка, гулять
strong -- сильный
strongest -- Самый сильный 
stronghold -- крепость, оплот
strongly -- решительно (первая буква НЕ "d")
struck -- забастовка, удар (прошедшее время) !NEW!
structure -- структура
struggle -- бороться, борьба
struggling -- Борьба 
stubborn -- упрямый
stuck -- воткнул, приклеил !NEW!
stud -- запонка
student -- студент
students -- студенты (от student)
studied -- учился (от study)
studio -- студия
studious -- прилежный s-
study -- учиться, изучать, заниматься, исследование, кабинет
studying -- занимается (от study)
stuff -- вещество, материал, заполнять, набивать
stuffed -- Наполненный 
stuffy -- душный
stumbled -- Наткнулся 
stump -- пень
stun -- оглушать
stupid -- глупый
style -- стиль, фасон, прическа
subdued -- подавленный
subject -- предмет, содержание, подчинять
subjected -- Подвергнутый *u- 
subjects -- предметы (от subject)
submarine -- подводная лодка
submit -- подчиняться
subqueries -- Подвопросы 
subquery -- Подвопрос 
subscribe -- подписываться
subscriber -- подписчик
subscription -- подписка
subsequent -- последующий (не successive)
subsequently -- впоследствии
subsided -- Спадал 
substance -- вещество
substantial -- существенный, заметный, прочный, крепкий
substitute -- заместитель
subtle -- тонкий, неуловимый
suburb -- пригород, окраина
succeed -- достигать цели
succeeding -- Следование -ing 
success -- успех, удача
successes -- успехи (от success)
successful -- удачный, успешный
successfully -- успешно
succession -- последовательность
successive -- последующий
successor -- преемник
such -- такой
suck -- сосать
sudden -- внезапный
suddenly -- внезапно, вдруг
sue -- преследовать судебным порядком, возбуждать дело в суде
suffer -- страдать
suffering -- страдание
sufficient -- достаточный
sufficiently -- достаточно
suffix -- суффикс (грам.)
suffocate -- душить, задыхаться
sugar -- сахар
suggest -- предлагать, советовать
suggested -- предлагал, предложенный (от suggest)
suggestion -- предложение
suggestions -- предложения (от suggestion)
suicide -- самоубийство, самоубийца
suit -- костюм, подходить, устраивать
suitable -- подходящий, соответствующий (не eligible)
suitcase -- чемодан
suitcases -- чемоданы (от suitcase)
suite -- номер люкс
suited -- Удовлетворенный 
sulky -- мрачный, хмурый **l**
sulphur -- сера
sultry -- знойный, душный
sum -- сумма, подводить итог
summary -- конспект, суммарный
summer -- лето, летний
summit -- вершина
summon -- вызывать
summoned -- Вызванный 
sun -- солнце
Sunday -- воскресенье
sunflower -- подсолнух
sunk -- Погруженным 
sunlight -- солнечный свет
sunny -- солнечный
sunrise -- восход солнца
sunset -- закат
sunshine -- солнечный свет
sunstroke -- солнечный удар
superb -- превосходный (не pretty)
superficial -- поверхностный, внешний
superfluous -- излишний, чрезмерный
superintend -- надзирать (за)
superintendent -- управляющий, заведующий
superior -- высший, лучший
superiority -- старшинство
superlative -- превосходная степень (грам.)
supermarket -- супермаркет
superserver -- Суперприслуга 
superstition -- суеверие, предрассудки
supper -- ужин
supplement -- добавление
supplied -- Снабженный 
supplies -- Запасы(поставки) 
supply -- снабжать
support -- поддерживать, опора, поддержка
supported -- Поддержанный 
supporter -- сторонник
supporting -- опорный -ing
suppose -- полагать, предполагать
supposed -- предполагаемый (от suppose)
supposedly -- предположительно
suppress -- подавлять
suppressed -- Подавленный 
supreme -- верховный, высший
sure -- уверенный, убедиться, безусловно
surely -- несомненно
surface -- поверхность
surfaces -- Поверхности 
surgeon -- хирург
surgery -- хирургия, приемная хирурга
surly -- угрюмый, неприветливый **r**
surname -- фамилия
surplus -- излишек
surprise -- удивление, удивлять
surprising -- удивительный
surprisingly -- удивительно
surround -- окружать
surrounding -- Окружение 
surroundings -- окрестности, среда, окружение
survey -- осмотр
surveyed -- Рассмотренный 
surveying -- Рассмотрение -ing 
survive -- пережить
susan -- Сьюзен 
suspect -- подозревать
suspected -- Подозреваемый 
suspend -- приостанавливать
suspended -- приостановленный !NEW!
suspense -- неизвестность
suspension -- приостановка, пауза, перерыв
suspicion -- подозрение
suspicions -- Подозрения 
suspicious -- подозрительный
sustain -- поддерживать (*u-)
swallow -- глотать, проглатывать
swam -- плавал (от swim)
swamp -- болото, топь s-
swan -- лебедь
swarm -- рой, толпа; роиться, толпиться (не crowd)
sway -- качание, взмах
swear -- клясться
sweat -- пот, потеть
sweater -- эксплуататор
sweep -- (под)мести s-
sweet -- милый, сладкий, приятный s-
sweetheart -- возлюбленный(ая), дорогой(ая) (как обращение)
sweetness -- Сладость 
swell -- отличный, превосходный
swelling -- воспаление, отек -ing
swept -- подметал !NEW!
swift -- быстрый (не speed)
swiftly -- быстро !NEW!
swig -- потягивать вино
swim -- плавать
swimmer -- пловец
swimming -- плавание
swindle -- обман, обманывать, надувать (не deceive)
swing -- качание, качели, качаться, колебаться
switch -- переключать, включать, выключатель, выключать
sword -- меч, шпага, сабля
syllable -- слог
symbol -- символ
sympathetic -- сочувственный
sympathize -- сочувствовать
sympathy -- симпатия, сострадание
syntax -- Синтаксис 
syringe -- шприц
system -- система
systems -- Системы 
tab -- петелька
table -- стол, таблица, расписание
tables -- Столы 
tablets -- таблетки (от tablet)
tack -- линия, курс (t-)
tackle -- хватать *a-
tactics -- тактика
tag -- бирка, ярлык
tail -- конец, хвост
take -- брать, взять, принимать
taking -- овладение
tale -- повесть, сказка, история
talent -- талант
talented -- талантливый
tales -- сказки, истории (от tale)
talk -- говорить, беседовать
talking -- беседа
tall -- невероятный, высокий
tally -- бирка, этикетка, дубликат, копия (не label)
tame -- приручать, приручить, прирученный
tangerine -- мандарин (плод)
tangible -- осязаемый
tangle -- сплетение, путаница, запутывать(ся)
tank -- танк, резервуар
tap -- постучать
tape -- лента, обматывать лентой
tar -- смола, деготь; мазать дегтем, смолить
target -- задание
task -- задача
taste -- пробовать, иметь вкус
tasted -- пробовал (от taste)
tastes -- имеет вкус (от taste)
taught -- обучал, обученный (от teach)
tax -- налог
taxi -- такси
tea -- чай, отвар
teach -- обучать, преподавать
teacher -- учитель
teaching -- обучение
team -- команда
teams -- команды (от team)
tear -- слеза, разрыв, (по)рвать
tearing -- Разрывание -ing 
tears -- слёзы !NEW!
tease -- дразнить, задира
technical -- технический
technician -- специалист t-
technique -- техника
ted -- раскидывать
teddy -- Тэдди 
tedious -- скучный, утомительный **d****
teenagers -- подростки (от teenager)
teeth -- зубы
telegram -- телеграмма
telegraph -- телеграф
telephone -- телефон, звонить по телефону
telescope -- телескоп
television -- телевидение
tell -- говорить, рассказывать
tells -- Сообщает 
temper -- сдержанность, самообладание
temperature -- температура
temple -- храм
temporarily -- временно
temporary -- временный
tempt -- искушать
temptation -- искушение, соблазн
tempted -- Соблазненный 
ten -- десять
tenant -- арендатор, жилец
tend -- иметь тенденцию
tendency -- тенденция
tender -- нежный t-
tenderly -- нежно, мягко !NEW!
tenderness -- нежность !NEW!
tennis -- теннис
tense -- время (грам.)
tent -- палатка
tentacles -- Щупальца 
tentative -- предварительный, предполагаемый; умозрительный, не вполне определенный
tenth -- десятый
term -- семестр, срок
terminal -- конечный пункт
terminate -- кончать(ся)
terminus -- Конечная остановка 
terms -- личные отношения, условия соглашения
terrace -- терраса
terrible -- ужасный, страшный
terribly -- ужасно t-
terrific -- потрясающий, ужасающий
terrified -- Испуганный 
territory -- территория
terror -- ужас t-
test -- анализ, проверка, испытывать
testing -- испытание
text -- текст
textbook -- учебник
than -- чем
thank -- благодарить
thankful -- благодарный
thanks -- спасибо
that -- это, тот, та, то
thaw -- оттепель
the -- определенный артикль
theatre -- театр
theatres -- театры (от theatre)
thee -- Вас 
theft -- кража t-
their -- их (на вопрос "чей?")
them -- их (на вопрос "кого?", "что?")
theme -- тема (не topic)
themselves -- себя, себе
then -- тогда, потом, затем
thence -- Отсюда 
theory -- теория
there -- там, туда, вот
thereafter -- после этого; впоследствии (не afterwards) !NEW!
thereby -- таким образом t-
therefore -- поэтому, следовательно
thereupon -- после чего, на что
these -- эти, это
they -- они
thick -- толстый, густой
thicket -- Чаща 
thief -- вор
thimble -- наперсток, наконечник
thin -- тонкий, худощавый
thing -- вещь, предмет
things -- вещи, дела (от thing)
think -- думать, мыслить
thinking -- размышление
thinks -- думает (от think)
third -- третий
thirst -- жажда
thirsty -- испытывающий жажду
thirteen -- тринадцать
thirteenth -- тринадцатый
thirty -- тридцать
this -- этот, это
thomas -- Томас 
thong -- ремень, плеть
thorn -- шип, колючка (не prick)
thorny -- колючий, тернистый ****n*
thorough -- тщательный
thoroughfare -- проход, проезд
thoroughly -- тщательно
thorpe -- Торп 
those -- тот, та, то, те
thou -- Вы 
though -- хотя, несмотря на
thought -- думал, обдуманный (от think), мысль
thoughtful -- задумчивый, погруженный в размышления
thoughtfully -- внимательно !NEW!
thoughtless -- необдуманный, беспечный, эгоистичный
thousand -- тысяча
thrash -- молотить, бить
thread -- нитка
threat -- угроза
threaten -- грозить, угрожать
threatened -- находящийся в угрожаемом положении !NEW!
threatening -- Угроза -ing 
three -- три
threshold -- порог
threw -- бросал (не flung) !NEW!
thrice -- трижды
thrill -- волновать
thrilled -- возбуждённый !NEW!
thrilling -- захватывающий -ing
thrive -- преуспевать; буйно, пышно расти
throat -- горло
throb -- пульсация, пульсировать
throbbing -- пульсация, биение
throne -- трон
throng -- толпиться, переполнять
through -- через, сквозь
throughout -- повсюду, везде, во всех отношениях (не everywhere)
throw -- бросать
thrust -- толчок, удар, толкать
thumb -- большой палец (руки)
thunder -- гром, греметь
Thursday -- четверг
thus -- так, таким образом
thy -- Ваш 
ticket -- билет
tickets -- билеты (от ticket)
tickle -- щекотать
tide -- прилив и отлив
tidy -- чистый, аккуратный, убирать, приводить в порядок
tidying -- уборка
tie -- связь, связывать, галстук
tied -- связанный !NEW!
ties -- связи (от tie)
tiger -- тигр
tight -- плотный, крепкий, тугой
tighten -- сжимать (не squeeze)
tile -- черепица, кафель
till -- до
tim -- Тим 
timber -- бревно
time -- время
timeout -- Перерыв 
times -- раз (от time)
timetable -- расписание
timid -- робкий, застенчивый
tin -- олово, жестянка, консервная банка
tinker -- Ремесленник 
tinkle -- звон, звяканье
tiny -- крошечный
tip -- чаевые, давать на "чай", наконечник
tips -- Наконечники(чаевые) 
tiptoe -- кончики пальцев, цыпочки
tire -- уставать, надоесть
tired -- усталый (от tire)
tiresome -- утомительный
tiring -- утомительный t-
title -- заглавие, титул
to -- предлог, частица инфинитива
toad -- жаба
toast -- тост (жар. хлеб), сушить
tobacco -- табак
today -- сегодня, теперь, современный
today's -- сегодняшний (от today)
toddle -- ковыляние, прогуливаться
toe -- палец
toes -- Пальцы ноги(носки) 
toffee -- ириска
together -- вместе, одновременно
toil -- трудиться, (тяжелый) труд
toilet -- туалет
token -- признак, примета
told -- рассказал, сообщил (от tell)
tolerable -- сносный, допустимый
tolerant -- терпимый (не bearable)
tolerate -- терпеть
tomato -- томат, помидор
tomatoes -- помидоры (от tomato)
tomb -- могила, гробница
tome -- Том 
tommy -- Томми 
tomorrow -- завтра, назавтра
ton -- тонна
tone -- стиль, характер
tones -- Тоны 
tongs -- щипцы, клещи
tongue -- язык
tonight -- сегодня вечером
too -- слишком, тоже
took -- брал (от take)
tool -- инструмент
tools -- инструменты !NEW!
tooth -- зуб
toothache -- зубная боль
top -- верх, верхушка
topic -- тема
topmost -- самый верхний, самый важный
topple -- валиться
torch -- факел
torches -- фонарики !NEW!
tore -- рвал !NEW!
torn -- оборванный (не worn) !NEW!
torrent -- поток
tortoise -- черепаха
torture -- пытать, пытка (не attempt)
toss -- толчок, сотрясение, кидать, бросать
total -- сумма, весь, полный t-
totally -- полностью
touch -- соприкосновение, контакт
touching -- трогательный -ing
tough -- жесткий
tour -- путешествие, тур (не trip)
tourist -- турист(ский)
tournament -- турнир
tow -- буксировать, тянуть, тащить
toward -- к, на
towards -- к, в направлении
towel -- полотенце
tower -- башня
towers -- Башни 
town -- город (не city)
towns -- Города 
toy -- игрушка, играть, забавляться
toys -- игрушки (от toy)
trace -- следить, чертить
traced -- Прослеженный 
traces -- Следы 
track -- след, тропа, колея
tracks -- Следы 
trade -- торговать, ремесло, занятие, профессия
trading -- торговля
traditional -- традиционный
traditionally -- традиционно
traffic -- уличное движение
tragedy -- трагедия
tragic -- трагический
trail -- след (не trace)
trailer -- прицеп к автомобилю
train -- поезд, привлекать, воспитывать
trained -- обученный
trainer -- тренер
training -- тренировка, обучение
trains -- поезда (от train)
traitor -- изменник, предатель
tram -- трамвай
tramp -- бродить, громко топать, бродяга
tranquilizer -- Транквилизатор 
transaction -- дело, сделка, ведение (дел), труды, протоколы (общества) t-
transactions -- Сделки 
transfer -- передача, переносить
transformation -- преобразование
translate -- переводить, объяснять
translating -- перевести (от translate)
translation -- перевод
transmission -- передача
transmitted -- Переданный 
transparent -- прозрачный
transport -- транспорт, перевозить
transportation -- перевозка
trap -- ловушка, западня
trapdoor -- люк
trapes -- Западни t- 
travel -- путешествовать
travelled -- путешествовал, много путешествовавший (от travel)
traveller -- путешественник
travelling -- путешествие, путешествующий -ing
travels -- Путешествия 
traverse -- пересекать
tray -- поднос
treacherous -- предательский, вероломный
tread -- ступать, наступать
treasure -- сокровище
treasurer -- Казначей 
treasures -- Сокровища 
treasury -- сокровищница
treat -- удовольствие, лечить, относиться
treated -- лечил (от treat)
treatment -- обращение, обработка
tree -- дерево (tree)
trek -- поход, переход (не pass)
tremble -- дрожать, дрожь
tremendous -- громадный, значительный t-
trend -- общее направление, тенденция
trespass -- преступать, нарушать границу (владения)
trial -- попытка, испытание
trials -- Испытания(суды) 
tribe -- племя, клан
tribute -- дань
trice -- мгновение
trick -- хитрость, обман, обманывать (t-)
tried -- пытался (от try)
trifle -- пустяк
trifling -- Пустяковый -ing 
trigger -- курок
triggers -- Спусковые механизмы 
trim -- подрезка, стрижка t-
trip -- поездка, экскурсия
triple -- тройной
trips -- поездки (от trip)
triumph -- триумф
triumphal -- триумфальный
triumphant -- торжествующий, победоносный
trolley -- тележка
troop -- войска
troops -- войска
trophy -- трофей
tropical -- тропический
trot -- рысь, рысца, бежать рысью
trouble -- неприятность, беда, беспокоить(ся), волноваться
troubled -- побеспокоил (от trouble)
troubles -- неприятности (от trouble)
troublesome -- трудный, неприятный, капризный (о ребенке)
trousers -- брюки
trout -- форель
truck -- грузовик t-
true -- правильный, верный
truly -- точно, правдиво, истинно, верно
trumpet -- труба t-
trunk -- ствол, туловище
trust -- доверять, доверие, вера
trusted -- Доверял 
truth -- правда, истина
truthful -- правдивый
try -- пробовать, пытаться
trying -- ищу (место, адрес) (от to try for)
tub -- кадка, лохань, ушат
tube -- труба (не pipe)
tucked -- Подвернутый 
Tuesday -- вторник
tumble -- падать, опрокидываться
tumbled -- Кувыркался 
tumbler -- Тумблер 
tune -- мотив
tunnel -- тоннель
turf -- дерн
turk -- Турок 
turkey -- индейка
turn -- поворачивать, вращать, оборот, поворот, очередь
turner -- токарь
turnip -- репа
turnstile -- Турникет 
turpentine -- скипидар
turtle -- Черепаха 
TV -- телевизор, телевидение
twelfth -- двенадцатый
twelve -- двенадцать
twentieth -- двадцатый
twenty -- двадцать
twice -- дважды, вдвое
twig -- веточка, прутик
twilight -- сумерки t-
twin -- двойной, двойник, близнец
twinkle -- мерцать, сверкать, мигать, мелькать
twins -- близнецы
twist -- вить(ся), крутить, скручивать
twisted -- искривленный t-
twit -- упрек, насмешка (не mock)
two -- два
type -- тип, род t-
types -- Типы 
typewriter -- пишущая машинка
typical -- типичный
tyre -- шина
ugly -- уродливый
ultimate -- последний
ultimately -- В конечном счете 
umbrella -- зонт
un -- ООН 
unable -- неспособный
unanimous -- единодушный, единогласный
unanimously -- единодушно
unaware -- незнающий
uncertain -- неясный (не от слова clear)
unchanged -- неизменившийся
uncle -- дядя
uncomfortable -- неудобный u-
uncommon -- неординарный
unconscious -- бессознательный
under -- под
undergo -- испытывать, подвергаться
undergone -- Подвергнемся 
underground -- метрополитен, подземный, подпольный
underline -- подчеркивать
underneath -- вниз, внизу, под
understand -- понимать, подразумевать
understanding -- понимание, способность понять
understood -- понимал, понятый (от understand)
undertake -- предпринимать
undertaking -- предприятие
underwater -- Под водой 
underwear -- нижнее белье
undesirable -- нежелательный
undo -- развязывать, расстегивать
undoubtedly -- несомненно
undress -- раздеваться
uneasiness -- тревога, неловкость
uneasy -- встревоженный, неловкий
unexpected -- неожиданный
unfair -- несправедливый
unfinished -- незаконченный
unfit -- негодный, неподходящий
unfortunate -- несчастный человек, горемыка u-
unfortunately -- к несчастью, к сожалению
ungrateful -- неблагодарный u-
unhappy -- несчастный, неудачный (unhappy)
uniform -- форма, форменная одежда
union -- союз
unions -- союзы (от union)
unique -- Уникальный 
unit -- единица
unite -- соединять(ся)
united -- объединенный
units -- единицы (от unit)
unity -- единство
universal -- всеобщий
universe -- мир, вселенная
University -- университет
unkind -- недобрый
unknown -- неизвестный
unleash -- развязывать (войну)
unless -- если не, пока не
unlike -- непохожий
unlikely -- маловероятный, вряд ли
unlimited -- неограниченный (не boundless)
unload -- разгружать(ся), разряжать (оружие)
unlock -- отпирать
unlucky -- неудачный
unmoved -- равнодушный
unnatural -- неестественный, противоестественный
unnecessary -- ненужный
unofficial -- неофициальный
unpleasant -- неприятный
unpredictable -- непредсказуемый u-
unreasonable -- неразумный, неблагоразумный
unregistered -- Незарегистрированный 
unresolved -- нерешенный
unrest -- беспокойство (не bother, harass)
unseen -- Невидимый 
unskilled -- неквалифицированный
unsuccessful -- неудачный
untidy -- неаккуратный
until -- до
unusual -- необычный
unusually -- необычно
unwelcome -- нежеланный, неприятный
unwilling -- несклонный, нерасположенный
unwise -- неразумный
unworthy -- недостойный
up -- вверх, до предела, наверху
update -- Модернизация 
updated -- Обновленный 
upgrade -- Модернизировать 
upon -- на
upper -- верхний
upright -- прямой, вертикальный, честный, справедливый u-
uproar -- шум, волнение (не shindy)
upset -- беспорядок, расстройство, расстроенный
upstairs -- наверху
upward -- направленный вверх
upwards -- вверх
urban -- городской
urge -- понуждать
urged -- Побуждённый, подстёгнутый 
urgent -- крайне необходимый, срочный
urgently -- срочно
urn -- урна
us -- нас, нам
usage -- употребление, обычай
use -- использовать, употребить, польза, применение
used -- использованный, подержанный (от use)
useful -- полезный
usefully -- с пользой
useless -- бесполезный
user -- потребитель
users -- Пользователи 
using -- пользование
usual -- обыкновенный, обычный
usually -- обычно, обыкновенно
utilities -- Предприятия коммунального обслуживания 
utility -- полезность, выгодность, удобства, коммунальные услуги u-
utilize -- использовать
utmost -- крайний u-
utter -- издавать (звук), произносить
uttered -- Произнесенный 
utterly -- совершенно (не perfect, totally)
vacant -- свободный, незанятый
vacation -- отпуск, каникулы
vaccination -- прививка
vague -- неопределенный, смутный
vaguely -- Неопределенно 
vain -- напрасный, тщетный
vale -- прощание
valiant -- храбрый, мужественный (не от слова brave)
valid -- правильный v-
valley -- долина
valleys -- Долины 
valuable -- ценный, дорогой
valuation -- оценка
value -- ценность, цена, дорожить, ценить
valued -- Оцененный 
valuer -- оценщик
values -- Ценности 
valve -- клапан, створка, радио электронная лампа
van -- фургон, багажный вагон
vanish -- исчезать, пропадать
vanished -- Исчез 
vanity -- тщеславие
vapour -- пар, пары
variability -- Изменчивость 
variable -- изменчивый, непостоянный
variables -- Переменные 
variation -- Изменение(разновидность) 
variations -- Изменения(разновидности) 
varied -- Различный (не differ) 
varieties -- Множества 
variety -- разнообразие
various -- различный, разный
varnish -- лак, лоск, лакировать
vary -- отличаться, расходиться
varying -- Изменение -ing 
vase -- ваза
vast -- обширный, громадный
vastly -- значительно
vault -- свод
veal -- телятина
vegetable -- овощ, растение, овощной
vegetables -- овощи (от vegetable)
vegetation -- Растительность 
vehemently -- сильно v-
vehicle -- транспортное средство
veil -- завеса, покрывало
vein -- вена, жила, жилка
velvet -- бархат, преимущество
veneering -- Облицовывание -ing 
vengeance -- месть, мщение
vent -- выпускать, испускать
venture -- предприятие, риск
ventures -- предприятия (от venture)
venus -- Венера 
verandah -- Веранда 
verdure -- зелень ***d***
verge -- грань, край
verify -- проверять, подтверждать
vernon -- Вернон 
verse -- стихи, поэзия
version -- версия
versions -- Версии 
vertical -- вертикальный
vertically -- Вертикально 
very -- очень, тот самый
vessel -- сосуд, судно
vest -- жилет (амер.), майка
veteran -- ветеран
vex -- раздражать, сердить
vexation -- досада, раздражение (не nuisance)
vexed -- сердил, раздражал (от vex)
via -- через
vice -- порок
vicinity -- окрестности, соседство, близость
vicious -- порочный
victim -- жертва
victorious -- победоносный
victory -- победа
view -- взгляд, мнение, осматривать
viewed -- Рассматриваемый 
viewpoint -- точка зрения
views -- Представления(виды) 
vigilance -- бдительность
vigorous -- сильный v-
vigorously -- энергично !NEW!
vigour -- сила, энергия v-
village -- деревня
villager -- сельский житель
villain -- злодей, негодяй
vine -- виноградная лоза
vinegar -- уксус
violence -- сила, неистовство, насилие
violent -- яростный v-
violently -- неистово v-
violet -- фиолетовый (не purple)
virtual -- фактический
virtue -- добродетель
viscount -- Виконт 
visible -- видимый, очевидный
vision -- зрение, видение
visit -- визит, посещать, навещать
visited -- посетил (от visit)
visiting -- приезжий -ing
visitor -- гость
visits -- Посещения 
visual -- зрительный, наглядный
vital -- жизненный, крайне необходимый
vivid -- живой, яркий
vocation -- призвание
voice -- голос
void -- лишенный, недействительный (юр.)
volcano -- вулкан
volume -- объем, громкость
voluntary -- добровольный
vote -- голос (на выборах), голосование, голосовать
vow -- обет, клятва
voyage -- путешествие v-
wad -- прокладывать
wade -- пробираться, продираться
wag -- махать, трясти
wage -- заработная плата
wager -- держать пари, рисковать
waggoner -- Извозчик 
wagon -- повозка !NEW!
wail -- вопль, вой, вопить, выть
wailed -- Вопил 
wailing -- Вопящий -ing 
waist -- талия
waistcoat -- жилет
wait -- ждать, ожидать, ожидание
waited -- ждал (от wait)
waiter -- официант
waiting -- ждать (от to keep waiting)
waitress -- официантка
wake -- будить, просыпаться
walk -- гулять, ходить пешком (не hike)
walked -- гулял (от walk)
walking -- гуляющий
wall -- стена
wallace -- Уоллис 
wallet -- бумажник
wallpaper -- обои
walnut -- грецкий орех
walrus -- морж
walter -- Уолтер 
wan -- бледный, изнуренный
wand -- Палочка 
wander -- бродить, блуждать
wanderer -- странник (не stranger)
wandering -- блуждание !NEW!
want -- хотеть, желать, нуждаться в
wanted -- хотел, желанный (от want)
wanting -- Желание 
wants -- хочет, желает, нуждается в (от want)
war -- война, воевать
ward -- опека
wardrobe -- гардероб
warehouse -- склад, пакгауз
warily -- осторожно
warm -- теплый, согревать
warmly -- тепло (-- как? -- тепло!) !NEW!
warmth -- тепло, теплота, сердечность
warn -- предупреждать w-
warning -- предупреждение
warrant -- полномочие, ордер, гарантировать
warrior -- воин (w-)
warriors -- Воины 
wars -- Войны 
wary -- осторожный
was -- был (от be)
wash -- мыть, стирать, мытье, стирка
washed -- мыл, вымытый (от wash)
wasp -- оса
waspish -- злой, раздражительный (не vicious)
waste -- тратить, использованный, негодный
wasted -- Потраченный впустую 
wasteful -- расточительный
watch -- часы, cмотреть, наблюдать
watcher -- сторож, наблюдатель
watches -- часы (от watch)
watchful -- бдительный (не vigilant)
watching -- просмотр
watchman -- (ночной) сторож
water -- вода, поливать, разбавлять
waterproof -- непромокаемый, непромокаемый плащ
watery -- водянистый, дождевой, бесцветный
wave -- волна
waved -- Махал 
waver -- колебаться, быть в нерешительности
waving -- Помахивание 
wavy -- волнистый, бурный
wax -- воск, восковой
waxworks -- Восковые фигуры 
way -- дорога, путь, способ
wayfarer -- путник, пешеход
we -- мы
weak -- слабый
weakness -- слабость
wealth -- богатство
wealthy -- богатый (w-)
weapon -- оружие
weapons -- Оружие 
wear -- одежда, носить, быть одетым
weariness -- усталость
wearisome -- скучный, надоедливый
weary -- усталый, утомительный, утомлять(ся), устать, потерять терпение
weather -- погода
weave -- ткать, плести
web -- ткань, лента, перемычка
wedding -- свадьба, венчание
wedge -- клин
Wednesday -- среда
weed -- сорняк, полоть
week -- неделя
weekend -- выходные
weekly -- еженедельный, еженедельно
weep -- плакать
weeping -- Плач *e-ing 
weigh -- взвешивать, весить
weight -- вес, тяжесть, груз
weighty -- веский
weird -- судьба, рок, таинственный, странный
welcome -- желанный, гостеприимство
welfare -- благосостояние
well -- хорошо, очень, добро, здоровый (не good)
went -- шел, ехал (от go)
wept -- Плакал 
were -- были (от be)
West -- запад
western -- западный
wet -- мокрый
whale -- кит
what -- что, какой
whatever -- что бы ни
wheat -- пшеница
wheel -- колесо
wheelbarrow -- тачка
wheeled -- Колесный 
wheels -- Колеса 
when -- когда
whence -- Откуда 
whenever -- когда бы ни
where -- где, куда
whereas -- тогда как, принимая во внимание
whereby -- чем, при помощи
whereupon -- после чего, сразу после; немедленно после
wherever -- где бы ни, куда бы ни
whether -- ли
which -- который
while -- пока, в то время как, тогда как
whilst -- Пока 
whine -- визг, скулить
whip -- кнут, хлыст, хлестать, сечь, взбивать (сливки, яйца)
whirl -- вихрь
whirlwind -- вихрь
whiskers -- бакенбарды, усы (у животных)
whisper -- шепот, шептать
whispering -- Шептание 
whistle -- свист, свистеть
whistled -- Свистел 
whistling -- Свист 
white -- белый
who -- кто
whoever -- кто бы ни
whole -- целый, весь, целое
wholesome -- полезный, здоровый, благотворный
wholly -- полностью
whom -- кому, кого
whose -- чей
why -- почему
wicked -- злой
wide -- широкий
widely -- широко
widen -- расширять(ся)
widow -- вдова
width -- ширина
wife -- жена
wig -- парик
wild -- исступленный, безумный
wilderness -- пустыня, глушь
wildly -- Дико 
Wilfrid -- Вилфрид !NEW!
will -- вспомогательный глагол будущего времени
william -- Уильям 
willing -- готовый, охотно делающий что-либо
willingly -- охотно
willow -- ива
win -- выигрывать, побеждать
wind -- ветер, виток, виться, наматывать
windfall -- неожиданная удача
winding -- изгиб w- -ing
window -- окно, оконный
windows -- окна (от window)
winds -- Ветры 
windy -- ветреный
wine -- вино, винный, пить вино
wing -- крыло
wings -- крылья !NEW!
wink -- моргать, мигать, моргание, мигание
winner -- победитель
winning -- выигрывающий, победа (-ing)
winter -- зима
wipe -- вытирать
wiped -- Вытертый 
wire -- переводить телеграфом (деньги)
wireless -- беспроволочный, радио
wisdom -- мудрость
wise -- мудрый
wisely -- мудро
wish -- желание, желать
wishes -- пожелания (от wish)
wishing -- Пожелание -ing 
wit -- ум, остроумие, остроумный человек, остряк
with -- с
withdraw -- брать назад, забирать
withdrew -- Отошел 
within -- внутри, внутрь (w-)
without -- без
witness -- свидетель
witnessed -- Засвидетельствованный 
wits -- Остроумие 
wizard -- колдун, специалист своего дела !NEW!
wizards -- Волшебники 
woke -- будил (от wake)
woken -- разбуженный (от wake)
wolf -- волк
wolves -- Волки 
woman -- женщина
women -- женщины (от woman)
won -- победил, побежденный (от win)
wonder -- удивляться
wonderful -- замечательный, чудесный
wonderfully -- Чудесно w- TR!)
wondering -- удивляющийся, интересующийся (-ing) !NEW!
wood -- лес, древесина, дрова
wooden -- деревянный
woodland -- лесистая местность
woodlands -- Лесистые местности 
wool -- шерсть
woollen -- шерстяной
word -- слово, обещание
wording -- редакция, форма выражения, формулировка -ing
words -- слова (от word)
wore -- носил, изнашивал (w-) !NEW!
work -- работать, делать, работа, труд
worked -- работал, сработанный (от work)
worker -- рабочий
working -- делающий, творящий (от work)
workman -- рабочий (мужик)
workroom -- Рабочее помещение 
workshop -- мастерская
world -- мир, свет
worlds -- Миры 
worm -- червь, глист, ничтожество (перен.)
worn -- потёртый, изношенный !NEW!
worry -- беспокоиться
worse -- хуже (от bad)
worship -- поклоняться (не regards)
worst -- наихудший
worth -- стоящий, заслуживающий
worthless -- ничего не стоящий, дрянной
worthy -- достойный
would -- вспомогательный, модальный глагол (от will)
wound -- рана
wounded -- раненый
wow -- Ничего себе 
wrap -- завертывать, шаль, плед, обертка
wrath -- гнев, ярость
wreck -- крушение (w-)
wren -- Крапивник 
wrestle -- бороться
wretch -- несчастный, негодяй
wretched -- несчастный, жалкий
wring -- скручивать, выжимать
wrinkle -- морщина, морщить(ся)
wrist -- наручный, запястье
write -- писать, записывать
writer -- писатель
writing -- письменность (-ing)
written -- письменный, написанный
wrong -- неправильный, не тот
wrote -- писал, написанный (от write)
yacht -- яхта
yard -- ярд, двор
yawn -- зевать, зевота
ye -- Вы 
yeah -- да !NEW!
year -- год
yearling -- козленок, ягненок
yell -- пронзительный крик, кричать, вопить
yellow -- желтый
yes -- да
yesterday -- вчера
yet -- однако, еще
yield -- приносить 
yielded -- Выданный 
yielding -- Выдающий(уступающий) -ing 
yoke -- иго, ярмо
yonder -- вон тот !NEW!
you -- вы, ты
young -- молодой
younger -- моложе (от young)
youngest -- самый молодой, младший (от young)
youngster -- юноша
your -- ваш, твой
yours -- ваш, ваши, твой, твои
yourself -- сам, сами
yourselves -- Самостоятельно 
youth -- молодежь
youthful -- юный, юношеский 
yuri -- Юрий 
zeal -- усердие, рвение
zero -- ноль
zigzag -- Зигзаг 
zinc -- цинк, цинковый, оцинковывать
zone -- зона
zoo -- зоопарк
zoological -- Зоологический`;

module.exports = data;


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(appCtrl, platform, statusBar, splashScreen) {
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Домашняя', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-home-outline', type: 'None' },
            { title: 'Известные слова', component: 'WordsViewerPage', icon: 'ios-search-outline', type: 'knownWords' },
            { title: 'Выученные слова', component: 'WordsViewerPage', icon: 'cloud-outline', type: 'learnedWords' },
            { title: 'Слова для повторения', component: 'WordsViewerPage', icon: 'ios-information-circle-outline', type: 'toRepeatWords' },
            { title: 'Пройти тест', component: 'WordTestPage', icon: 'stats', type: 'None' },
            { title: 'Помощь', component: 'HelpScreenPage', icon: 'help-circle-outline', type: 'None' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.pushTo = function (page) {
        if (page.title == 'Домашняя')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        else if (page.type != 'None')
            this.appCtrl.getRootNav().push(page.component, page.type);
        else
            this.appCtrl.getRootNav().push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\APPS\Wordex-app-master\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-content text-center>\n    <h2 class="mono">WORDEX</h2>\n    <h6><b class="eina">v. 3.0</b></h6>\n    <ion-list>\n      <ion-item *ngFor="let page of pages" (click)="pushTo(page);" menuClose>\n        <ion-icon name="{{ page.icon }}"></ion-icon><span class="monts b"> {{ page.title }}</span></ion-item>\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer text-center>\n      <h6 class="eina"><a href="https://github.com/danmoop">Github</a></h6>\n      <h6 class="eina">dandurnev1@gmail.com</h6>\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\APPS\Wordex-app-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map