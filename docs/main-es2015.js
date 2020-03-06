(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Header -->\n<header class=\"app-header\"><span>Linko</span></header>\n<main [@routerAnimation]=\"getPage(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input-card/input-card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/input-card/input-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- form section -->\n<mat-card class=\"input-card\">\n  <mat-card-header>\n    <mat-card-title>Save your Links easy!</mat-card-title>\n  </mat-card-header>\n  <mat-divider [inset]=\"true\"></mat-divider>\n  <mat-card-content>\n    <!--  Link input field -->\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Link</mat-label>\n      <textarea matInput [formControl]=\"linkControl\"></textarea>\n      <!-- Errors - Invalid Link -->\n      <mat-error\n        *ngIf=\"\n          linkControl.hasError('invalidLink') &&\n          !linkControl.hasError('required')\n        \"\n      >\n        Invalid Link\n      </mat-error>\n      <!-- Errors - Required Link -->\n      <mat-error *ngIf=\"linkControl.hasError('required')\">\n        Please insert a link\n      </mat-error>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <!-- Submit Button -->\n    <button mat-button *ngIf=\"!isEditLinkOn\" (click)=\"addLinkEmt.emit()\">\n      Add Link\n    </button>\n    <button mat-button *ngIf=\"isEditLinkOn\" (click)=\"editLinkEmt.emit()\">\n      Edit Link\n    </button>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/link-detail-card/link-detail-card.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/link-detail-card/link-detail-card.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"link-card\">\n  <!-- Delete button -->\n  <div class=\"icon\" *ngIf=\"showEditBtns\" (click)=\"deleteLinkEmt.emit()\">\n    <img src=\"assets/close.png\" alt=\"\" />\n  </div>\n  <!-- Edit Button -->\n  <div class=\"icon edit\" *ngIf=\"showEditBtns\" (click)=\"editLinkEmt.emit()\">\n    <img src=\"assets/edit.png\" alt=\"\" />\n  </div>\n  <!-- Card -->\n  <div class=\"link-image\" [style.backgroundImage]=\"getBkgImg(link.image)\"></div>\n  <div class=\"info\">\n    <h1>{{ link.title }}</h1>\n    <a [href]=\"link.url\">{{ link.url | textEllipsis: 100 }}</a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/overview/overview.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/overview/overview.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\n  <app-input-card\n    [linkControl]=\"form.get('link')\"\n    [isEditLinkOn]=\"!!editedLink\"\n    (addLinkEmt)=\"onLinkSubmit()\"\n    (editLinkEmt)=\"onLinkEditSubmit()\"\n  ></app-input-card>\n  <!-- List section -->\n  <!-- Error message : displays id Url does not exist -->\n  <span class=\"url-warning\" [ngClass]=\"{ show: urlExists === false }\">\n    The Url does not exist. Try again</span\n  >\n  <article class=\"list-area\">\n    <app-link-detail-card\n      *ngFor=\"\n        let link of links | paginate: { itemsPerPage: 20, currentPage: p }\n      \"\n      [link]=\"link\"\n      [showEditBtns]=\"canEditLinks\"\n      (deleteLinkEmt)=\"onDeleteLink(link)\"\n      (editLinkEmt)=\"onEditLink(link)\"\n    ></app-link-detail-card>\n  </article>\n  <pagination-controls\n    class=\"pagination-menu\"\n    (pageChange)=\"p = $event\"\n    maxSize=\"9\"\n    directionLinks=\"true\"\n    previousLabel=\"Prev.\"\n    responsive=\"true\"\n  ></pagination-controls>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/result/result.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/result/result.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\n  <h1>Thank you for your submission!</h1>\n  <!-- ink submitted -->\n  <app-link-detail-card\n    [link]=\"lastLink$ | async\"\n    [showEditBtns]=\"canEditLinks\"\n  ></app-link-detail-card>\n  <!-- Go Back -->\n  <button mat-button (click)=\"routerGo('')\">Back</button>\n</section>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/animations/routing.animations.ts":
/*!**************************************************!*\
  !*** ./src/app/animations/routing.animations.ts ***!
  \**************************************************/
/*! exports provided: routerAnimation, slideRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAnimation", function() { return routerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideRoutes", function() { return slideRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const routerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('OverviewPage => ResultPage', slideRoutes()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('ResultPage => OverviewPage', slideRoutes())
]);
function slideRoutes() {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                width: '100%',
                right: '0'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: '-100%' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: '100%' }))], {
                optional: true
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 200ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: '0%' })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()], {
                optional: true
            })
        ])
    ];
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _containers_result_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/result/result.component */ "./src/app/containers/result/result.component.ts");
/* harmony import */ var _containers_overview_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/overview/overview.component */ "./src/app/containers/overview/overview.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _containers_overview_overview_component__WEBPACK_IMPORTED_MODULE_2__["OverviewComponent"],
        data: { animation: 'OverviewPage' }
    },
    {
        path: 'result',
        component: _containers_result_result_component__WEBPACK_IMPORTED_MODULE_1__["ResultComponent"],
        data: { animation: 'ResultPage' }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-header {\n  background-color: #e91e63;\n  height: 56px;\n  padding: 16px;\n}\n.app-header span {\n  font-size: 30px;\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVzc2lhLmFtaXRyYW5vL0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvYm9va21hcmtzLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG4iLCIuYXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5hcHAtaGVhZGVyIHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animations_routing_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/routing.animations */ "./src/app/animations/routing.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor() {
        // Check the localstorage and get the links from there. If empty initialise the Links object.
        this.localStorage = JSON.parse(localStorage.getItem('Links'));
        console.log('loc', this.localStorage);
    }
    getPage(outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            // tslint:disable-next-line: no-string-literal
            outlet.activatedRouteData['animation']);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_animations_routing_animations__WEBPACK_IMPORTED_MODULE_1__["routerAnimation"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _utils_material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/material-ui/material-ui.module */ "./src/app/utils/material-ui/material-ui.module.ts");
/* harmony import */ var _containers_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/result/result.component */ "./src/app/containers/result/result.component.ts");
/* harmony import */ var _containers_overview_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/overview/overview.component */ "./src/app/containers/overview/overview.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/input-card/input-card.component */ "./src/app/components/input-card/input-card.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_link_detail_card_link_detail_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/link-detail-card/link-detail-card.component */ "./src/app/components/link-detail-card/link-detail-card.component.ts");














