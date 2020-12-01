import React, { Component } from 'react'
import { Container, Row, Col, Collapse, CardBody, Card, Tooltip } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, differenceInDays } from 'date-fns';

import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosBed } from "react-icons/io";
import { FaBath, FaHotel, FaRegHandshake, FaRegSadCry, FaRegSadTear } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineCheck, AiFillQuestionCircle, AiOutlineWifi, AiFillCheckCircle } from "react-icons/ai";
import { SiClockify } from "react-icons/si";
import { BsBucket } from "react-icons/bs";
import { GrObjectUngroup } from "react-icons/gr";
import { GiPerfumeBottle } from "react-icons/gi";
import { CgSmartHomeWashMachine } from "react-icons/cg";

import './RoomInfo.css';
import axios from 'axios';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiErrorAlt, BiHappyBeaming } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';

export default class RoomInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            startDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
            endDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate),
            roomType: [],
            moTa: '',
            hinhAnh: [],
            giaLP: '',

            slPhongTrong: 0,
            isOpen: false,
            tooltipOpen: false,
            isGoToCartPage: false
        }
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
        this.showImages = this.showImages.bind(this);
        this.findRoomTypeByID = this.findRoomTypeByID.bind(this);
        this.findRoomRateByID = this.findRoomRateByID.bind(this);
    }

    componentWillMount(){
        this.findRoomTypeByID(this.props.idLP);
        this.findRoomRateByID(this.props.idLP);
        if(localStorage.getItem('dateArriveCart'))
            console.log("ngày đặt: ", JSON.parse(localStorage.getItem('dateArriveCart')).startDate);
    }

    componentWillReceiveProps(nextProps) {
        window.scrollTo(0, 0);
        this.findRoomTypeByID(nextProps.idLP);
        this.findRoomRateByID(nextProps.idLP);
    }

    findRoomTypeByID(id){
        console.log('idRoomType: ', id);
        axios.get('https://nativehotel.herokuapp.com/api/room_types/' + id).then( res => {
            if (res.data != null) {
                this.setState({
                    roomType: res.data,
                    moTa: JSON.parse(res.data.moTa),
                    hinhAnh: JSON.parse(res.data.hinhAnh)
                })
            } 
        });    
    }

    findRoomRateByID(id){
        console.log('idRoomRate: ', id);
        axios.get('https://nativehotel.herokuapp.com/api/room_type_rate/' + id).then(res =>{
            this.setState({
                giaLP: !res.data ? 'Chưa có giá' : res.data.giaLP + ' VND'
            })
        })
    }

    showImages(){
        console.log('mang hinh: ', this.state.hinhAnh);

        var lst = this.state.hinhAnh.map((item, index)=>
            <div key = { index } style={{ height: '43vh', width: '43vh', overflow: 'hidden' }}>
                <img 
                    className="size-image"
                    src = { item }
                    style={{height: '43vh', width: '43vh'}}
                />
            </div>
        );
        return lst;
    }

    changeStartDate(e){
        var date = new Date(e);
        if(format(new Date(), 'yyyy/MM/dd')>format(date, 'yyyy/MM/dd')){
            alert('Chọn nhầm ngày trong quá khứ');
            return;
        } else {
            // console.log('today', new Date());
            // console.log('e: ', e);
            this.setState({
                startDate: date,
            })
            date = format(date, 'yyyy/MM/dd');
            // console.log('start date: ', date);
        }
        
    }

    changeEndDate(e){
        if(this.state.startDate===null){
            alert('Bạn chưa chọn ngày bắt đầu');
            return;
        } else{
            var date = new Date(e);
            // console.log('today', new Date());
            // console.log('e: ', e);
            this.setState({
                endDate: date,
            }, ()=>{
                date = format(date, 'yyyy/MM/dd');
                // console.log('end date: ', date);
                console.log('start date: ', this.state.startDate);
                console.log('end date: ', this.state.endDate);
                var days_diff = differenceInDays(this.state.endDate, this.state.startDate);
                console.log('days diff: ', days_diff);
            })
        }
    }

    toggleDetails(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    toggleToolTip(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        })
    }

    addItemInShoppingCart(){
        if(localStorage.getItem('itemsShoppingCart')==null){
            axios.get('https://nativehotel.herokuapp.com/api/room_types/' + this.state.roomType.idLP).then( res => {
                if (res.data != null) {
                    this.setState({
                        slPhongTrong: res.data.slPhongTrong
                    },()=>{
                        if(this.state.startDate!=null&&this.state.giaLP!='Chưa có giá'&&this.state.slPhongTrong>0) {
                            var sl = 1;
                            var obj = {
                                tenLP: this.state.roomType.tenLP,
                                idLP: this.state.roomType.idLP,
                                hinhAnh: this.state.hinhAnh[0],
                                giaLP: this.state.giaLP,
                            };
                            console.log(obj);

                            var date_cart = {
                                startDate: format(this.state.startDate, 'yyyy/MM/dd'),
                                endDate: format(this.state.endDate, 'yyyy/MM/dd'),
                                days_diff: differenceInDays(this.state.endDate, this.state.startDate),
                            }
                            console.log(date_cart);
                            this.props.onAddItemInShoppingCart(sl);

                            // Nếu KH vào lại trang -> giỏ vẫn còn
                            localStorage.setItem('dateArriveCart', JSON.stringify(date_cart));
                            
                            var arrItems = [];
                            arrItems.push(obj);
                            localStorage.setItem('itemsShoppingCart', JSON.stringify(arrItems));
                            localStorage.setItem('slItemsShoppingCart', JSON.stringify(sl));
                            // Dành cho đặt nhiều phòng
                            // else {
                            //     var arrItems = JSON.parse(localStorage.getItem('itemsShoppingCart'));
                            //     arrItems.push(obj);
                            //     var sl = parseInt(localStorage.getItem('slItemsShoppingCart'),10) + sl;
                            //     localStorage.setItem('itemsShoppingCart', JSON.stringify(arrItems));
                            //     localStorage.setItem('slItemsShoppingCart', JSON.stringify(sl));
                            // }
                                
                            // var items = JSON.parse(localStorage.getItem('itemsShoppingCart'));
                            // var sl = parseInt(localStorage.getItem('slItemsShoppingCart'),10);
                            // console.log('in LS: ', items, sl);  

                            toast.success(<div style={{fontSize:'20px'}}><span style={{fontSize:'28px'}}><BiHappyBeaming /></span> Add to cart success</div>, {
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            });
                            setTimeout(()=>{
                                this.setState({ isGoToCartPage: !this.state.isGoToCartPage });
                            }, 4500);
                        } else if(this.state.giaLP=='Chưa có giá' || this.state.slPhongTrong<=0) {
                            toast.error(<div style={{fontSize:'20px'}}><span style={{fontSize:'28px'}}><FaRegSadCry /></span>  Phiền bạn chọn phòng khác</div>, {
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            });

                            var vh = 5;
                            var y_late = (window.innerHeight*vh)/100;
                            var y = $(".goToSlickSlider").position().top - y_late;
                            // alert(y.top);

                            window.scrollTo(0, y);
                        } else {
                            toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Bạn chưa chọn ngày</div>, {
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            });
                        }
                    })
                } 
            });
        } else {
            toast.error(<div style={{fontSize:'20px'}}><span style={{fontSize:'28px'}}><FaRegSadCry /></span>  Bạn đã chọn phòng rồi!</div>, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 4000
            });
        }
    }

    render() {
        if(this.state.isGoToCartPage){
            return (
                <Redirect to="/your_basket" />
            );
        }
        console.warn('watch this room: ', this.state.idLP);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div style={{backgroundColor:'#FFFFFF'}}>
                <ToastContainer />
                <Container>
                    <div>
                        <Row  style={{padding:'5%'}}>
                            <Col xs="3"></Col>
                            <Col xs="6">
                                <p style={{fontFamily:'Cambria', fontSize:'18px', textAlign:'center'}}>{ this.state.moTa[1] }</p>
                            </Col>
                            <Col xs="3"></Col>
                        </Row>
                    </div>  
                </Container>
                <hr/>
                <Container>
                    <div >
                        <Row>
                            <Col>
                                <span style={{fontFamily:'Cambria', fontSize:'30px', fontWeight:'revert'}}>{ this.state.roomType.tenLP }</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <Slider {...settings}>
                                    {this.showImages()}
                                </Slider>
                            </Col>
                            <Col xs="5">
                                <Row>
                                    <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                                        <HiOutlineUserGroup style={{width:'4vw', height:'4vh'}}/>{ this.state.moTa[2] }
                                    </Col>
                                    <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                                        <IoIosBed style={{width:'4vw', height:'4vh'}}/>{ this.state.moTa[3] }
                                    </Col>
                                    <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                                        <FaBath style={{width:'4vw', height:'4vh'}}/>{ this.state.moTa[4] }
                                    </Col>
                                    <Col xs="3">
                                        <select style={{height:'4vh'}}>
                                            <option>1 room</option>
                                            <option>2 rooms</option>
                                            <option>3 rooms</option>
                                            <option>4 rooms</option>
                                            <option>5 rooms</option>
                                        </select>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <span style={{fontFamily:'Cambria', fontSize:'15px', fontWeight:'bold'}}>MORE DETAILS</span>
                                        <span style={{paddingLeft:'2%'}}><MdKeyboardArrowDown style={{border:'1px solid #CECECE', borderRadius:'20%', width:'1vw', height:'auto'}} onClick={()=>this.toggleDetails()}/></span>
                                        <Collapse isOpen={this.state.isOpen}>
                                            <Card>
                                            <CardBody>
                                                Small but perfectly formed, if you’re looking for a stylish pit stop on your travels then these studios are a great option. Packed full of quirky and original features, all come with a stunning shower room, modern kitchen and big comfy bed to clock some zzzz.
                                                <Row style={{paddingTop:'3%', paddingBottom:'3%'}} >
                                                    <Col>
                                                        <span style={{fontFamily:'Cambria', fontSize:'15px', fontWeight:'bold'}}>WHAT INCLUDES?</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6">
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Weekly cleaning</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Toiletries</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Washer/Dryer</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Oven</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Fridge</Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs="6">
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Dishwasher</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Iron & ironing board</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Crockery & Cutlery</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Fresh bed & towels</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col><AiOutlineCheck/> Hairdryer</Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                            </Card>
                                        </Collapse>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row style={{paddingBottom:'3%'}}>
                                    <Col>
                                        <span style={{fontFamily:'Cambria'}}>Minimum stay from 1 nights. Price per night</span>
                                        <span style={{paddingLeft:'2%'}} id="question"><AiFillQuestionCircle style={{width:'1vw', height:'auto'}}/></span>
                                        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="question" toggle={()=>this.toggleToolTip()}>
                                            Minimum night stay and average price per night vary depending on dates selected.
                                        </Tooltip>
                                    </Col>
                                </Row>
                                <Row style={{ backgroundColor:'#F3F1EF', padding:'3%',width: '103.5%' }}>
                                    <Col>
                                        <span style={{fontFamily:'Cambria', fontSize:'20px', fontWeight:'bold'}}>Price: {this.state.giaLP}</span>
                                    </Col>
                                </Row>
                            </Col>
                            <div style={{ height: '55vh', width: '17.5vw'}}>
                                <Col style={{border:'1px solid #B27440'}}>
                                    <Row style={{padding:'5%'}}>
                                        <Col style={{textAlign:'center'}}>
                                            <span style={{fontFamily:'Cambria', fontSize:'20px', fontWeight:'bold'}}>Stay Native</span>
                                        </Col>
                                    </Row>
                                    
                                    <div className='date-start-picker'>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.changeStartDate}
                                            selectsStart
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            dateFormat='dd/MM/yyyy'
                                            placeholderText="Arrive"
                                        />
                                    </div>
                                    <div className='date-end-picker'>
                                        <DatePicker
                                            selected={this.state.endDate}
                                            onChange={this.changeEndDate}
                                            selectsEnd
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            minDate={this.state.startDate}
                                            dateFormat='dd/MM/yyyy'
                                            placeholderText="Depart"
                                        />
                                    </div>

                                    <Row style={{padding:'5%'}}>
                                        <Col style={{textAlign:'center'}}>
                                            <button 
                                                style={{backgroundColor:'#B27440', border:'none', width:'10vw', height:'auto'}} 
                                                onClick={ ()=>this.addItemInShoppingCart() }
                                            >
                                                <b style={{color:'white'}}>Add to cart</b>
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </Row>
                    </div>
                </Container>
                <hr/>
                <Container>
                    <Row style={{paddingTop:'5%', paddingBottom:'5%'}}>
                        <Col style={{textAlign:'center'}}>
                            <span style={{fontFamily:'Cambria', fontSize:'30px', fontWeight:'revert'}}>What you get when you stay with us.</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                            <div>
                                <div style={{textAlign:'center'}}><FaHotel style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>CHECK IN 15:00 / CHECK OUT 11:00</p></div>
                            </div>
                        </Col>
                        <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                            <div>
                                <div style={{textAlign:'center'}}><SiClockify style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>24/7 SUPPORT</p></div>
                            </div>
                        </Col>
                        <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                            <div>
                                <div style={{textAlign:'center'}}><BsBucket style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>WEEKLY HOUSEKEEPING</p></div>
                            </div>
                        </Col>
                        <Col xs="3">
                            <div>
                                <div style={{textAlign:'center'}}><AiOutlineWifi style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>FREE WIFI</p></div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{paddingBottom:'5%'}}>
                        <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                            <div>
                                <div style={{textAlign:'center'}}><GrObjectUngroup style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>SOCIAL SPACES</p></div>
                            </div>
                        </Col>
                        <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                            <div>
                                <div style={{textAlign:'center'}}><GiPerfumeBottle style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>LUXURY TOILETRIES</p></div>
                            </div>
                        </Col>
                        <Col xs="3" style={{borderRight:'1px solid #CECECE'}}>
                            <div>
                                <div style={{textAlign:'center'}}><CgSmartHomeWashMachine style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>WASHER DRYER</p></div>
                            </div>
                        </Col>
                        <Col xs="3">
                            <div>
                                <div style={{textAlign:'center'}}><FaRegHandshake style={{width:'4vw', height:'4vh'}}/></div>
                                <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>24/7 RECEPTION</p></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr/>
            </div>
        )
    }
}
