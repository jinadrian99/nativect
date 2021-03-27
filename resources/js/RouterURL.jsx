import React, { Component, lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from './components/Home/Home';
const Rates = lazy(() => import('./components/Rates/Rates'));
const About = lazy(() => import('./components/About/About'));
import Room from './components/Room/Room';
const ExchangeRates = lazy(() => import('./components/ExchangeRates/ExchangeRates'));
import YourBasket from './components/Basket/YourBasket';
const Booking = lazy(() => import('./components/Booking/Booking'));
const Team = lazy(()=>import('./components/Team/Team'));
// const LoginRegister = lazy(() => import('./components/LoginRegister/LoginRegister'));


export default class RouterURL extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={ <div>Loading...</div> }>
                    <div>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/room_rates" component={ Rates }/>
                        <Route exact path="/exchange_rates" component={ ExchangeRates }/>
                        <Route exact path="/about" component={ About }/>
                        <Route exact path="/room/:id" component={ Room }/>
                        <Route exact path="/your_basket" component={ YourBasket }/>
                        <Route exact path="/booking" component={Booking}/>
                        {/* <Route exact path="/login_register" component={LoginRegister}/> */}

                        <Route exact path="/team" component={Team}/>
                    </div>
                </Suspense>
            </Router>
        )
    }
}
