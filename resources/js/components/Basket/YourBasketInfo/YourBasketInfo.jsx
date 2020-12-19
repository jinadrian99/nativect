import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Row, Col, Button, ModalHeader, ModalBody, ModalFooter, Modal } from 'reactstrap'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, differenceInDays } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { RiCoinsLine } from "react-icons/ri";
import { GiCarKey } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { GrDocumentLocked } from "react-icons/gr";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { BsCalendar } from 'react-icons/bs';
import { FaRegSadCry } from 'react-icons/fa';
import { BiErrorAlt } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';

import './YourBasketInfo.css';


export default class YourBasketInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            slPhong: 0,
            startDate: null,
            endDate: null,
            diff: '',
            rooms: [],
            totalPrice: '',
	        tempSD: null,
            tempED: null,
            tempDiff: '',

            modalDate: false,
            goToBooking: false,
            goToHome: false
        }
	    this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
    }

    componentWillMount(){
        this.setState({
            slPhong: localStorage.getItem('slItemsShoppingCart') ? JSON.parse(localStorage.getItem('slItemsShoppingCart')) : 0,
            startDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
            endDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate),
            diff: localStorage.getItem('dateArriveCart') ? JSON.parse(localStorage.getItem('dateArriveCart')).days_diff : '',
            rooms: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart')) : null,
	        tempSD: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
            tempED: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate)
        },()=>{
            if(this.state.rooms!=null){
                var ttp=0;
                this.state.rooms.forEach(room => {
                    ttp += parseInt(room.giaLP,10) * this.state.diff * parseInt(room.slPhong,10);
                });
                this.setState({ totalPrice: ttp });
            }
        })
    }
    
    deleteItemsLocalStorage(no){
        console.log('del cart item id: ', no);
        this.setState({
            rooms: this.state.rooms.filter((obj,index) => index!=no),
            slPhong: parseInt(this.state.slPhong,10)-parseInt(this.state.rooms[no].slPhong,10),
        }, ()=>{
            var ttp=0;
            this.state.rooms.forEach(room => {
                ttp += parseInt(room.giaLP,10) * this.state.diff * parseInt(room.slPhong,10)
            });
            this.setState({ totalPrice: ttp });
            console.log(this.state.rooms);

            if(this.state.rooms.length==0) 
                localStorage.removeItem('itemsShoppingCart');
            else
                localStorage.setItem('itemsShoppingCart', JSON.stringify(this.state.rooms));

            if(this.state.slPhong==0) 
                localStorage.removeItem('slItemsShoppingCart');
            else 
                localStorage.setItem('slItemsShoppingCart', JSON.stringify(this.state.slPhong));

            this.props.onAddItemInShoppingCart(localStorage.getItem('slItemsShoppingCart')?parseInt(localStorage.getItem('slItemsShoppingCart'),10):0);
        });
    }

    showRooms(){
        console.log(this.state.rooms);
        var lst = this.state.rooms.map((item, index) =>
            <div key={ index }>
                <Row>
                    <Col xs="3" style={{borderRight:'1px solid #F3F1EF', height: '14vh', overflow: 'hidden'}}><img src={item.hinhAnh} style={{width:'12vw', height:'auto'}}/></Col>
                    <Col xs="6" style={{fontSize:'1.3vw', fontFamily:'Georgia', borderRight:'1px solid #F3F1EF'}}>
                        <Row>
                            <Col><span style={{fontWeight:'bold', paddingLeft: '2vw'}}>Room: {item.tenLP} x {item.slPhong}</span><hr/></Col>
                        </Row>
                        <Row>
                            <Col>
                                <span style={{fontWeight:'bold', fontSize:'1.4vw', lineHeight: '3vw', paddingLeft: '2vw'}}>
                                    Price: { new Intl.NumberFormat().format(parseInt(item.giaLP,10) * this.state.diff * parseInt(item.slPhong,10))} VND
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="3" style={{fontSize:'1.2vw', fontFamily:'Georgia'}}>
                        <Row>
                            <Col>
                                <Button 
                                    outline color="red" 
                                    className="btn-del-spin"
                                    style={{padding: 0, marginTop: '5vh', marginLeft: '2.5vw'}} 
                                    onClick={ ()=>this.deleteItemsLocalStorage(index) }
                                >
                                    <ImCancelCircle style={{fontSize: '3vh'}} color="black" className="icon-spin" /> <u style={{fontSize: '2vh', paddingLeft: '1vw'}}>Remove</u>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
            </div>
        );
        return lst;
    }

    changeStartDate(e){
        var date = new Date(e);
        if(format(new Date(), 'yyyy/MM/dd')>format(date, 'yyyy/MM/dd')){
            alert('Chọn nhầm ngày trong quá khứ');
            return;
        } 
        else {
            // console.log('today', new Date());
            // console.log('e: ', e);
            this.setState({
                tempSD: date,
            })
            date = format(date, 'yyyy/MM/dd');
            // console.log('start date: ', date);
        }
        
    }

    changeEndDate(e){
        if(this.state.startDate===null){
            alert('Bạn chưa chọn ngày bắt đầu');
            return;
        } 
        else{
            var date = new Date(e);
            // console.log('today', new Date());
            // console.log('e: ', e);
            this.setState({
                tempED: date,
            }, ()=>{
                date = format(date, 'yyyy/MM/dd');
                // console.log('end date: ', date);
                console.log('start date: ', this.state.tempSD);
                console.log('end date: ', this.state.tempED);
                var days_diff = differenceInDays(this.state.tempED, this.state.tempSD);
                console.log('days diff: ', days_diff);
                this.setState({
                    tempDiff: days_diff
                })
            })
        }
    }

    saveChangeDatePicker(){
        this.setState({
            startDate: this.state.tempSD,
            endDate: this.state.tempED,
            diff: this.state.tempDiff
        },()=>{
            if(this.state.rooms!=null){
                var ttp=0;
                this.state.rooms.forEach(room => {
                    ttp += parseInt(room.giaLP,10) * this.state.diff * parseInt(room.slPhong,10);
                });
                this.setState({ totalPrice: ttp });
            }
        });

        var date_cart = {
            startDate: format(this.state.tempSD, 'yyyy/MM/dd'),
            endDate: format(this.state.tempED, 'yyyy/MM/dd'),
            days_diff: this.state.tempDiff
        }
        localStorage.setItem('dateArriveCart', JSON.stringify(date_cart));
        this.setState({
            modalDate: !this.state.modalDate
        })
    }

    showModalDate(){
        return (
            <>
                <ModalHeader style={{fontFamily:'Georgia', fontSize:'2.5vh'}} toggle={ ()=>{ this.setState({ modalDate: !this.state.modalDate }) } }>Change Date &nbsp;&nbsp;<BsCalendar className="iconCalendar"/></ModalHeader>
                <ModalBody>
                    {/* DatePicker */}
                    <Row>
                        <Col xs="3" style={{fontSize:'2.5vh', fontFamily:'Georgia', paddingTop:'1%'}}>Arrive:</Col>
                        <Col xs="9">
                            <div className='date-start-picker'>
                                <DatePicker
                                    selected={this.state.tempSD}
                                    onChange={this.changeStartDate}
                                    selectsStart
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    dateFormat='dd/MM/yyyy'
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3" style={{fontSize:'2.5vh', fontFamily:'Georgia', paddingTop:'1%'}}>Depart:</Col>
                        <Col xs="9">
                            <div className='date-end-picker'>
                                <DatePicker
                                    selected={this.state.tempED}
                                    onChange={this.changeEndDate}
                                    selectsEnd
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    minDate={this.state.startDate}
                                    dateFormat='dd/MM/yyyy'
                                />
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" onClick={()=>this.saveChangeDatePicker()}>Save change</Button>
                </ModalFooter>
            </>
        );
    }

    onGoToBooking(){
        if(format(new Date(), 'yyyy/MM/dd')<=format(this.state.startDate, 'yyyy/MM/dd')){
            if(this.state.slPhong<=0)
            {
                toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Bạn chưa chọn phòng</div>, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 4000
                }); 
                this.setState({ goToHome: !this.state.goToHome })           
            } else {
                if(this.state.slPhong>5 || this.state.rooms.length>1) {
                    toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Chỉ chọn 5 phòng của 1 loại </div>, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 4000
                    });
                } else {
                    axios.get('https://nativehotel.herokuapp.com/api/room_types/' + this.state.rooms[0].idLP).then( res => {
                        if (res.data != null) {
                            if(res.data.slPhongTrong>0){
                                this.setState({ goToBooking: !this.state.goToBooking }) 
                            } else {
                                toast.error(<div style={{fontSize:'20px'}}><span style={{fontSize:'28px'}}><FaRegSadCry /></span>  Phiền bạn chọn phòng khác</div>, {
                                    position: toast.POSITION.BOTTOM_RIGHT,
                                    autoClose: 4000
                                });
                            }
                        }
                    })
                }
            }   
        } else {
            toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Ngày đi của bạn đã trong quá khứ</div>, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 4000
            }); 
        }
    }

    render() {
        if(this.state.goToHome){
            return (
                <Redirect to="/" />
            )
        }
        if(this.state.goToBooking){
            return (
                <Redirect to="/booking" />
            )
        }
        if(this.state.slPhong<=0){
            return(
                <div style={{ paddingTop:'4%', backgroundColor:'#FFFFFF'}}>
                    <Container>
                        <div style={{backgroundColor:'#FFFFFF', paddingBottom:'1%'}}>
                            <Row className="breadcrumb-nativeLink">
                                <Col>
                                    <Link to="/"><span>NATIVE</span></Link>&nbsp; <IoIosArrowForward className="icon"/>&nbsp;<span>YOUR BASKET</span>
                                </Col>
                            </Row> 
                        </div>
                    </Container>
                    <div style={{backgroundColor:'#F3F1EF'}}>
                        <Row style={{ paddingTop:'6%', paddingBottom:'2%'}}>
                            <Col xs="1"></Col>
                            <Col xs="5">
                                <span style={{fontSize:'3vw', fontWeight:'bold', fontFamily:'Georgia'}}>YOUR BASKET</span>&nbsp;&nbsp;<RiShoppingBasket2Line style={{width:'4vw', height:'4vh'}} className="iconBasket"/><hr/>
                                <p style={{fontSize:'1.3vw', fontFamily:'Georgia'}}>We no longer offer Pay on Arrival (for the moment anyway) and now ask for all web customers to pay on booking.</p>
                            </Col>
                            <Col xs="6"></Col>
                        </Row>
                        <Row style={{ paddingTop:'2%', paddingBottom:'5%'}}>
                            <Col xs="1"></Col>
                            <Col xs="5">
                                <p style={{fontSize:'1.3vw', fontFamily:'Georgia'}}>Your basket is empty.</p>
                            </Col>
                            <Col xs="6"></Col>
                        </Row>
                    </div>
                </div>
            )
        }
        return (
            <div style={{ paddingTop:'4%', backgroundColor:'#FFFFFF'}}>
                <Container>
                    <div style={{backgroundColor:'#FFFFFF', paddingBottom:'1%'}}>
                        <Row className="breadcrumb-nativeLink">
                            <Col>
                                <Link to="/"><span>NATIVE</span></Link>&nbsp; <IoIosArrowForward className="icon"/>&nbsp;<span>YOUR BASKET</span>
                            </Col>
                        </Row> 
                    </div>
                </Container>
                <div style={{backgroundColor:'#F3F1EF'}}>
                    <Row style={{ paddingTop:'5%', paddingBottom:'5%'}}>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <span style={{fontSize:'2vw', fontWeight:'bold', fontFamily:'Georgia'}}>YOUR BASKET</span>&nbsp;&nbsp;<RiShoppingBasket2Line style={{width:'4vw', height:'4vh'}} className="iconBasket"/><hr/>
                            <p style={{fontSize:'1.3vw', fontFamily:'Georgia'}}>We no longer offer Pay on Arrival (for the moment anyway) and now ask for all web customers to pay on booking.</p>
                        </Col>
                        <Col xs="3"></Col>
                    </Row>
                </div>
                <Container>
                    <Row style={{ paddingTop:'3%', paddingBottom:'8%'}}>
                        <Col xs="3" style={{borderRight:'1px solid #F3F1EF'}}>
                            <Row >
                                <Col>
                                    <span style={{fontSize:'1.3vw', fontFamily:'Georgia'}}>Benefits of booking with us direct:</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop:'5%'}}>
                                <Col>
                                    <div>
                                        <div><IoIosStarOutline style={{width:'4vw', height:'4vh'}}/></div>
                                        <div style={{padding:'5%'}}><p style={{fontWeight:'bold'}}>LOWEST PRICE GUARANTEE</p></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop:'5%'}}>
                                <Col>
                                    <div>
                                        <div><RiCoinsLine style={{width:'4vw', height:'4vh'}}/></div>
                                        <div style={{padding:'5%'}}><p style={{fontWeight:'bold'}}>NO CREDIT CARD OR BOOKING FEES</p></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop:'5%'}}>
                                <Col>
                                    <div>
                                        <div><GiCarKey style={{width:'4vw', height:'4vh'}}/></div>
                                        <div style={{padding:'5%'}}><p style={{fontWeight:'bold'}}>11AM CHECKOUT</p></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop:'5%'}}>
                                <Col>
                                    <div>
                                        <div><TiShoppingCart style={{width:'4vw', height:'4vh'}}/></div>
                                        <div style={{padding:'5%'}}><p style={{fontWeight:'bold'}}>CUSTOMISE YOUR BOOKING</p></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop:'5%'}}>
                                <Col>
                                    <div>
                                        <div><GrDocumentLocked style={{width:'4vw', height:'4vh'}}/></div>
                                        <div style={{padding:'5%'}}><p style={{fontWeight:'bold'}}>BOOK WITH CONFIDENCE</p></div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="9">
                            <Row>
                                <Col style={{textAlign:'center'}}>
                                    <span style={{fontSize:'1.5vw', fontFamily:'Georgia', fontWeight:'revert'}}>YOUR ROOM</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{textAlign:'center'}}>
                                    <span  style={{fontSize:'2vh', fontFamily:'Georgia', fontWeight:'revert'}}>
                                        Cost rooms for {this.state.diff} {this.state.diff > 1 ? 'nights' : 'night'}<br />
                                        <span 
                                            className="hover-pointer hover-underline" 
                                            onClick={ ()=>{ this.setState({ modalDate: !this.state.modalDate }) } }
                                        >
                                            from <b>{ format(this.state.startDate, 'dd/MM/yyyy') }</b> to <b>{ format(this.state.endDate, 'dd/MM/yyyy') }</b>
                                        </span>
                                    </span>
                                    <hr/>
                                    <Modal 
                                        className="modalDate"
                                        isOpen={this.state.modalDate} 
                                        toggle={ ()=>{ this.setState({ modalDate: !this.state.modalDate }) } }
                                    >
                                        { this.showModalDate() }
                                    </Modal>
                                </Col>
                            </Row>
                            { this.showRooms() }
                            <Row style={{ paddingTop:'5%'}}>
                                <Col xs="6" sm="4"></Col>
                                <Col xs="6" sm="4" style={{fontSize:'1.4vw', fontFamily:'Georgia', textAlign:'center'}}>
                                    <Row>
                                        <Col><span>Total booking cost</span><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span style={{fontWeight:'bold', fontSize:'2vw'}}>
                                                { new Intl.NumberFormat().format(this.state.totalPrice) } VND
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'7%'}} className="button-Continue">
                                        <Col>
                                            <button onClick={ ()=>this.onGoToBooking()}><b>CONTINUE</b></button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="4"></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </div>
        )
    }
}
