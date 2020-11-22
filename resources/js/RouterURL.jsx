import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Rates from './components/Rates/Rates';
import About from './components/About/About';
import Room from './components/Room/Room';

export default class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/room_rates" component={ Rates }/>
                    <Route exact path="/about" component={ About }/>
                    <Route exact path="/room/:id" component={ Room }/>
                </div>
            </Router>
        )
    }
}
