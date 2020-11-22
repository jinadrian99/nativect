import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './SlideRecord.css';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default class SlideRecord extends Component {
    deleteSlide(id){
        this.props.onSelectDelete(id);
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td className="lh-90" scope="row">{ this.props.idSlide }</td>
                <td className="lh-90">
                    <img src={ this.props.hinhAnh } width="auto" height="90" />
                </td>
                <td className="lh-90">
                    <Link to = {"/admin/form_slide/" + this.props.idSlide}><Button color="warning"><FaRegEdit/></Button></Link>
                    <div className="space-15"/>
                    <Button color="danger" onClick = {(id)=>this.deleteSlide(this.props.idSlide)}><RiDeleteBin5Line /></Button>
                </td>
            </tr>
        );
    }
}
