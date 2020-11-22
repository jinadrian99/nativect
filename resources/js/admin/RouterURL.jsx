import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from "./components/Home/Home";

import Customers from "./components/Customers/Customers";
import FromCustomer from './components/Customers/FormCustomer/FromCustomer';
import AddCustomer from './components/Customers/AddCustomer/AddCustomer';

import AdminAccounts from "./components/AdminAccounts/AdminAccounts";
import AddAdminAccount from "./components/AdminAccounts/AddAdminAccount/AddAdminAccount";
import FormAdminAccount from "./components/AdminAccounts/FormAdminAccount/AdminAccountForm";

import Slides from "./components/Slides/Slides";
import AddSlide from "./components/Slides/AddSlide/AddSlide";
import FormSlide from "./components/Slides/FormSlide/SlideForm";

import Booking from "./components/Booking/Booking";

import Rates from "./components/Rates/Rates";
import FormRates from './components/Rates/FormRates/FromRates';
import AddRates from './components/Rates/AddRates/AddRates';

import RoomTypes from "./components/RoomTypes/RoomTypes";
import RoomTypesForm from './components/RoomTypes/FormRoomType/RoomTypeForm';
import AddRoomType from './components/RoomTypes/AddRoomType/AddRoomType';

import Login from './components/Login/Login';

import OwnAccount from './components/myOwnAccount/OwnAccountForm';

export default class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/admin" component={ Login }/>

                    <Route exact path="/admin/home" component={ Home }/>

                    <Route exact path="/admin/form_own_account/:id" component={ OwnAccount }/>

                    <Route exact path="/admin/customers" component={ Customers }/>
                    <Route exact path="/admin/form_customer/:id" component={ FromCustomer }/>
                    <Route exact path="/admin/add_customer" component={ AddCustomer }/>
                    
                    <Route exact path="/admin/admin_accounts" component={ AdminAccounts }/>
                    <Route exact path="/admin/slides" component={ Slides }/>
                    <Route exact path="/admin/booking" component={ Booking }/>

                    <Route exact path="/admin/rates" component={ Rates }/>
		            <Route exact path="/admin/form_rates/:id" component={ FormRates }/>
                    <Route exact path="/admin/add_rates" component={ AddRates }/>

		            <Route exact path="/admin/room_types" component={ RoomTypes }/>
		            <Route exact path="/admin/form_room_type/:id" component={ RoomTypesForm }/>
                    <Route exact path="/admin/add_room_type" component={ AddRoomType }/>

                    <Route exact path="/admin/slides" component={ Slides }/>
                    <Route exact path="/admin/add_slide" component={ AddSlide }/>
                    <Route exact path="/admin/form_slide/:id" component={ FormSlide }/>
                    
                    <Route exact path="/admin/admin_accounts" component={ AdminAccounts }/>
                    <Route exact path="/admin/form_admin_account/:id" component={ FormAdminAccount }/>
                    <Route exact path="/admin/add_admin_account" component={ AddAdminAccount }/>
                </div>
            </Router>
        )
    }
}
