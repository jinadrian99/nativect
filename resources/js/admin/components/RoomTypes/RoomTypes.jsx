import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip } from 'reactstrap';
import RoomTypesRecord from './RecordRoomType/RoomTypeRecord';
import axios from 'axios';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import { BiErrorAlt, } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { link } from '../../../link';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const http = link;

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
        axios.get(http + '/api/room_types').then( response => {
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
            // var data = {
            //     imgRaws: obj.imgRaw,
            // };
            // console.log('img cần xóa',data);
            // axios.post(http + '/api/room_types_delete_file',data).then(res=>{
            //     if(res.data)
            //         console.log('Đã xóa hình cũ');
            //     else
            //         console.log('Không có hình cũ');
            // })
            // axios.delete(http + '/api/room_types/'+obj.id).then(res=>{
            //     if (res.data != null) {
            //         this.loadRoomTypes();
            //     }
            // })
            // .catch(error => console.log(error));

            axios.delete(http + '/api/room_types/'+obj.id)
            .then(res => {
                // console.warn(res);
                if (res.status == 204) {
                    toast.success(<div style={{fontSize:'20px'}}><AiFillCheckCircle/>  Xoá loại phòng thành công.</div>, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 4000
                    });
                    this.loadRoomTypes();
                }
            })
            .catch(err => {
                if(err.response.status == 400){
                    toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Loại phòng đang tồn tại trong bảng đặt phòng. KHÔNG THỂ XÓA!!!</div>,{
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 4000
                    })
                }
                else if (err.response.status == 500) {
                    toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Lỗi Server</div>,{
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 4000
                    })
                }
            });
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
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
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
                                    <Link to = "/admin/add_room_type">
                                        <Button outline color="secondary" className="btn-add" id="btnAdd">
                                            <GrAdd className="icon-top" />
                                        </Button>
                                    </Link>
                                    <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                        Thêm loại phòng
                                    </Tooltip>  
                                </Col>
                                <Col md="11">
                                    <h3 className="text-center mt-2">DANH SÁCH LOẠI PHÒNG KHÁCH SẠN</h3>
                                </Col>
                            </Row>
                            <div style={{ height: '80vh', overflow: 'scroll' }}>
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
                        </div>
                    </Col>
                </Row>
                <Row>
                    <ToastContainer/>
                </Row>
            </div>
        );
    }
}

export default RoomTypes;