import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { BiErrorAlt } from 'react-icons/bi';
import axios from 'axios';
import './Login.css';
import { link } from '../../../link';
const http = link;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    resetHandle(){
        this.setState({
            username: '',
            password: ''
        })
    }

    onLogin(){
        var admin={
            username: this.state.username,
            password: this.state.password,
            phanQuyen: 0
        }
        axios.post(http + '/api/admin_login', admin).then((res)=>{
            console.log(res);
            if(res.status==200){
                var objAdmin = {
                    idAdmin: res.data[0].idAdmin, 
                    username: res.data[0].username,
                    password: res.data[0].password,
                    phanQuyen: res.data[0].phanQuyen
                };
                // console.log(objAdmin);
                sessionStorage.setItem('objAdmin',JSON.stringify(objAdmin));
                if(res.data[0].phanQuyen==1){
                    // console.log(sessionStorage.getItem('idAdmin'));
                    return this.props.history.push("/admin/home"); //Dành cho IT
                }
                else if(res.data[0].phanQuyen==2){
                    // console.log(sessionStorage.getItem('idAdmin'));
                    return this.props.history.push("/admin/home"); //Dành cho NV             
                } else {
                    return this.props.history.push("/admin/home"); //Dành cho QLCC
                }
            }
        }).catch((error)=>{
            toast.error(
                <>
                    <BiErrorAlt style={{fontSize: '5vh'}} /> 
                    <span style={{ fontSize: '2.3vh' }}>  Sai thông tin đăng nhập</span>
                </>,
                {
                    position: "top-center",
                    autoClose: 2500,
                }
            );
        });
    }

    handleEnter(e){
        if(e.key === 'Enter'){
            this.onLogin();
        }
    }

    render() {
        return (
            <div className="bg-hotel">
                <ToastContainer />
                <div id="login-form">
                    <Form style={{padding: "3vh"}}>
                        <h3 className="text-center"><b>ADMIN LOGIN</b></h3>
                        <hr />
                        <FormGroup row>
                            <Label sm={3}>Username</Label>
                            <Col sm={9}>
                                <Input type="text" name="username" placeholder="Điền tên tài khoản" value={ this.state.username } onChange={this.handleChange} autoComplete="off"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3}>Password</Label>
                            <Col sm={9}>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Điền mật khẩu" 
                                    value={ this.state.password }  
                                    onChange={ this.handleChange } 
                                    onKeyDown={ this.handleEnter }
                                    autoComplete="off"
                                />
                            </Col>
                        </FormGroup>
                        <hr style={ {marginBottom: '0.1vh' }}/>
                        <div style={{ display: 'inline-block', height: '3px', width: '39%' }} />
                        <Button className="text-center" color="success" onClick={ ()=>this.onLogin() } style={{  marginTop: '2.5vh' }}>Đăng nhập</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
