"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 99651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _classCallCheck=__webpack_require__(58807);var _createClass=__webpack_require__(62012);var _inherits=__webpack_require__(9807);var _possibleConstructorReturn=__webpack_require__(27690);var _getPrototypeOf=__webpack_require__(99828);function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(16689));var _head=_interopRequireDefault(__webpack_require__(94957));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var statusCodes={400:'Bad Request',404:'This page could not be found',405:'Method Not Allowed',500:'Internal Server Error'};function _getInitialProps(_ref){var res=_ref.res,err=_ref.err;var statusCode=res&&res.statusCode?res.statusCode:err?err.statusCode:404;return{statusCode:statusCode};}var Error=function(_react$default$Compon){_inherits(Error,_react$default$Compon);var _super=_createSuper(Error);function Error(){_classCallCheck(this,Error);return _super.apply(this,arguments);}_createClass(Error,[{key:"render",value:function render(){var statusCode=this.props.statusCode;var title=this.props.title||statusCodes[statusCode]||'An unexpected error has occurred';return _react.default.createElement("div",{style:styles.error},_react.default.createElement(_head.default,null,_react.default.createElement("title",null,statusCode?statusCode+": "+title:'Application error: a client-side exception has occurred')),_react.default.createElement("div",null,_react.default.createElement("style",{dangerouslySetInnerHTML:{__html:'body { margin: 0 }'}}),statusCode?_react.default.createElement("h1",{style:styles.h1},statusCode):null,_react.default.createElement("div",{style:styles.desc},_react.default.createElement("h2",{style:styles.h2},this.props.title||statusCode?title:_react.default.createElement(_react.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))));}}]);return Error;}(_react.default.Component);Error.displayName='ErrorPage';Error.getInitialProps=_getInitialProps;Error.origGetInitialProps=_getInitialProps;exports["default"]=Error;var styles={error:{color:'#000',background:'#fff',fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:'100vh',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'},desc:{display:'inline-block',textAlign:'left',lineHeight:'49px',height:'49px',verticalAlign:'middle'},h1:{display:'inline-block',borderRight:'1px solid rgba(0, 0, 0,.3)',margin:0,marginRight:'20px',padding:'10px 23px 10px 0',fontSize:'24px',fontWeight:500,verticalAlign:'top'},h2:{fontSize:'14px',fontWeight:'normal',lineHeight:'inherit',margin:0,padding:0}};

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(99651)));
module.exports = __webpack_exports__;

})();