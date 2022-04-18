webpackHotUpdate_N_E("pages/_app",{

/***/ "./initAuth.js":
/*!*********************!*\
  !*** ./initAuth.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-firebase-auth */ \"./node_modules/next-firebase-auth/build/index.browser.js\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n// ./initAuth.js\n\n\nconst initAuth = () => {\n  Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__[\"init\"])({\n    authPageURL: '/auth/login',\n    appPageURL: '/',\n    loginAPIEndpoint: '/api/login',\n    // required\n    logoutAPIEndpoint: '/api/logout',\n    // required\n    onLoginRequestError: err => {\n      console.error(err);\n    },\n    onLogoutRequestError: err => {\n      console.error(err);\n    },\n    firebaseAdminInitConfig: {\n      credential: {\n        projectId: 'appinvitaciondigital',\n        clientEmail: 'firebase-adminsdk-v57n0@appinvitaciondigital.iam.gserviceaccount.com',\n        // The private key must not be accessible on the client side.\n        privateKey: process.env.FIREBASE_PRIVATE_KEY\n      }\n    },\n    // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)\n    // useFirebaseAdminDefaultCredential: true,\n    firebaseClientInitConfig: {\n      apiKey: process.env.FIREBASE_APIKEY,\n      authDomain: process.env.FIREBASE_AUTHDOMAIN,\n      projectId: process.env.FIREBASE_PROJECT_ID,\n      storageBucket: \"appinvitaciondigital.appspot.com\",\n      messagingSenderId: \"466777824847\",\n      appId: \"1:466777824847:web:4a38bcb434b199c1f6d43a\",\n      measurementId: \"G-7RYZ3BV0T1\"\n    },\n    cookies: {\n      name: 'ExampleApp',\n      // required\n      // Keys are required unless you set `signed` to `false`.\n      // The keys cannot be accessible on the client side.\n      keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],\n      httpOnly: true,\n      maxAge: 12 * 60 * 60 * 24 * 1000,\n      // twelve days\n      overwrite: true,\n      path: '/',\n      sameSite: 'strict',\n      secure: true,\n      // set this to false in local (non-HTTPS) development\n      signed: true\n    },\n    onVerifyTokenError: err => {\n      console.error(err);\n    },\n    onTokenRefreshError: err => {\n      console.error(err);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAuth);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW5pdEF1dGguanM/Yjg3NiJdLCJuYW1lcyI6WyJpbml0QXV0aCIsImluaXQiLCJhdXRoUGFnZVVSTCIsImFwcFBhZ2VVUkwiLCJsb2dpbkFQSUVuZHBvaW50IiwibG9nb3V0QVBJRW5kcG9pbnQiLCJvbkxvZ2luUmVxdWVzdEVycm9yIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwib25Mb2dvdXRSZXF1ZXN0RXJyb3IiLCJmaXJlYmFzZUFkbWluSW5pdENvbmZpZyIsImNyZWRlbnRpYWwiLCJwcm9qZWN0SWQiLCJjbGllbnRFbWFpbCIsInByaXZhdGVLZXkiLCJwcm9jZXNzIiwiZW52IiwiRklSRUJBU0VfUFJJVkFURV9LRVkiLCJmaXJlYmFzZUNsaWVudEluaXRDb25maWciLCJhcGlLZXkiLCJGSVJFQkFTRV9BUElLRVkiLCJhdXRoRG9tYWluIiwiRklSRUJBU0VfQVVUSERPTUFJTiIsIkZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJjb29raWVzIiwibmFtZSIsImtleXMiLCJDT09LSUVfU0VDUkVUX0NVUlJFTlQiLCJDT09LSUVfU0VDUkVUX1BSRVZJT1VTIiwiaHR0cE9ubHkiLCJtYXhBZ2UiLCJvdmVyd3JpdGUiLCJwYXRoIiwic2FtZVNpdGUiLCJzZWN1cmUiLCJzaWduZWQiLCJvblZlcmlmeVRva2VuRXJyb3IiLCJvblRva2VuUmVmcmVzaEVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCQyxpRUFBSSxDQUFDO0FBQ0hDLGVBQVcsRUFBRSxhQURWO0FBRUhDLGNBQVUsRUFBRSxHQUZUO0FBR0hDLG9CQUFnQixFQUFFLFlBSGY7QUFHNkI7QUFDaENDLHFCQUFpQixFQUFFLGFBSmhCO0FBSStCO0FBQ2xDQyx1QkFBbUIsRUFBR0MsR0FBRCxJQUFTO0FBQzVCQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBUEU7QUFRSEcsd0JBQW9CLEVBQUdILEdBQUQsSUFBUztBQUM3QkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQVZFO0FBV0hJLDJCQUF1QixFQUFFO0FBQ3ZCQyxnQkFBVSxFQUFFO0FBQ1ZDLGlCQUFTLEVBQUUsc0JBREQ7QUFFVkMsbUJBQVcsRUFBRSxzRUFGSDtBQUdWO0FBQ0FDLGtCQUFVLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUpkO0FBRFcsS0FYdEI7QUFtQkg7QUFDQTtBQUNBQyw0QkFBd0IsRUFBRTtBQUN4QkMsWUFBTSxFQUFFSixPQUFPLENBQUNDLEdBQVIsQ0FBWUksZUFESTtBQUV4QkMsZ0JBQVUsRUFBRU4sT0FBTyxDQUFDQyxHQUFSLENBQVlNLG1CQUZBO0FBR3hCVixlQUFTLEVBQUVHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxtQkFIQztBQUl4QkMsbUJBQWEsRUFBRSxrQ0FKUztBQUt4QkMsdUJBQWlCLEVBQUUsY0FMSztBQU14QkMsV0FBSyxFQUFFLDJDQU5pQjtBQU94QkMsbUJBQWEsRUFBRTtBQVBTLEtBckJ2QjtBQThCSEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRSxZQURDO0FBQ2E7QUFDcEI7QUFDQTtBQUNBQyxVQUFJLEVBQUUsQ0FDSmYsT0FBTyxDQUFDQyxHQUFSLENBQVllLHFCQURSLEVBRUpoQixPQUFPLENBQUNDLEdBQVIsQ0FBWWdCLHNCQUZSLENBSkM7QUFRUEMsY0FBUSxFQUFFLElBUkg7QUFTUEMsWUFBTSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxFQUFmLEdBQW9CLElBVHJCO0FBUzJCO0FBQ2xDQyxlQUFTLEVBQUUsSUFWSjtBQVdQQyxVQUFJLEVBQUUsR0FYQztBQVlQQyxjQUFRLEVBQUUsUUFaSDtBQWFQQyxZQUFNLEVBQUUsSUFiRDtBQWFPO0FBQ2RDLFlBQU0sRUFBRTtBQWRELEtBOUJOO0FBOENIQyxzQkFBa0IsRUFBR2xDLEdBQUQsSUFBUztBQUMzQkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQWhERTtBQWlESG1DLHVCQUFtQixFQUFHbkMsR0FBRCxJQUFTO0FBQzVCQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNEO0FBbkRFLEdBQUQsQ0FBSjtBQXFERCxDQXRERDs7QUF3RGVQLHVFQUFmIiwiZmlsZSI6Ii4vaW5pdEF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL2luaXRBdXRoLmpzXG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnbmV4dC1maXJlYmFzZS1hdXRoJ1xuXG5jb25zdCBpbml0QXV0aCA9ICgpID0+IHtcbiAgaW5pdCh7XG4gICAgYXV0aFBhZ2VVUkw6ICcvYXV0aC9sb2dpbicsXG4gICAgYXBwUGFnZVVSTDogJy8nLFxuICAgIGxvZ2luQVBJRW5kcG9pbnQ6ICcvYXBpL2xvZ2luJywgLy8gcmVxdWlyZWRcbiAgICBsb2dvdXRBUElFbmRwb2ludDogJy9hcGkvbG9nb3V0JywgLy8gcmVxdWlyZWRcbiAgICBvbkxvZ2luUmVxdWVzdEVycm9yOiAoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9LFxuICAgIG9uTG9nb3V0UmVxdWVzdEVycm9yOiAoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9LFxuICAgIGZpcmViYXNlQWRtaW5Jbml0Q29uZmlnOiB7XG4gICAgICBjcmVkZW50aWFsOiB7XG4gICAgICAgIHByb2plY3RJZDogJ2FwcGludml0YWNpb25kaWdpdGFsJyxcbiAgICAgICAgY2xpZW50RW1haWw6ICdmaXJlYmFzZS1hZG1pbnNkay12NTduMEBhcHBpbnZpdGFjaW9uZGlnaXRhbC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbScsXG4gICAgICAgIC8vIFRoZSBwcml2YXRlIGtleSBtdXN0IG5vdCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSBjbGllbnQgc2lkZS5cbiAgICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVksXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gVXNlIGFwcGxpY2F0aW9uIGRlZmF1bHQgY3JlZGVudGlhbHMgKHRha2VzIHByZWNlZGVuY2Ugb3ZlciBmaXJlYXNlQWRtaW5Jbml0Q29uZmlnIGlmIHNldClcbiAgICAvLyB1c2VGaXJlYmFzZUFkbWluRGVmYXVsdENyZWRlbnRpYWw6IHRydWUsXG4gICAgZmlyZWJhc2VDbGllbnRJbml0Q29uZmlnOiB7XG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSUtFWSxcbiAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhET01BSU4sXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgICBzdG9yYWdlQnVja2V0OiBcImFwcGludml0YWNpb25kaWdpdGFsLmFwcHNwb3QuY29tXCIsXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjY3Nzc4MjQ4NDdcIixcbiAgICAgIGFwcElkOiBcIjE6NDY2Nzc3ODI0ODQ3OndlYjo0YTM4YmNiNDM0YjE5OWMxZjZkNDNhXCIsXG4gICAgICBtZWFzdXJlbWVudElkOiBcIkctN1JZWjNCVjBUMVwiXG4gICAgfSxcbiAgICBjb29raWVzOiB7XG4gICAgICBuYW1lOiAnRXhhbXBsZUFwcCcsIC8vIHJlcXVpcmVkXG4gICAgICAvLyBLZXlzIGFyZSByZXF1aXJlZCB1bmxlc3MgeW91IHNldCBgc2lnbmVkYCB0byBgZmFsc2VgLlxuICAgICAgLy8gVGhlIGtleXMgY2Fubm90IGJlIGFjY2Vzc2libGUgb24gdGhlIGNsaWVudCBzaWRlLlxuICAgICAga2V5czogW1xuICAgICAgICBwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVUX0NVUlJFTlQsXG4gICAgICAgIHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRfUFJFVklPVVMsXG4gICAgICBdLFxuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBtYXhBZ2U6IDEyICogNjAgKiA2MCAqIDI0ICogMTAwMCwgLy8gdHdlbHZlIGRheXNcbiAgICAgIG92ZXJ3cml0ZTogdHJ1ZSxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgICAgIHNlY3VyZTogdHJ1ZSwgLy8gc2V0IHRoaXMgdG8gZmFsc2UgaW4gbG9jYWwgKG5vbi1IVFRQUykgZGV2ZWxvcG1lbnRcbiAgICAgIHNpZ25lZDogdHJ1ZSxcbiAgICB9LFxuICAgIG9uVmVyaWZ5VG9rZW5FcnJvcjogKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfSxcbiAgICBvblRva2VuUmVmcmVzaEVycm9yOiAoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./initAuth.js\n");

/***/ })

})