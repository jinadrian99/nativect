import React, { Component } from 'react';
import { Container, Col, Row, Table } from 'reactstrap';
import { BsDiamondHalf } from 'react-icons/bs';
import Footer from '../Footer/Footer';
import NavTop from '../Navigation/NavTop';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './Rates.css';
import RateRecord from './RateRecord/RateRecord';
import { link } from '../../link';

const http = link;

export default class Rates extends Component {
    constructor(props) {
        super(props);
        this.state={
            roomType: [],
            slItemAddCart: 0
        }
        this.showRoomRates = this.showRoomRates.bind(this);
    }

    loadRoomTypes(){
        axios.get(http + '/api/room_types').then( response => {
            this.setState({
                roomType: response.data
            })
        });
    }

    componentWillMount(){
        this.setState({
            slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'),10) : 0
        })
        this.loadRoomTypes();
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    showRoomRates(){
        var count =0;
        const lst = this.state.roomType.map((item,index)=>{
            count++;
            console.log('dem: ',count);
            if(count<=8)
                return <RateRecord  key={ index } idLP={item.idLP} tenLP={ item.tenLP } moTa={ item.moTa }/>;
            else
                return;
        });
        return lst;
    }
    
    render() {
        AOS.init();
        var aos_flip_left = {
            'data-aos': 'flip-left',
            'data-aos-offset': '350'
        } 
        return (
            <>
                <NavTop slItemAddCart = {this.state.slItemAddCart} />
                <div style={{ marginTop: "7vh" }}/>
                <Container>
                    <Row className="row-title">
                        <Col className="text-center">
                            <span className="text-title"><span className="text-title-head">R</span>OOM <span className="text-title-head">R</span>ATES</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <span className="text-title minimize-font">Prices for a room per night </span>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '3vh' }}>
                        <Col>
                            <Table className="text-title rates-font-size" hover>
                                <thead>
                                    <tr>
                                        <th style={{width: '20vw'}}>Room</th>
                                        <th style={{width: '75vw'}}>Decription</th>
                                        <th style={{width: '15vw'}}>Prices</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.showRoomRates() }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div { ...aos_flip_left } className="info-general-rooms" style={{ marginLeft: '7vw', marginTop: '9.5vh', marginBottom: '7vh' }} >
                                <span className="text-title"><b>Infomation general rooms:</b></span>
                                <ul style={{ marginTop: '2vh' }}>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />Retina Display or LCD TV sets are in all rooms.</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />Rates include a Mediterranean breakfast (coffee, teas, juices, fruit, yogurt, bread, cakes, cheese, ham, etc.)</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />Bed-rooms feature: King Long size mattress (185x210), private bathroom (shower), air conditioning, TV (LCD) and mini-fridge.</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />In consideration of our guests we have only non smoking bed-rooms</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />18x8 mt swimming pool, towels are provided</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />Each room has a refrigerator.</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />Complimentary "WIFI" connection</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />Free Wi-Fi.</li>
                                    <li><BsDiamondHalf style={{ marginRight: '1.5vw' }} />Inward Parking</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>
        )
    }
}
