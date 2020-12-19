import Axios from 'axios';
import React, { Component } from 'react';

export default class BookingRecord extends Component {
    render() {
        return (
            <tr>
                <td scope="row">{ this.props.idDatPhong }</td>
                <td>{ this.props.idLoaiPhong }</td>
                <td>{ this.props.idKhachHang }</td>
                <td>{ this.props.slPhong }</td>
                <td>{ this.props.ngayDen }</td>
                <td>{ this.props.ngayDi }</td>
                <td>{ this.props.soDem }</td>
                <td>{ this.props.tongTien }</td>
                <td>{ this.props.status==1 ? 'Confirmed' : (this.props.status==2 ? 'Completed' : 'Cancelled') }</td>
            </tr>
        );
    }
}
