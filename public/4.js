(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Rates/Rates.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Rates/Rates.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-title{\n    margin-top: 11vh;\n}\n.text-title{\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 4.5vh;\n}\n.text-title-head{\n    font-size: 7vh;\n}\n.minimize-font{\n    font-size: 2vh;\n}\n.rates-font-size{\n    font-size: 2.2vh;\n}\n\n.info-general-rooms .text-title{\n    font-size: 4vh;\n}\n.info-general-rooms ul {\n    list-style-type: none;\n}\n.info-general-rooms ul li {\n    line-height: 5vh;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Rates/RateRecord/RateRecord.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Rates/RateRecord/RateRecord.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RateRecord; });
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

var RateRecord = /*#__PURE__*/function (_Component) {
  _inherits(RateRecord, _Component);

  var _super = _createSuper(RateRecord);

  function RateRecord(props) {
    var _this;

    _classCallCheck(this, RateRecord);

    _this = _super.call(this, props);
    _this.state = {
      moTa: '',
      giaLP: ''
    };
    return _this;
  }

  _createClass(RateRecord, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      axios.get(http + '/api/room_type_rate/' + this.props.idLP).then(function (response) {
        // console.log(response.data);
        _this2.setState({
          giaLP: !response.data ? 'Chưa có giá' : response.data.giaLP + ' VND',
          moTa: JSON.parse(_this2.props.moTa)[0]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.tenLP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.moTa), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.giaLP));
    }
  }]);

  return RateRecord;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/components/Rates/Rates.css":
/*!*************************************************!*\
  !*** ./resources/js/components/Rates/Rates.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./Rates.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Rates/Rates.css");

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

/***/ "./resources/js/components/Rates/Rates.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/Rates/Rates.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rates; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/Footer */ "./resources/js/components/Footer/Footer.jsx");
/* harmony import */ var _Navigation_NavTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navigation/NavTop */ "./resources/js/components/Navigation/NavTop.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Rates_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rates.css */ "./resources/js/components/Rates/Rates.css");
/* harmony import */ var _Rates_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Rates_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _RateRecord_RateRecord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RateRecord/RateRecord */ "./resources/js/components/Rates/RateRecord/RateRecord.jsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../link */ "./resources/js/link.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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












var http = _link__WEBPACK_IMPORTED_MODULE_10__["link"];

var Rates = /*#__PURE__*/function (_Component) {
  _inherits(Rates, _Component);

  var _super = _createSuper(Rates);

  function Rates(props) {
    var _this;

    _classCallCheck(this, Rates);

    _this = _super.call(this, props);
    _this.state = {
      roomType: [],
      slItemAddCart: 0
    };
    _this.showRoomRates = _this.showRoomRates.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Rates, [{
    key: "loadRoomTypes",
    value: function loadRoomTypes() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(http + '/api/room_types').then(function (response) {
        _this2.setState({
          roomType: response.data
        });
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'), 10) : 0
      });
      this.loadRoomTypes();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "showRoomRates",
    value: function showRoomRates() {
      var count = 0;
      var lst = this.state.roomType.map(function (item, index) {
        count++;
        console.log('dem: ', count);
        if (count <= 8) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RateRecord_RateRecord__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: index,
          idLP: item.idLP,
          tenLP: item.tenLP,
          moTa: item.moTa
        });else return;
      });
      return lst;
    }
  }, {
    key: "render",
    value: function render() {
      aos__WEBPACK_IMPORTED_MODULE_6___default.a.init();
      var aos_flip_left = {
        'data-aos': 'flip-left',
        'data-aos-offset': '350'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavTop__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      }, "R"), "OOM ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title-head"
      }, "R"), "ATES"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title minimize-font"
      }, "Prices for a room per night "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
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
      }, "Room"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '75vw'
        }
      }, "Decription"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '15vw'
        }
      }, "Prices"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.showRoomRates())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, aos_flip_left, {
        className: "info-general-rooms",
        style: {
          marginLeft: '7vw',
          marginTop: '9.5vh',
          marginBottom: '7vh'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Infomation general rooms:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: {
          marginTop: '2vh'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "Retina Display or LCD TV sets are in all rooms."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "Rates include a Mediterranean breakfast (coffee, teas, juices, fruit, yogurt, bread, cakes, cheese, ham, etc.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "Bed-rooms feature: King Long size mattress (185x210), private bathroom (shower), air conditioning, TV (LCD) and mini-fridge."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "In consideration of our guests we have only non smoking bed-rooms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "18x8 mt swimming pool, towels are provided"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "Each room has a refrigerator."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "Complimentary \"WIFI\" connection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "Free Wi-Fi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsDiamondHalf"], {
        style: {
          marginRight: '1.5vw'
        }
      }), "Inward Parking")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return Rates;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);