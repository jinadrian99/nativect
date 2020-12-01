import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { RiCoinsLine } from "react-icons/ri";
import { GiCarKey } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { GrDocumentLocked } from "react-icons/gr";
import { RiShoppingBasket2Line } from "react-icons/ri";

import './YourBasketInfo.css';

export default class YourBasketInfo extends Component {
    render() {
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
                                    <hr/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3" style={{borderRight:'1px solid #F3F1EF'}}><img src="image/BlueRoom.jpg" style={{width:'12vw', height:'auto'}}/></Col>
                                <Col xs="6" style={{fontSize:'1.3vw', fontFamily:'Georgia', borderRight:'1px solid #F3F1EF'}}>
                                    <Row>
                                        <Col><span style={{fontWeight:'bold'}}>Blue Room</span><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col><span>Arrive: ...</span></Col>
                                    </Row>
                                    <Row>
                                        <Col><span>Depart: ...</span></Col>
                                    </Row>
                                </Col>
                                <Col xs="3" style={{fontSize:'1.2vw', fontFamily:'Georgia'}}>
                                    <Row>
                                        <Col><span>Cost 1 room for 9 nights</span></Col>
                                    </Row>
                                    <Row style={{padding:'5%'}}>
                                        <Col><span style={{fontWeight:'bold', fontSize:'1.4vw'}}>$930</span></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <hr/>
                            <Row style={{ paddingTop:'5%'}}>
                                <Col xs="6" sm="4"></Col>
                                <Col xs="6" sm="4" style={{fontSize:'1.4vw', fontFamily:'Georgia', textAlign:'center'}}>
                                    <Row>
                                        <Col><span>Total booking cost</span><hr/></Col>
                                    </Row>
                                    <Row>
                                        <Col><span style={{fontWeight:'bold', fontSize:'2vw'}}>$930</span></Col>
                                    </Row>
                                    <Row style={{ paddingTop:'7%'}} className="button-Continue">
                                        <Col>
                                            <Link to="/booking">
                                                <button><b>CONTINUE</b></button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="4"></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
