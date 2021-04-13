import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip } from 'reactstrap';
import { GrAdd } from "react-icons/gr"
import AdminAccountsRecord from './RecordAdminAccount/AdminAccountsRecord';
import axios from 'axios';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { Link } from 'react-router-dom';
import { link } from '../../../link';
const http = link;

class AdminAccounts extends Component {
    constructor(props) {
        super(props);
        this.state={
            adminAcc: [],
            tooltipOpen: false
        };
        this.showAdminAccounts = this.showAdminAccounts.bind(this);
        this.deleteAdminAccount = this.deleteAdminAccount.bind(this);
    }

    loadAdminAccounts(){
        axios.get(http + '/api/admin_accounts').then( response => {
            this.setState({
                adminAcc: response.data.filter((obj) => obj.phanQuyen!=3)
            })
        });
    }

    componentWillMount(){
        this.loadAdminAccounts();
    }

    deleteAdminAccount(id){
        if (window.confirm('Are you sure?')) {
            axios.delete(http + '/api/admin_accounts/'+id).then(res=>{
                if (res.data != null) {
                    this.loadAdminAccounts();
                }
            })
            .catch(error => console.log(error));
        }
    }

    showAdminAccounts(){
        const lst = this.state.adminAcc.map((item,index)=>
            <AdminAccountsRecord 
                key={index} 
                idAdmin = {item.idAdmin}
                username = {item.username}
                phanQuyen = {item.phanQuyen}
                onSelectDelete = {this.deleteAdminAccount}
            />
        );
        return lst;
    }

    toggle(){
        this.setState({
                tooltipOpen: !this.state.tooltipOpen
        })
    }


    render() {
        return (
            <div  style={{overflow: 'hidden', width: '100vw', height: '100vh'}}>
                <Row>
                    <Col>
                        <NavbarTop />
                    </Col>
                </Row>
                <Row>
                    <Col md="2" style={{paddingRight: '0',paddingRight: '0px', height: '92vh'}}>
                        <SidebarLeft />
                    </Col>
                    <Col md="10" style={{paddingLeft: '0'}}>
                        <div className="container">
                            <Row>
                                <Col md="1">
                                    <Link to = "/admin/add_admin_account">
                                        <Button outline color="secondary" className="btn-add" id="btnAdd">
                                            <GrAdd className="icon-top" />
                                        </Button>
                                    </Link>
                                    <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                        Thêm tài khoản admin
                                    </Tooltip>
                                </Col>
                                <Col md="11">
                                    <h3 className="text-center mt-2">DANH SÁCH TÀI KHOẢN TRANG ADMIN</h3>
                                </Col>
                            </Row>
                            <div style={{ height: '80vh', overflow: 'scroll' }}>
                                <Table striped>
                                    <thead className="text-center">
                                        <tr>
                                            <th>id</th>
                                            <th>username</th>
                                            <th>Phân quyền</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        { this.showAdminAccounts() }
                                    </tbody>
                                </Table>   
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AdminAccounts;