import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { MdKitchen } from "react-icons/md";
import { GiPerfumeBottle } from "react-icons/gi";
import { GiBroom } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiSofa } from "react-icons/gi";
import { SiClockify } from "react-icons/si";

export default class AboutHotel extends Component {
    render() {
        AOS.init();
        var aos_right = {
            'data-aos': "fade-right",
            'data-aos-offset': "600",
            'data-aos-duration': "750"
        };
        
        var aos_left = {
            'data-aos': "fade-left",
            'data-aos-offset': "600",
            'data-aos-duration': "750"
        };

        var aos_zoom_in_up = {
            'data-aos': "zoom-in-up",
            'data-aos-offset': "800"
        }

        return (
            <div>
                <div style={{backgroundColor:'#F3F1EF'}}>
                    <Row style={{ width: '99vw', paddingTop:'3%', paddingBottom:'2%' }}>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <p style={{fontFamily:'Cambria', fontSize:'20px', textAlign:'center'}}>Hello there, we are Native. Here’s what makes us tick. Unique apartments where guests have space and freedom to feel right at home right away. Eclectic buildings of all styles, shapes and sizes and authentic local experiences. We love to share our local knowledge so our guests are always in the know. Our Natives always go that extra mile.</p>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>
                </div>
                <div {...aos_right}>
                    <Row style={{ width: '99vw' }}>
                        <Col xs="6"  style={{ paddingTop:'8%' }}>
                            <h1 style={{textAlign:'center', fontWeight:'revert'}}>Experience.</h1>
                            <p style={{textAlign:'center', fontSize:'1vw'}}>If you haven’t booked one of our apartments before, then prepare to transform the way you stay. If you’re looking to break free from the shackles of hotel rules and don’t want to run the risk of an unresponsive host or lack of privacy then we’re right up your street. While not every property has a concierge, we have a full-time team available 24/7 to be on-site to help with any issue big or small.</p>
                        </Col>
                        <Col xs="6">
                            <img style={{ width: '50vw', height: 'auto' }} src='./image/AboutHotel1.jpg'  alt="about hotel 1" />
                        </Col>
                    </Row>
                </div>
                <div {...aos_left}>
                    <Row style={{ width: '99vw' }}>
                        <Col xs="6">
                            <img style={{ width: '50vw', height: 'auto' }} src='./image/AboutHotel3.jpg'  alt="about hotel 3" />
                        </Col>
                        <Col xs="6"  style={{ paddingTop:'8%' }}>
                            <h1 style={{textAlign:'center', fontWeight:'revert'}}>People.</h1>
                            <p style={{textAlign:'center', fontSize:'1vw'}}>We call ourselves Natives. We’ve been independent spirits for over 20 years when our founder Guy Nixon spotted a gap in the market to offer extended stay travellers all the benefits of apartment living coupled with the service and flexibility of a hotel.</p>
                        </Col>
                    </Row>
                </div>
                <div {...aos_zoom_in_up}>
                    <Row style={{ width: '99vw' }}>
                        <Col xs="6"  style={{ paddingTop:'8%' }}>
                            <h1 style={{textAlign:'center', fontWeight:'revert'}}>Places.</h1>
                            <p style={{textAlign:'center', fontSize:'1vw'}}>Old historic warehouses, striking modern developments and tucked away mews houses are just some of the places we call home – and no two of our apartments are the same meaning that you can choose a size and budget to suit you.</p>
                        </Col>
                        <Col xs="6">
                            <img style={{ width: '50vw', height: 'auto' }} src='./image/AboutHotel2.jpg'  alt="about hotel 2" />
                        </Col>
                    </Row>
                </div>
                <div style={{backgroundColor:'#F3F1EF'}}>
                    <Container>
                        <Row style={{ paddingTop:'5%'}}>
                            <Col xs="3"></Col>
                            <Col xs="6">
                                <h1 style={{textAlign:'center', fontWeight:'revert'}}>The Fine Details</h1>
                                <p style={{fontFamily:'Cambria', fontSize:'20px', textAlign:'center'}}>Our Native places come with fully equipped kitchens, right down to a corkscrew and frying pan. Banish hotel room service – it doesn’t get much more authentic than shopping in local markets and bringing back fresh ingredients to your apartment. Whether you want to whip up a delicious meal or simply boil a fresh egg for breakfast, the choice is yours. We even provide you with the detergent to do the washing up so you don’t have to think about a thing!</p>
                            </Col>
                            <Col xs="3"></Col>
                        </Row>
                        <Row style={{ paddingTop:'5%'}}>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><MdKitchen style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>FULLY EQUIPPED KITCHEN WITH DINING AREA</p></div>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><GiPerfumeBottle style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>LUXURY TOILETRIES, HAIRDRYER AND IRONING FACILITIES</p></div>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><GiBroom style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>WEEKLY CLEANING</p></div>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><BiWifi style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'bold'}}>FREE WIFI</p></div>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop:'3%'}}>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><IoIosBed style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>FRESH BED LINEN AND FLUFFY TOWELS</p></div>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><CgSmartHomeWashMachine style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>WASHING MACHINE</p></div>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><GiSofa style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'revert'}}>COMFY SOFAS AND A TV</p></div>
                                </div>
                            </Col>
                            <Col xs="3">
                                <div>
                                    <div style={{textAlign:'center'}}><SiClockify style={{width:'4vw', height:'4vh'}}/></div>
                                    <div style={{padding:'5%'}}><p style={{textAlign:'center', fontWeight:'bold'}}>24/7 GUEST SUPPORT</p></div>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop:'5%'}}>
                            <Col xs="3"></Col>
                            <Col xs="6">
                                <p style={{fontFamily:'Cambria', fontSize:'18px', textAlign:'center'}}>All of our apartments are unique so check individual apartments for exact specifications.</p>
                            </Col>
                            <Col xs="3"></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
