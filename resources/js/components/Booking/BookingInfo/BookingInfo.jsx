import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { IoIosArrowForward } from "react-icons/io";
import { FaHotel } from "react-icons/fa";

import './BookingInfo.css';

import { format } from 'date-fns';

export default class BookingInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            startDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
            endDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate),
            tenLP: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].tenLP : '',
            hinhAnh: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].hinhAnh : '',
            giaLP: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart'))[0].giaLP : '',
            diff: localStorage.getItem('dateArriveCart') ? JSON.parse(localStorage.getItem('dateArriveCart')).days_diff : ''
        }
    }

    render() {
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
                                            <select style={{paddingTop:'4%'}}>
                                                <option>MR.</option>
                                                <option>MRS.</option>
                                                <option>MISS.</option>
                                                <option>MS.</option>
                                                <option>DR.</option>
                                                <option>UNKNOWN</option>
                                            </select>
                                        </Col>
                                        <Col xs="8">
                                            <input type="text" placeholder="FULLNAME*" required style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col xs="6">
                                            <input type="email" placeholder="EMAIL*" required />
                                        </Col>
                                        <Col xs="6">
                                            <input type="email" placeholder="CONFIRM EMAIL*" required style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col>
                                            <input type="number" placeholder="TELEPHONE*" required style={{width:'100%'}}/>
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
                                        <Col xs="4">
                                            <select style={{paddingTop:'4%'}}>
                                                <option>VISA</option>
                                                <option>MASTERCARD</option>
                                                <option>BIDV</option>
                                                <option>EXIMBANK</option>
                                            </select>
                                        </Col>
                                        <Col xs="8">
                                            <input type="text" placeholder="NAME ON CARD*" required style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col>
                                            <input type="number" placeholder="CARD NUMBER*" required style={{width:'100%'}}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingTop:'5%'}} className="formPersonalDetails">
                                        <Col>
                                            <input type="text" placeholder="EXPIRY DATE*" onfocus="(this.type='date')" style={{width:'100%'}}/>
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
                                            <span>{this.state.tenLP} X 1</span><br/>
                                            <span>{parseInt(this.state.giaLP,10)}</span>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <span>Total cost</span><br/>
                                            <span>1 room for {this.state.diff} {this.state.diff > 1 ? 'nights' : 'night'}</span>
                                        </Col>
                                    </Row>
                                    <Row style={{paddingBottom:'5%'}}>
                                        <Col>
                                            <span style={{fontWeight:'bold', fontSize:'2vw', fontFamily:'Georgia'}}>{parseInt(this.state.giaLP,10) * this.state.diff} VND</span>
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
                                        <Col><span style={{fontWeight:'bold', fontSize:'2vw'}}>{parseInt(this.state.giaLP,10) * this.state.diff} VND</span></Col>
                                    </Row>
                                    <Row style={{ paddingTop:'7%'}} className="button-BookNow">
                                        <Col>
                                            <Link to="/booking">
                                                <button><b>BOOK NOW</b></button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
