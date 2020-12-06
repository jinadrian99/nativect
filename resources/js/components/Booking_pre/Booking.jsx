import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import NavTop from '../Navigation/NavTop'
import BookingInfo from './BookingInfo/BookingInfo'

export default class Booking extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <>
                <NavTop/>
                <BookingInfo/>
                <Footer/>
            </>
        )
    }
}
