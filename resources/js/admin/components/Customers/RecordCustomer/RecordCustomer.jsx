import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RecordCustomer.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export class RecordRegister extends Component {
    // deleteCustomer(id){
    //     this.props.onSelectDelete(id);
    // }
    render() {
        return (
            <tr>
                <th className="info-rec" style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}} scope="row"><b>{ this.props.idKH }</b></th>
                <td className="info-rec" style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.tenKH }</td>
                <td className="info-rec" style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.email }</td>
                <td className="info-rec" style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.sdt }</td>
                <td className="info-rec" style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.loaiThe }</td>
                <td className="info-rec" style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.nganHang }</td>
                <td className="info-rec" style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.soThe }</td>
                {/* <th>
                    <Link to={"/admin/form_customer/"+this.props.idKH}><Button color="warning"><FaRegEdit/></Button></Link>
                    <div className="space-15"/>
                    <Button color="danger" onClick={ (id)=>this.deleteCustomer(this.props.idKH) }><RiDeleteBin5Line /></Button>
                </th> */}
            </tr>
        );
    }
}

export default RecordRegister;