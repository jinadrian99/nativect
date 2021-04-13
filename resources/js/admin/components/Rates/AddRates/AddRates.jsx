import React, { Component } from 'react';
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
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';
import { ImCancelCircle } from "react-icons/im";
import { BiErrorAlt } from "react-icons/bi";
import { MdVerifiedUser } from 'react-icons/md';


import { differenceInDays } from 'date-fns';
import axios from 'axios';
import { link } from '../../../../link';

const http = link;

export default class AddRates extends Component {
    constructor(props) {
        super(props);
        this.state={
            giaLP: '',
            timeApDung: '',
            idLP: '',

            roomType:[],
            tooltipOpen: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveChange = this.saveChange.bind(this);

        this.loadRoomTypes = this.loadRoomTypes.bind(this);
        this.showRoomType = this.showRoomType.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    
    componentWillMount(){
        this.loadRoomTypes();
    }

    loadRoomTypes(){
        axios.get(http + '/api/room_types').then( response => {
            if(response.data != null){
                this.setState({
                    roomType: response.data
                });
            }
        });
    }

    showRoomType(){
        console.log(this.state);
        const lst = this.state.roomType.map((item, index)=>
            <option key={index} value={item.idLP}>{item.tenLP}</option>
        );
        return lst;
    }

    handleChange(e){
        if(e.target.name == "timeApDung"){
            if(differenceInDays(new Date(e.target.value),new Date()) < 0){
                toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Bạn đã chọn ngày quá khứ</div>, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 4000
                });
                return;
            }
        }
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    resetForm(){
        this.setState({
            giaLP: '',
            timeApDung: '',
            idLP: ''
        })
    }

    saveChange(e){
        e.preventDefault();
        if(this.state.idLP == '')
        {
            toast.error(<div style={{fontSize:'20px'}}><BiErrorAlt/>  Bạn chưa chọn Phòng</div>, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 4000
            });
            return;
        }
        var rates = {
            giaLP: this.state.giaLP,
            timeApDung: this.state.timeApDung,
            idLP: this.state.idLP
        }
        rates.idLP = parseInt(rates.idLP);

        const Zoom = cssTransition({
            enter: 'zoomIn',
            exit: 'zoomOut',
          });
        if(window.confirm('Are you sure?')){
            console.log(rates);
            this.resetForm();
            axios.post(http + '/api/rates', rates).then(response => {
                if(response.data!=null){
                    this.resetForm();
                    toast.success(
                    <>
                        <MdVerifiedUser style={{fontSize: '5vh'}} /> 
                        <span style={{ fontSize: '2.3vh' }}>Thêm bảng giá thành công</span>
                    </>,
                    {
                        transition: Zoom,
                        position: "bottom-right",
                        autoClose: 2500,
                    });
                }
            });
        }
    }

    toggle(){
        this.setState({
            tooltipOpen : !this.state.tooltipOpen
        })
    }
    render() {
        return (
            <div style={{overflow: 'hidden', width: '100vw', height: '100vh'}}>
                <ToastContainer/>
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
                            <ToastContainer />
                            <Link to = "/admin/rates">
                                <Button outline color="red" className="btn-add" id="btnAdd">
                                    <ImCancelCircle color="#D0211C" className="icon-top" />
                                </Button>
                            </Link>
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                Hủy bỏ thao tác
                            </Tooltip>
                            <h3 className="text-center mt-2">ĐIỀN THÔNG TIN BẢNG GIÁ</h3>
                            <hr />
                            <div style={{height: '15px' }} />
                            <Row>
                                <Col>
                                    <Form onSubmit={this.saveChange} className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={3}>Loại phòng</Label>
                                            <Col sm={9}>
                                                <Input type="select" value={this.state.idLP} name="idLP" onChange={this.handleChange}>
                                                    { this.showRoomType() }
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Giá tiền</Label>
                                            <Col sm={9}>
                                            <Input type="number" name="giaLP" value={this.state.giaLP} placeholder="Nhập giá" onChange={this.handleChange} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Thời gian áp dụng</Label>
                                            <Col sm={9}>
                                            <Input type="date" name="timeApDung" value={this.state.timeApDung} placeholder="Nhập thời gian áp dụng giá trên" onChange={this.handleChange} autoComplete="off"/>
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
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
