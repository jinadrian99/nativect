(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/admin/components/Customers/FormCustomer/FromCustomer.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/components/Customers/FormCustomer/FromCustomer.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FromCustomer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Navigation/NavbarTop/NavbarTop */ "./resources/js/admin/components/Navigation/NavbarTop/NavbarTop.jsx");
/* harmony import */ var _Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Navigation/Sidebar/SidebarLeft */ "./resources/js/admin/components/Navigation/Sidebar/SidebarLeft.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../link */ "./resources/js/link.jsx");
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







var http = _link__WEBPACK_IMPORTED_MODULE_5__["link"];

var FromCustomer = /*#__PURE__*/function (_Component) {
  _inherits(FromCustomer, _Component);

  var _super = _createSuper(FromCustomer);

  function FromCustomer(props) {
    var _this;

    _classCallCheck(this, FromCustomer);

    _this = _super.call(this, props);
    _this.state = {
      idKH: '',
      tenKH: '',
      soThe: '',
      ngayHetHan: ''
    };
    _this.findCustomerByID = _this.findCustomerByID.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.saveChange = _this.saveChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FromCustomer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // lấy địa chỉ trên path, có do sd Router, 
      // +: để hóa thành số nếu ko thì path: chữ -> lấy match params -> chữ
      var idCustomer = +this.props.match.params.id;

      if (idCustomer) {
        this.findCustomerByID(idCustomer);
      }
    }
  }, {
    key: "findCustomerByID",
    value: function findCustomerByID(idCustomer) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(http + '/api/customer/' + idCustomer).then(function (response) {
        if (response != null) {
          _this2.setState({
            idKH: response.data.idKH,
            tenKH: response.data.tenKH,
            soThe: response.data.soThe,
            ngayHetHan: response.data.ngayHetHan
          });
        }
      })["catch"](function (err) {
        console.log('Error: ' + err);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "undoPages",
    value: function undoPages() {
      //  có do sd Router
      return this.props.history.push("/admin/customers");
    }
  }, {
    key: "saveChange",
    value: function saveChange() {
      var _this3 = this;

      var customer = this.state;

      if (window.confirm('Are you sure?')) {
        console.log(customer);
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(http + '/api/customer/' + customer.idKH, customer).then(function (response) {
          if (response.data != null) {
            // đợi tí để data fetch cái r vào thì mới nhận data mới 
            setTimeout(function () {
              return _this3.undoPages();
            }, 1000);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _ref,
          _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          width: '100vw',
          height: '100vh'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "2",
        style: (_ref = {
          paddingRight: '0'
        }, _defineProperty(_ref, "paddingRight", '0px'), _defineProperty(_ref, "height", '92vh'), _ref)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "10",
        style: {
          paddingLeft: '0'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-center mt-2"
      }, "\u0110I\u1EC0N TH\xD4NG TIN KH\xC1CH H\xC0NG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '15px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "text-center",
        style: {
          marginRight: '15%',
          marginLeft: '15%',
          width: '70%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "ID Kh\xE1ch h\xE0ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "idKH",
        disabled: true,
        value: this.state.idKH,
        readOnly: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "H\u1ECD t\xEAn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "tenKH",
        onChange: this.handleChange,
        defaultValue: this.state.tenKH,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "S\u1ED1 th\u1EBB t\xEDn d\u1EE5ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "soThe",
        onChange: this.handleChange,
        defaultValue: this.state.soThe,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "Ng\xE0y h\u1EBFt h\u1EA1n th\u1EBB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "ngayHetHan",
        onChange: this.handleChange,
        defaultValue: this.state.ngayHetHan,
        autoComplete: "off"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '10vh'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        content: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        style: {
          marginLeft: '75%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        onClick: function onClick() {
          return _this4.undoPages();
        }
      }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "space-15"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "warning",
        onClick: function onClick() {
          return _this4.saveChange();
        }
      }, "Update")))))));
    }
  }]);

  return FromCustomer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);