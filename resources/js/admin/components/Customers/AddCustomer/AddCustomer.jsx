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
import { ImCancelCircle } from "react-icons/im";
import axios from 'axios';
import { link } from '../../../../link';
const http = link;

export default class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenKH: '',
            soThe: '',
            ngayHetHan: '',

            tooltipOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitRoomType = this.submitRoomType.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    toggle(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    submitRoomType(e){
        e.preventDefault();
        const customer = {
            tenKH: this.state.tenKH,
            soThe: this.state.soThe,
            ngayHetHan: this.state.ngayHetHan
        }
        console.log(customer);
        axios.post(http + '/api/customer', customer).then(res => {
            if (res.data != null) {
                this.setState(this.state);
                alert("Thêm khách hàng thành công");
            }
        });
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
                            <Link to = "/admin/customers">
                                <Button outline color="red" className="btn-add" id="btnAdd">
                                    <ImCancelCircle color="#D0211C" className="icon-top" />
                                </Button>
                            </Link>
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                Hủy bỏ thao tác
                            </Tooltip>
                            <h3 className="text-center mt-2">ĐIỀN THÊM THÔNG TIN KHÁCH HÀNG</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form onSubmit={this.submitRoomType} className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={3}>Họ tên</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="tenKH" placeholder="Nhập họ tên Khách hàng" onChange={this.handleChange} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Số thẻ tín dụng</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="soThe" placeholder="Nhập số thẻ tín dụng" onChange={this.handleChange} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Ngày hết hạn thẻ</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="ngayHetHan" placeholder="Nhập ngày hết hạn" onChange={this.handleChange} autoComplete="off"/>
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
