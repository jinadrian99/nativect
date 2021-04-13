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
import NavbarTop from '../../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../../Navigation/Sidebar/SidebarLeft';
import { ImCancelCircle } from "react-icons/im";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { link } from '../../../../link';
const http = link;

export default class AdminAccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAdmin:'',
            username: '',
            password: '',
            phanQuyen: '',
            tooltipOpen: false
        };
        this.findAdminAccountByID = this.findAdminAccountByID.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.saveChange = this.saveChange.bind(this);
    }

    componentDidMount(){
        const idAdminAcc = +this.props.match.params.id;
        if (idAdminAcc) {
            this.findAdminAccountByID(idAdminAcc);
        }
    }

    undoPages(){
        return this.props.history.push("/admin/admin_accounts");
    }

    findAdminAccountByID(idAdminAcc){
        axios.get(http + '/api/admin_accounts/' + idAdminAcc).then(res => {
            if (res.data != null) {
                this.setState({
                    idAdmin: res.data.idAdmin,
                    username: res.data.username,
                    password: res.data.password,
                    phanQuyen: res.data.phanQuyen
                })
            }
        }).catch((err)=>{
            console.log('Error: ' + err);
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick(v){
        if(v==2){
            this.setState({phanQuyen: 2});
        } else {
            this.setState({phanQuyen: 1});
        }
    }

    saveChange(e){
        var AdminAccount = this.state;
        if (window.confirm('Are you sure ?')) {
            console.log(AdminAccount);
            axios.put('https://nativehotel.herokuapp.com/api/admin_accounts/'+AdminAccount.idAdmin, AdminAccount).then(res => {
                if (res.data != null) {
                    setTimeout(()=>this.undoPages(),1000);
                }
            })
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
                            <h3 className="text-center mt-2">SỬA THÔNG TIN TÀI KHOẢN ADMIN</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={3}>Username</Label>
                                            <Col sm={9}>
                                                <Input 
                                                    type="text" 
                                                    name="username" 
                                                    placeholder="Điền tài khoản 6 kí tự trở lên."
                                                    onChange={this.handleChange} 
                                                    value={this.state.username} 
                                                    autoComplete="off"
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Password</Label>
                                            <Col sm={9}>
                                                <Input 
                                                    type="password" 
                                                    name="password" 
                                                    placeholder="Điền mật khẩu 6 kí tự trở lên." 
                                                    value={this.state.password} 
                                                    onChange={this.handleChange}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row >
                                            <Label sm={3}>Phân quyền</Label>
                                            <Col sm={9}>
                                                <Label style={{ marginLeft: '-15%', marginTop:'1.1%' }} check>
                                                <Input 
                                                    type="radio" 
                                                    onClick={(v)=>this.handleClick(1)} 
                                                    name="phanQuyen"
                                                    value={this.state.phanQuyen}
                                                />
                                                    Nhân viên chăm sóc khách hàng
                                                </Label>
                                                <Label style={{ marginLeft: '10%' }} check>
                                                <Input 
                                                    type="radio" 
                                                    onClick={(v)=>this.handleClick(2)} 
                                                    name="phanQuyen" 
                                                    value={this.state.phanQuyen}
                                                />
                                                    Quản lý
                                                </Label>
                                            </Col>
                                            
                                        </FormGroup>
                                        <div style={{ height: '10vh' }}/>
                                        <Row content="text-center">
                                            <Col style={{marginLeft: '75%'}}>
                                                <Button color="warning" onClick = {()=>this.saveChange()}>Update</Button>
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
