import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    NavbarText,
    Button,
    Row,
    Col,
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import {  RiPhoneLine } from 'react-icons/ri';
import './NavTop.css';
import { format } from 'date-fns';
import { RiTeamLine } from 'react-icons/ri';
import { ImCancelCircle } from 'react-icons/im';
import { AiOutlineUser } from 'react-icons/ai';
import { link } from '../../link';
import { fromPairs } from 'lodash';

const http = link;

export default class NavTop extends Component {
    constructor(props) {
        super(props);
        this.state={
            roomTypes: [],
            itemAddCart: [],
            slItemAddCart: 0,
            dropdownOpen: false,

            toggleCart: false,
            toggleAccount: false,

            isGoToCartPage: false,
            // isGoToLoginRegister: false
        };
        this.toggleRooms = this.toggleRooms.bind(this); 
        this.loadRoomTypes = this.loadRoomTypes.bind(this);
        this.showToggleCart = this.showToggleCart.bind(this);
        // this.showToggleAcc = this.showToggleAcc.bind(this);
    }

    componentWillMount(){
        this.loadRoomTypes();
    }

    loadRoomTypes(){
        axios.get(http + '/api/room_types').then( response => {
            this.setState({
                roomTypes: response.data,
                slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'),10) : 0
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        // console.log('next props:', nextProps.slItemAddCart);
        this.setState({
            slItemAddCart: nextProps.slItemAddCart
        })
    }

    showRoomTypes(){
        console.log(this.state.roomTypes);
        const lst = this.state.roomTypes.map((item, index)=>
            <DropdownItem key={index}>
                <Link to={ '/room/' + item.idLP } style={{textDecorationLine:'none', color: 'black'}}>
                    <NavbarText className="nav-link"><span>{item.tenLP}</span></NavbarText>
                </Link>
            </DropdownItem>
        );
        return lst;
    }

    toggleRooms(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    shoppingCart(){
        // xử lý lấy từ LS
        if(localStorage.getItem('itemsShoppingCart')==null){
            return;
        } else {
            this.setState({ toggleCart: !this.state.toggleCart });
            var items = JSON.parse(localStorage.getItem('itemsShoppingCart'));
            var sl = parseInt(localStorage.getItem('slItemsShoppingCart'),10);
            console.log('in LS: ', items, sl);
    
            this.setState({
                itemAddCart: items,
                slItemAddCart: sl
            }, () => console.log('Xử lý trong Nav', this.state.itemAddCart, this.state.slItemAddCart));
        }
    } 

    showToggleCart(){
        if(localStorage.getItem('itemsShoppingCart')){
            var diff = JSON.parse(localStorage.getItem('dateArriveCart')).days_diff;
            var startDate = format(new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate), 'dd/MM/yyyy');
            var room = JSON.parse(localStorage.getItem('itemsShoppingCart'));
            const showRooms = room.map((item,index) => 
                <Row key={ index } style={{ lineHeight: '43px' }}>
                    <Col>{ item.tenLP }</Col>
                    <Col>{ item.giaLP }</Col>
                </Row>
            );
            return (
                <DropdownMenu>
                    <DropdownItem className="text-center" disabled>{ diff } nights from { startDate }</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem text="true">
                        { showRooms }
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem text="true">
                        <Row className="button-GoBasket">
                            <Button color="dark" style={{marginLeft: '7vw'}} 
                                onClick={ ()=>{ this.setState({ isGoToCartPage: !this.state.isGoToCartPage }); } }
                            ><b>Go BASKET</b></Button>
                        </Row>
                    </DropdownItem>
                </DropdownMenu>
            );
        }
    }

    // showToggleAcc(){
    //     <DropdownMenu>
    //         <DropdownItem text="true">
    //             { showRooms }
    //         </DropdownItem>
    //         <DropdownItem divider />
    //         <DropdownItem text="true">
    //             <Row className="button-GoBasket">
    //                 <Button color="dark" style={{marginLeft: '7vw'}} 
    //                     onClick={ ()=>{ this.setState({ isGoToCartPage: !this.state.isGoToCartPage }); } }
    //                 ><b>Go BASKET</b></Button>
    //             </Row>
    //         </DropdownItem>
    //     </DropdownMenu>
    // }

    render() {
        if(this.state.isGoToCartPage){
            return (
                <Redirect to="/your_basket" />
            );
        }
        if(this.state.isGoToLoginRegister){
            return (
                <Redirect to="/login_register" />
            )
        }
        return (
            <div className="nav-on-top">
                {/* className="justify-content-center" */}
                <Navbar style={{height: '7vh'}} className="justify-content-center nav-cus-font" color="light" light expand="md">
                    <Link className="navbar-brand navbar-brand-cus" to="/">
                        <b style={{fontSize:'4.0vh'}}>NATIVE</b>
                    </Link>
                    {/* <NavbarToggler onClick={this.toggle} /> */}
                    {/* <Collapse isOpen={isOpen} navbar> */}
                        <Nav className="mr-auto" navbar>
                            <NavbarText>
                                <Link to="/about"><NavbarText className="nav-link nav-item-cus"><b><span>About</span></b></NavbarText></Link>
                            </NavbarText>
                            <NavbarText>
                                <Link to="/room_rates"><NavbarText className="nav-link nav-item-cus"><b><span>Room Rates</span></b></NavbarText></Link>
                            </NavbarText>
                            <UncontrolledDropdown className="navbar-text nav-dropdown-rooms nav-item-cus" nav inNavbar>
                                <DropdownToggle className="nav-item-cus" nav caret>
                                    <b><span>Rooms</span></b>
                                </DropdownToggle>  
                                <DropdownMenu>
                                    {this.showRoomTypes()}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavbarText>
                                <Link to="/exchange_rates"><NavbarText className="nav-link nav-item-cus"><b><span>Exchange Rates</span></b></NavbarText></Link>
                            </NavbarText>
                        </Nav>
                        <NavbarText>
                            <Link to="/team">
                            <RiTeamLine style={{fontSize:"23px", fontWeight: "bold", color: "black"}} className="icon"/>
                            <b style={{ color: 'black', fontSize: '18px' }}> Team</b></Link>
                        </NavbarText>  
                        <NavbarText className="icon-shopping-cart">
                            <Dropdown isOpen={this.state.toggleCart} toggle={ ()=>this.shoppingCart() }>
                                <DropdownToggle>
                                    <CgShoppingCart style={{fontSize:"23px", fontWeight: "bold"}} className="icon"/>
                                    <b style={{fontSize:"20px"}}>({ this.state.slItemAddCart })</b>
                                </DropdownToggle>
                                { this.showToggleCart() }
                            </Dropdown>
                        </NavbarText>
                        <NavbarText>
                            <RiPhoneLine style={{fontSize:"23px", fontWeight: "bold", color: "black"}} className="icon"/>
                            <b style={{ color: 'black', fontSize: '18px' }}> 025548203</b>
                        </NavbarText>  
                        {/* <NavbarText className="icon-shopping-cart">
                            <Dropdown 
                                isOpen={this.state.toggleAccount} 
                                toggle={ 
                                    ()=>{
                                        if(localStorage.getItem('infoAcc')&&JSON.parse(localStorage.getItem('infoAcc'))!=null)
                                            this.setState({toggleAccount: !this.state.toggleAccount})
                                    }
                                }
                            >
                                <DropdownToggle>
                                    <AiOutlineUser 
                                        style={{fontSize:"23px", fontWeight: "bold"}} 
                                        className="icon" 
                                        onClick={ 
                                            () => {
                                                if(!localStorage.getItem('infoAcc')||JSON.parse(localStorage.getItem('infoAcc'))==null)
                                                    this.setState({ isGoToLoginRegister: !this.state.isGoToLoginRegister })
                                            }
                                        }    
                                    />
                                </DropdownToggle>
                                { this.showToggleAcc() }
                            </Dropdown>
                        </NavbarText> */}
                    {/* </Collapse> */}
                </Navbar>
            </div>
        )
    }
}