// App components
const COMPONENTS = [
    _containers_overview_overview_component__WEBPACK_IMPORTED_MODULE_4__["OverviewComponent"],
    _containers_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"],
    _components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_11__["InputCardComponent"],
    _components_link_detail_card_link_detail_card_component__WEBPACK_IMPORTED_MODULE_13__["LinkDetailCardComponent"]
];
// App modules
const MODULES = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
    _utils_material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__["MaterialUiModule"],
    _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], ...COMPONENTS],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ...MODULES],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/input-card/input-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/input-card/input-card.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-card {\n  min-width: 30%;\n  max-width: 50%;\n  margin: 1.5rem auto;\n  background-color: #424242;\n  color: white;\n}\n.input-card .mat-divider {\n  border-top-color: rgba(255, 255, 255, 0.5);\n  margin-bottom: 1rem;\n}\n.input-card mat-form-field {\n  width: 100%;\n  margin: 0 auto;\n}\n.input-card button {\n  border: 2px solid transparent;\n  -webkit-transition: 0.3s ease-in;\n  transition: 0.3s ease-in;\n}\n.input-card button:hover {\n  border-color: white;\n  -webkit-transform: border;\n          transform: border;\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white;\n}\n::ng-deep mat-label {\n  color: white;\n}\n::ng-deep .mat-input-element {\n  caret-color: white;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVzc2lhLmFtaXRyYW5vL0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvYm9va21hcmtzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQtY2FyZC9pbnB1dC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0LWNhcmQvaW5wdXQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBRjtBREVFO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNGSjtBRElJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDRk47QURPQTtFQUNFLFlBQUE7QUNKRjtBRE9BO0VBQ0UsWUFBQTtBQ0pGO0FET0E7RUFDRSxrQkFBQTtBQ0pGO0FETUE7RUFHRSxZQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0LWNhcmQvaW5wdXQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jYXJkIHtcbiAgLy8gVE9ETzogbWVkaWEgcXVlcnlcbiAgbWluLXdpZHRoOiAzMCU7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDEuNXJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiBib3JkZXI7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgbWF0LWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xufVxuOjpuZy1kZWVwXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWRcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCIuaW5wdXQtY2FyZCB7XG4gIG1pbi13aWR0aDogMzAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAxLjVyZW0gYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmlucHV0LWNhcmQgLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmlucHV0LWNhcmQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaW5wdXQtY2FyZCBidXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xufVxuLmlucHV0LWNhcmQgYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBib3JkZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgbWF0LWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/input-card/input-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/input-card/input-card.component.ts ***!
  \***************************************************************/
/*! exports provided: InputCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCardComponent", function() { return InputCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputCardComponent = class InputCardComponent {
    constructor() {
        // Event emitter for Link Add
        this.addLinkEmt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Event emitter for link Edit
        this.editLinkEmt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputCardComponent.prototype, "linkControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputCardComponent.prototype, "isEditLinkOn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InputCardComponent.prototype, "addLinkEmt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InputCardComponent.prototype, "editLinkEmt", void 0);
InputCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input-card/input-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-card.component.scss */ "./src/app/components/input-card/input-card.component.scss")).default]
    })
], InputCardComponent);



