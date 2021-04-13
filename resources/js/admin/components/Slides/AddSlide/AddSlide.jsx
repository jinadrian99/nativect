import React, { Component } from 'react'
import { 
    Table,
    Row,
    Col,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Tooltip
} from 'reactstrap';
import { Link } from 'react-router-dom';
import NavbarTop from '../../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../../Navigation/Sidebar/SidebarLeft';
import { AiFillCheckCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { link } from '../../../../link';
const http = link;

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hinhAnh:'',
            chooseImageUrl: false,
            tooltipOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitSlide = this.submitSlide.bind(this);
        this.changeStateImage = this.changeStateImage.bind(this);
        this.chooseImageUrlOrDevice = this.chooseImageUrlOrDevice.bind(this);
        this.fileSelectHandle = this.fileSelectHandle.bind(this);
        this.notify = this.notify.bind(this);
    }

    toggle(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        })
    }

    notify(){
        toast.success(<div style={{fontSize:'20px'}}><AiFillCheckCircle/>  Thêm thành công</div>, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 4000
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    changeStateImage(){
        console.log(this.state.chooseImageUrl);
        this.setState({
            chooseImageUrl: !this.state.chooseImageUrl
        });
    }

    chooseImageUrlOrDevice(){
        if (this.state.chooseImageUrl) {
            return <Input type="file" name="hinhAnh" onChange={this.fileSelectHandle} required defaultValue={this.state.hinhAnh}/>;
        }
        else {
            return <Input type="text" name="hinhAnh" onChange={this.handleChange} required placeholder="Vui lòng nhập dữ liệu hình ảnh" defaultValue={this.state.hinhAnh}/>;
        }
    }

    fileSelectHandle(e){
        this.setState({
            hinhAnh: e.target.files[0]
        },
        console.log(this.state.hinhAnh));
    }

    submitSlide(e){
        e.preventDefault();
        // move upload file 
        var file = this.state.hinhAnh;
        var fd = new FormData();
        console.log(file);
        fd.append('data', file);
        console.log('value fd: ', fd.get('data'));
        axios.post(http + '/api/slides_upload_file', fd, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(res=>{
            if(res.data == "Không có hình"){
                alert('không có hình');
                return;
            }
            console.log('có hình');

            var img = '/image/' + res.data;

            console.log(img);
            this.setState({
                hinhAnh: img,
            }, ()=>{ 
                // upload to db
                const slide = {
                    hinhAnh : this.state.hinhAnh
                }
                console.log(slide);
                axios.post(http + '/api/slides', slide)
                .then(res => {
                    if (res.data != null) {
                        this.setState(this.state);
                        this.notify();
                    }
                });
            });
        }).catch(err=>{
            console.log(err);
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
                            <Link to = "/admin/slides">
                                <Button outline color="red" className="btn-add" id="btnAdd">
                                    <ImCancelCircle color="#D0211C" className="icon-top" />
                                </Button>
                            </Link>
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                Hủy bỏ thao tác
                            </Tooltip>
                            <h3 className="text-center mt-2">ĐIỀN THÊM THÔNG TIN SLIDE QUẢNG CÁO</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form onSubmit={this.submitSlide} className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={2}>Loại hình ảnh </Label>
                                            <Label  style={{ marginLeft: '4%', lineHeight: '36.22px' }} check>
                                                <Input type="checkbox" onClick={this.changeStateImage} style={{ marginTop: '10px' }}/>
                                                Url/My Device
                                            </Label>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={2}>Hình ảnh</Label>
                                            <Col sm={10}>
                                                { this.chooseImageUrlOrDevice() }
                                            </Col>
                                        </FormGroup>
                                        <div style={{ height: '10vh' }}/>
                                        <Row content="text-center">
                                            <Col style={{marginLeft: '75%'}}>
                                                <Button color="warning" type="submit">Save</Button>
                                                <div className="space-15"/>
                                                <Button color="danger" type="reset">Reset</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                            <ToastContainer />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
