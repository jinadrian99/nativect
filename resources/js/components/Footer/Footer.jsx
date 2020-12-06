import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { RiFacebookCircleLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
    backToTop(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div>
                    <img style={{ width: '99vw', height: 'auto' }}  src="/image/illustration.png"/>
                </div>
                <div style={{backgroundColor:'black'}}>
                    <Container>
                        <Row><div style={{ height: '8vh' }} /></Row>
                        <Row>
                            <Col xs="4">
                                <Row className="navbar-text-footer">
                                    <img style={{padding: '5%', paddingBottom: '2vh' }} src='/image/footer-logo.png' alt="footer logo"/>
                                    <span style={{ paddingLeft: '1.7vw', paddingBottom: '7vh', fontSize: '2.4vh' }}>nativehotelct@gmail.com</span>
                                </Row>
                                <Row>
                                    <RiFacebookCircleLine style={{color:'white', fontSize:'3vw', margin: '1vh 1vw'}}/>
                                    <SiInstagram style={{color:'white', fontSize:'2.6vw', margin: '1vh 1vw', marginTop: '1.5vh'}}/>
                                    <AiOutlineTwitter style={{color:'white', fontSize:'3vw', margin: '1vh 1vw'}}/>
                                    <TiSocialLinkedinCircular style={{color:'white', fontSize:'3vw', margin: '1vh 1vw'}}/>
                                </Row>
                                <Row style={{ marginTop: '1vh', paddingBottom: '6vh', paddingTop: '9vh'  }}>
                                    <span className="back-to-home">
                                        <i onClick={ ()=>this.backToTop() }><u style={{ color: 'white' }}><RiArrowUpSLine /> BACK TO TOP</u></i>
                                    </span>
                                </Row>
                            </Col>
                            <Col xs="4">
                                <Row><Link to="" className="navbar-text nav-link navbar-text-footer arrow-right-footer"><span>Stay</span><div></div></Link></Row>
                                <Row><Link to="/about" className="navbar-text nav-link navbar-text-footer arrow-right-footer"><span>About</span><div></div></Link></Row>
                                <Row><Link to="/room_rates" className="navbar-text nav-link navbar-text-footer arrow-right-footer"><span>Room Rates</span><div></div></Link></Row>
                                <Row><Link to="/" className="navbar-text nav-link navbar-text-footer arrow-right-footer"><span>Rooms</span><div></div></Link></Row>
                                <Row className="text-center" style={{ color: 'whitesmoke', marginTop: '1vh', paddingBottom: '6vh', paddingTop: '9vh'  }}>
                                    <Col>© 2020 Native</Col>
                                    <Col>T&Cs</Col>
                                    <Col>Privacy</Col>
                                </Row>
                            </Col>
                            <Col className="info-footer" xs="4">
                                <Row>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>BLOG</i></Link></Col>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>CORPORATE</i></Link></Col>
                                </Row>
                                <Row>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>FA2S</i></Link></Col>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>NATIVE</i></Link></Col>
                                </Row>
                                <Row>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>CAREERS</i></Link></Col>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>CONTACT</i></Link></Col>
                                </Row>
                                <Row>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>SUSTAINABILITY</i></Link></Col>
                                    <Col><Link to="" className="navbar-text nav-link navbar-text-footer"><i>INVESTORS</i></Link></Col>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <img src="https://www.nativeplaces.com/wp-content/themes/native/dist/img/asap-logo.png" width="100" height="70" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
