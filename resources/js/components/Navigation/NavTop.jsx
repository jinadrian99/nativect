import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    NavbarText
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { CgShoppingCart } from 'react-icons/cg';
  import { RiPhoneLine } from 'react-icons/ri';
  import './NavTop.css';
import { identity } from 'lodash';

export default class NavTop extends Component {
    constructor(props) {
        super(props);
        this.state={
            roomTypes: [],
            itemAddCart: [],
            slItemAddCart: 0,
            dropdownOpen: false
        };
        this.toggleRooms = this.toggleRooms.bind(this); 
        this.loadRoomTypes=this.loadRoomTypes.bind(this);
    }

    componentWillMount(){
        this.loadRoomTypes();
    }

    loadRoomTypes(){
        axios.get('https://nativehotel.herokuapp.com/api/room_types').then( response => {
            this.setState({
                roomTypes: response.data
            })
        });
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

    // showDropdownshoppingCard(){
        
    // }

    shoppingCart(){
        // xử lý lấy từ LS
        if(localStorage.getItem('itemsShoppingCart')==null){
            alert('Không có');
        } else {
            var items = JSON.parse(localStorage.getItem('itemsShoppingCart'));
            var sl = parseInt(localStorage.getItem('slItemsShoppingCart'),10);
            console.log('in LS: ', items, sl);
    
            this.setState({
                itemAddCart: items,
                slItemAddCart: sl
            }, () => console.log('Xử lý trong Nav', this.state.itemAddCart, this.state.slItemAddCart));
        }
    }

    render() {
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
                        </Nav>
                        <NavbarText className="icon-shopping-cart">
                            <CgShoppingCart style={{fontSize:"23px", fontWeight: "bold"}} className="icon" onClick={ ()=>this.shoppingCart() }/>
                            <b style={{fontSize:"20px"}}>({ this.props.slItemAddCart })</b>
                        </NavbarText>
                        <NavbarText><RiPhoneLine style={{fontSize:"23px", fontWeight: "bold"}} className="icon"/><b style={{fontSize:"20px"}}>025548203</b></NavbarText>  
                    {/* </Collapse> */}
                </Navbar>
            </div>
        )
    }
}
