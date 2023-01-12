"use strict";
exports.id = 982;
exports.ids = [982];
exports.modules = {

/***/ 57982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keccak256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37981);
/* harmony import */ var keccak256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keccak256__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18768);
/* harmony import */ var native_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(native_base__WEBPACK_IMPORTED_MODULE_2__);
var FileUpload=function FileUpload(_ref){var modifyData=_ref.modifyData;var inputFile=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),firstFileName=_useState[0],setFirstFileName=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),firstFileHash=_useState2[0],setFirstFileHash=_useState2[1];var handleFileUpload=function handleFileUpload(e){var files=e.target.files;if(files&&files.length){var filename=files[0].name;setFirstFileName(filename);console.log(filename);var file=files[0];var parts=filename.split('.');var fileType=parts[parts.length-1];var reader=new FileReader();reader.onload=function(e){var content=reader.result;var fileHash=keccak256__WEBPACK_IMPORTED_MODULE_1___default()(filename).toString('hex');var dataHash=keccak256__WEBPACK_IMPORTED_MODULE_1___default()(content).toString('hex');console.log("0x"+dataHash,"0x"+fileHash);modifyData("0x"+dataHash,"0x"+fileHash);setFirstFileHash("0x"+dataHash);};var text=reader.readAsBinaryString(e.target.files[0]);}};var onButtonClick=function onButtonClick(){if(inputFile&&inputFile.current){inputFile.current.click();}};return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_2__.VStack,{w:"20"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{style:{display:'none'},ref:inputFile,onChange:handleFileUpload,type:"file"}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{className:"button",onClick:onButtonClick},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_2__.HStack,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(native_base__WEBPACK_IMPORTED_MODULE_2__.Text,null,"Upload"))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileUpload);

/***/ })

};
;