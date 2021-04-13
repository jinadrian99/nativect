(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/admin/components/Customers/Customers.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/admin/components/Customers/Customers.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    font-weight: bold;\r\n}\r\n.icon-top{\r\n    display: block;\r\n    transition: 1s;\r\n    overflow: scroll;\r\n    width: 30px;\r\n    height: 23px;\r\n}\r\n.icon-top:hover{\r\n    transform: rotate(180deg);\r\n}\r\n.btn-add{\r\n    position: absolute;\r\n    margin-top: 1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n}\r\n.btn-outline-secondary:hover {\r\n    color: #fff;\r\n    background-color: #fff;\r\n    border-color: #151719;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space-15{\r\n    width: 15px;\r\n    height: 10px;\r\n    display: inline-block;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/admin/components/Customers/Customers.css":
/*!***************************************************************!*\
  !*** ./resources/js/admin/components/Customers/Customers.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Customers.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/admin/components/Customers/Customers.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/admin/components/Customers/Customers.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/admin/components/Customers/Customers.jsx ***!
  \***************************************************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _RecordCustomer_RecordCustomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecordCustomer/RecordCustomer */ "./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navigation/NavbarTop/NavbarTop */ "./resources/js/admin/components/Navigation/NavbarTop/NavbarTop.jsx");
/* harmony import */ var _Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Navigation/Sidebar/SidebarLeft */ "./resources/js/admin/components/Navigation/Sidebar/SidebarLeft.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var _Customers_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Customers.css */ "./resources/js/admin/components/Customers/Customers.css");
/* harmony import */ var _Customers_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Customers_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../link */ "./resources/js/link.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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











var http = _link__WEBPACK_IMPORTED_MODULE_9__["link"];
var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props);
    _this.state = {
      customers: [],
      tooltipOpen: false
    };
    _this.showObjectCustomers = _this.showObjectCustomers.bind(_assertThisInitialized(_this)); // this.deleteCustomer = this.deleteCustomer.bind(this);

    return _this;
  }

  _createClass(Register, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: "loadCustomers",
    value: function loadCustomers() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(http + '/api/customer').then(function (response) {
        _this2.setState({
          customers: response.data
        });
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadCustomers();
    } // deleteCustomer(id){
    //     if(window.confirm('Are you sure?')){
    //         axios.delete(http + '/api/customer/'+id).then((response)=>{
    //             if(response.data!=null){
    //                 this.loadCustomers();
    //             }
    //         })
    //         .catch(error => console.log(error));
    //     }
    // }

  }, {
    key: "showObjectCustomers",
    value: function showObjectCustomers() {
      console.log(this.state);
      var lst = this.state.customers.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RecordCustomer_RecordCustomer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          idKH: item.idKH,
          tenKH: item.tenKH,
          email: item.email,
          sdt: item.sdt,
          loaiThe: item.loaiThe,
          nganHang: item.nganHang,
          soThe: item.soThe // tenThe = { item.tenThe } 
          // ngayHetHan = { item.ngayHetHan } 
          // onSelectDelete = { this.deleteCustomer }

        });
      });
      return lst;
    }
  }, {
    key: "render",
    value: function render() {
      var _ref;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          width: '100vw',
          height: '100vh'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "2",
        style: (_ref = {
          paddingRight: '0'
        }, _defineProperty(_ref, "paddingRight", '0px'), _defineProperty(_ref, "height", '92vh'), _ref)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "10",
        style: {
          paddingLeft: '0'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-center mt-2"
      }, "TH\xD4NG TIN KH\xC1CH H\xC0NG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '80vh',
          overflow: 'scroll'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        striped: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "H\u1ECD t\xEAn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "S\u1ED1 \u0110T"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Lo\u1EA1i th\u1EBB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Ng\xE2n H\xE0ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "S\u1ED1 th\u1EBB t\xEDn d\u1EE5ng"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        className: "text-center"
      }, this.showObjectCustomers())))))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.css":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./RecordCustomer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.jsx ***!
  \***********************************************************************************/
/*! exports provided: RecordRegister, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordRegister", function() { return RecordRegister; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _RecordCustomer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordCustomer.css */ "./resources/js/admin/components/Customers/RecordCustomer/RecordCustomer.css");
/* harmony import */ var _RecordCustomer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RecordCustomer_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
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







var RecordRegister = /*#__PURE__*/function (_Component) {
  _inherits(RecordRegister, _Component);

  var _super = _createSuper(RecordRegister);

  function RecordRegister() {
    _classCallCheck(this, RecordRegister);

    return _super.apply(this, arguments);
  }

  _createClass(RecordRegister, [{
    key: "render",
    // deleteCustomer(id){
    //     this.props.onSelectDelete(id);
    // }
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "info-rec",
        style: {
          lineHeight: '61px',
          paddingTop: '0',
          paddingBottom: '0'
        },
        scope: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.props.idKH)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "info-rec",
        style: {
          lineHeight: '61px',
          paddingTop: '0',
          paddingBottom: '0'
        }
      }, this.props.tenKH), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "info-rec",
        style: {
          lineHeight: '61px',
          paddingTop: '0',
          paddingBottom: '0'
        }
      }, this.props.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "info-rec",
        style: {
          lineHeight: '61px',
          paddingTop: '0',
          paddingBottom: '0'
        }
      }, this.props.sdt), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "info-rec",
        style: {
          lineHeight: '61px',
          paddingTop: '0',
          paddingBottom: '0'
        }
      }, this.props.loaiThe), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "info-rec",
        style: {
          lineHeight: '61px',
          paddingTop: '0',
          paddingBottom: '0'
        }
      }, this.props.nganHang), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "info-rec",
        style: {
          lineHeight: '61px',
          paddingTop: '0',
          paddingBottom: '0'
        }
      }, this.props.soThe));
    }
  }]);

  return RecordRegister;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (RecordRegister);

/***/ })

}]);