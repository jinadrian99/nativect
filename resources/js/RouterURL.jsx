import React, { Component, lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from './components/Home/Home';
// const Home = lazy(() => import('./components/Home/Home'));
// import Rates from './components/Rates/Rates';
const Rates = lazy(() => import('./components/Rates/Rates'));
// import About from './components/About/About';
const About = lazy(() => import('./components/About/About'));
import Room from './components/Room/Room';
// const Room = lazy(() => import('./components/Room/Room'));

export default class RouterURL extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={ <div>Loading...</div> }>
                    <div>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/room_rates" component={ Rates }/>
                        <Route exact path="/about" component={ About }/>
                        <Route exact path="/room/:id" component={ Room }/>
                    </div>
                </Suspense>
            </Router>
        )
    }
}
