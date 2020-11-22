import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default class RatesRecord extends Component {
    deleteRates(id){
        this.props.onSelectDelete(id);
    }
    render() {
        return (
            <tr>
                <td style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}} scope="row">{ this.props.idBG }</td>
                <td style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}} >{ this.props.idLP }</td>
                <td style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}} >{ this.props.giaLP }</td>
                <td style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}} >{ this.props.timeApDung }</td>
                <th style={{lineHeight: '61px', paddingTop: '0', paddingBottom: '0'}} >
                    <Link to={"/admin/form_rates/"+this.props.idBG}><Button color="warning"><FaRegEdit/></Button></Link>
                    <div className="space-15"/>
                    <Button color="danger" onClick={ (id)=>this.deleteRates(this.props.idBG) }><RiDeleteBin5Line /></Button>
                </th>
            </tr>
        );
    }
}
