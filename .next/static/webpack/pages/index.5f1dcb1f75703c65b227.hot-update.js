/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/bdl/Amazon-starter-template-nextjs/src/components/ProductFeed.js\";\n\n\n\nfunction ProductFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full\",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"md:col-span-2\",\n      children: products.slice(4, 5).map(function (_ref3) {\n        var id = _ref3.id,\n            title = _ref3.title,\n            price = _ref3.price,\n            description = _ref3.description,\n            category = _ref3.category,\n            image = _ref3.image;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n          id: id,\n          title: title,\n          price: price,\n          description: description,\n          category: category,\n          image: image\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }, this), products.slice(5, products.lengh).map(function (_ref4) {\n      var id = _ref4.id,\n          title = _ref4.title,\n          price = _ref4.price,\n          description = _ref4.description,\n          category = _ref4.category,\n          image = _ref4.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanM/MDU1YiJdLCJuYW1lcyI6WyJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwic2xpY2UiLCJtYXAiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJsZW5naCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ2pDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlGQUFmO0FBQUEsZUFFTUEsUUFBUSxDQUNMQyxLQURILENBQ1MsQ0FEVCxFQUNZLENBRFosRUFFR0MsR0FGSCxDQUVPO0FBQUEsVUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsVUFBT0MsS0FBUCxTQUFPQSxLQUFQO0FBQUEsVUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsVUFBcUJDLFdBQXJCLFNBQXFCQSxXQUFyQjtBQUFBLFVBQWtDQyxRQUFsQyxTQUFrQ0EsUUFBbEM7QUFBQSxVQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsMEJBQ0gsOERBQUMsNkNBQUQ7QUFFTyxVQUFFLEVBQUVMLEVBRlg7QUFHTyxhQUFLLEVBQUVDLEtBSGQ7QUFJTyxhQUFLLEVBQUVDLEtBSmQ7QUFLTyxtQkFBVyxFQUFFQyxXQUxwQjtBQU1PLGdCQUFRLEVBQUVDLFFBTmpCO0FBT08sYUFBSyxFQUFFQztBQVBkLFNBQ1lMLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURHO0FBQUEsS0FGUCxDQUZOLGVBZUs7QUFDQSxlQUFTLEVBQUMsa0JBRFY7QUFFQSxTQUFHLEVBQUMsaUNBRko7QUFHQSxTQUFHLEVBQUM7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkwsZUFvQks7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNJSCxRQUFRLENBQ05DLEtBREYsQ0FDUSxDQURSLEVBQ1csQ0FEWCxFQUVFQyxHQUZGLENBRU07QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxZQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxZQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxZQUFxQkMsV0FBckIsU0FBcUJBLFdBQXJCO0FBQUEsWUFBa0NDLFFBQWxDLFNBQWtDQSxRQUFsQztBQUFBLFlBQTRDQyxLQUE1QyxTQUE0Q0EsS0FBNUM7QUFBQSw0QkFDSCw4REFBQyw2Q0FBRDtBQUVLLFlBQUUsRUFBRUwsRUFGVDtBQUdLLGVBQUssRUFBRUMsS0FIWjtBQUlLLGVBQUssRUFBRUMsS0FKWjtBQUtLLHFCQUFXLEVBQUVDLFdBTGxCO0FBTUssa0JBQVEsRUFBRUMsUUFOZjtBQU9LLGVBQUssRUFBRUM7QUFQWixXQUNVTCxFQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFBQSxPQUZOO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCTCxFQW9DTUgsUUFBUSxDQUNIQyxLQURMLENBQ1csQ0FEWCxFQUNjRCxRQUFRLENBQUNTLEtBRHZCLEVBRUtQLEdBRkwsQ0FFUztBQUFBLFVBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFVBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFVBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFVBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxVQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsVUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDBCQUNILDhEQUFDLDZDQUFEO0FBRUssVUFBRSxFQUFFTCxFQUZUO0FBR0ssYUFBSyxFQUFFQyxLQUhaO0FBSUssYUFBSyxFQUFFQyxLQUpaO0FBS0ssbUJBQVcsRUFBRUMsV0FMbEI7QUFNSyxnQkFBUSxFQUFFQyxRQU5mO0FBT0ssYUFBSyxFQUFFQztBQVBaLFNBQ1VMLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURHO0FBQUEsS0FGVCxDQXBDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9ERDs7S0FyRFFKLFc7QUF1RFQsK0RBQWVBLFdBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCdcblxuZnVuY3Rpb24gUHJvZHVjdEZlZWQoeyBwcm9kdWN0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0byc+XG4gICAgICAgICB7LyogPHA+IHByb2R1Y3Qgd2lsbCBnbyBoZXJlPC9wPiAqL31cbiAgICAgICAgIHtwcm9kdWN0c1xuICAgICAgICAgICAgLnNsaWNlKDAsIDQpXG4gICAgICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4oXG4gICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfSBcbiAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH0gXG4gICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfSBcbiAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9IFxuICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfSBcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgKSl9XG4gICAgICAgICA8aW1nIFxuICAgICAgICAgY2xhc3NOYW1lPSdtZDpjb2wtc3Bhbi1mdWxsJyBcbiAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9keXpcIiBcbiAgICAgICAgIGFsdD1cIlwiIC8+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpjb2wtc3Bhbi0yJz5cbiAgICAgICAgICAgIHtwcm9kdWN0c1xuICAgICAgICAgICAgICAuc2xpY2UoNCwgNSlcbiAgICAgICAgICAgICAgLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+KFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfSBcbiAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH0gXG4gICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfSBcbiAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9IFxuICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfSBcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgKSl9XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAge3Byb2R1Y3RzXG4gICAgICAgICAgICAgIC5zbGljZSg1LCBwcm9kdWN0cy5sZW5naClcbiAgICAgICAgICAgICAgLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+KFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfSBcbiAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH0gXG4gICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfSBcbiAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9IFxuICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfSBcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWRcbiAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n");

/***/ })

});