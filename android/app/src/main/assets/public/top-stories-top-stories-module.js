(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-stories-top-stories-module"],{

/***/ "4FGe":
/*!****************************************************************!*\
  !*** ./src/app/tabs/top-stories/top-stories-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: TopStoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoriesPageRoutingModule", function() { return TopStoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _top_stories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-stories.page */ "6reu");




const routes = [
    {
        path: '',
        component: _top_stories_page__WEBPACK_IMPORTED_MODULE_3__["TopStoriesPage"],
    }
];
let TopStoriesPageRoutingModule = class TopStoriesPageRoutingModule {
};
TopStoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TopStoriesPageRoutingModule);



/***/ }),

/***/ "6reu":
/*!******************************************************!*\
  !*** ./src/app/tabs/top-stories/top-stories.page.ts ***!
  \******************************************************/
/*! exports provided: TopStoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoriesPage", function() { return TopStoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TopStoriesPage = class TopStoriesPage {
    constructor() {
        this.stories = [{ img: 'assets/icon/favicon.png' }];
    }
};
TopStoriesPage.ctorParameters = () => [];
TopStoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-stories',
        template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>Top Stories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [fullscreen]="true">
      <ion-list>
        <ion-item *ngFor="let story of stories">
          <ion-img [src]="story.img"></ion-img>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
    })
], TopStoriesPage);



/***/ }),

/***/ "NNtt":
/*!********************************************************!*\
  !*** ./src/app/tabs/top-stories/top-stories.module.ts ***!
  \********************************************************/
/*! exports provided: TopStoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoriesPageModule", function() { return TopStoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _top_stories_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-stories.page */ "6reu");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _top_stories_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-stories-routing.module */ "4FGe");







let TopStoriesPageModule = class TopStoriesPageModule {
};
TopStoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponentModule"],
            _top_stories_routing_module__WEBPACK_IMPORTED_MODULE_6__["TopStoriesPageRoutingModule"],
        ],
        declarations: [_top_stories_page__WEBPACK_IMPORTED_MODULE_4__["TopStoriesPage"]],
    })
], TopStoriesPageModule);



/***/ })

}]);
//# sourceMappingURL=top-stories-top-stories-module.js.map