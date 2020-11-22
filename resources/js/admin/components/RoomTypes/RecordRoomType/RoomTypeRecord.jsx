import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';

export default class RoomTypesRecord extends Component {
    constructor(props) {
        super(props);
        this.state={
            hinhAnh: '',
            imgRaw: ''
        }
    }
    
    componentWillMount(){
        var imgs = JSON.parse(this.props.hinhAnh);
        this.setState({
            hinhAnh: imgs[0],
            imgRaw: this.props.hinhAnh
        })
    }

    deleteRoomType(){
        var obj = {
            id: this.props.idLoaiPhong,
            imgRaw: this.state.imgRaw
        }
        console.log(obj);
        this.props.onSelectDelete(obj);
    }

    render() {
        console.log(this.props);
        return (
            <tr>
                <td style={{ lineHeight: '90px' }} scope="row">{ this.props.idLoaiPhong }</td>
                <td style={{ lineHeight: '90px' }}>{ this.props.tenLP }</td>
                <td style={{ lineHeight: '90px' }}>
                    <img src={ this.state.hinhAnh } alt={ this.props.tenPhong } width="auto" height="90" />
                </td>
                <td style={{ lineHeight: '90px' }}>{ this.props.moTa[0].length>40? this.props.moTa[0].slice(0,40)+' ...' : this.props.moTa[0] }</td>
                <td style={{ lineHeight: '90px' }}>{ this.props.slPhongTrong }</td>
                <td style={{ lineHeight: '90px' }}>
                    <Link to = {"/admin/form_room_type/" + this.props.idLoaiPhong}><Button color="warning"><FaRegEdit/></Button></Link>
                    <div className="space-15"/>
                    <Button color="danger" onClick = {()=>this.deleteRoomType()}><RiDeleteBin5Line /></Button>
                </td>
            </tr>
        );
    }
}