/***/ }),

/***/ "./src/app/components/link-detail-card/link-detail-card.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/link-detail-card/link-detail-card.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".link-card {\n  width: 11.875rem;\n  height: 18.75rem;\n  margin: 1.5rem;\n  background-color: #424242;\n  color: white;\n  box-shadow: 2px 3px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: nowrap;\n  text-align: center;\n  position: relative;\n}\n.link-card .icon {\n  position: absolute;\n  right: -0.5rem;\n  top: -0.5rem;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #424242;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 2px 3px rgba(0, 0, 0, 0.5);\n}\n.link-card .icon.edit {\n  top: 2rem;\n}\n.link-card .icon img {\n  width: 10px;\n  height: 10px;\n  padding-bottom: 1px;\n}\n.link-card .link-image {\n  border-radius: 5px;\n  height: 6.25rem;\n  background-position: center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: white;\n  width: 93%;\n  margin: 6px auto;\n}\n.link-card .info {\n  padding: 0.5rem;\n}\n.link-card .info h1 {\n  font-size: 15px;\n}\n.link-card .info a {\n  font-size: 12px;\n  color: white;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVzc2lhLmFtaXRyYW5vL0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvYm9va21hcmtzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGluay1kZXRhaWwtY2FyZC9saW5rLWRldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpbmstZGV0YWlsLWNhcmQvbGluay1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNDQUFBO0FDQUo7QURFSTtFQUNFLFNBQUE7QUNBTjtBREdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0ROO0FES0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FES0U7RUFDRSxlQUFBO0FDSEo7QURLSTtFQUNFLGVBQUE7QUNITjtBRE1JO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saW5rLWRldGFpbC1jYXJkL2xpbmstZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluay1jYXJkIHtcbiAgLy8gVE9ETzogbWVkaWEgcXVlcnlcbiAgd2lkdGg6IDExLjg3NXJlbTtcbiAgaGVpZ2h0OiAxOC43NXJlbTtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgdG9wOiAtMC41cmVtO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuXG4gICAgJi5lZGl0IHtcbiAgICAgIHRvcDogMnJlbTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgIH1cbiAgfVxuXG4gIC5saW5rLWltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDkzJTtcbiAgICBtYXJnaW46IDZweCBhdXRvO1xuICB9XG4gIC5pbmZvIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIH1cbiAgfVxufVxuIiwiLmxpbmstY2FyZCB7XG4gIHdpZHRoOiAxMS44NzVyZW07XG4gIGhlaWdodDogMTguNzVyZW07XG4gIG1hcmdpbjogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saW5rLWNhcmQgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMC41cmVtO1xuICB0b3A6IC0wLjVyZW07XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ubGluay1jYXJkIC5pY29uLmVkaXQge1xuICB0b3A6IDJyZW07XG59XG4ubGluay1jYXJkIC5pY29uIGltZyB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG4ubGluay1jYXJkIC5saW5rLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDYuMjVyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MyU7XG4gIG1hcmdpbjogNnB4IGF1dG87XG59XG4ubGluay1jYXJkIC5pbmZvIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLmxpbmstY2FyZCAuaW5mbyBoMSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5saW5rLWNhcmQgLmluZm8gYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/link-detail-card/link-detail-card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/link-detail-card/link-detail-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: LinkDetailCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkDetailCardComponent", function() { return LinkDetailCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let LinkDetailCardComponent = class LinkDetailCardComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        // Event for link deletion
        this.deleteLinkEmt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Event for link editing
        this.editLinkEmt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    // sanitize background image
    getBkgImg(url) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    }
};
LinkDetailCardComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LinkDetailCardComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LinkDetailCardComponent.prototype, "showEditBtns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LinkDetailCardComponent.prototype, "deleteLinkEmt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LinkDetailCardComponent.prototype, "editLinkEmt", void 0);
LinkDetailCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-link-detail-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./link-detail-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/link-detail-card/link-detail-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link-detail-card.component.scss */ "./src/app/components/link-detail-card/link-detail-card.component.scss")).default]
    })
], LinkDetailCardComponent);



