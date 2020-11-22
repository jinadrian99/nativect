import React, { Component } from 'react'
import NavTop from '../Navigation/NavTop';
import Carousel from '../Carousel/CarouselImg';
import Footer from '../Footer/Footer';
import AboutHotel from '../AboutHotel/AboutHotel';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            slItemAddCart: 0
        }
    }
    
    componentWillMount(){
        this.setState({
            slItemAddCart: localStorage.getItem('slItemsShoppingCart')?parseInt(localStorage.getItem('slItemsShoppingCart'),10):0
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <NavTop slItemAddCart = {this.state.slItemAddCart}/>
                <div style={{ marginTop: "7vh" }}/>
                <div className="another-page-carousel" style={{ height: '60vh', overflow: 'hidden'}}>
                    <Carousel/>
                </div>
                <AboutHotel/>
                <Footer/>
            </>
        )
    }
}
