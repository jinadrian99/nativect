import React, { Component } from 'react';
import { 
    Table,
    Row,
    Col,
    Input,
    Form,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import NavbarTop from '../../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../../Navigation/Sidebar/SidebarLeft';
import axios from 'axios';
import { link } from '../../../../link';
const http = link;

export default class FromCustomer extends Component {
    constructor(props) {
        super(props);
        this.state={
            idKH: '',
            tenKH: '',
            soThe: '',
            ngayHetHan: ''
        };
        this.findCustomerByID = this.findCustomerByID.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveChange = this.saveChange.bind(this);
    }

    componentDidMount(){
        // lấy địa chỉ trên path, có do sd Router, 
        // +: để hóa thành số nếu ko thì path: chữ -> lấy match params -> chữ
        const idCustomer = +this.props.match.params.id;
        if(idCustomer){
            this.findCustomerByID(idCustomer);
        }
    }

    findCustomerByID(idCustomer){
        axios.get(http + '/api/customer/'+idCustomer).then( response => {
            if(response!=null){
                this.setState({
                    idKH: response.data.idKH,
                    tenKH: response.data.tenKH,
                    soThe: response.data.soThe,
                    ngayHetHan: response.data.ngayHetHan
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

    undoPages(){
        //  có do sd Router
        return this.props.history.push("/admin/customers");
    }

    saveChange(){
        var customer = this.state;
        if(window.confirm('Are you sure?')){
            console.log(customer);
            axios.put(http + '/api/customer/'+customer.idKH,customer).then(response => {
                if(response.data!=null){
                    // đợi tí để data fetch cái r vào thì mới nhận data mới 
                    setTimeout(()=>this.undoPages(),1000);
                }
            })
        }
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
                            <h3 className="text-center mt-2">ĐIỀN THÔNG TIN KHÁCH HÀNG</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form  className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={3}>ID Khách hàng</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="idKH" disabled value={this.state.idKH} readOnly/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Họ tên</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="tenKH" onChange={this.handleChange} defaultValue={this.state.tenKH} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Số thẻ tín dụng</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="soThe" onChange={this.handleChange} defaultValue={this.state.soThe} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3}>Ngày hết hạn thẻ</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="ngayHetHan" onChange={this.handleChange} defaultValue={this.state.ngayHetHan} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                            <div style={{ height: '10vh' }}/>
                            <Row content="text-center">
                                <Col style={{marginLeft: '75%'}}>
                                    <Button color="danger" onClick={()=>this.undoPages()}>Cancel</Button>
                                    <div className="space-15"/>
                                    <Button color="warning" onClick={()=>this.saveChange()}>Update</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
