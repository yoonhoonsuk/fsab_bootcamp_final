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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _update_task_styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-task-styles.module.css */ \"(app-pages-browser)/./app/components/update-task-styles.module.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction UpdateTaskForm() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to hold all tasks\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to hold the selected task\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Fetch all tasks when the component loads\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchTasks() {\n            const res = await fetch(\"http://localhost:8080/\"); // Fetch all tasks\n            const data = await res.json();\n            setTasks(data); // Store tasks in state\n        }\n        fetchTasks();\n    }, []);\n    // Fetch the selected task's details when a task is selected\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedTask) {\n            async function fetchTaskDetails() {\n                const res = await fetch(\"http://localhost:8080/tasks/\".concat(selectedTask));\n                const task = await res.json();\n                setDescription(task.description);\n                setCompleted(task.completed);\n            }\n            fetchTaskDetails();\n        }\n    }, [\n        selectedTask\n    ]);\n    // Function to handle form submission\n    async function onSubmit() {\n        const updatedTaskBody = {\n            description,\n            completed\n        };\n        // Log the updated data to check correctness\n        console.log(\"Updating task with data:\", updatedTaskBody);\n        const res = await fetch(\"http://localhost:8080/tasks/\".concat(selectedTask), {\n            method: \"PUT\",\n            headers: {\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify(updatedTaskBody)\n        });\n        if (res.status === 200) {\n            console.log(\"Task successfully updated\");\n        } else {\n            console.error(\"Error updating task\", await res.text());\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Update Task\"\n            }, void 0, false, {\n                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: selectedTask,\n                onChange: (event)=>setSelectedTask(event.target.value),\n                className: _update_task_styles_module_css__WEBPACK_IMPORTED_MODULE_2__.select,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"Select a Task\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: task.title,\n                            children: task.title\n                        }, index, false, {\n                            fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            selectedTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Main Info\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _update_task_styles_module_css__WEBPACK_IMPORTED_MODULE_2__.mainForm,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"description\",\n                                        children: \"Description: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        value: description,\n                                        onChange: (event)=>setDescription(event.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Completed:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: completed,\n                                            onChange: (event)=>setCompleted(event.target.checked)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yoonhoonsuk/Desktop/fsab_bootcamp/fsab_bootcamp_final/fsab_bootcamp_final_frontend/app/components/UpdateTask.jsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(UpdateTaskForm, \"rGTCU5AK7zhqwUdfipyl+oJ5j/A=\");\n_c = UpdateTaskForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateTask);\nvar _c;\n$RefreshReg$(_c, \"UpdateTaskForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1VwZGF0ZVRhc2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNEM7QUFDVTtBQUV0RCxTQUFTRzs7SUFDTCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRSxHQUFHLDBCQUEwQjtJQUNsRSxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLLGtDQUFrQztJQUN4RixNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNDLDJDQUEyQztJQUMzQ0MsZ0RBQVNBLENBQUM7UUFDTixlQUFlVztZQUNYLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSwyQkFBMkIsa0JBQWtCO1lBQ3JFLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQlgsU0FBU1UsT0FBTyx1QkFBdUI7UUFDM0M7UUFDQUg7SUFDSixHQUFHLEVBQUU7SUFFTCw0REFBNEQ7SUFDNURYLGdEQUFTQSxDQUFDO1FBQ04sSUFBSUssY0FBYztZQUNkLGVBQWVXO2dCQUNYLE1BQU1KLE1BQU0sTUFBTUMsTUFBTSwrQkFBNEMsT0FBYlI7Z0JBQ3ZELE1BQU1ZLE9BQU8sTUFBTUwsSUFBSUcsSUFBSTtnQkFDM0JQLGVBQWVTLEtBQUtWLFdBQVc7Z0JBQy9CRyxhQUFhTyxLQUFLUixTQUFTO1lBQy9CO1lBQ0FPO1FBQ0o7SUFDSixHQUFHO1FBQUNYO0tBQWE7SUFFakIscUNBQXFDO0lBQ3JDLGVBQWVhO1FBQ1gsTUFBTUMsa0JBQWtCO1lBQ3BCWjtZQUNBRTtRQUNKO1FBRUEsNENBQTRDO1FBQzVDVyxRQUFRQyxHQUFHLENBQUMsNEJBQTRCRjtRQUV4QyxNQUFNUCxNQUFNLE1BQU1DLE1BQU0sK0JBQTRDLE9BQWJSLGVBQWdCO1lBQ25FaUIsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1FBQ3pCO1FBRUEsSUFBSVAsSUFBSWUsTUFBTSxLQUFLLEtBQUs7WUFDcEJQLFFBQVFDLEdBQUcsQ0FBQztRQUNoQixPQUFPO1lBQ0hELFFBQVFRLEtBQUssQ0FBQyx1QkFBdUIsTUFBTWhCLElBQUlpQixJQUFJO1FBQ3ZEO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUVKLDhEQUFDQztnQkFDR0MsT0FBTzVCO2dCQUNQNkIsVUFBVSxDQUFDQyxRQUFVN0IsZ0JBQWdCNkIsTUFBTUMsTUFBTSxDQUFDSCxLQUFLO2dCQUN2REksV0FBV3BDLDJEQUFPQSxDQUFDK0IsTUFBTTs7a0NBRXpCLDhEQUFDTTt3QkFBT0wsT0FBTTtrQ0FBRzs7Ozs7O29CQUNoQjlCLE1BQU1vQyxHQUFHLENBQUMsQ0FBQ3RCLE1BQU11QixzQkFDZCw4REFBQ0Y7NEJBQW1CTCxPQUFPaEIsS0FBS3dCLEtBQUs7c0NBQ2hDeEIsS0FBS3dCLEtBQUs7MkJBREZEOzs7Ozs7Ozs7OztZQU1wQm5DLDhCQUNHOztrQ0FDSSw4REFBQ3FDO3dCQUFPQyxTQUFTekI7a0NBQVU7Ozs7OztrQ0FDM0IsOERBQUMwQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDZDt3QkFBSU8sV0FBV3BDLDJEQUFPQSxDQUFDNEMsUUFBUTs7MENBQzVCLDhEQUFDZjs7a0RBQ0csOERBQUNnQjt3Q0FBTUMsU0FBUTtrREFBYzs7Ozs7O2tEQUM3Qiw4REFBQ0M7d0NBQ0dmLE9BQU8xQjt3Q0FDUDJCLFVBQVUsQ0FBQ0MsUUFBVTNCLGVBQWUyQixNQUFNQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQ0FHOUQsOERBQUNIOzBDQUNHLDRFQUFDZ0I7O3dDQUFNO3NEQUVILDhEQUFDRTs0Q0FDR0MsTUFBSzs0Q0FDTEMsU0FBU3pDOzRDQUNUeUIsVUFBVSxDQUFDQyxRQUFVekIsYUFBYXlCLE1BQU1DLE1BQU0sQ0FBQ2MsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMxRjtHQWxHU2hEO0tBQUFBO0FBb0dULCtEQUFlaUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9VcGRhdGVUYXNrLmpzeD9kMTg3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXBkYXRlLXRhc2stc3R5bGVzLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gVXBkYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7IC8vIFN0YXRlIHRvIGhvbGQgYWxsIHRhc2tzXG4gICAgY29uc3QgW3NlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSB0byBob2xkIHRoZSBzZWxlY3RlZCB0YXNrXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gRmV0Y2ggYWxsIHRhc2tzIHdoZW4gdGhlIGNvbXBvbmVudCBsb2Fkc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGFza3MoKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIik7IC8vIEZldGNoIGFsbCB0YXNrc1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICBzZXRUYXNrcyhkYXRhKTsgLy8gU3RvcmUgdGFza3MgaW4gc3RhdGVcbiAgICAgICAgfVxuICAgICAgICBmZXRjaFRhc2tzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gRmV0Y2ggdGhlIHNlbGVjdGVkIHRhc2sncyBkZXRhaWxzIHdoZW4gYSB0YXNrIGlzIHNlbGVjdGVkXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkVGFzaykge1xuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUYXNrRGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Rhc2tzLyR7c2VsZWN0ZWRUYXNrfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKHRhc2suZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldENvbXBsZXRlZCh0YXNrLmNvbXBsZXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaFRhc2tEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICB9LCBbc2VsZWN0ZWRUYXNrXSk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrQm9keSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY29tcGxldGVkLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIExvZyB0aGUgdXBkYXRlZCBkYXRhIHRvIGNoZWNrIGNvcnJlY3RuZXNzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgdGFzayB3aXRoIGRhdGE6XCIsIHVwZGF0ZWRUYXNrQm9keSk7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC90YXNrcy8ke3NlbGVjdGVkVGFza31gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFza0JvZHkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFzayBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0YXNrXCIsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5VcGRhdGUgVGFzazwvaDM+XG4gICAgICAgICAgICB7LyogRHJvcGRvd24gdG8gc2VsZWN0IGEgdGFzayAqL31cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRUYXNrfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlbGVjdGVkVGFzayhldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIFRhc2s8L29wdGlvbj5cbiAgICAgICAgICAgICAgICB7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt0YXNrLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgey8qIEZvcm0gdG8gdXBkYXRlIHRoZSB0YXNrICovfVxuICAgICAgICAgICAge3NlbGVjdGVkVGFzayAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxoND5NYWluIEluZm88L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluRm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldENvbXBsZXRlZChldmVudC50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVRhc2s7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjbGFzc2VzIiwiVXBkYXRlVGFza0Zvcm0iLCJ0YXNrcyIsInNldFRhc2tzIiwic2VsZWN0ZWRUYXNrIiwic2V0U2VsZWN0ZWRUYXNrIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsImZldGNoVGFza3MiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZmV0Y2hUYXNrRGV0YWlscyIsInRhc2siLCJvblN1Ym1pdCIsInVwZGF0ZWRUYXNrQm9keSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJlcnJvciIsInRleHQiLCJkaXYiLCJoMyIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImNsYXNzTmFtZSIsIm9wdGlvbiIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIiwiaDQiLCJtYWluRm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJVcGRhdGVUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/UpdateTask.jsx\n"));

/***/ })

});