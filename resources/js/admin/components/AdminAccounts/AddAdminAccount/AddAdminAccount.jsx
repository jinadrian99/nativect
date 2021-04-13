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
import { AiFillCheckCircle } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { link } from '../../../../link';
const http = link;

export default class AddAdminAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            phanQuyen: 1,
            errors: {},
            tooltipOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.submitAdminAccount = this.submitAdminAccount.bind(this);
        this.notify = this.notify.bind(this);
        this.resetForm = this.resetForm.bind(this);
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

    handleClick(v){
        if(v==2){
            this.setState({phanQuyen: 2});
        } else {
            this.setState({phanQuyen: 1});
        }
    }

    resetForm(){
        this.setState({
            idAdmin: '',
            username: '',
            password: '',
            phanQuyen: ''
        })
    }

    submitAdminAccount(e){
        e.preventDefault();
        const {username, password} = this.state;
        let isValidUsername = true;
        let isValidPassword = true;
        const errors = {};
        if (username.trim().length < 6) {
            errors.usernameLength = "Tên tài khoản phải đủ 6 kí tự trở lên";
            isValidUsername = false;
        }
        if (password.trim().length < 6) {
            errors.passwordLength = "Mật khẩu phải đủ 6 kí tự trở lên";
            isValidPassword = false;
        }
        this.setState({errors},
            ()=>{
                console.log(this.state.errors.usernameLength)
                console.log(this.state.errors.passwordLength)
                if(!isValidUsername || !isValidPassword){
                    if (!isValidUsername) {
                        if(this.state.errors.usernameLength != ""){
                            toast.error(<div>{this.state.errors.usernameLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    }
                    if(!isValidPassword){
                        if(this.state.errors.passwordLength != ""){
                            toast.error(<div>{this.state.errors.passwordLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    } 
                    return;
                }
                const adminAcc = {
                    username: this.state.username,
                    password: this.state.password,
                    phanQuyen: this.state.phanQuyen
                }
                console.log(adminAcc);
                axios.post(http + '/api/admin_accounts', adminAcc).then(res => {
                    if (res.data != null) {
                        this.resetForm();
                        this.notify();
                    }
                });
            }
        );
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
                            <Link to = "/admin/admin_accounts">
                                <Button outline color="red" className="btn-add" id="btnAdd">
                                    <ImCancelCircle color="#D0211C" className="icon-top" />
                                </Button>
                            </Link>
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                Hủy bỏ thao tác
                            </Tooltip>
                            <h3 className="text-center mt-2">ĐIỀN THÊM THÔNG TIN TÀI KHOẢN ADMIN</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form onSubmit={this.submitAdminAccount} className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={3}>Username</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="username" placeholder="Điền tên tài khoản" onChange={this.handleChange} placeholder="Tên tài khoản 6 kí tự trở lên." autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Password</Label>
                                            <Col sm={9}>
                                                <Input type="password" name="password" placeholder="Điền mật khẩu" onChange={this.handleChange} placeholder="Mật khẩu 6 kí tự trở lên." autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row >
                                            <Label sm={3}>Phân quyền</Label>
                                            <Col sm={9}>
                                                <Label style={{ marginLeft: '-15%', marginTop:'1.1%' }} check>
                                                <Input type="radio" onClick={(v)=>this.handleClick(1)} defaultChecked={this.state.phanQuyen} name="phanQuyen" value="2" />
                                                    Nhân viên chăm sóc khách hàng
                                                </Label>
                                                <Label style={{ marginLeft: '10%' }} check>
                                                <Input type="radio" onClick={(v)=>this.handleClick(2)} defaultChecked={this.state.phanQuyen} name="phanQuyen" value="1"/>
                                                    Quản lý
                                                </Label>
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
