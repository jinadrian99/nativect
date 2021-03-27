(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/ExchangeRates/ExchangeRates.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/ExchangeRates/ExchangeRates.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-title{\r\n    margin-top: 11vh;\r\n}\r\n.text-title{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 4.5vh;\r\n}\r\n.text-title-head{\r\n    font-size: 7vh;\r\n}\r\n.minimize-font{\r\n    font-size: 2vh;\r\n}\r\n.rates-font-size{\r\n    font-size: 2.2vh;\r\n}\r\n\r\n.info-general-rooms .text-title{\r\n    font-size: 4vh;\r\n}\r\n.info-general-rooms ul {\r\n    list-style-type: none;\r\n}\r\n.info-general-rooms ul li {\r\n    line-height: 5vh;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/ExchangeRates/ExchangeRates.css":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ExchangeRates/ExchangeRates.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./ExchangeRates.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/ExchangeRates/ExchangeRates.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/ExchangeRates/ExchangeRates.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ExchangeRates/ExchangeRates.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExchangeRates; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/Footer */ "./resources/js/components/Footer/Footer.jsx");
/* harmony import */ var _Navigation_NavTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/NavTop */ "./resources/js/components/Navigation/NavTop.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../link */ "./resources/js/link.jsx");
/* harmony import */ var _ExchangeRates_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ExchangeRates.css */ "./resources/js/components/ExchangeRates/ExchangeRates.css");
/* harmony import */ var _ExchangeRates_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ExchangeRates_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ExchangeRatesRecord_ExchangeRatesRecord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExchangeRatesRecord/ExchangeRatesRecord */ "./resources/js/components/ExchangeRates/ExchangeRatesRecord/ExchangeRatesRecord.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var http = _link__WEBPACK_IMPORTED_MODULE_7__["link"];



var ExchangeRates = /*#__PURE__*/function (_Component) {
  _inherits(ExchangeRates, _Component);

  var _super = _createSuper(ExchangeRates);

  function ExchangeRates(props) {
    var _this;

    _classCallCheck(this, ExchangeRates);

    _this = _super.call(this, props);
    _this.state = {
      rate: [],
      slItemAddCart: 0
    };
    _this.showExchangeRates = _this.showExchangeRates.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ExchangeRates, [{
    key: "loadExchangeRates",
    value: function loadExchangeRates() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(http + '/api/exchange_rates').then(function (res) {
        console.warn(res);

        _this2.setState({
          rate: res.data
        }, console.log('in function:' + _this2.state.rate));
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'), 10) : 0
      });
      this.loadExchangeRates();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "showExchangeRates",
    value: function showExchangeRates() {
      var lst = this.state.rate.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeRatesRecord_ExchangeRatesRecord__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: index,
          symbol: item.symbol,
          price: item.rate,
          currency: item.currency
        });
      });
      return lst;
    }
  }, {
    key: "render",
    value: function render() {
      aos__WEBPACK_IMPORTED_MODULE_5___default.a.init();
      var aos_flip_left = {
        'data-aos': 'flip-left',
        'data-aos-offset': '350'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
        slItemAddCart: this.state.slItemAddCart
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: "7vh"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "row-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title-head"
      }, "E"), "XCHANGE ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title-head"
      }, "R"), "ATES"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title minimize-font"
      }, "Exchange Rates Table from USD "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        style: {
          marginTop: '3vh'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        className: "text-title rates-font-size",
        hover: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '20vw'
        }
      }, "Currency symbols"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '70vw'
        }
      }, "Currency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '10vw'
        }
      }, "Rates"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.showExchangeRates()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return ExchangeRates;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/components/ExchangeRates/ExchangeRatesRecord/ExchangeRatesRecord.jsx":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ExchangeRates/ExchangeRatesRecord/ExchangeRatesRecord.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExchangeRatesRecord; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../link */ "./resources/js/link.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var http = _link__WEBPACK_IMPORTED_MODULE_1__["link"];

var ExchangeRatesRecord = /*#__PURE__*/function (_Component) {
  _inherits(ExchangeRatesRecord, _Component);

  var _super = _createSuper(ExchangeRatesRecord);

  function ExchangeRatesRecord(props) {
    var _this;

    _classCallCheck(this, ExchangeRatesRecord);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(ExchangeRatesRecord, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.symbol), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.currency), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.price));
    }
  }]);

  return ExchangeRatesRecord;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);