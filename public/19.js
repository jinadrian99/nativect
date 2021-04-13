(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/admin/components/RoomTypes/FormRoomType/RoomTypeForm.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/components/RoomTypes/FormRoomType/RoomTypeForm.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoomTypeForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Navigation_NavbarTop_NavbarTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Navigation/NavbarTop/NavbarTop */ "./resources/js/admin/components/Navigation/NavbarTop/NavbarTop.jsx");
/* harmony import */ var _Navigation_Sidebar_SidebarLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Navigation/Sidebar/SidebarLeft */ "./resources/js/admin/components/Navigation/Sidebar/SidebarLeft.jsx");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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

var RoomTypeForm = /*#__PURE__*/function (_Component) {
  _inherits(RoomTypeForm, _Component);

  var _super = _createSuper(RoomTypeForm);

  function RoomTypeForm(props) {
    var _this;

    _classCallCheck(this, RoomTypeForm);

    _this = _super.call(this, props);
    _this.state = {
      idLP: '',
      tenLP: '',
      hinhAnh: '',
      moTa: '',
      mtGT: '',
      mtTQ: '',
      slNguoi: '',
      phongTam: '',
      soGiuong: '',
      slPhongTrong: '',
      imgRaw: '',
      chooseImageUrl: false,
      tooltipOpen: false
    };
    _this.findRoomTypeByID = _this.findRoomTypeByID.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleClickSlNguoi = _this.handleClickSlNguoi.bind(_assertThisInitialized(_this));
    _this.handleClickSoGiuong = _this.handleClickSoGiuong.bind(_assertThisInitialized(_this));
    _this.handleClickPhongTam = _this.handleClickPhongTam.bind(_assertThisInitialized(_this));
    _this.fileSelectHandle = _this.fileSelectHandle.bind(_assertThisInitialized(_this));
    _this.changeStateImage = _this.changeStateImage.bind(_assertThisInitialized(_this));
    _this.saveChange = _this.saveChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RoomTypeForm, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var idLoaiPhong = +this.props.match.params.id;

      if (idLoaiPhong) {
        this.findRoomTypeByID(idLoaiPhong);
      }
    }
  }, {
    key: "undoPages",
    value: function undoPages() {
      return this.props.history.push("/admin/room_types");
    }
  }, {
    key: "findRoomTypeByID",
    value: function findRoomTypeByID(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(http + '/api/room_types/' + id).then(function (res) {
        if (res.data != null) {
          _this2.setState({
            idLP: res.data.idLP,
            tenLP: res.data.tenLP,
            hinhAnh: res.data.hinhAnh,
            imgRaw: res.data.hinhAnh,
            moTa: JSON.parse(res.data.moTa),
            slPhongTrong: res.data.slPhongTrong
          }, function () {
            if (_this2.state.moTa != null) {
              _this2.setState({
                mtGT: _this2.state.moTa[0],
                mtTQ: _this2.state.moTa[1],
                slNguoi: _this2.state.moTa[2],
                phongTam: _this2.state.moTa[3],
                soGiuong: _this2.state.moTa[4]
              });
            }

            console.log(_this2.state.mtGT);
          });
        }
      })["catch"](function (err) {
        console.log('Error: ' + err);
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
          defaultValue: this.state.hinhAnh,
          multiple: true
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          type: "text",
          name: "hinhAnh",
          onChange: this.handleChange,
          defaultValue: this.state.hinhAnh
        });
      }
    }
  }, {
    key: "fileSelectHandle",
    value: function fileSelectHandle(e) {
      this.setState({
        hinhAnh: e.target.files
      });
      console.log(e.target.files);
    }
  }, {
    key: "saveChange",
    value: function saveChange(e) {
      var _this3 = this;

      // MoTa
      var des = [];
      des.push(this.state.mtGT);
      des.push(this.state.mtTQ);
      des.push(this.state.slNguoi);
      des.push(this.state.phongTam);
      des.push(this.state.soGiuong);
      des = JSON.stringify(des);
      console.log(this.state.hinhAnh, this.state.imgRaw);

      if (this.state.hinhAnh === this.state.imgRaw) {
        this.setState({
          moTa: des
        }, function () {
          console.log("UpLoad DB Hinh cu: ", _this3.state); // upload to db

          var roomType = {
            idLP: _this3.state.idLP,
            tenLP: _this3.state.tenLP,
            hinhAnh: _this3.state.hinhAnh,
            moTa: _this3.state.moTa,
            slPhongTrong: _this3.state.slPhongTrong
          };
          delete roomType.chooseImageUrl;
          delete roomType.tooltipOpen;
          console.log('hinh anh:', roomType.hinhAnh);
          console.log('value room: ', roomType);

          if (window.confirm('Are you sure ?')) {
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(http + '/api/room_types/' + roomType.idLP, roomType).then(function (res) {
              if (res.data != null) {
                setTimeout(function () {
                  return _this3.undoPages();
                }, 1000);
              }
            });
          }
        });
      } else if (this.state.hinhAnh !== this.state.imgRaw) {
        // delete file old
        var data = {
          imgRaws: this.state.imgRaw
        };
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(http + '/api/room_types_delete_file', data).then(function (res) {
          if (res.data) console.log('Đã xóa hình cũ');else console.log('Không có hình cũ');
        }); // move upload file 

        var files = this.state.hinhAnh;
        var fd = new FormData();

        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log(file);
          fd.append('data[]', file);
        }

        console.log('value fd: ', fd.getAll('data[]'));
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(http + '/api/room_types_upload_file', fd, {
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
          console.log(imgsraw);
          var imgs = [];

          for (var _i = 0; _i < imgsraw.length; _i++) {
            imgs.push('/image/' + imgsraw[_i]);
          }

          console.log(imgs);
          imgs = JSON.stringify(imgs);

          _this3.setState({
            hinhAnh: imgs
          }, function () {
            _this3.setState({
              moTa: des
            }, function () {
              console.log("UpLoad DB Hinh moi: ", _this3.state); // upload to db

              var roomType = {
                idLP: _this3.state.idLP,
                tenLP: _this3.state.tenLP,
                hinhAnh: _this3.state.hinhAnh,
                moTa: _this3.state.moTa,
                slPhongTrong: _this3.state.slPhongTrong
              };
              delete roomType.chooseImageUrl;
              delete roomType.tooltipOpen;
              console.log('hinh anh:', roomType.hinhAnh);
              console.log('value room: ', roomType);

              if (window.confirm('Are you sure ?')) {
                axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(http + '/api/room_types/' + roomType.idLP, roomType).then(function (res) {
                  if (res.data != null) {
                    setTimeout(function () {
                      return _this3.undoPages();
                    }, 1000);
                  }
                });
              }
            });
          });

          console.log(_this3.state.hinhAnh);
        })["catch"](function (err) {
          console.log(err);
        });
      } // var des = [];
      // des.push(this.state.mtGT);
      // des.push(this.state.mtTQ);
      // des.push(this.state.slNguoi);
      // des.push(this.state.phongTam);
      // des.push(this.state.soGiuong);
      // des = JSON.stringify(des);
      // this.setState({
      //     moTa: des
      // },()=>{
      //     console.log("UpLoad DB: ", this.state);
      //     // upload to db
      //     const roomType = {
      //         idLP: this.state.idLP,
      //         tenLP: this.state.tenLP,
      //         hinhAnh: this.state.hinhAnh,
      //         moTa: this.state.moTa,
      //         slPhongTrong: this.state.slPhongTrong
      //     }
      //     delete roomType.chooseImageUrl;
      //     delete roomType.tooltipOpen;
      //     console.log('hinh anh:' , roomType.hinhAnh);
      //     console.log('value room: ',roomType);
      //     if (window.confirm('Are you sure ?')) {
      //         axios.put(http + '/api/room_types/'+roomType.idLP, roomType).then(res => {
      //             if (res.data != null) {
      //                 setTimeout(()=>this.undoPages(),1000);
      //             }
      //         })
      //     }
      // });

    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/admin/room_types"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        color: "white",
        className: "btn-add",
        id: "btnAdd"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_4__["ImCancelCircle"], {
        color: "#D0211C",
        className: "icon-top"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        placement: "right",
        isOpen: this.state.tooltipOpen,
        target: "btnAdd",
        toggle: function toggle() {
          return _this4.toggle();
        }
      }, "H\u1EE7y b\u1ECF thao t\xE1c"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "text-center mt-2"
      }, "S\u1EECA TH\xD4NG TIN LO\u1EA0I PH\xD2NG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, "T\xEAn lo\u1EA1i ph\xF2ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "tenLP",
        placeholder: "\u0110i\u1EC1n t\xEAn lo\u1EA1i ph\xF2ng",
        onChange: this.handleChange,
        value: this.state.tenLP,
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
        value: this.state.mtGT,
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
        value: this.state.mtTQ,
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
          return _this4.handleClickSlNguoi(0);
        },
        name: "slNguoi",
        value: "0"
      }), "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '10%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this4.handleClickSlNguoi(1);
        },
        name: "slNguoi",
        value: "1"
      }), "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        style: {
          marginLeft: '10%'
        },
        check: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        onClick: function onClick(v) {
          return _this4.handleClickSlNguoi(2);
        },
        name: "slNguoi",
        value: "2"
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
          return _this4.handleClickPhongTam(0);
        },
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
          return _this4.handleClickPhongTam(1);
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
          return _this4.handleClickSoGiuong(0);
        },
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
          return _this4.handleClickSoGiuong(1);
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
        onChange: this.handleChange,
        value: this.state.slPhongTrong,
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
        onClick: function onClick() {
          return _this4.saveChange();
        }
      }, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "space-15"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "danger",
        type: "reset"
      }, "Reset"))))))))));
    }
  }]);

  return RoomTypeForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);