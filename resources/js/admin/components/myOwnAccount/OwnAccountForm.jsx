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
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { ImCancelCircle } from "react-icons/im";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { link } from '../../../link';
const http = link;

export default class OwnAccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAdmin: '',
            username: '',
            password: '',
            phanQuyen: '',
            passwordAgain: '',
            errors: {},
            chooseChange: false,
            tooltipOpen: false
        };
        this.submitUpdateOwnAdminAccount = this.submitUpdateOwnAdminAccount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.notify = this.notify.bind(this);
        this.changeStateInputPassword = this.changeStateInputPassword.bind(this);
    }
    
    toggle(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        })
    }

    changeStateInputPassword(){
        console.log(this.state.chooseChange)
        this.setState({
            chooseChange: !this.state.chooseChange
        });
    }

    disableInputPassword(){
        if (this.state.chooseChange) {
            return <Input type="password" name="password" placeholder="Điền mật khẩu mới" onChange={this.handleChange} />;
        }
        else {
            return <Input type="password" name="password" placeholder="Điền mật khẩu mới" disabled />;
        }
    }

    disableInputPasswordAgain(){
        if (this.state.chooseChange) {
            return <Input type="password" name="passwordAgain" placeholder="Vui lòng nhập lại mật khẩu" onChange={this.handleChange} />;
        }
        else {
            return <Input type="password" name="passwordAgain" placeholder="Vui lòng nhập lại mật khẩu" disabled />;
        }
    }

    componentWillMount(){
        var userAdmin = JSON.parse(sessionStorage.getItem('objAdmin'));
        this.setState({
            idAdmin: userAdmin.idAdmin,
            username: userAdmin.username,
            password: userAdmin.password,
            phanQuyen: userAdmin.phanQuyen
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    resetForm(){
        this.setState({
            idAdmin: '',
            username: '',
            password: '',
            passwordAgain: '',
            phanQuyen: ''
        })
    }

    notify(){
        toast.success(<div style={{fontSize:'20px'}}><AiFillCheckCircle/>  Cập nhật thành công</div>, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 4000
        });
    }

    submitUpdateOwnAdminAccount(e){
        e.preventDefault();
        const {username, password, passwordAgain, chooseChange} = this.state;
        let isValidUsername = true;
        let isValidPassword = true;
        let isValidPassAgain = true;
        const errors = {};
        if (username.trim().length < 6) {
            errors.usernameLength = "Tên tài khoản phải đủ 6 kí tự trở lên";
            isValidUsername = false;
        }
        if (chooseChange) {
            if (password.trim().length < 6) {
                errors.passwordLength = "Mật khẩu phải đủ 6 kí tự trở lên";
                isValidPassword = false;
            }
            if (passwordAgain.trim().length == 0) {
                errors.passAgainLength = "Vui lòng nhập lại mật khẩu";
                isValidPassAgain = false;
            }
            else if (passwordAgain != password){
                errors.passAgainLength = "Mật khẩu nhập lại không trùng khớp";
                isValidPassAgain = false;
            }
        }
        this.setState({errors},
            ()=>{
                console.log(this.state.errors.usernameLength)
                console.log(this.state.errors.passwordLength)
                console.log(this.state.errors.passAgainLength)
                if(!isValidUsername || !isValidPassword || !isValidPassAgain){
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
                    if(!isValidPassAgain){
                        if(this.state.errors.passAgainLength != ""){
                            toast.error(<div>{this.state.errors.passAgainLength}</div>,{
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 4000
                            })
                        }
                    } 
                    return;
                }
                var OwnAcc = {
                    idAdmin: this.state.idAdmin,
                    username: this.state.username,
                    password: this.state.password,
                    phanQuyen: this.state.phanQuyen
                }
                console.log(OwnAcc);
                if (window.confirm('Are you sure ?')) {
                    console.log(OwnAcc);
                    axios.put(http + '/api/admin_accounts/'+OwnAcc.idAdmin, OwnAcc).then(res => {
                        if (res.data != null) {
                            this.resetForm();
                            this.notify();
                        }
                    })
                }
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
                            <Link to = "/admin/home">
                                <Button outline color="white" className="btn-add" id="btnAdd">
                                    <ImCancelCircle color="#D0211C" className="icon-top" />
                                </Button>
                            </Link>
                            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                Hủy bỏ thao tác
                            </Tooltip>
                            <h3 className="text-center mt-2">SỬA THÔNG TIN TÀI KHOẢN CÁ NHÂN</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form onSubmit={this.submitUpdateOwnAdminAccount} className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={3}>ID admin</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="idAdmin" disabled value={this.state.idAdmin} readOnly/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Username</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="username" placeholder="Điền tên tài khoản" onChange={this.handleChange} defaultValue={this.state.username} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Thay đổi mật khẩu</Label>
                                            <Col sm={9} style={{marginLeft: '-33%', marginTop: '0%'}}>
                                                <Input type="checkbox" name="changePassword" style={{width: '20px', height: '20px'}} onClick={this.changeStateInputPassword}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Mật khẩu mới</Label>
                                            <Col sm={9}>
                                                {this.disableInputPassword()}
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Nhập lại mật khẩu</Label>
                                            <Col sm={9}>
                                                {this.disableInputPasswordAgain()}
                                            </Col>
                                        </FormGroup>
                                        <div style={{ height: '10vh' }}/>
                                        <Row content="text-center">
                                            <Col style={{marginLeft: '70%'}}>
                                                <Button color="warning" type="submit">Update</Button>
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
