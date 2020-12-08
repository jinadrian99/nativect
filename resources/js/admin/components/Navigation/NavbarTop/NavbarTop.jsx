import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    NavbarBrand
} from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import { RiDashboard2Line } from "react-icons/ri";
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { RiEmotionLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import './NavbarTop.css';


class NavbarTop extends Component {
    constructor(props) {
        super(props);
        this.state={
            idAdmin: '',
            username: '',
            password: '',
            phanQuyen: '',
            dropdownOpen: false
        };
        this.toggleAcc = this.toggleAcc.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount(){
        var user = sessionStorage.getItem('objAdmin') ? JSON.parse(sessionStorage.getItem('objAdmin')) : '';
        this.setState({
            idAdmin: user.idAdmin,
            username: user.username,
            password: user.password,
            phanQuyen: user.phanQuyen
        })
    }

    toggleAcc(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    logOut(){
        sessionStorage.removeItem('objAdmin');
        if (sessionStorage.getItem('objAdmin') === null) {
            return this.props.history.push("/admin");
        }
    }

    render(){
        return(
            <div style={{borderBottom: "1px solid white"}}>
                <Navbar color="dark" light style={{ paddingTop: "0", paddingBottom: "0" }}>
                    <Nav>
                        <Link className="navbar-brand text-light" to="/admin/home">
                            <b style={{fontSize: "25px"}}>
                                <RiDashboard2Line className="icon"/><div className="space-15" />Admin Area
                            </b>
                        </Link>
                    </Nav>
                    <Nav className="mr-auto" style={{margin: "0 0 0 30%"}}>
                        <div className="text-center"><Link className="navbar-brand text-light" to="/admin/home"><b style={{fontSize: "25px"}}>NATIVE Hotel Booking Online</b></Link></div>
                    </Nav>
                    <Nav navbar>
                        <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggleAcc}>
                            <DropdownToggle caret>
                                <RiEmotionLine fontSize="20px" color="white"/><b className="text-light"> {this.state.username}</b>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to = {"/admin/form_own_account/"+ this.state.idAdmin} style={{textDecorationLine:'none', color: 'black'}}>
                                        <RiAccountPinBoxLine className="icon" fontSize="15px" /> Sửa tài khoản
                                    </Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.logOut}>
                                    <RiLogoutBoxLine className="icon" fontSize="15px" /> Đăng xuất
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </Navbar>    
            </div>    
        );
    }
}
export default withRouter(NavbarTop);
