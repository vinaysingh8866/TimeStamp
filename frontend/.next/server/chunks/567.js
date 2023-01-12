"use strict";
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 45825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ injected)
/* harmony export */ });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
var injected=new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({supportedChainIds:[137]});

/***/ }),

/***/ 61743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useENSName)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function useENSName(address){var _useWeb3React=(0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)(),library=_useWeb3React.library,chainId=_useWeb3React.chainId;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),ENSName=_useState[0],setENSName=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if(library&&typeof address==="string"){var stale=false;library.lookupAddress(address).then(function(name){if(!stale&&typeof name==="string"){setENSName(name);}}).catch(function(){});return function(){stale=true;setENSName("");};}},[library,address,chainId]);return ENSName;}

/***/ }),

/***/ 27868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMetaMaskOnboarding)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43427);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function useMetaMaskOnboarding(){var _window;var onboarding=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();var _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),isMetaMaskInstalled=_useState[0],isMetaMaskInstalledSet=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){if(true){return;}function checkForMetaMask(){var provider;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().async(function checkForMetaMask$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().awrap(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()({timeout:1000,mustBeMetaMask:true}));case 2:provider=_context.sent;if(provider){isMetaMaskInstalledSet(true);}else{isMetaMaskInstalledSet(false);}case 4:case"end":return _context.stop();}}},null,null,null,Promise);}checkForMetaMask();},[]);function startOnboarding(){var _onboarding$current;var MetaMaskOnboarding;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().async(function startOnboarding$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().awrap(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 59652, 23)).then(function(m){return m.default;}));case 2:MetaMaskOnboarding=_context2.sent;onboarding.current=new MetaMaskOnboarding();(_onboarding$current=onboarding.current)==null?void 0:_onboarding$current.startOnboarding();case 5:case"end":return _context2.stop();}}},null,null,null,Promise);}function stopOnboarding(){if(onboarding!=null&&onboarding.current){onboarding.current.stopOnboarding();}}var isWeb3Available= false&&(0);return{startOnboarding:startOnboarding,stopOnboarding:stopOnboarding,isMetaMaskInstalled:isMetaMaskInstalled,isWeb3Available:isWeb3Available};}

/***/ })

};
;