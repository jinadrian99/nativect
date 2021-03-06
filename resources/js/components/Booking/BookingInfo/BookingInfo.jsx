import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Spinner } from 'reactstrap'
import { format } from 'date-fns';
import { link } from '../../../link';
const http = link;

import { IoIosArrowForward } from "react-icons/io";
import { FaHotel } from "react-icons/fa";
import { BiErrorAlt } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';

import './BookingInfo.css';


export default class BookingInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            startDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
            endDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate),
            tenLP: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].tenLP : '',
            hinhAnh: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].hinhAnh : '',
            giaLP: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].giaLP : '',
            diff: localStorage.getItem('dateArriveCart') ? JSON.parse(localStorage.getItem('dateArriveCart')).days_diff : '',
            slPhongDat: localStorage.getItem('slItemsShoppingCart') ? JSON.parse(localStorage.getItem('slItemsShoppingCart')) : '',
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
            isGoToBasketPage: false,
            isLoadingBooking: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitBookNow = this.submitBookNow.bind(this);
        this.notify = this.notify.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.chooseTypeCard = this.chooseTypeCard.bind(this);
    }

    componentWillMount(){
        var idPhongDat = JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].idLP;
        var arriveDate = new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate);
        axios.get(http + '/api/room_types/' + idPhongDat).then(res => {
            if (res.data != null) {
                this.setState({
                    slPhong: res.data.slPhongTrong
                }, () => {
                    if (parseInt(this.state.slPhong,10) <= 0) {
                        localStorage.removeItem('itemsShoppingCart');
                        localStorage.removeItem('slItemsShoppingCart');
                        localStorage.removeItem('dateArriveCart');
                        toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Số lượng phòng đã hết</div>,{
                            position: toast.POSITION.BOTTOM_CENTER,
                            autoClose: 4000
                        })
                        setTimeout(()=>{
                            this.setState({ isGoToHomePage: !this.state.isGoToHomePage });
                        }, 4000);
                    }
                })
            }
        })
        if (format(new Date(), 'yyyy/MM/dd') > format(arriveDate, 'yyyy/MM/dd')) {
            toast.error(<div style={{fontSize:'16px'}}><BiErrorAlt/>  Bạn chọn nhầm ngày trong quá khứ</div>,{
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 4000
            })
            setTimeout(()=>{
                this.setState({ isGoToBasketPage: !this.state.isGoToBasketPage });
            }, 4000);
        }
    }

    notify(){
        toast.success(<div style={{fontSize:'20px'}}><AiFillCheckCircle/>  Đặt phòng của bạn với NATIVE đã được xác nhận.</div>, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 4000
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    resetForm(){
        this.setState({
            tenKH: '',
            email: '',
            emailAgain: '',
            sdt: '',
            loaiThe: 0,
            nganHang: 0,
            tenThe: '',
            soThe: '',
            ngayHetHan: '',
        })
    }

    chooseTypeCard(){
        if (this.state.loaiThe == 2) {
            return
        }
        else {
            return <input type="text" name="ngayHetHan" placeholder="EXPIRY DATE* yyyy/MM/dd" onChange={this.handleChange} style={{width:'100%'}}/>
        }
    }

    showButton(){
        if(!this.state.isLoadingBooking)
            return <button onClick={this.submitBookNow}><b>BOOK NOW</b></button>
        else
            return <>
                <Spinner color="dark" />
                <div style={{ 
                    display: "inline-block",
                    position: "relative",
                    top: "-4px"
                 }}>
                    &nbsp;&nbsp;&nbsp;Wait for seconds
                </div>
            </>
    }

    submitBookNow(e){
        e.preventDefault();
        this.setState({ isLoadingBooking: !this.state.isLoadingBooking });
        const {tenKH, email, emailAgain, sdt, tenThe, soThe} = this.state;
        let isValidFullName = true;
        let isValidPhone = true;
        let isValidCardName = true;
        let isValidCardNumber = true;
        let isValidEmailAgain = true;
        const errors = {};
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
        this.setState({errors},
            ()=>{
                console.log(this.state.errors.nameLength)
                console.log(this.state.errors.phoneLength)
                console.log(this.state.errors.cardNameLength)
                console.log(this.state.errors.cardNumberLength)
                console.log(this.state.errors.emailAgainLength)
                if(!isValidFullName || !isValidPhone || !isValidCardName || !isValidCardNumber || !isValidEmailAgain){
                    if (!isValidFullName) {
                        if(this.state.errors.nameLength != ""){
                            toast.error(<div>{this.state.errors.nameLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    }
                    if(!isValidPhone){
                        if(this.state.errors.phoneLength != ""){
                            toast.error(<div>{this.state.errors.phoneLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    } 
                    if(!isValidCardName){
                        if(this.state.errors.cardNameLength != ""){
                            toast.error(<div>{this.state.errors.cardNameLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    } 
                    if(!isValidCardNumber){
                        if(this.state.errors.cardNumberLength != ""){
                            toast.error(<div>{this.state.errors.cardNumberLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    } 
                    if(!isValidEmailAgain){
                        if(this.state.errors.emailAgainLength != ""){
                            toast.error(<div>{this.state.errors.emailAgainLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    } 
                    else{
                        this.setState({ isLoadingBooking: !this.state.isLoadingBooking });
                    }
                    return;
                }
                // axios de xet email co ton tai ko gui qua api existmail
                var checkEmail = {
                    email: this.state.email
                }
                axios.post(http + '/api/exist_mail', checkEmail).then(res =>{
                    if (res.data) {
                        var id = JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].idLP;
                        axios.get(http + '/api/room_types/' + id).then( res => {
                            if (res.data != null) {
                                this.setState({
                                    roomType: res.data
                                }, () => {
                                    console.log('roomType: ', this.state.roomType);
                                    const room = {
                                        idLP: this.state.roomType.idLP,
                                        tenLP: this.state.roomType.tenLP,
                                        hinhAnh: this.state.roomType.hinhAnh,
                                        moTa: this.state.roomType.moTa,
                                        slPhongTrong: parseInt(this.state.roomType.slPhongTrong,10) - parseInt(this.state.slPhongDat,10)
                                    }
                                    console.log('room: ', room);
                                    axios.put(http + '/api/room_types/'+room.idLP, room).then(res => {
                                        if (res.data != null) {
                                            var customer = {
                                                tenKH: this.state.tenKH,
                                                email: this.state.email,
                                                sdt: this.state.sdt,
                                                loaiThe: this.state.loaiThe,
                                                nganHang: this.state.nganHang,
                                                tenThe: this.state.tenThe,
                                                soThe: this.state.soThe,
                                                ngayHetHan: this.state.ngayHetHan!=null ? format(new Date(this.state.ngayHetHan), 'yyyy-MM-dd') : null
                                            }
                                            console.log(customer);
                                            axios.post(http + '/api/customer', customer).then(res => {
                                                if (res.data != null) {
                                                    customer = { idKH: res.data.idKH }
                                                    var booking = {
                                                        idLP: id,
                                                        idKH: customer.idKH,
                                                        ngayDen: format(this.state.startDate, 'yyyy-MM-dd'),
                                                        ngayDi: format(this.state.endDate, 'yyyy-MM-dd'),
                                                        soDem: this.state.diff,
                                                        tongTien: parseInt(this.state.giaLP,10) * this.state.diff * parseInt(this.state.slPhongDat,10),
                                                        status: 1,
                                                        slPhong: this.state.slPhongDat
                                                    }
                                                    console.log(booking);
                                                    axios.post(http + '/api/bookings', booking).then(res => {
                                                        if (res.data != null) {
                                                            //tao var data_obj de gui qua api sendmail de lay data lam form de gui mail cho kh
                                                            booking = { idDP: res.data.idDP }
                                                            var data_obj = {
                                                                tenKH: this.state.tenKH,
                                                                email: this.state.email,
                                                                sdt: this.state.sdt,
                                                                loaiThe: this.state.loaiThe,
                                                                nganHang: this.state.nganHang,
                                                                soThe: this.state.soThe,
                                                                ngayDat: format(new Date(), 'dd/MM/yyyy'),
                                                                idBooking: booking.idDP,
                                                                tenLP: this.state.roomType.tenLP,
                                                                ngayDen: format(this.state.startDate, 'dd/MM/yyyy'),
                                                                ngayDi: format(this.state.endDate, 'dd/MM/yyyy'),
                                                                tongTien: new Intl.NumberFormat().format(parseInt(this.state.giaLP,10) * this.state.diff * parseInt(this.state.slPhongDat,10)),
                                                                slPhong: this.state.slPhongDat
                                                            }
                                                            axios.post(http + '/api/send_mail', data_obj).then(res => {
                                                                console.warn(res.data);
                                                                if (res.data) {
                                                                    this.setState({ isLoadingBooking: !this.state.isLoadingBooking });
                                                                    this.notify();
                                                                    toast.success(<div style={{fontSize:'20px'}}>Vui lòng kiểm tra lại email của bạn</div>, {
                                                                        position: toast.POSITION.BOTTOM_RIGHT,
                                                                        autoClose: 4000
                                                                    });
                                                                    localStorage.removeItem('itemsShoppingCart');
                                                                    localStorage.removeItem('slItemsShoppingCart');
                                                                    localStorage.removeItem('dateArriveCart');
                                                                    setTimeout(()=>{
                                                                        this.setState({ isGoToHomePage: !this.state.isGoToHomePage });
                                                                    }, 8000);
                                                                } else {
                                                                    axios.get(http + '/api/room_types/' + id).then( res => {
                                                                        if (res.data != null) {
                                                                            const room2 = {
                                                                                idLP: this.state.roomType.idLP,
                                                                                tenLP: this.state.roomType.tenLP,
                                                                                hinhAnh: this.state.roomType.hinhAnh,
                                                                                moTa: this.state.roomType.moTa,
                                                                                slPhongTrong: parseInt(res.data.slPhongTrong,10) + parseInt(this.state.slPhongDat,10)
                                                                            }
                                                                            console.log('room2: ',room2);
                                                                            axios.put(http + '/api/room_types/' + room2.idLP, room2).then(res => {
                                                                                if (res.data != null) {
                                                                                    axios.delete(http + '/api/bookings/' + booking.idDP).then(res => {
                                                                                        if (res.data != null) {
                                                                                            axios.delete(http + '/api/customer/' + customer.idKH).then(res => {
                                                                                                if (res.data != null) {
                                                                                                    this.setState({ isLoadingBooking: !this.state.isLoadingBooking });
                                                                                                    toast.error(<div style={{fontSize:'16px'}}><BiErrorAlt/>  Đang có sự cố trên mail server, vui lòng đợi 15 giây sau</div>, {
                                                                                                        position: toast.POSITION.BOTTOM_RIGHT,
                                                                                                        autoClose: 4000
                                                                                                    });  
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    })
                                })
                            } 
                        });
                    }
                    else {
                        toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Email không tồn tại</div>, {
                            position: toast.POSITION.BOTTOM_RIGHT,
                            autoClose: 4000
                        }); 
                    }
                })
            }
        )
    }

    render() {
        if (this.state.isGoToHomePage) {
            return(
                <Redirect to="/" />
            )
        }
        if (this.state.isGoToBasketPage) {
            return(
                <Redirect to="/your_basket" />
            )
        }
        return (
            <div style={{ paddingTop:'4%', backgroundColor:'#FFFFFF'}}>
                <Container>
                    <div style={{backgroundColor:'#FFFFFF', paddingBottom:'1%'}}>
                        <Row className="breadcrumb-nativeLink">
                            <Col>
                                <Link to="/"><span>NATIVE</span></Link>&nbsp; <IoIosArrowForward className="icon"/>&nbsp;<span>PAYMENT</span>
                            </Col>
                        </Row> 
                    </div>
                </Container>
                <div style={{backgroundColor:'#F3F1EF'}}>
                    <Row style={{ paddingTop:'5%', paddingBottom:'5%'}}>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <span style={{fontSize:'3vw', fontWeight:'bold', fontFamily:'Georgia'}}>Almost there.</span>&nbsp;&nbsp;<FaHotel style={{width:'4vw', height:'4vh'}} className="iconHotel"/><hr/>
                            <p style={{fontSize:'1.5vw', fontFamily:'Georgia'}}>Please complete the fields below to secure your selection.</p>
                        </Col>
                        <Col xs="3"></Col>
                    </Row>
                </div>
                <Container>
                    <Row style={{ paddingTop:'3%', paddingBottom:'8%'}}>
                        <Col xs="9">
                            <Row>
                                <Col>
                                    <span style={{fontWeight:'bold', fontSize:'1.5vw', fontFamily:'Georgia'}}>Personal Details</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop:'5%'}} >
                                <Col xs="7">
                                    <Row className="formPersonalDetails">
                                        <Col xs="4">
                                            <select style={{paddingTop:'4%', width:'100%'}}>
                                                <option>MR.</option>
                                                <option>MRS.</option>
                                                <option>MISS.</option>
                                                <option>MS.</option>
                                                <option>DR.</option>
                                                <option>UNKNOWN</option>
                                            </select>
                                        </Col>
                                        <Col xs="8">
                                            <input type="text" name="tenKH" placeholder="FULLNAME*" required onChange={this.handleChange} autoComplete="off" style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col xs="6">
                                            <input type="email" name="email" placeholder="EMAIL*" required onChange={this.handleChange} autoComplete="off" style={{width:'100%'}}/>
                                        </Col>
                                        <Col xs="6">
                                            <input type="email" name="emailAgain" placeholder="CONFIRM EMAIL*" required onChange={this.handleChange} autoComplete="off" style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col>
                                            <input type="number" name="sdt" placeholder="TELEPHONE*" required onChange={this.handleChange} autoComplete="off" style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="5"></Col>
                            </Row>
                            <Row style={{ paddingTop:'8%'}}>
                                <Col>
                                    <span style={{fontWeight:'bold', fontSize:'1.5vw', fontFamily:'Georgia'}}>Payment Details</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="7">
                                    <Row style={{ paddingTop:'5%'}}>
                                        <Col xs="3"><img src="image/Visa.png" style={{width:'5vw', height:'auto'}}/></Col>
                                        <Col xs="3"><img src="image/mastercard.jpg" style={{width:'5vw', height:'auto'}}/></Col>
                                        <Col xs="3"><img src="image/BIDV.jpg" style={{width:'5vw', height:'auto'}}/></Col>
                                        <Col xs="3"><img src="image/eximbank.png" style={{width:'5vw', height:'auto'}}/></Col>
                                    </Row>
                                    <Row className="formPersonalDetails" style={{ paddingTop:'5%'}}>
                                        <Col xs="6">
                                            <select name="loaiThe" onChange={this.handleChange} style={{paddingTop:'4%', width:'100%'}}>
                                                <option value="0">VISA</option>
                                                <option value="1">MASTERCARD</option>
                                                <option value="2">DOMESTIC</option>
                                            </select>
                                        </Col>
                                        <Col xs="6">
                                            <select name="nganHang" onChange={this.handleChange} style={{paddingTop:'4%', width:'100%'}}>
                                                <option value="0">BIDV</option>
                                                <option value="1">EXIMBANK</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col>
                                            <input type="text" name="tenThe" placeholder="NAME ON CARD*" required onChange={this.handleChange} autoComplete="off" style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col>
                                            <input type="text" name="soThe" placeholder="CARD NUMBER*" required onChange={this.handleChange} autoComplete="off" style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col>
                                            {this.chooseTypeCard()}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="5"></Col>
                            </Row>
                        </Col>
                        <Col xs="3">
                            <Row style={{ paddingTop:'5%', backgroundColor:'#F3F1EF'}}>
                                <Col style={{fontSize:'1.2vw', fontFamily:'Georgia'}}>
                                    <Row>
                                        <Col>
                                            <span style={{fontWeight:'bold', fontSize:'1.8vw', fontFamily:'Georgia'}}>Your Receipt</span>
                                        </Col>
                                    </Row>
                                    <Row  style={{ paddingTop:'5%'}}>
                                        <Col>
                                            <span>{format(this.state.startDate,"dd/MM")} - {format(this.state.endDate,"dd/MM")}, {this.state.diff} {this.state.diff > 1 ? 'nights' : 'night'}</span>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span>{this.state.tenLP} X {this.state.slPhongDat}</span><br/>
                                            <span>{parseInt(this.state.giaLP,10) * parseInt(this.state.slPhongDat)}</span>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span>Total cost</span><br/>
                                            <span>{this.state.slPhongDat} {this.state.slPhongDat > 1 ? 'rooms' : 'room'} for {this.state.diff} {this.state.diff > 1 ? 'nights' : 'night'}</span>
                                        </Col>
                                    </Row>
                                    <Row style={{paddingBottom:'5%'}}>
                                        <Col>
                                            <span style={{fontWeight:'bold', fontSize:'2vw', fontFamily:'Georgia'}}>{new Intl.NumberFormat().format(parseInt(this.state.giaLP,10) * this.state.diff * parseInt(this.state.slPhongDat))} VND</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{paddingTop:'15%'}}>
                                <Col style={{fontSize:'1.4vw', fontFamily:'Georgia', textAlign:'center'}}>
                                    <Row>
                                        <Col><span>Total booking cost</span><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col><span style={{fontWeight:'bold', fontSize:'2vw'}}>{new Intl.NumberFormat().format(parseInt(this.state.giaLP,10) * this.state.diff * parseInt(this.state.slPhongDat))} VND</span></Col>
                                    </Row>
                                    <Row style={{ paddingTop:'7%'}} className="button-BookNow">
                                        <Col>
                                            {
                                                this.showButton()
                                            }
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer/>
            </div>
        )
    }
}