/***/ }),

/***/ "./src/app/containers/overview/overview.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/containers/overview/overview.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  text-align: center;\n}\n.container .url-warning {\n  margin: 0 auto;\n  font-size: 25px;\n  color: #f44336;\n  opacity: 0;\n  -webkit-transition: 0.3s linear;\n  transition: 0.3s linear;\n}\n.container .url-warning.show {\n  opacity: 1;\n  -webkit-transform: opacity;\n          transform: opacity;\n}\n.container .list-area {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .pagination-menu {\n  margin: 0 auto;\n}\n.container .pagination-menu ::ng-deep a {\n  color: #cacaca !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVzc2lhLmFtaXRyYW5vL0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvYm9va21hcmtzLWFwcC9zcmMvYXBwL2NvbnRhaW5lcnMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFBQSx1QkFBQTtBQ0VKO0FEQUk7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ0VOO0FEQ0U7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7QUNBSjtBREVJO0VBQ0UseUJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAudXJsLXdhcm5pbmcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xuXG4gICAgJi5zaG93IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IG9wYWNpdHk7XG4gICAgfVxuICB9XG4gIC5saXN0LWFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wYWdpbmF0aW9uLW1lbnUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgOjpuZy1kZWVwIGEge1xuICAgICAgY29sb3I6ICNjYWNhY2EgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC51cmwtd2FybmluZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcbn1cbi5jb250YWluZXIgLnVybC13YXJuaW5nLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IG9wYWNpdHk7XG59XG4uY29udGFpbmVyIC5saXN0LWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnBhZ2luYXRpb24tbWVudSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAucGFnaW5hdGlvbi1tZW51IDo6bmctZGVlcCBhIHtcbiAgY29sb3I6ICNjYWNhY2EgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/containers/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var src_app_core_facades_link_state_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/facades/link-state.facade */ "./src/app/core/facades/link-state.facade.ts");





