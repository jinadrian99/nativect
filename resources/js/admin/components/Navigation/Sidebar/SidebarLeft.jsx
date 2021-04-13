import React, { Component } from 'react'
import { 
    Collapse, 
    Navbar, 
    Nav,
    NavItem,
    NavbarText,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarToggler
} from 'reactstrap';
import { Link } from "react-router-dom";
import { FiUsers } from 'react-icons/fi';
import { BiBed } from 'react-icons/bi';
import { RiDoorOpenLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BsCollection } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import './SidebarLeft.css';

export default class SidebarLeft extends Component {
    showKH(){
        if(JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==1 || JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==2)
        {
            return (
                <Link to="/admin/customers">
                    <NavItem style={{ lineHeight: "45px", borderBottom: "1px solid white"}}>
                        <NavbarText className="navLinkItem text-light" style={{fontSize: "20px", marginLeft: "13%", paddingRight: "6%"}}>
                            <FiUsers /><div className="space-15" />Khách hàng
                        </NavbarText>
                    </NavItem>
                </Link>
            );
        }
    }
    showLP(){
        if(JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==2){
            return (
                <Link to="/admin/room_types">
                    <NavItem style={{ lineHeight: "45px", borderBottom: "1px solid white"}}>
                        <NavbarText className="navLinkItem text-light" style={{fontSize: "20px", marginLeft: "13%", paddingRight: "6%"}}>
                            <RiDoorOpenLine /><div className="space-15" />Loại phòng
                        </NavbarText>
                    </NavItem>
                </Link>
            );
        }
    }
    showBG(){
        if(JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==2){
            return (
                <Link to="/admin/rates">
                    <NavItem style={{ lineHeight: "45px", borderBottom: "1px solid white"}}>
                        <NavbarText className="navLinkItem text-light" style={{fontSize: "20px", marginLeft: "13%", paddingRight: "6%"}}>
                            <FaRegMoneyBillAlt /><div className="space-15" />Bảng giá
                        </NavbarText>
                    </NavItem>
                </Link>
            );
        }
    }
    showDP(){
        if(JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==1 || JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==2){
            return (
                <Link to="/admin/booking">
                    <NavItem style={{ lineHeight: "45px", borderBottom: "1px solid white"}}>
                        <NavbarText className="navLinkItem text-light" style={{fontSize: "20px", marginLeft: "13%", paddingRight: "6%"}}>
                            <BsCardChecklist /><div className="space-15" />Đặt phòng
                        </NavbarText>
                    </NavItem>
                </Link>
            );
        }
    }
    showS(){
        if(JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==2){
            return (
                <Link to="/admin/slides">
                    <NavItem style={{ lineHeight: "45px", borderBottom: "1px solid white"}}>
                        <NavbarText className="navLinkItem text-light" style={{fontSize: "20px", marginLeft: "13%", paddingRight: "6%"}}>
                            <BsCollection /><div className="space-15" />Slide
                        </NavbarText>
                    </NavItem>
                </Link>
            );
        }
    }
    showAA(){
        if(JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen==3){
            return (
                <Link to="/admin/admin_accounts">
                    <NavItem style={{ lineHeight: "45px", borderBottom: "1px solid white"}}>
                        <NavbarText className="navLinkItem text-light" style={{fontSize: "20px", marginLeft: "13%", paddingRight: "6%"}}>
                            <RiAdminFill /><div className="space-15" />Admin Account
                        </NavbarText>
                    </NavItem>
                </Link>
            );
        }
    }
    render() {
        console.log(JSON.parse(sessionStorage.getItem('objAdmin')).phanQuyen);
        return (
            <div style={{ height: '94vh', backgroundColor: '#343A40' }}>
                <Navbar className="text-light" color="dark" light style={{padding: "0 0"}}>
                    <Nav navbar style={{ width: '100%' }}>
                        { this.showKH() }
                        { this.showLP() }
                        { this.showBG() }
                        { this.showDP() } 
                        { this.showS() }
                        { this.showAA() } 
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
