import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip } from 'reactstrap';
import RecordCustomer from './RecordCustomer/RecordCustomer';
import axios from 'axios';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';
import './Customers.css'; 
import { link } from '../../../link';
const http = link;

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            customers: [],
            tooltipOpen: false,
        };
        this.showObjectCustomers = this.showObjectCustomers.bind(this);
        // this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    toggle(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        })
    }

    loadCustomers(){
        axios.get(http + '/api/customer').then( response => {
            this.setState({
                customers: response.data
            })
        });
    }

    componentWillMount(){
        this.loadCustomers();
    }

    // deleteCustomer(id){
    //     if(window.confirm('Are you sure?')){
    //         axios.delete(http + '/api/customer/'+id).then((response)=>{
    //             if(response.data!=null){
    //                 this.loadCustomers();
    //             }
    //         })
    //         .catch(error => console.log(error));
    //     }
    // }

    showObjectCustomers(){
        console.log(this.state);
        const lst = this.state.customers.map((item,index)=>
            <RecordCustomer 
                key = { index } 
                idKH = { item.idKH }
                tenKH = { item.tenKH }
                email = { item.email }
                sdt = { item.sdt }
                loaiThe = { item.loaiThe }
                nganHang = { item.nganHang }
                soThe = { item.soThe } 
                // tenThe = { item.tenThe } 
                // ngayHetHan = { item.ngayHetHan } 
                // onSelectDelete = { this.deleteCustomer }
            />
        );
        return lst;
    }

    render() {
        return (
            <div style={{overflow: 'hidden', width: '100vw', height: '100vh'}}>
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
                            {/* <Link to="/admin/add_customer">
                                <Button outline color="secondary" className="btn-add" id="btnAdd">
                                    <GrAdd className="icon-top" />
                                </Button>
                            </Link>
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                Thêm khách hàng
                            </Tooltip> */}
                            <h3 className="text-center mt-2">THÔNG TIN KHÁCH HÀNG</h3>
                            <div style={{ height: '80vh', overflow: 'scroll' }}>
                                <Table striped>
                                    <thead className="text-center">
                                        <tr>
                                            <th>id</th>
                                            <th>Họ tên</th>
                                            <th>Email</th>
                                            <th>Số ĐT</th>
                                            <th>Loại thẻ</th>
                                            <th>Ngân Hàng</th>
                                            <th>Số thẻ tín dụng</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        { this.showObjectCustomers() }
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

export default Register;
