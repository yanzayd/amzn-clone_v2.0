/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n//GLOBAL STORE SETUP\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUVsRCxvQkFBb0I7QUFDYixNQUFNRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7SUFDbENHLE9BQU8sRUFBRTtRQUNQQyxNQUFNLEVBQUVILDJEQUFhO0tBQ3RCO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL2FwcC9zdG9yZS5qcz81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBiYXNrZXRSZWR1Y2VyIGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcblxuLy9HTE9CQUwgU1RPUkUgU0VUVVBcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGJhc2tldDogYmFza2V0UmVkdWNlcixcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiYmFza2V0UmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsImJhc2tldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/bdl/Amazon-starter-template-nextjs/src/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/bdl/Amazon-starter-template-nextjs/src/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bdl/Amazon-starter-template-nextjs/src/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDRjtBQUNOO0FBQ29CO0FBR2xELE1BQU1HLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDMUMscUJBQ0UsOERBQUNILDREQUFlO1FBQUNJLE9BQU8sRUFBRUQsU0FBUyxDQUFDQyxPQUFPO2tCQUN6Qyw0RUFBQ04saURBQVE7WUFBQ0MsS0FBSyxFQUFFQSw2Q0FBSztzQkFDcEIsNEVBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7eUJBQUk7Ozs7O3FCQUNuQjs7Ozs7aUJBQ0ssQ0FDbkI7Q0FDRjtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9hcHAvc3RvcmUnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIlNlc3Npb25Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBasket\": () => (/* binding */ addToBasket),\n/* harmony export */   \"basketSlice\": () => (/* binding */ basketSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeFromBasket\": () => (/* binding */ removeFromBasket),\n/* harmony export */   \"selectItems\": () => (/* binding */ selectItems),\n/* harmony export */   \"selectTotal\": () => (/* binding */ selectTotal)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    reducers: {\n        //Actions \n        addToBasket: (state, action)=>{\n            state.items = [\n                ...state.items,\n                action.payload\n            ];\n        },\n        removeFromBasket: (state, action)=>{\n            const index = state.items.findIndex((basketItem)=>basketItem.id === action.payload.id);\n            let newBasket = [\n                ...state.items\n            ];\n            if (index >= 0) {\n                //the item exists in the baskey... remove it...\n                newBasket.splice(index, 1);\n            } else {\n                console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the basket`);\n            }\n            state.items = newBasket;\n        }\n    }\n});\nconst { addToBasket , removeFromBasket  } = basketSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\nconst selectItems = (state)=>state.basket.items;\nconst selectTotal = (state)=>state.basket.items.reduce((total, item)=>total + item.price, 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLFlBQVksR0FBRztJQUNuQkMsS0FBSyxFQUFFLEVBQUU7Q0FDVjtBQUVNLE1BQU1DLFdBQVcsR0FBR0gsNkRBQVcsQ0FBQztJQUNyQ0ksSUFBSSxFQUFFLFFBQVE7SUFDZEgsWUFBWTtJQUNaSSxRQUFRLEVBQUU7UUFDUixVQUFVO1FBQ1ZDLFdBQVcsRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUM5QkQsS0FBSyxDQUFDTCxLQUFLLEdBQUc7bUJBQUlLLEtBQUssQ0FBRUwsS0FBSztnQkFBRU0sTUFBTSxDQUFDQyxPQUFPO2FBQUM7U0FDaEQ7UUFDREMsZ0JBQWdCLEVBQUUsQ0FBQ0gsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDbEMsTUFBTUcsS0FBSyxHQUFHSixLQUFLLENBQUNMLEtBQUssQ0FBQ1UsU0FBUyxDQUNsQyxDQUFDQyxVQUFVLEdBQUtBLFVBQVUsQ0FBQ0MsRUFBRSxLQUFLTixNQUFNLENBQUNDLE9BQU8sQ0FBQ0ssRUFBRSxDQUNuRDtZQUVELElBQUlDLFNBQVMsR0FBRzttQkFBSVIsS0FBSyxDQUFDTCxLQUFLO2FBQUM7WUFFaEMsSUFBR1MsS0FBSyxJQUFJLENBQUMsRUFBQztnQkFDYiwrQ0FBK0M7Z0JBQy9DSSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUMxQixNQUNHO2dCQUNITSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDLHlCQUF5QixFQUFFVixNQUFNLENBQUNDLE9BQU8sQ0FBQ0ssRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDeEY7WUFJQVAsS0FBSyxDQUFDTCxLQUFLLEdBQUdhLFNBQVMsQ0FBQztTQUMxQjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUFFVCxXQUFXLEdBQUVJLGdCQUFnQixHQUFFLEdBQUdQLFdBQVcsQ0FBQ2dCLE9BQU8sQ0FBQztBQUVyRSwwRUFBMEU7QUFDbkUsTUFBTUMsV0FBVyxHQUFHLENBQUNiLEtBQUssR0FBS0EsS0FBSyxDQUFDYyxNQUFNLENBQUNuQixLQUFLLENBQUM7QUFDbEQsTUFBTW9CLFdBQVcsR0FBRyxDQUFDZixLQUFLLEdBQ2hDQSxLQUFLLENBQUNjLE1BQU0sQ0FBQ25CLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLEVBQUVDLElBQUksR0FBS0QsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFFbEUsaUVBQWV2QixXQUFXLENBQUN3QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzPzg5NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNrZXRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJiYXNrZXRcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIC8vQWN0aW9ucyBcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlIC5pdGVtcywgYWN0aW9uLnBheWxvYWRdXG4gICAgfSxcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KFxuICAgICAgICAoYmFza2V0SXRlbSkgPT4gYmFza2V0SXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICApXG4gICAgICAgXG4gICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc107XG5cbiAgICAgICBpZihpbmRleCA+PSAwKXtcbiAgICAgICAgLy90aGUgaXRlbSBleGlzdHMgaW4gdGhlIGJhc2tleS4uLiByZW1vdmUgaXQuLi5cbiAgICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICB9XG4gICAgICAgZWxzZXtcbiAgICAgICAgY29uc29sZS53YXJuKGBDYW50IHJlbW92ZSBwcm9kdWN0IChpZDogJHthY3Rpb24ucGF5bG9hZC5pZH0pIGFzIGl0cyBub3QgaW4gdGhlIGJhc2tldGApXG4gICAgICB9XG4gICAgICAgIFxuICAgICAgIFxuXG4gICAgICAgc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PlxuIHN0YXRlLmJhc2tldC5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UsIDApXG5cbmV4cG9ydCBkZWZhdWx0IGJhc2tldFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9CYXNrZXQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZW1vdmVGcm9tQmFza2V0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJiYXNrZXRJdGVtIiwiaWQiLCJuZXdCYXNrZXQiLCJzcGxpY2UiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInNlbGVjdFRvdGFsIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwicHJpY2UiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();