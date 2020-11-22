import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip } from 'reactstrap';
import RoomTypesRecord from './RecordRoomType/RoomTypeRecord';
import axios from 'axios';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr"

class RoomTypes extends Component {
    constructor(props) {
        super(props);
        this.state={
            roomType: [],
            tooltipOpen: false
        };
        this.showRoomTypes = this.showRoomTypes.bind(this);
        this.deleteRoomType = this.deleteRoomType.bind(this);
    }

    loadRoomTypes(){
        axios.get('http://127.0.0.1:8000/api/room_types').then( response => {
            this.setState({
                roomType: response.data
            })
        });
    }

    componentWillMount(){
        this.loadRoomTypes();
    }

    deleteRoomType(obj){
        if (window.confirm('Are you sure?')) {
            // delete file old
            var data = {
                imgRaws: obj.imgRaw,
            };
            console.log('img cần xóa',data);
            axios.post('http://127.0.0.1:8000/api/room_types_delete_file',data).then(res=>{
                if(res.data)
                    console.log('Đã xóa hình cũ');
                else
                    console.log('Không có hình cũ');
            })
            axios.delete('http://127.0.0.1:8000/api/room_types/'+obj.id).then(res=>{
                if (res.data != null) {
                    this.loadRoomTypes();
                }
            })
            .catch(error => console.log(error));
        }
    }

    showRoomTypes(){
        const lst = this.state.roomType.map((item,index)=>
            <RoomTypesRecord 
                key={index} 
                idLoaiPhong = {item.idLP}
                tenLP  = {item.tenLP}
                hinhAnh  = {item.hinhAnh}
                moTa = {JSON.parse(item.moTa)}
                slPhongTrong = {item.slPhongTrong}
                onSelectDelete = {this.deleteRoomType}
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
        console.log(this.state);
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
                            <Link to = "/admin/add_room_type">
                                <Button outline color="secondary" className="btn-add" id="btnAdd">
                                    <GrAdd className="icon-top" />
                                </Button>
                            </Link>
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                Thêm loại phòng
                            </Tooltip>
                            <h3 className="text-center mt-2">DANH SÁCH LOẠI PHÒNG KHÁCH SẠN</h3>
                            <Table striped>
                                <thead className="text-center">
                                    <tr>
                                        <th>id</th>
                                        <th>Tên loại phòng</th>
                                        <th>Hình ảnh</th>
                                        <th>Mô tả</th>
                                        <th>Sl phòng trống</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    { this.showRoomTypes() }
                                </tbody>
                            </Table>   
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default RoomTypes;