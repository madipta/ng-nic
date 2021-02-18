(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["most-popular-most-popular-module"],{

/***/ "LimV":
/*!******************************************************************!*\
  !*** ./src/app/tabs/most-popular/most-popular-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MostPopularPageModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostPopularPageModuleRoutingModule", function() { return MostPopularPageModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _most_popular_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./most-popular.page */ "t8RD");




const routes = [
    {
        path: '',
        component: _most_popular_page__WEBPACK_IMPORTED_MODULE_3__["MostPopularPage"],
    }
];
let MostPopularPageModuleRoutingModule = class MostPopularPageModuleRoutingModule {
};
MostPopularPageModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MostPopularPageModuleRoutingModule);



/***/ }),

/***/ "t8RD":
/*!********************************************************!*\
  !*** ./src/app/tabs/most-popular/most-popular.page.ts ***!
  \********************************************************/
/*! exports provided: MostPopularPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostPopularPage", function() { return MostPopularPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MostPopularPage = class MostPopularPage {
    constructor() { }
};
MostPopularPage.ctorParameters = () => [];
MostPopularPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-most-popular',
        template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>Most Popular</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <app-explore-container name="Tab 2 page"></app-explore-container>
    </ion-content>`,
    })
], MostPopularPage);



/***/ }),

/***/ "tb1p":
/*!**********************************************************!*\
  !*** ./src/app/tabs/most-popular/most-popular.module.ts ***!
  \**********************************************************/
/*! exports provided: MostPopularPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostPopularPageModule", function() { return MostPopularPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _most_popular_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./most-popular.page */ "t8RD");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _most_popular_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./most-popular-routing.module */ "LimV");







let MostPopularPageModule = class MostPopularPageModule {
};
MostPopularPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponentModule"],
            _most_popular_routing_module__WEBPACK_IMPORTED_MODULE_6__["MostPopularPageModuleRoutingModule"]
        ],
        declarations: [_most_popular_page__WEBPACK_IMPORTED_MODULE_4__["MostPopularPage"]]
    })
], MostPopularPageModule);



/***/ })

}]);
//# sourceMappingURL=most-popular-most-popular-module.js.map