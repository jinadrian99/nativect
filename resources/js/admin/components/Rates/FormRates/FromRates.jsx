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

export default class FromRates extends Component {
    constructor(props) {
        super(props);
        this.state={
            idBG: '',
            giaLP: '',
            timeApDung: '',
            idLP: '',

            roomType:[],
        };
        this.findRatesByID = this.findRatesByID.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveChange = this.saveChange.bind(this);

        this.loadRoomTypes = this.loadRoomTypes.bind(this);
        this.showRoomType = this.showRoomType.bind(this);
    }

    componentWillMount(){
        // lấy địa chỉ trên path, có do sd Router, 
        // +: để hóa thành số nếu ko thì path: chữ -> lấy match params -> chữ
        const id = +this.props.match.params.id;
        if(id){
            this.loadRoomTypes();
            this.findRatesByID(id);
        }
    }

    findRatesByID(id){
        axios.get(http + '/api/rates/'+id).then( response => {
            if(response!=null){
                this.setState({
                    idBG: response.data.idBG,
                    giaLP: response.data.giaLP,
                    timeApDung: response.data.timeApDung,
                    idLP: response.data.idLP,
                })
            }
        }).catch((err)=>{
            console.log('Error: ' + err);
        });
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
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    undoPages(){
        //  có do sd Router
        return this.props.history.push("/admin/rates");
    }

    saveChange(){
        var rates = this.state;
        delete rates.roomType;
        rates.idLP = parseInt(rates.idLP);
        if(window.confirm('Are you sure?')){
            console.log(rates);
            axios.put(http + '/api/rates/'+rates.idBG,rates).then(response => {
                if(response.data!=null){
                    // đợi tí để data fetch cái r vào thì mới nhận data mới 
                    setTimeout(()=>this.undoPages(),1000);
                }
            });
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
                            <h3 className="text-center mt-2">ĐIỀN THÔNG TIN BẢNG GIÁ</h3>
                            <hr />
                            <div style={{height: '15px'}} />
                            <Row>
                                <Col>
                                    <Form  className="text-center" style={{marginRight: '15%', marginLeft: '15%', width: '70%'}}>
                                        <FormGroup row>
                                            <Label sm={2}>ID bảng giá</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="idBG" disabled value={this.state.idBG} readOnly/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={2}>ID loại phòng</Label>
                                            <Col sm={10}>
                                                <Input type="select" name="idLP" onChange={this.handleChange}>
                                                    { this.showRoomType() }
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={2}>Giá tiền</Label>
                                            <Col sm={10}>
                                            <Input type="number" name="giaLP" onChange={this.handleChange} required defaultValue={this.state.giaLP} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={2}>Thời gian áp dụng</Label>
                                            <Col sm={10}>
                                            <Input type="date" name="timeApDung" onChange={this.handleChange} required defaultValue={this.state.timeApDung} autoComplete="off"/>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                            <div style={{ height: '10vh' }}/>
                            <Row content="text-center">
                                <Col style={{marginLeft: '70%'}}>
                                    <Button color="warning" onClick={()=>this.saveChange()}>Update</Button>
                                    <div className="space-15"/>
                                    <Button color="danger" onClick={()=>this.undoPages()}>Cancel</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
