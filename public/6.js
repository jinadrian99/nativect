(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/Team/Team.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/Team/Team.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-title {\n  margin-top: 11vh;\n}\n\n.text-title {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-size: 4.5vh;\n}\n\n.text-title-head {\n  font-size: 7vh;\n}\n\n.minimize-font {\n  font-size: 2vh;\n}\n\n.rates-font-size {\n  font-size: 2.2vh;\n}\n\n.info-general-rooms .text-title {\n  font-size: 4vh;\n}\n\n.info-general-rooms ul {\n  list-style-type: none;\n}\n\n.info-general-rooms ul li {\n  line-height: 5vh;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Team/Team.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/Team/Team.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rates; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/Footer */ "./resources/js/components/Footer/Footer.jsx");
/* harmony import */ var _Navigation_NavTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/NavTop */ "./resources/js/components/Navigation/NavTop.jsx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Team_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Team.scss */ "./resources/js/components/Team/Team.scss");
/* harmony import */ var _Team_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Team_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../link */ "./resources/js/link.jsx");
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


 // import { BsDiamondHalf } from 'react-icons/bs';







var http = _link__WEBPACK_IMPORTED_MODULE_7__["link"];

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
    return _this;
  }

  _createClass(Rates, [{
    key: "loadRoomTypes",
    value: function loadRoomTypes() {
      var _this2 = this;

      axios.get(http + '/api/room_types').then(function (response) {
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
    key: "render",
    value: function render() {
      aos__WEBPACK_IMPORTED_MODULE_4___default.a.init();
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
      }, "N"), "ATIVE", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title-head"
      }, " H"), "OTEL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title-head"
      }, " T"), "EAM", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title-head"
      }, " W"), "ORK"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-title minimize-font"
      }, "We are a team, we're always win"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
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
      }, "H\u1ECD t\xEAn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '25vw'
        }
      }, "MSSV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '40vw'
        }
      }, "Ch\u1EE9c v\u1EE5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        style: {
          width: '15vw'
        }
      }, "L\u1EDBp"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tr\u1EA7n Qu\u1ED1c H\xF9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DH51700402"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "C\u1ED5 \u0111\xF4ng l\u1EDBn nh\u1EA5t"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "D17-TH01")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tri\u1EC7u Uy Ph\xFA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DH51501994"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "T\u1ED5ng gi\xE1m \u0111\u1ED1c"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "D17-TH01")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tr\u1ECBnh Ph\u01B0\u1EDBc T\xEDn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DH51700160"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Ph\xF3 t\u1ED5ng gi\xE1m \u0111\u1ED1c"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "D17-TH01")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\u0110\u1ED7 Ng\u1ECDc Ho\xE0ng H\xE2n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DH51701278"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Gi\xE1m \u0111\u1ED1c \u0111i\u1EC1u h\xE0nh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "D17-TH09"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Rates;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/components/Team/Team.scss":
/*!************************************************!*\
  !*** ./resources/js/components/Team/Team.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./Team.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/Team/Team.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);