import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default class AdminAccountsRecord extends Component {
    deleteAdminAccount(id){
        this.props.onSelectDelete(id);
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}} scope="row">{ this.props.idAdmin }</td>
                <td style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.username }</td>
                <td style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}}>{ this.props.phanQuyen}</td>
                <td>
                    {/* <Link to = {"/admin/form_admin_account/" + this.props.idAdmin}><Button color="warning"><FaRegEdit/></Button></Link>
                    <div className="space-15"/> */}
                    <Button color="danger" onClick = {(id)=>this.deleteAdminAccount(this.props.idAdmin)}><RiDeleteBin5Line /></Button>
                </td>
            </tr>
        );
    }
}
