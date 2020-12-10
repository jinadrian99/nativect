(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Booking/BookingInfo/BookingInfo.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Booking/BookingInfo/BookingInfo.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formPersonalDetails select, .formPersonalDetails input{\r\n    border: none !important;\r\n    border-bottom:1px solid rgba(169, 169, 169, 0.823) !important;\r\n    outline: none;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: 1.2vw;\r\n}\r\n\r\n.breadcrumb-nativeLink a:hover{\r\n    color: gray !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.breadcrumb-nativeLink a{\r\n    color: black !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.button-BookNow button{\r\n    color: white !important;\r\n    background-color: black;\r\n    border: 1px solid black;\r\n    width: 11vw;\r\n    transition: 0.5s;\r\n}\r\n\r\n.button-BookNow button:hover{\r\n    color: black !important;\r\n    background-color: #F3F1EF;\r\n    border: 1px solid black;\r\n    width: 11vw;\r\n}\r\n\r\n.iconHotel{\r\n    position: relative;\r\n    top: -10px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Booking/Booking.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/Booking/Booking.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Booking; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer/Footer */ "./resources/js/components/Footer/Footer.jsx");
/* harmony import */ var _Navigation_NavTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation/NavTop */ "./resources/js/components/Navigation/NavTop.jsx");
/* harmony import */ var _BookingInfo_BookingInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookingInfo/BookingInfo */ "./resources/js/components/Booking/BookingInfo/BookingInfo.jsx");
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






var Booking = /*#__PURE__*/function (_Component) {
  _inherits(Booking, _Component);

  var _super = _createSuper(Booking);

  function Booking(props) {
    var _this;

    _classCallCheck(this, Booking);

    _this = _super.call(this, props);
    _this.state = {
      slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'), 10) : 0
    };
    _this.addItemInShoppingCart = _this.addItemInShoppingCart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Booking, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "addItemInShoppingCart",
    value: function addItemInShoppingCart(sl) {
      this.setState({
        slItemAddCart: sl
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        slItemAddCart: this.state.slItemAddCart
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingInfo_BookingInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onAddItemInShoppingCart: this.addItemInShoppingCart
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Booking;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/components/Booking/BookingInfo/BookingInfo.css":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Booking/BookingInfo/BookingInfo.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./BookingInfo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Booking/BookingInfo/BookingInfo.css");

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

/***/ "./resources/js/components/Booking/BookingInfo/BookingInfo.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Booking/BookingInfo/BookingInfo.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _BookingInfo_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BookingInfo.css */ "./resources/js/components/Booking/BookingInfo/BookingInfo.css");
/* harmony import */ var _BookingInfo_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_BookingInfo_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../link */ "./resources/js/link.jsx");
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














var http = _link__WEBPACK_IMPORTED_MODULE_12__["link"];

var BookingInfo = /*#__PURE__*/function (_Component) {
  _inherits(BookingInfo, _Component);

  var _super = _createSuper(BookingInfo);

  function BookingInfo(props) {
    var _this;

    _classCallCheck(this, BookingInfo);

    _this = _super.call(this, props);
    _this.state = {
      startDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
      endDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate),
      tenLP: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].tenLP : '',
      hinhAnh: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].hinhAnh : '',
      giaLP: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].giaLP : '',
      diff: localStorage.getItem('dateArriveCart') ? JSON.parse(localStorage.getItem('dateArriveCart')).days_diff : '',
      tenKH: '',
      email: '',
      emailAgain: '',
      sdt: '',
      loaiThe: 0,
      nganHang: 0,
      tenThe: '',
      soThe: '',
      ngayHetHan: null,
      errors: {},
      slPhong: 0,
      roomType: [],
      isGoToHomePage: false,
      isGoToBasketPage: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.submitBookNow = _this.submitBookNow.bind(_assertThisInitialized(_this));
    _this.notify = _this.notify.bind(_assertThisInitialized(_this));
    _this.resetForm = _this.resetForm.bind(_assertThisInitialized(_this));
    _this.chooseTypeCard = _this.chooseTypeCard.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BookingInfo, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var idPhongDat = JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].idLP;
      var arriveDate = new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate);
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(http + '/api/room_types/' + idPhongDat).then(function (res) {
        if (res.data != null) {
          _this2.setState({
            slPhong: res.data.slPhongTrong
          }, function () {
            if (parseInt(_this2.state.slPhong, 10) <= 0) {
              localStorage.removeItem('itemsShoppingCart');
              localStorage.removeItem('slItemsShoppingCart');
              localStorage.removeItem('dateArriveCart');
              react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                style: {
                  fontSize: '20px'
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__["BiErrorAlt"], null), "  S\u1ED1 l\u01B0\u1EE3ng ph\xF2ng \u0111\xE3 h\u1EBFt"), {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_CENTER,
                autoClose: 4000
              });
              setTimeout(function () {
                _this2.setState({
                  isGoToHomePage: !_this2.state.isGoToHomePage
                });
              }, 4000);
            }
          });
        }
      });

      if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(), 'yyyy/MM/dd') > Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(arriveDate, 'yyyy/MM/dd')) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            fontSize: '16px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__["BiErrorAlt"], null), "  B\u1EA1n ch\u1ECDn nh\u1EA7m ng\xE0y trong qu\xE1 kh\u1EE9"), {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_CENTER,
          autoClose: 4000
        });
        setTimeout(function () {
          _this2.setState({
            isGoToBasketPage: !_this2.state.isGoToBasketPage
          });
        }, 4000);
      }
    }
  }, {
    key: "notify",
    value: function notify() {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          fontSize: '20px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_10__["AiFillCheckCircle"], null), "  \u0110\u1EB7t ph\xF2ng c\u1EE7a b\u1EA1n v\u1EDBi NATIVE \u0111\xE3 \u0111\u01B0\u1EE3c x\xE1c nh\u1EADn."), {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
        autoClose: 4000
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        tenKH: '',
        email: '',
        emailAgain: '',
        sdt: '',
        loaiThe: 0,
        nganHang: 0,
        tenThe: '',
        soThe: '',
        ngayHetHan: ''
      });
    }
  }, {
    key: "chooseTypeCard",
    value: function chooseTypeCard() {
      if (this.state.loaiThe == 2) {
        return;
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "ngayHetHan",
          placeholder: "EXPIRY DATE* yyyy/MM/dd",
          onChange: this.handleChange,
          style: {
            width: '100%'
          }
        });
      }
    }
  }, {
    key: "submitBookNow",
    value: function submitBookNow(e) {
      var _this3 = this;

      e.preventDefault();
      var _this$state = this.state,
          tenKH = _this$state.tenKH,
          email = _this$state.email,
          emailAgain = _this$state.emailAgain,
          sdt = _this$state.sdt,
          tenThe = _this$state.tenThe,
          soThe = _this$state.soThe;
      var isValidFullName = true;
      var isValidPhone = true;
      var isValidCardName = true;
      var isValidCardNumber = true;
      var isValidEmailAgain = true;
      var errors = {};

      if (tenKH.trim().length < 4) {
        errors.nameLength = "Họ tên phải đủ 4 kí tự trở lên";
        isValidFullName = false;
      }

      if (sdt.trim().length < 8) {
        errors.phoneLength = "Số điện thoại không phù hợp";
        isValidPhone = false;
      }

      if (tenThe.trim().length < 4) {
        errors.cardNameLength = "Tên thẻ phải đủ 4 kí tự trở lên";
        isValidCardName = false;
      }

      if (soThe.trim().length < 16) {
        errors.cardNumberLength = "Số thẻ phải đủ 16 kí tự trở lên";
        isValidCardNumber = false;
      }

      if (emailAgain != email) {
        errors.emailAgainLength = "Email nhập lại không trùng khớp";
        isValidEmailAgain = false;
      }

      this.setState({
        errors: errors
      }, function () {
        console.log(_this3.state.errors.nameLength);
        console.log(_this3.state.errors.phoneLength);
        console.log(_this3.state.errors.cardNameLength);
        console.log(_this3.state.errors.cardNumberLength);
        console.log(_this3.state.errors.emailAgainLength);

        if (!isValidFullName || !isValidPhone || !isValidCardName || !isValidCardNumber || !isValidEmailAgain) {
          if (!isValidFullName) {
            if (_this3.state.errors.nameLength != "") {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _this3.state.errors.nameLength), {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
                autoClose: 4000
              });
            }
          }

          if (!isValidPhone) {
            if (_this3.state.errors.phoneLength != "") {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _this3.state.errors.phoneLength), {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
                autoClose: 4000
              });
            }
          }

          if (!isValidCardName) {
            if (_this3.state.errors.cardNameLength != "") {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _this3.state.errors.cardNameLength), {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
                autoClose: 4000
              });
            }
          }

          if (!isValidCardNumber) {
            if (_this3.state.errors.cardNumberLength != "") {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _this3.state.errors.cardNumberLength), {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
                autoClose: 4000
              });
            }
          }

          if (!isValidEmailAgain) {
            if (_this3.state.errors.emailAgainLength != "") {
              react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _this3.state.errors.emailAgainLength), {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
                autoClose: 4000
              });
            }
          }

          return;
        }

        console.warn('send mail', _this3.state.email); // axios de xet email co ton tai ko gui qua api existmail

        var checkEmail = {
          email: _this3.state.email
        };
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(http + '/api/exist_mail', checkEmail).then(function (res) {
          if (res.data) {
            console.warn('check mail');
            var id = JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].idLP;
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(http + '/api/room_types/' + id).then(function (res) {
              console.warn('check sl LP');

              if (res.data != null) {
                _this3.setState({
                  roomType: res.data
                }, function () {
                  console.log('roomType: ', _this3.state.roomType);
                  var room = {
                    idLP: _this3.state.roomType.idLP,
                    tenLP: _this3.state.roomType.tenLP,
                    hinhAnh: _this3.state.roomType.hinhAnh,
                    moTa: _this3.state.roomType.moTa,
                    slPhongTrong: parseInt(_this3.state.roomType.slPhongTrong, 10) - 1
                  };
                  console.log('room: ', room);
                  axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(http + '/api/room_types/' + room.idLP, room).then(function (res) {
                    console.warn('upd sl Trong');

                    if (res.data != null) {
                      var customer = {
                        tenKH: _this3.state.tenKH,
                        email: _this3.state.email,
                        sdt: _this3.state.sdt,
                        loaiThe: _this3.state.loaiThe,
                        nganHang: _this3.state.nganHang,
                        tenThe: _this3.state.tenThe,
                        soThe: _this3.state.soThe,
                        ngayHetHan: _this3.state.ngayHetHan != null ? Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(_this3.state.ngayHetHan), 'yyyy-MM-dd') : null
                      };
                      console.log(customer);
                      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(http + '/api/customer', customer).then(function (res) {
                        console.warn('add cus');

                        if (res.data != null) {
                          customer = {
                            idKH: res.data.idKH
                          };
                          var booking = {
                            idLP: id,
                            idKH: customer.idKH,
                            ngayDen: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(_this3.state.startDate, 'yyyy-MM-dd'),
                            ngayDi: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(_this3.state.endDate, 'yyyy-MM-dd'),
                            soDem: _this3.state.diff,
                            tongTien: parseInt(_this3.state.giaLP, 10) * _this3.state.diff
                          };
                          console.log(booking);
                          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(http + '/api/bookings', booking).then(function (res) {
                            console.warn('add booking');

                            if (res.data != null) {
                              //tao var data_obj de gui qua api sendmail de lay data lam form de gui mail cho kh
                              booking = {
                                idDP: res.data.idDP
                              };
                              var data_obj = {
                                tenKH: _this3.state.tenKH,
                                email: _this3.state.email,
                                sdt: _this3.state.sdt,
                                loaiThe: _this3.state.loaiThe,
                                nganHang: _this3.state.nganHang,
                                soThe: _this3.state.soThe,
                                ngayDat: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(), 'dd/MM/yyyy'),
                                idBooking: booking.idDP,
                                tenLP: _this3.state.roomType.tenLP,
                                ngayDen: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(_this3.state.startDate, 'dd/MM/yyyy'),
                                ngayDi: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(_this3.state.endDate, 'dd/MM/yyyy'),
                                tongTien: new Intl.NumberFormat().format(parseInt(_this3.state.giaLP, 10) * _this3.state.diff)
                              };
                              axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(http + '/api/send_mail', data_obj).then(function (res) {
                                console.warn('send mail');

                                if (res.data == true) {
                                  _this3.notify();

                                  react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                                    style: {
                                      fontSize: '20px'
                                    }
                                  }, "Vui l\xF2ng ki\u1EC3m tra l\u1EA1i email c\u1EE7a b\u1EA1n"), {
                                    position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
                                    autoClose: 4000
                                  });
                                  localStorage.removeItem('itemsShoppingCart');
                                  localStorage.removeItem('slItemsShoppingCart');
                                  localStorage.removeItem('dateArriveCart');
                                  setTimeout(function () {
                                    _this3.setState({
                                      isGoToHomePage: !_this3.state.isGoToHomePage
                                    });
                                  }, 8000);
                                } else {
                                  react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                                    style: {
                                      fontSize: '16px'
                                    }
                                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__["BiErrorAlt"], null), "  \u0110ang c\xF3 s\u1EF1 c\u1ED1 tr\xEAn mail server, vui l\xF2ng \u0111\u1EE3i 15 gi\xE2y sau"), {
                                    position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
                                    autoClose: 4000
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                });
              }
            });
          } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                fontSize: '20px'
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__["BiErrorAlt"], null), "  Email kh\xF4ng t\u1ED3n t\u1EA1i"), {
              position: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].POSITION.BOTTOM_RIGHT,
              autoClose: 4000
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isGoToHomePage) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/"
        });
      }

      if (this.state.isGoToBasketPage) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/your_basket"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          paddingTop: '4%',
          backgroundColor: '#FFFFFF'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: '#FFFFFF',
          paddingBottom: '1%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "breadcrumb-nativeLink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "NATIVE")), "\xA0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosArrowForward"], {
        className: "icon"
      }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "PAYMENT"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: '#F3F1EF'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%',
          paddingBottom: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '3vw',
          fontWeight: 'bold',
          fontFamily: 'Georgia'
        }
      }, "Almost there."), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaHotel"], {
        style: {
          width: '4vw',
          height: '4vh'
        },
        className: "iconHotel"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '1.5vw',
          fontFamily: 'Georgia'
        }
      }, "Please complete the fields below to secure your selection.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "3"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '3%',
          paddingBottom: '8%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontWeight: 'bold',
          fontSize: '1.5vw',
          fontFamily: 'Georgia'
        }
      }, "Personal Details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "formPersonalDetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        style: {
          paddingTop: '4%',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "MR."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "MRS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "MISS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "MS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "DR."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "UNKNOWN"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "tenKH",
        placeholder: "FULLNAME*",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off",
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        },
        className: "formPersonalDetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "EMAIL*",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off",
        style: {
          width: '100%'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        name: "emailAgain",
        placeholder: "CONFIRM EMAIL*",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off",
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        },
        className: "formPersonalDetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "sdt",
        placeholder: "TELEPHONE*",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off",
        style: {
          width: '100%'
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "5"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '8%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontWeight: 'bold',
          fontSize: '1.5vw',
          fontFamily: 'Georgia'
        }
      }, "Payment Details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "7"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "image/Visa.png",
        style: {
          width: '5vw',
          height: 'auto'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "image/mastercard.jpg",
        style: {
          width: '5vw',
          height: 'auto'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "image/BIDV.jpg",
        style: {
          width: '5vw',
          height: 'auto'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "image/eximbank.png",
        style: {
          width: '5vw',
          height: 'auto'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: "formPersonalDetails",
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "loaiThe",
        onChange: this.handleChange,
        style: {
          paddingTop: '4%',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, "VISA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1"
      }, "MASTERCARD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "2"
      }, "DOMESTIC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "nganHang",
        onChange: this.handleChange,
        style: {
          paddingTop: '4%',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, "BIDV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1"
      }, "EXIMBANK")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        },
        className: "formPersonalDetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "tenThe",
        placeholder: "NAME ON CARD*",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off",
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        },
        className: "formPersonalDetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "soThe",
        placeholder: "CARD NUMBER*",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off",
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        },
        className: "formPersonalDetails"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, this.chooseTypeCard()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "5"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%',
          backgroundColor: '#F3F1EF'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        style: {
          fontSize: '1.2vw',
          fontFamily: 'Georgia'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontWeight: 'bold',
          fontSize: '1.8vw',
          fontFamily: 'Georgia'
        }
      }, "Your Receipt"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(this.state.startDate, "dd/MM"), " - ", Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(this.state.endDate, "dd/MM"), ", ", this.state.diff, " ", this.state.diff > 1 ? 'nights' : 'night'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.state.tenLP, " X 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, parseInt(this.state.giaLP, 10)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Total cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "1 room for ", this.state.diff, " ", this.state.diff > 1 ? 'nights' : 'night'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingBottom: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontWeight: 'bold',
          fontSize: '2vw',
          fontFamily: 'Georgia'
        }
      }, new Intl.NumberFormat().format(parseInt(this.state.giaLP, 10) * this.state.diff), " VND"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '15%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        style: {
          fontSize: '1.4vw',
          fontFamily: 'Georgia',
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Total booking cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontWeight: 'bold',
          fontSize: '2vw'
        }
      }, new Intl.NumberFormat().format(parseInt(this.state.giaLP, 10) * this.state.diff), " VND"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: {
          paddingTop: '7%'
        },
        className: "button-BookNow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.submitBookNow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "BOOK NOW"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], null));
    }
  }]);

  return BookingInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);