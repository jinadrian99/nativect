import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import BookingRecord from './RecordBooking/BookingRecord';
import axios from 'axios';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { link } from '../../../link';
const http = link;

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state={
            booking: []
        };
        this.showBooking = this.showBooking.bind(this);
    }

    loadBooking(){
        axios.get(http + '/api/bookings').then( response => {
            this.setState({
                booking: response.data
            })
        });
    }

    componentWillMount(){
        this.loadBooking();
    }

    showBooking(){
        const lst = this.state.booking.map((item,index)=>
            <BookingRecord 
                key={index} 
                idDatPhong = {item.idDP}
                idLoaiPhong = {item.idLP}
                idKhachHang = {item.idKH}
                ngayDen = {item.ngayDen}
                ngayDi = {item.ngayDi}
                soDem = {item.soDem}
                tongTien = {item.tongTien}
            />
        );
        return lst;
    }
    render() {
        return (
            <>
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
                            <h3 className="text-center mt-2">DANH SÁCH ĐẶT PHÒNG KHÁCH SẠN</h3>
                            <Table striped>
                                <thead className="text-center">
                                    <tr>
                                        <th>id</th>
                                        <th>id loại phòng</th>
                                        <th>id khách hàng</th>
                                        <th>Ngày đến</th>
                                        <th>Ngày đi</th>
                                        <th>Số đêm</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    { this.showBooking() }
                                </tbody>
                            </Table>   
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Booking;