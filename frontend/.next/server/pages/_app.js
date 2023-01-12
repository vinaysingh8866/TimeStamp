"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 24601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/native-base/lib/commonjs/index.js
var commonjs = __webpack_require__(18768);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(18054);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
;// CONCATENATED MODULE: ./getLibrary.ts
function getLibrary(provider){return new providers_namespaceObject.Web3Provider(provider);}
;// CONCATENATED MODULE: ./pages/_app.tsx
function MyApp(_ref){var Component=_ref.Component,pageProps=_ref.pageProps;return external_react_default().createElement(core_.Web3ReactProvider,{getLibrary:getLibrary},external_react_default().createElement(commonjs.NativeBaseProvider,{isSSR:true},external_react_default().createElement(Component,pageProps)));}/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 17615:
/***/ ((module) => {

module.exports = require("@react-aria/checkbox");

/***/ }),

/***/ 35069:
/***/ ((module) => {

module.exports = require("@react-aria/combobox");

/***/ }),

/***/ 73888:
/***/ ((module) => {

module.exports = require("@react-aria/focus");

/***/ }),

/***/ 44533:
/***/ ((module) => {

module.exports = require("@react-aria/interactions");

/***/ }),

/***/ 70296:
/***/ ((module) => {

module.exports = require("@react-aria/label");

/***/ }),

/***/ 10292:
/***/ ((module) => {

module.exports = require("@react-aria/overlays");

/***/ }),

/***/ 62547:
/***/ ((module) => {

module.exports = require("@react-aria/radio");

/***/ }),

/***/ 35506:
/***/ ((module) => {

module.exports = require("@react-aria/selection");

/***/ }),

/***/ 78896:
/***/ ((module) => {

module.exports = require("@react-aria/ssr");

/***/ }),

/***/ 76278:
/***/ ((module) => {

module.exports = require("@react-aria/utils");

/***/ }),

/***/ 69550:
/***/ ((module) => {

module.exports = require("@react-stately/checkbox");

/***/ }),

/***/ 45615:
/***/ ((module) => {

module.exports = require("@react-stately/collections");

/***/ }),

/***/ 99483:
/***/ ((module) => {

module.exports = require("@react-stately/list");

/***/ }),

/***/ 94105:
/***/ ((module) => {

module.exports = require("@react-stately/menu");

/***/ }),

/***/ 45320:
/***/ ((module) => {

module.exports = require("@react-stately/slider");

/***/ }),

/***/ 9041:
/***/ ((module) => {

module.exports = require("@react-stately/toggle");

/***/ }),

/***/ 23984:
/***/ ((module) => {

module.exports = require("@react-stately/utils");

/***/ }),

/***/ 18054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 28566:
/***/ ((module) => {

module.exports = require("create-react-class");

/***/ }),

/***/ 67836:
/***/ ((module) => {

module.exports = require("dom-helpers/css");

/***/ }),

/***/ 71307:
/***/ ((module) => {

module.exports = require("dom-helpers/offset");

/***/ }),

/***/ 82902:
/***/ ((module) => {

module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ 93071:
/***/ ((module) => {

module.exports = require("dom-helpers/position");

/***/ }),

/***/ 69376:
/***/ ((module) => {

module.exports = require("dom-helpers/scrollLeft");

/***/ }),

/***/ 77641:
/***/ ((module) => {

module.exports = require("dom-helpers/scrollTop");

/***/ }),

/***/ 48933:
/***/ ((module) => {

module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ }),

/***/ 44505:
/***/ ((module) => {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ 99905:
/***/ ((module) => {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ 65756:
/***/ ((module) => {

module.exports = require("hyphenate-style-name");

/***/ }),

/***/ 12150:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ 60998:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ 45539:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ 49308:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ 38739:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ 86639:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/flex");

/***/ }),

/***/ 38437:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxIE");

/***/ }),

/***/ 54033:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxOld");

/***/ }),

/***/ 83445:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/gradient");

/***/ }),

/***/ 27160:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/grid");

/***/ }),

/***/ 34845:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ 21764:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ 43358:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ 12196:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ 73763:
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ 19548:
/***/ ((module) => {

module.exports = require("lodash.clonedeep");

/***/ }),

/***/ 1043:
/***/ ((module) => {

module.exports = require("lodash.get");

/***/ }),

/***/ 22616:
/***/ ((module) => {

module.exports = require("lodash.isempty");

/***/ }),

/***/ 49925:
/***/ ((module) => {

module.exports = require("lodash.isnil");

/***/ }),

/***/ 66981:
/***/ ((module) => {

module.exports = require("lodash.merge");

/***/ }),

/***/ 92789:
/***/ ((module) => {

module.exports = require("lodash.mergewith");

/***/ }),

/***/ 30872:
/***/ ((module) => {

module.exports = require("lodash.omit");

/***/ }),

/***/ 13250:
/***/ ((module) => {

module.exports = require("lodash.omitby");

/***/ }),

/***/ 11887:
/***/ ((module) => {

module.exports = require("lodash.pick");

/***/ }),

/***/ 15002:
/***/ ((module) => {

module.exports = require("normalize-css-color");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 41671:
/***/ ((module) => {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ 62621:
/***/ ((module) => {

module.exports = require("stable-hash");

/***/ }),

/***/ 32680:
/***/ ((module) => {

module.exports = require("tinycolor2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [872,38,768], () => (__webpack_exec__(24601)));
module.exports = __webpack_exports__;

})();