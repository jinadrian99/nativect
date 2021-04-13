import React, { Component } from 'react';
import { Table, Row, Col, Button, Tooltip } from 'reactstrap';
import RatesRecord from './RecordRates/RatesRecord';
import axios from 'axios';
import NavbarTop from '../Navigation/NavbarTop/NavbarTop';
import SidebarLeft from '../Navigation/Sidebar/SidebarLeft';
import { Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';
import { link } from '../../../link';
const http = link;

class Rates extends Component {
    constructor(props) {
        super(props);
        this.state={
            rates: []
        };
        this.showRates = this.showRates.bind(this);
        this.loadRates = this.loadRates.bind(this);
    }

    toggle(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        })
    }

    loadRates(){
        axios.get(http + '/api/rates').then( response => {
            this.setState({
                rates: response.data
            })
        });    
    }

    componentWillMount(){
        this.loadRates();
    }

    deleteRates(id){
        if(window.confirm('Are you sure?')){
            axios.delete(http + '/api/rates/'+id).then((response)=>{
                if(response.data!=null){
                    this.loadRates();
                }
            })
            .catch(error => console.log(error));
        }
    }

    showRates(){
        const lst = this.state.rates.map((item,index)=>
            <RatesRecord  key={index} 
                idBG = {item.idBG}
                idLP = {item.idLP}
                giaLP = {item.giaLP}
                timeApDung = {item.timeApDung}
                onSelectDelete = { this.deleteRates }
            />
        );
        return lst;
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
                                <Col md="1">
                                    <Link to="/admin/add_rates">
                                        <Button outline color="secondary" className="btn-add" id="btnAdd">
                                            <GrAdd className="icon-top" />
                                        </Button>
                                    </Link>
                                    <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btnAdd" toggle={()=>this.toggle()}>
                                        Thêm bảng giá
                                    </Tooltip>
                                </Col>
                                <Col md="11">
                                    <h3 className="text-center mt-2">DANH SÁCH BẢNG GIÁ</h3>
                                </Col>
                            </Row>
                            <div style={{ height: '80vh', overflow: 'scroll' }}>
                                <Table striped>
                                    <thead className="text-center">
                                        <tr>
                                            <th>id</th>
                                            <th>id loại phòng</th>
                                            <th>Giá loại phòng</th>
                                            <th>Thời gian áp dụng</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        { this.showRates() }
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

export default Rates;