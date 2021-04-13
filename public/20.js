(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/js/admin/components/Slides/AddSlide/AddSlide.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/admin/components/Slides/AddSlide/AddSlide.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Navigation/NavbarTop/NavbarTop */ "./resources/js/admin/components/Navigation/NavbarTop/NavbarTop.jsx");
/* harmony import */ var _Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Navigation/Sidebar/SidebarLeft */ "./resources/js/admin/components/Navigation/Sidebar/SidebarLeft.jsx");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../link */ "./resources/js/link.jsx");
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












var http = _link__WEBPACK_IMPORTED_MODULE_10__["link"];

var Slide = /*#__PURE__*/function (_Component) {
  _inherits(Slide, _Component);

  var _super = _createSuper(Slide);

  function Slide(props) {
    var _this;

    _classCallCheck(this, Slide);

    _this = _super.call(this, props);
    _this.state = {
      hinhAnh: '',
      chooseImageUrl: false,
      tooltipOpen: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.submitSlide = _this.submitSlide.bind(_assertThisInitialized(_this));
    _this.changeStateImage = _this.changeStateImage.bind(_assertThisInitialized(_this));
    _this.chooseImageUrlOrDevice = _this.chooseImageUrlOrDevice.bind(_assertThisInitialized(_this));
    _this.fileSelectHandle = _this.fileSelectHandle.bind(_assertThisInitialized(_this));
    _this.notify = _this.notify.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slide, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: "notify",
    value: function notify() {
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          fontSize: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillCheckCircle"], null), "  Th\xEAm th\xE0nh c\xF4ng"), {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].POSITION.BOTTOM_RIGHT,
        autoClose: 4000
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "changeStateImage",
    value: function changeStateImage() {
      console.log(this.state.chooseImageUrl);
      this.setState({
        chooseImageUrl: !this.state.chooseImageUrl
      });
    }
  }, {
    key: "chooseImageUrlOrDevice",
    value: function chooseImageUrlOrDevice() {
      if (this.state.chooseImageUrl) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          type: "file",
          name: "hinhAnh",
          onChange: this.fileSelectHandle,
          required: true,
          defaultValue: this.state.hinhAnh
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          type: "text",
          name: "hinhAnh",
          onChange: this.handleChange,
          required: true,
          placeholder: "Vui l\xF2ng nh\u1EADp d\u1EEF li\u1EC7u h\xECnh \u1EA3nh",
          defaultValue: this.state.hinhAnh
        });
      }
    }
  }, {
    key: "fileSelectHandle",
    value: function fileSelectHandle(e) {
      this.setState({
        hinhAnh: e.target.files[0]
      }, console.log(this.state.hinhAnh));
    }
  }, {
    key: "submitSlide",
    value: function submitSlide(e) {
      var _this2 = this;

      e.preventDefault(); // move upload file 

      var file = this.state.hinhAnh;
      var fd = new FormData();
      console.log(file);
      fd.append('data', file);
      console.log('value fd: ', fd.get('data'));
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(http + '/api/slides_upload_file', fd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        if (res.data == "Không có hình") {
          alert('không có hình');
          return;
        }

        console.log('có hình');
        var img = '/image/' + res.data;
        console.log(img);

        _this2.setState({
          hinhAnh: img
        }, function () {
          // upload to db
          var slide = {
            hinhAnh: _this2.state.hinhAnh
          };
          console.log(slide);
          axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(http + '/api/slides', slide).then(function (res) {
            if (res.data != null) {
              _this2.setState(_this2.state);

              _this2.notify();
            }
          });
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _ref,
          _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          width: '100vw',
          height: '100vh'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "2",
        style: (_ref = {
          paddingRight: '0'
        }, _defineProperty(_ref, "paddingRight", '0px'), _defineProperty(_ref, "height", '92vh'), _ref)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "10",
        style: {
          paddingLeft: '0'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/admin/slides"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "red",
        className: "btn-add",
        id: "btnAdd"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_6__["ImCancelCircle"], {
        color: "#D0211C",
        className: "icon-top"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        placement: "right",
        isOpen: this.state.tooltipOpen,
        target: "btnAdd",
        toggle: function toggle() {
          return _this3.toggle();
        }
      }, "H\u1EE7y b\u1ECF thao t\xE1c"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-center mt-2"
      }, "\u0110I\u1EC0N TH\xCAM TH\xD4NG TIN SLIDE QU\u1EA2NG C\xC1O"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '15px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.submitSlide,
        className: "text-center",
        style: {
          marginRight: '15%',
          marginLeft: '15%',
          width: '70%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 2
      }, "Lo\u1EA1i h\xECnh \u1EA3nh "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '4%',
          lineHeight: '36.22px'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        onClick: this.changeStateImage,
        style: {
          marginTop: '10px'
        }
      }), "Url/My Device")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 2
      }, "H\xECnh \u1EA3nh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 10
      }, this.chooseImageUrlOrDevice())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        color: "warning",
        type: "submit"
      }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "space-15"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        type: "reset"
      }, "Reset")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], null)))));
    }
  }]);

  return Slide;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);