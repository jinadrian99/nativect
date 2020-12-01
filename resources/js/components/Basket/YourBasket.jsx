import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import NavTop from '../Navigation/NavTop'
import YourBasketInfo from './YourBasketInfo/YourBasketInfo'

export default class YourBasket extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <>
                <NavTop/>
                <YourBasketInfo/>
                <Footer/>
            </>
        )
    }
}
