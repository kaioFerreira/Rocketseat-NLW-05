webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContexProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContexProvider\", function() { return PlayerContexProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/kaiofhs/\\xC1rea de Trabalho/Rocketseat-NLW-05/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContexProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      togglePlay: togglePlay,\n      isShuffling: isShuffling,\n      toggleShuffle: toggleShuffle,\n      setPlayingState: setPlayingState,\n      hasPrevious: hasPrevious,\n      hasNext: hasNext,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContexProvider, \"YSXWY8OfLfVxd5To+FHcHi+GAY0=\");\n\n_c = PlayerContexProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContexProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJpc0xvb3BpbmciLCJzZXRJc0xvb3BpbmciLCJpc1NodWZmbGluZyIsInNldElzU2h1ZmZsaW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29wIiwidG9nZ2xlU2h1ZmZsZSIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxvQkFBVCxPQUF3RTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBRXZDQyxzREFBUSxDQUFDLEVBQUQsQ0FGK0I7QUFBQSxNQUV0RUMsV0FGc0U7QUFBQSxNQUV6REMsY0FGeUQ7O0FBQUEsbUJBR3ZCRixzREFBUSxDQUFDLENBQUQsQ0FIZTtBQUFBLE1BR3RFRyxtQkFIc0U7QUFBQSxNQUdqREMsc0JBSGlEOztBQUFBLG1CQUkzQ0osc0RBQVEsQ0FBQyxLQUFELENBSm1DO0FBQUEsTUFJ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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lbWJlcnM6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xufTtcblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xuICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gIGlzTG9vcGluZzogYm9vbGVhbjtcbiAgaXNTaHVmZmxpbmc6IGJvb2xlYW47XG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xuICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlU2h1ZmZsZTogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlTG9vcDogKCkgPT4gdm9pZDtcbiAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHBsYXlOZXh0OiAoKSA9PiB2b2lkO1xuICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XG4gIGhhc1ByZXZpb3VzOiBib29sZWFuO1xuICBoYXNOZXh0OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcblxuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSkge1xuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKSB7XG4gICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpIHtcbiAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XG4gIGNvbnN0IGhhc05leHQgPSBpc1NodWZmbGluZyB8fCAoY3VycmVudEVwaXNvZGVJbmRleCArIDEpIDwgZXBpc29kZUxpc3QubGVuZ3RoO1xuXG5cbiAgZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgaWYgKGlzU2h1ZmZsaW5nKSB7XG4gICAgICBjb25zdCBuZXh0UmFuZG9tRXBpc29kZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXBpc29kZUxpc3QubGVuZ3RoKTtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleCk7XG4gICAgfSBlbHNlIGlmIChoYXNOZXh0KSB7XG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5UHJldmlvdXMoKSB7XG5cbiAgICBpZiAoaGFzUHJldmlvdXMpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGVwaXNvZGVMaXN0LFxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgICBwbGF5LFxuICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgcGxheVByZXZpb3VzLFxuICAgICAgICB0b2dnbGVQbGF5LFxuICAgICAgICBpc1NodWZmbGluZyxcbiAgICAgICAgdG9nZ2xlU2h1ZmZsZSxcbiAgICAgICAgc2V0UGxheWluZ1N0YXRlLFxuICAgICAgICBoYXNQcmV2aW91cyxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgdG9nZ2xlTG9vcCxcbiAgICAgICAgaXNMb29waW5nXG4gICAgICB9fT5cblxuICAgICAge2NoaWxkcmVufVxuXG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})