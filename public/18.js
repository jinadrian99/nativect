(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/admin/components/RoomTypes/AddRoomType/AddRoomType.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/components/RoomTypes/AddRoomType/AddRoomType.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddRoomType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Navigation/NavbarTop/NavbarTop */ "./resources/js/admin/components/Navigation/NavbarTop/NavbarTop.jsx");
/* harmony import */ var _Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Navigation/Sidebar/SidebarLeft */ "./resources/js/admin/components/Navigation/Sidebar/SidebarLeft.jsx");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../link */ "./resources/js/link.jsx");
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









var http = _link__WEBPACK_IMPORTED_MODULE_7__["link"];

var AddRoomType = /*#__PURE__*/function (_Component) {
  _inherits(AddRoomType, _Component);

  var _super = _createSuper(AddRoomType);

  function AddRoomType(props) {
    var _this;

    _classCallCheck(this, AddRoomType);

    _this = _super.call(this, props);
    _this.state = {
      tenLP: '',
      hinhAnh: '',
      moTa: '',
      mtGT: '',
      mtTQ: '',
      slNguoi: 1,
      phongTam: 1,
      soGiuong: 1,
      slPhongTrong: '',
      formdata: '',
      chooseImageDevive: true,
      tooltipOpen: false
    };
    _this.resetForm = _this.resetForm.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.submitRoomType = _this.submitRoomType.bind(_assertThisInitialized(_this));
    _this.handleClickSlNguoi = _this.handleClickSlNguoi.bind(_assertThisInitialized(_this));
    _this.handleClickSoGiuong = _this.handleClickSoGiuong.bind(_assertThisInitialized(_this));
    _this.handleClickPhongTam = _this.handleClickPhongTam.bind(_assertThisInitialized(_this));
    _this.changeStateImage = _this.changeStateImage.bind(_assertThisInitialized(_this));
    _this.chooseImageUrlOrDevice = _this.chooseImageUrlOrDevice.bind(_assertThisInitialized(_this));
    _this.fileSelectHandle = _this.fileSelectHandle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddRoomType, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        tenLP: '',
        hinhAnh: '',
        moTa: '',
        slPhongTrong: ''
      });
    }
  }, {
    key: "handleClickSlNguoi",
    value: function handleClickSlNguoi(v) {
      if (v == 0) {
        this.setState({
          slNguoi: 1
        });
      } else if (v == 1) {
        this.setState({
          slNguoi: 2
        });
      } else {
        this.setState({
          slNguoi: 4
        });
      }
    }
  }, {
    key: "handleClickPhongTam",
    value: function handleClickPhongTam(v) {
      if (v == 0) {
        this.setState({
          phongTam: 1
        });
      } else {
        this.setState({
          phongTam: 2
        });
      }
    }
  }, {
    key: "handleClickSoGiuong",
    value: function handleClickSoGiuong(v) {
      if (v == 0) {
        this.setState({
          soGiuong: 1
        });
      } else {
        this.setState({
          soGiuong: 2
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "changeStateImage",
    value: function changeStateImage() {
      console.log(this.state.chooseImageDevive);
      this.setState({
        chooseImageDevive: !this.state.chooseImageDevive
      });
    }
  }, {
    key: "chooseImageUrlOrDevice",
    value: function chooseImageUrlOrDevice() {
      if (this.state.chooseImageDevive) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          type: "file",
          name: "hinhAnh",
          onChange: this.fileSelectHandle,
          multiple: true
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          type: "text",
          name: "hinhAnh",
          placeholder: "http://....jpg",
          required: true,
          onChange: this.handleChange
        });
      }
    }
  }, {
    key: "fileSelectHandle",
    value: function fileSelectHandle(e) {
      this.setState({
        hinhAnh: e.target.files
      }); // // move upload file 
      // var files = e.target.files;
      // var fd = new FormData();
      // for (let i = 0; i < files.length; i++) {
      //     const file = files[i];   
      //     console.log(file);
      //     fd.append('data[]', file);
      // }
      // console.log(fd.getAll('data[]'));
      // axios.post(http + '/api/room_types_upload_file', fd, {
      //     headers: {
      //         "Content-Type": "multipart/form-data",
      //     }
      // })
      // .then(res=>{
      //     console.log(res.data);
      // }).catch(err=>{
      //     console.log(err);
      // })
      // var imgsraw = e.target.files;
      // // console.log(imgsraw);
      // var imgs = [];
      // for (let i = 0; i < imgsraw.length; i++) {
      //     imgs.push('/image/'+imgsraw[i].name);
      // }
      // // console.log(imgs);
      // imgs = JSON.stringify(imgs);
      // this.setState({
      //     hinhAnh: imgs
      // }, ()=>{ console.log(this.state.hinhAnh); });
    }
  }, {
    key: "submitRoomType",
    value: function submitRoomType(e) {
      var _this2 = this;

      e.preventDefault(); // move upload file 

      var files = this.state.hinhAnh;
      var fd = new FormData();

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        console.log(file);
        fd.append('data[]', file);
      }

      console.log('value fd: ', fd.getAll('data[]'));
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(http + '/api/room_types_upload_file', fd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        if (res.data == "Không có hình") {
          alert('không có hình');
          return;
        }

        console.log('có hình'); // Convert to JSON

        var imgsraw = res.data;
        var des = [];
        des.push(_this2.state.mtGT);
        des.push(_this2.state.mtTQ);
        des.push(_this2.state.slNguoi);
        des.push(_this2.state.phongTam);
        des.push(_this2.state.soGiuong);
        console.log(imgsraw);
        var imgs = [];

        for (var _i = 0; _i < imgsraw.length; _i++) {
          imgs.push('/image/' + imgsraw[_i]);
        }

        console.log(imgs);
        imgs = JSON.stringify(imgs);
        des = JSON.stringify(des);
        console.log(des);

        _this2.setState({
          hinhAnh: imgs,
          moTa: des
        }, function () {
          // upload to db
          var roomType = {
            tenLP: _this2.state.tenLP,
            hinhAnh: _this2.state.hinhAnh,
            moTa: _this2.state.moTa,
            slPhongTrong: _this2.state.slPhongTrong
          };
          console.log('value room: ', roomType);
          axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(http + '/api/room_types', roomType).then(function (res) {
            if (res.data != null) {
              _this2.resetForm();

              alert("Thêm loại phòng thành công");
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
        to: "/admin/room_types"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "red",
        className: "btn-add",
        id: "btnAdd"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_5__["ImCancelCircle"], {
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
      }, "\u0110I\u1EC0N TH\xCAM TH\xD4NG TIN LO\u1EA0I PH\xD2NG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '15px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.submitRoomType,
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
      }, "T\xEAn lo\u1EA1i ph\xF2ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "tenLP",
        placeholder: "\u0110i\u1EC1n t\xEAn lo\u1EA1i ph\xF2ng",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "Lo\u1EA1i h\xECnh \u1EA3nh: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
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
        sm: 3
      }, "H\xECnh \u1EA3nh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, this.chooseImageUrlOrDevice())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "M\xF4 t\u1EA3 gi\u1EDBi thi\u1EC7u"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "mtGT",
        placeholder: "1 v\xE0i m\xF4 t\u1EA3 gi\u1EDBi thi\u1EC7u v\u1EC1 ph\xF2ng?",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "M\xF4 t\u1EA3 t\u1ED5ng qu\xE1t"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "mtTQ",
        placeholder: "1 v\xE0i m\xF4 t\u1EA3 t\u1ED5ng qu\xE1t v\u1EC1 ph\xF2ng?",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "S\u1ED1 l\u01B0\u1EE3ng ng\u01B0\u1EDDi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '-68%',
          marginTop: '1.1%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this3.handleClickSlNguoi(0);
        },
        defaultChecked: true,
        name: "slNguoi",
        value: this.state.slNguoi
      }), "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '10%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this3.handleClickSlNguoi(1);
        },
        name: "slNguoi",
        value: this.state.slNguoi
      }), "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '10%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this3.handleClickSlNguoi(2);
        },
        name: "slNguoi",
        value: this.state.slNguoi
      }), "4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "Ph\xF2ng t\u1EAFm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '-79%',
          marginTop: '1.1%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this3.handleClickPhongTam(0);
        },
        defaultChecked: this.state.phongTam,
        name: "phongTam",
        value: "0"
      }), "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '10%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this3.handleClickPhongTam(1);
        },
        name: "phongTam",
        value: "1"
      }), "2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "S\u1ED1 gi\u01B0\u1EDDng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '-79%',
          marginTop: '1.1%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this3.handleClickSoGiuong(0);
        },
        defaultChecked: true,
        name: "soGiuong",
        value: "0"
      }), "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '10%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this3.handleClickSoGiuong(1);
        },
        name: "soGiuong",
        value: "1"
      }), "2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        row: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        sm: 3
      }, "S\u1ED1 l\u01B0\u1EE3ng ph\xF2ng tr\u1ED1ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "number",
        name: "slPhongTrong",
        placeholder: "\u0110i\u1EC1n s\u1ED1 l\u01B0\u1EE3ng ph\xF2ng tr\u1ED1ng",
        required: true,
        onChange: this.handleChange,
        autoComplete: "off"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, "Reset"))))))))));
    }
  }]);

  return AddRoomType;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);