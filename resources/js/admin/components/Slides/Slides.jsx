import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip } from 'reactstrap';
import { GrAdd } from "react-icons/gr"
import SlideRecord from './RecordSlide/SlideRecord';
import axios from 'axios';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { Link } from 'react-router-dom';
import { ImGift } from 'react-icons/im';
import { FiCornerDownLeft } from 'react-icons/fi';
import { link } from '../../../link';
const http = link;

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state={
            slide: [],
            tooltipOpen: false
        };
        this.showSlides = this.showSlides.bind(this);
        this.deleteSlide = this.deleteSlide.bind(this);
    }

    loadSlides(){
        axios.get(http + '/api/slides').then( response => {
            this.setState({
                slide: response.data
            })
        });
    }

    componentWillMount(){
        this.loadSlides();
    }

    deleteSlide(obj){
        if (window.confirm('Are you sure?')) {
            // delete old file
            var data = {
                hinhAnhSlide: obj.img
            };
            console.log('img can xoa: ', data);
            axios.post(http + '/api/slides_delete_file', data).then(res=>{
                if (res.data) {
                    console.log('Đã xóa hình cũ');
                }
                else {
                    console.log('Không có hình cũ');
                }
            })
            axios.delete(http + '/api/slides/'+obj.id).then(res=>{
                if (res.data != null) {
                    this.loadSlides();
                }
            })
            .catch(error => console.log(error));
        }
    }

    showSlides(){
        const lst = this.state.slide.map((item,index)=>
            <SlideRecord 
                key={index} 
                idSlide = {item.idSlide}
                hinhAnh = {item.hinhAnh}
                onSelectDelete = {this.deleteSlide}
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
                            <Row>
                                <Col md='1'>
                                    <Link to = "/admin/add_slide">
                                        <Button outline color="secondary" className="btn-add" id="btnAdd">
                                            <GrAdd className="icon-top" />
                                        </Button>
                                    </Link>
                                    <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                        Thêm slide quảng cáo
                                    </Tooltip>
                                </Col>
                                <Col md='11'>
                                    <h3 className="text-center mt-2">DANH SÁCH SLIDE QUẢNG CÁO</h3>                                    
                                </Col>
                            </Row>
                            <div style={{ height: '80vh', overflow: 'scroll' }}>
                                <Table striped>
                                    <thead className="text-center">
                                        <tr>
                                            <th>id</th>
                                            <th>Hình ảnh</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        { this.showSlides() }
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

export default Slide;