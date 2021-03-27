import React, { Component } from 'react';
import { Container, Col, Row, Table } from 'reactstrap';
import Footer from '../Footer/Footer';
import NavTop from '../Navigation/NavTop';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { link } from '../../link';
const http = link;
import './ExchangeRates.css';
import ExchangeRatesRecord from './ExchangeRatesRecord/ExchangeRatesRecord';

export default class ExchangeRates extends Component {
    constructor(props) {
        super(props);
        this.state={
            rate: [],
            slItemAddCart: 0
        }
        this.showExchangeRates = this.showExchangeRates.bind(this);
    }

    loadExchangeRates(){
        axios.post(http + '/api/exchange_rates').then(res =>{
            console.warn(res);
            this.setState({
                rate: res.data
            },console.log('in function:' + this.state.rate))
        });
    }

    componentWillMount(){
        this.setState({
            slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'),10) : 0
        })
        this.loadExchangeRates();
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    showExchangeRates(){
        const lst = this.state.rate.map((item,index)=>{
            return <ExchangeRatesRecord  key={ index } symbol={item.symbol} price={item.rate} currency={item.currency} />;
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
                            <span className="text-title"><span className="text-title-head">E</span>XCHANGE <span className="text-title-head">R</span>ATES</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <span className="text-title minimize-font">Exchange Rates Table from USD </span>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '3vh' }}>
                        <Col>
                            <Table className="text-title rates-font-size" hover>
                                <thead>
                                    <tr>
                                        <th style={{width: '20vw'}}>Currency symbols</th>
                                        <th style={{width: '70vw'}}>Currency</th>
                                        <th style={{width: '10vw'}}>Rates</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.showExchangeRates() }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>
        )
    }
}