// Regular expression to validate Urls
const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
let OverviewComponent = class OverviewComponent {
    constructor(store, linksFacade) {
        this.store = store;
        this.linksFacade = linksFacade;
        // page
        this.p = 1;
        // Boolean to show edit buttons on links
        this.canEditLinks = true;
        // Boolean to show the edit process is on
        this.isEditingLink = false;
        linksFacade.links$.subscribe(links => (this.links = links));
        linksFacade.urlExists$.subscribe(exists => (this.urlExists = exists));
    }
    ngOnInit() {
        // Initialise the form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.isValidLink])
        });
    }
    // perform http call to check that Url exists and retreive info, otherwise handle error
    onLinkSubmit() {
        const link = this.form.get('link').value;
        console.log('link', link);
        this.linksFacade.getLinkInfo(link, this.links);
    }
    // Deletes link from the list
    onDeleteLink(link) {
        console.log('Deleting item with id ', link.id);
        this.linksFacade.deleteLink(link, this.links);
    }
    // Sets the form to edit the selected Link
    onEditLink(link) {
        this.form.setValue({ link: link.url });
        this.editedLink = link;
        document.documentElement.scrollTop = 0;
    }
    // Edits the link and sends to the store
    onLinkEditSubmit() {
        const link = this.form.get('link').value;
        this.linksFacade.getEditLinkInfo(link, this.editedLink.id, this.links);
        this.editedLink = null;
        this.form.reset();
    }
    // Check Link with Regular Expression
    isValidLink(control) {
        const textExp = urlRegex;
        if (!textExp.test(control.value)) {
            return { invalidLink: true };
        }
        return null;
    }
};
OverviewComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: src_app_core_facades_link_state_facade__WEBPACK_IMPORTED_MODULE_4__["LinkStateFacade"] }
];
OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/overview/overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./overview.component.scss */ "./src/app/containers/overview/overview.component.scss")).default]
    })
], OverviewComponent);



/***/ }),

/***/ "./src/app/containers/result/result.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/containers/result/result.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container h1 {\n  margin-top: 4rem;\n  color: white;\n}\n.container app-link-detail-card {\n  margin: 1rem auto;\n}\n.container button {\n  color: white;\n  border: 2px solid transparent;\n  -webkit-transition: 0.3s ease-in;\n  transition: 0.3s ease-in;\n  width: 8rem;\n  margin: 2rem auto;\n}\n.container button:hover {\n  border-color: white;\n  -webkit-transform: border;\n          transform: border;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVzc2lhLmFtaXRyYW5vL0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvYm9va21hcmtzLWFwcC9zcmMvYXBwL2NvbnRhaW5lcnMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDREo7QURHSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaDEge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgYXBwLWxpbmstZGV0YWlsLWNhcmQge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiBib3JkZXI7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgaDEge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIGFwcC1saW5rLWRldGFpbC1jYXJkIHtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4uY29udGFpbmVyIGJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcbiAgd2lkdGg6IDhyZW07XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xufVxuLmNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IGJvcmRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/containers/result/result.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/result/result.component.ts ***!
  \*******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_store_link_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/store/link.selectors */ "./src/app/core/store/link.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");





let ResultComponent = class ResultComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        // Boolean to show edit buttons on links
        this.canEditLinks = false;
    }
    ngOnInit() { }
    // facilitator for the router method
    routerGo(route) {
        this.router.navigate([route]);
    }
};
ResultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_core_store_link_selectors__WEBPACK_IMPORTED_MODULE_1__["LinkSelectors"].getLastLink)
], ResultComponent.prototype, "lastLink$", void 0);
ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/result/result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result.component.scss */ "./src/app/containers/result/result.component.scss")).default]
    })
], ResultComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_link_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/link.state */ "./src/app/core/store/link.state.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm2015/ngxs-storage-plugin.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm2015/ngxs-devtools-plugin.js");
/* harmony import */ var _pipes_text_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/text-ellipsis.pipe */ "./src/app/core/pipes/text-ellipsis.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");





// NgXs modules




// Pagination Module

