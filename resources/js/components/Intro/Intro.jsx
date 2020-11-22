import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { BiSwim } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default class Intro extends Component {
    render() {
        AOS.init();
        var aos_right = {
            'data-aos': "fade-right",
            'data-aos-offset': "400",
            'data-aos-duration': "750"
        };
        
        var aos_left = {
            'data-aos': "fade-left",
            'data-aos-offset': "350",
            'data-aos-duration': "750"
        };

        var aos_up = {
            'data-aos': "fade-up",
            'data-aos-anchor-placement': "top-bottom",
            'data-aos-offset': "350",
            'data-aos-duration': "750"
        }

        return (
            <div style={{paddingTop:'2%'}}>
                <div>
                    <hr/>
                </div>
                <div 
                    { ...aos_right }
                    style={{ backgroundColor:'#F8FAFC', height: '93vh', paddingTop: '5vh', paddingBottom: '5vh' }}
                >
                    <Row style={{ width: '99vw' }}>
                        <Col>
                            <h1 style={{textAlign:'center', fontWeight:'revert'}}>Dining and drinks</h1>
                            <p style={{textAlign:'center', fontSize:'1.2vw'}}>A destination for local foodies, our restaurants serve bold flavors with sweeping city views. Join us in Baptiste & Bottle for a Midwestern spin on American fare and Noyane for a fusion of Japanese and Peruvian flavors.</p>
                        </Col>
                    </Row>
                    <Row style={{ width: '99vw' }}>
                        <Col><img style={{ width: '99.5vw', height: 'auto' }} src='./image/bar.jpg'  alt="hotel bar" /></Col> 
                    </Row>
                </div>
                <div>
                    <hr/>
                </div>
                <div 
                    { ...aos_left }
                    style={{backgroundColor:'#F8FAFC'}}
                >
                    <Row style={{ width: '99vw', height: '93vh', paddingTop: '9vh', paddingBottom: '9vh' }}>
                        <Col xs="5">
                            <h1 style={{textAlign:'center', fontWeight:'revert', fontSize:'3vw', paddingTop:'10%'}}>Swim pool why not ?</h1>
                            <p style={{fontSize:'1.2vw', marginLeft:'5%', paddingTop:'8%'}}>Near Chaweng Beach on Thailand’s idyllic Koh Samui island, the Red Pool at Native hotel beckons guests with its mesmerizing mosaic of yellow, orange, and red tiles.</p>
                            <Row style={{paddingTop:'5%'}}>
                                <Col style={{textAlign:'center'}}>
                                    <BiSwim style={{width:'5vw', height:'auto'}}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="7"><img style={{ width: '58vw', height: 'auto' }} src='./image/swimpool.jpg' alt="hotel swim pool"/></Col>
                    </Row>
                </div>
                <div
                    { ...aos_up }
                style={{backgroundColor:'#FFFFFF'}}>
                    <Row style={{ width: '99vw' }}>
                        <Col xs="3"></Col>
                        <Col xs="6"><img style={{ width: '50vw', height: 'auto' }} src='./image/covid-confident.png' alt="covid"/></Col>
                        <Col xs="3"></Col>
                    </Row>
                </div>
            </div>
        )
    }
}
