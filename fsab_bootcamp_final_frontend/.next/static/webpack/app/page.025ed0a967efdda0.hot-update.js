"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/UpdateTask.jsx":
/*!***************************************!*\
  !*** ./app/components/UpdateTask.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _update_task_styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-task-styles.module.css */ \"(app-pages-browser)/./app/components/update-task-styles.module.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction UpdateTaskForm(param) {\n    let { taskTitle } = param;\n    _s();\n    // State to hold the task data\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Boolean value\n    // Fetch the task data when the component loads based on title\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchTask() {\n            const res = await fetch(\"http://localhost:8080/title/\".concat(taskTitle));\n            const task = await res.json();\n            // Set the task data to the state\n            setDescription(task.description);\n            setCompleted(task.completed);\n        }\n        fetchTask();\n    }, [\n        taskTitle\n    ]);\n    async function onSubmit() {\n        const updatedTaskBody = {\n            description,\n            completed\n        };\n        const res = await fetch(\"http://localhost:8080/title/\".concat(taskTitle), {\n            method: \"PUT\",\n            headers: {\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify(updatedTaskBody)\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Update Task\"\n            }, void 0, false, {\n                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onSubmit,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Main Info\"\n            }, void 0, false, {\n                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _update_task_styles_module_css__WEBPACK_IMPORTED_MODULE_2__.mainForm,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"description\",\n                                children: \"Description: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: description,\n                                onChange: (event)=>setDescription(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Completed:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    checked: completed,\n                                    onChange: (event)=>setCompleted(event.target.checked)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(UpdateTaskForm, \"85K/SwACFsNTtc2F6DOIKjIePBM=\");\n_c = UpdateTaskForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateTaskForm);\nvar _c;\n$RefreshReg$(_c, \"UpdateTaskForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1VwZGF0ZVRhc2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNEM7QUFDVTtBQUV0RCxTQUFTRyxlQUFlLEtBQWE7UUFBYixFQUFFQyxTQUFTLEVBQUUsR0FBYjs7SUFDcEIsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsUUFBUSxnQkFBZ0I7SUFFbkUsOERBQThEO0lBQzlEQyxnREFBU0EsQ0FBQztRQUNOLGVBQWVRO1lBQ1gsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLCtCQUF5QyxPQUFWUDtZQUN2RCxNQUFNUSxPQUFPLE1BQU1GLElBQUlHLElBQUk7WUFFM0IsaUNBQWlDO1lBQ2pDUCxlQUFlTSxLQUFLUCxXQUFXO1lBQy9CRyxhQUFhSSxLQUFLTCxTQUFTO1FBQy9CO1FBQ0FFO0lBQ0osR0FBRztRQUFDTDtLQUFVO0lBRWQsZUFBZVU7UUFDWCxNQUFNQyxrQkFBa0I7WUFDcEJWO1lBQ0FFO1FBQ0o7UUFDQSxNQUFNRyxNQUFNLE1BQU1DLE1BQU0sK0JBQXlDLE9BQVZQLFlBQWE7WUFDaEVZLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTDtRQUN6QjtJQUNKO0lBRUEscUJBQ0ksOERBQUNNOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVNWOzBCQUFVOzs7Ozs7MEJBQzNCLDhEQUFDVzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDSjtnQkFBSUssV0FBV3hCLDJEQUFPQSxDQUFDeUIsUUFBUTs7a0NBQzVCLDhEQUFDTjs7MENBQ0csOERBQUNPO2dDQUFNQyxTQUFROzBDQUFjOzs7Ozs7MENBQzdCLDhEQUFDQztnQ0FDR0MsT0FBTzFCO2dDQUNQMkIsVUFBVSxDQUFDQyxRQUFVM0IsZUFBZTJCLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUc5RCw4REFBQ1Y7a0NBQ0csNEVBQUNPOztnQ0FBTTs4Q0FFSCw4REFBQ0U7b0NBQ0dLLE1BQUs7b0NBQ0xDLFNBQVM3QjtvQ0FDVHlCLFVBQVUsQ0FBQ0MsUUFBVXpCLGFBQWF5QixNQUFNQyxNQUFNLENBQUNFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xGO0dBMURTakM7S0FBQUE7QUE0RFQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVXBkYXRlVGFzay5qc3g/ZDE4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VwZGF0ZS10YXNrLXN0eWxlcy5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFVwZGF0ZVRhc2tGb3JtKHsgdGFza1RpdGxlIH0pIHtcbiAgICAvLyBTdGF0ZSB0byBob2xkIHRoZSB0YXNrIGRhdGFcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEJvb2xlYW4gdmFsdWVcblxuICAgIC8vIEZldGNoIHRoZSB0YXNrIGRhdGEgd2hlbiB0aGUgY29tcG9uZW50IGxvYWRzIGJhc2VkIG9uIHRpdGxlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUYXNrKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC90aXRsZS8ke3Rhc2tUaXRsZX1gKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHRhc2sgZGF0YSB0byB0aGUgc3RhdGVcbiAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKHRhc2suZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgc2V0Q29tcGxldGVkKHRhc2suY29tcGxldGVkKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaFRhc2soKTtcbiAgICB9LCBbdGFza1RpdGxlXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tCb2R5ID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjb21wbGV0ZWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvdGl0bGUvJHt0YXNrVGl0bGV9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRhc2tCb2R5KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPlVwZGF0ZSBUYXNrPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGg0Pk1haW4gSW5mbzwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluRm9ybX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlZDogXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q29tcGxldGVkKGV2ZW50LnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlVGFza0Zvcm07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjbGFzc2VzIiwiVXBkYXRlVGFza0Zvcm0iLCJ0YXNrVGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwiZmV0Y2hUYXNrIiwicmVzIiwiZmV0Y2giLCJ0YXNrIiwianNvbiIsIm9uU3VibWl0IiwidXBkYXRlZFRhc2tCb2R5IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiaDMiLCJidXR0b24iLCJvbkNsaWNrIiwiaDQiLCJjbGFzc05hbWUiLCJtYWluRm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidHlwZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/UpdateTask.jsx\n"));

/***/ })

});