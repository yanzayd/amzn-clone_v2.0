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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/bdl/Amazon-starter-template-nextjs/src/components/ProductFeed.js\";\n\n\n\nfunction ProductFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full\",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"md:col-span\",\n      children: products.slice(4, 5).map(function (_ref3) {\n        var id = _ref3.id,\n            title = _ref3.title,\n            price = _ref3.price,\n            description = _ref3.description,\n            category = _ref3.category,\n            image = _ref3.image;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n          id: id,\n          title: title,\n          price: price,\n          description: description,\n          category: category,\n          image: image\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanM/MDU1YiJdLCJuYW1lcyI6WyJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwic2xpY2UiLCJtYXAiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUFtQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUNqQyxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5RkFBZjtBQUFBLGVBRU1BLFFBQVEsQ0FDTEMsS0FESCxDQUNTLENBRFQsRUFDWSxDQURaLEVBRUdDLEdBRkgsQ0FFTztBQUFBLFVBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFVBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLFVBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFVBQXFCQyxXQUFyQixTQUFxQkEsV0FBckI7QUFBQSxVQUFrQ0MsUUFBbEMsU0FBa0NBLFFBQWxDO0FBQUEsVUFBNENDLEtBQTVDLFNBQTRDQSxLQUE1QztBQUFBLDBCQUNILDhEQUFDLDZDQUFEO0FBRU8sVUFBRSxFQUFFTCxFQUZYO0FBR08sYUFBSyxFQUFFQyxLQUhkO0FBSU8sYUFBSyxFQUFFQyxLQUpkO0FBS08sbUJBQVcsRUFBRUMsV0FMcEI7QUFNTyxnQkFBUSxFQUFFQyxRQU5qQjtBQU9PLGFBQUssRUFBRUM7QUFQZCxTQUNZTCxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERztBQUFBLEtBRlAsQ0FGTixlQWVLO0FBQ0EsZUFBUyxFQUFDLGtCQURWO0FBRUEsU0FBRyxFQUFDLGlDQUZKO0FBR0EsU0FBRyxFQUFDO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZMLGVBb0JLO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSxnQkFDSUgsUUFBUSxDQUNOQyxLQURGLENBQ1EsQ0FEUixFQUNXLENBRFgsRUFFRUMsR0FGRixDQUVNO0FBQUEsWUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsWUFBT0MsS0FBUCxTQUFPQSxLQUFQO0FBQUEsWUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsWUFBcUJDLFdBQXJCLFNBQXFCQSxXQUFyQjtBQUFBLFlBQWtDQyxRQUFsQyxTQUFrQ0EsUUFBbEM7QUFBQSxZQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsNEJBQ0gsOERBQUMsNkNBQUQ7QUFFSyxZQUFFLEVBQUVMLEVBRlQ7QUFHSyxlQUFLLEVBQUVDLEtBSFo7QUFJSyxlQUFLLEVBQUVDLEtBSlo7QUFLSyxxQkFBVyxFQUFFQyxXQUxsQjtBQU1LLGtCQUFRLEVBQUVDLFFBTmY7QUFPSyxlQUFLLEVBQUVDO0FBUFosV0FDVUwsRUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FGTjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQ0Q7O0tBdkNRSixXO0FBeUNULCtEQUFlQSxXQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnXG5cbmZ1bmN0aW9uIFByb2R1Y3RGZWVkKHsgcHJvZHVjdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG8nPlxuICAgICAgICAgey8qIDxwPiBwcm9kdWN0IHdpbGwgZ28gaGVyZTwvcD4gKi99XG4gICAgICAgICB7cHJvZHVjdHNcbiAgICAgICAgICAgIC5zbGljZSgwLCA0KVxuICAgICAgICAgICAgLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+KFxuICAgICAgICAgICAgICA8UHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH0gXG4gICAgICAgICAgICAgICAgICAgICBpZD17aWR9IFxuICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfSBcbiAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX0gXG4gICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fSBcbiAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX0gXG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICkpfVxuICAgICAgICAgPGltZyBcbiAgICAgICAgIGNsYXNzTmFtZT0nbWQ6Y29sLXNwYW4tZnVsbCcgXG4gICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCIgXG4gICAgICAgICBhbHQ9XCJcIiAvPlxuXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6Y29sLXNwYW4nPlxuICAgICAgICAgICAge3Byb2R1Y3RzXG4gICAgICAgICAgICAgIC5zbGljZSg0LCA1KVxuICAgICAgICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4oXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9IFxuICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfSBcbiAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9IFxuICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX0gXG4gICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9IFxuICAgICAgICAgICAgIC8+XG4gICAgICAgICApKX1cbiAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n");

/***/ })

});