let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_pipes_text_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["TextEllipsisPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forRoot([_store_link_state__WEBPACK_IMPORTED_MODULE_1__["LinkState"]], {
                developmentMode: !src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production
            }),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsStoragePluginModule"].forRoot({
                key: ['Links']
            }),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsReduxDevtoolsPluginModule"].forRoot({
                disabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production
            })
        ],
        exports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _pipes_text_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["TextEllipsisPipe"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/facades/link-state.facade.ts":
/*!***************************************************!*\
  !*** ./src/app/core/facades/link-state.facade.ts ***!
  \***************************************************/
/*! exports provided: LinkStateFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkStateFacade", function() { return LinkStateFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_link_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/link.actions */ "./src/app/core/store/link.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/app/core/store/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let LinkStateFacade = class LinkStateFacade {
    constructor(http, store, router) {
        this.http = http;
        this.store = store;
        this.router = router;
        // Invalid response status code (actual response code from the remote server)
        this.invalidUrlCode = 425;
        // Id of the last link added
        this.nextLinkId = 0;
        // Boolean to signal the website doesn't exists (the http call returned an error)
        this.urlExists$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
    }
    // performs a Get, adds link if successful otherwise returns an error
    getLinkInfo(url, links) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].linkPreviewKey + url).subscribe((data) => {
            this.urlExists$.next(true);
            this.addLink(data, links);
        }, error => {
            console.log('error', error);
            if (error.status === this.invalidUrlCode) {
                this.urlExists$.next(false);
                setTimeout(() => {
                    this.urlExists$.next(null);
                }, 5000);
            }
        });
    }
    // delete link
    deleteLink(link, links) {
        const newList = links.length > 1 ? links.filter(el => el.id !== link.id) : [];
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_5__["DeleteLink"](newList));
    }
    // performs a get, if successful edits the link
    getEditLinkInfo(url, linkId, links) {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].linkPreviewKey + url).subscribe((data) => {
            this.urlExists$.next(true);
            this.editLink(data, linkId, links);
        }, error => {
            console.log('error', error);
            if (error.status === this.invalidUrlCode) {
                this.urlExists$.next(false);
                setTimeout(() => {
                    this.urlExists$.next(null);
                }, 5000);
            }
        });
    }
    // add link to the array in store and localstorage
    addLink(linkData, links) {
        if (links.length !== 0) {
            this.nextLinkId++;
        }
        linkData.id = this.nextLinkId;
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_5__["AddLink"](linkData));
        // go to the result page
        this.routerGo('result');
    }
    editLink(linkData, id, links) {
        const data = [...links];
        const newList = [];
        for (const link of data) {
            if (link.id === id) {
                link.description = linkData.description;
                link.image = linkData.image;
                link.title = linkData.title;
                link.url = linkData.url;
            }
            newList.push(link);
        }
        this.store.dispatch(new _store_link_actions__WEBPACK_IMPORTED_MODULE_1__["EditLink"](newList));
    }
    // facilitator for the router method
    routerGo(route) {
        this.router.navigate([route]);
    }
};
LinkStateFacade.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store__WEBPACK_IMPORTED_MODULE_5__["LinkSelectors"].getLinks)
], LinkStateFacade.prototype, "links$", void 0);
LinkStateFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], LinkStateFacade);



/***/ }),

/***/ "./src/app/core/pipes/text-ellipsis.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/core/pipes/text-ellipsis.pipe.ts ***!
  \**************************************************/
/*! exports provided: TextEllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEllipsisPipe", function() { return TextEllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextEllipsisPipe = class TextEllipsisPipe {
    // if a maxLength is passed, a substring is returned
    transform(text, maxLength) {
        if (maxLength === undefined) {
            return text;
        }
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        else {
            return text;
        }
    }
};
TextEllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'textEllipsis'
    })
], TextEllipsisPipe);



/***/ }),

/***/ "./src/app/core/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/*! exports provided: LINK_INITIAL_STATE, LinkState, LinkSelectors, AddLink, EditLink, DeleteLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _link_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link.adapter */ "./src/app/core/store/link.adapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LINK_INITIAL_STATE", function() { return _link_adapter__WEBPACK_IMPORTED_MODULE_1__["LINK_INITIAL_STATE"]; });

/* harmony import */ var _link_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.state */ "./src/app/core/store/link.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkState", function() { return _link_state__WEBPACK_IMPORTED_MODULE_2__["LinkState"]; });

/* harmony import */ var _link_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link.selectors */ "./src/app/core/store/link.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkSelectors", function() { return _link_selectors__WEBPACK_IMPORTED_MODULE_3__["LinkSelectors"]; });

