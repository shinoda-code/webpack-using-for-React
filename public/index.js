/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/basic/index.ts":
/*!*******************************!*\
  !*** ./src/ts/basic/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.primitiveSample = void 0;
var primitive_1 = __webpack_require__(/*! ./primitive */ "./src/ts/basic/primitive.ts");
Object.defineProperty(exports, "primitiveSample", ({ enumerable: true, get: function () { return __importDefault(primitive_1).default; } }));


/***/ }),

/***/ "./src/ts/basic/primitive.ts":
/*!***********************************!*\
  !*** ./src/ts/basic/primitive.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function primitiveSample() {
    console.log('hi');
}
exports.default = primitiveSample;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/

// import '../scss/app.scss';
Object.defineProperty(exports, "__esModule", ({ value: true }));
//03　基本の型定義
var index_1 = __webpack_require__(/*! ./basic/index */ "./src/ts/basic/index.ts");
index_1.primitiveSample();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map