/* harmony import */ var _link_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link.actions */ "./src/app/core/store/link.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddLink", function() { return _link_actions__WEBPACK_IMPORTED_MODULE_4__["AddLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditLink", function() { return _link_actions__WEBPACK_IMPORTED_MODULE_4__["EditLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteLink", function() { return _link_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteLink"]; });








/***/ }),

/***/ "./src/app/core/store/link.actions.ts":
/*!********************************************!*\
  !*** ./src/app/core/store/link.actions.ts ***!
  \********************************************/
/*! exports provided: AddLink, EditLink, DeleteLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLink", function() { return AddLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLink", function() { return EditLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteLink", function() { return DeleteLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Add Link to State
class AddLink {
    constructor(payload) {
        this.payload = payload;
    }
}
AddLink.type = '[Link] Add Link';
// Edit Link to State
class EditLink {
    constructor(payload) {
        this.payload = payload;
    }
}
EditLink.type = '[Link] Edit Link';
// Delete Link from State
class DeleteLink {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteLink.type = '[Link] Delete Link';


/***/ }),

/***/ "./src/app/core/store/link.adapter.ts":
/*!********************************************!*\
  !*** ./src/app/core/store/link.adapter.ts ***!
  \********************************************/
/*! exports provided: LINK_INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINK_INITIAL_STATE", function() { return LINK_INITIAL_STATE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const LINK_INITIAL_STATE = {
    links: [],
    lastLink: null
};


/***/ }),

/***/ "./src/app/core/store/link.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/core/store/link.selectors.ts ***!
  \**********************************************/
/*! exports provided: LinkSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkSelectors", function() { return LinkSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _link_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.state */ "./src/app/core/store/link.state.ts");



class LinkSelectors {
    static getLinks(state) {
        return state.links;
    }
    static getLastLink(state) {
        return state.lastLink;
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_link_state__WEBPACK_IMPORTED_MODULE_2__["LinkState"]])
], LinkSelectors, "getLinks", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_link_state__WEBPACK_IMPORTED_MODULE_2__["LinkState"]])
], LinkSelectors, "getLastLink", null);


/***/ }),

/***/ "./src/app/core/store/link.state.ts":
/*!******************************************!*\
  !*** ./src/app/core/store/link.state.ts ***!
  \******************************************/
/*! exports provided: LinkState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkState", function() { return LinkState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _link_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link.actions */ "./src/app/core/store/link.actions.ts");
/* harmony import */ var _link_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.adapter */ "./src/app/core/store/link.adapter.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");




let LinkState = class LinkState {
    // Add link to state
    addLink({ getState, setState }, { payload }) {
        const state = getState();
        const newLinks = [...state.links, payload];
        setState(Object.assign({}, state, { links: newLinks, lastLink: payload }));
    }
    // Delete link from state
    deleteLink(ctx, { payload }) {
        const state = ctx.getState();
        ctx.patchState({ links: payload, lastLink: null });
    }
    // Edit link from state
    editLink(ctx, { payload }) {
        const state = ctx.getState();
        ctx.patchState({ links: payload });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_link_actions__WEBPACK_IMPORTED_MODULE_1__["AddLink"])
], LinkState.prototype, "addLink", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_link_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteLink"])
], LinkState.prototype, "deleteLink", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(_link_actions__WEBPACK_IMPORTED_MODULE_1__["EditLink"])
], LinkState.prototype, "editLink", null);
LinkState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'Links',
        defaults: _link_adapter__WEBPACK_IMPORTED_MODULE_2__["LINK_INITIAL_STATE"]
    })
], LinkState);



/***/ }),

/***/ "./src/app/utils/material-ui/material-ui.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/utils/material-ui/material-ui.module.ts ***!
  \*********************************************************/
/*! exports provided: MATERIALS, MaterialUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIALS", function() { return MATERIALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialUiModule", function() { return MaterialUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




const MATERIALS = [
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
];
let MaterialUiModule = class MaterialUiModule {
};
MaterialUiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [...MATERIALS],
        exports: [...MATERIALS]
    })
], MaterialUiModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    linkPreviewKey: 'https://api.linkpreview.net/?key=8effd7b1c1426f18a868e77098a34f13&q='
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alessia.amitrano/Desktop/Projects/Personal/bookmarks-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map