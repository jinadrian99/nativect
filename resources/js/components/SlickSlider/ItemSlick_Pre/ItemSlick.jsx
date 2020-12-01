import React, { Component } from 'react';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
  } from 'reactstrap';
import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUserGroup } from 'react-icons/hi';
import './ItemSlick.css';

export default class ItemSlick extends Component {
    constructor(props) {
        super(props);
        this.state={
            // giaLP:'',
            hinhAnh: '',
        }
        // this.loadPriceRoomTypes=this.loadPriceRoomTypes.bind(this);
    }
    
    componentWillMount(){
        // this.loadPriceRoomTypes(this.props.idLP);
        var imgs = JSON.parse(this.props.hinhAnh);
        this.setState({
            hinhAnh: imgs[0],
        })
    }

    loadPriceRoomTypes(id){
        axios.get('http://127.0.0.1:8000/api/room_type_rate/'+id).then( response => {
            this.setState({
                giaLP: response.data
            },()=>{
                console.log(this.state.giaLP);
            })
        });
    }

    addItemInShoppingCart(){
        var obj = {
            name: 'Hate',
            sl: 1
        };
        this.props.onAddItemInShoppingCart(obj.sl);

        // Nếu KH vào lại trang -> giỏ vẫn còn
        if(localStorage.getItem('itemsShoppingCart')==null){
            var arrItems = [];
            arrItems.push(obj);
            localStorage.setItem('itemsShoppingCart', JSON.stringify(arrItems));
            localStorage.setItem('slItemsShoppingCart', JSON.stringify(obj.sl));
        } else {
            var arrItems = JSON.parse(localStorage.getItem('itemsShoppingCart'));
            arrItems.push(obj);
            var sl = parseInt(localStorage.getItem('slItemsShoppingCart'),10) + obj.sl;
            localStorage.setItem('itemsShoppingCart', JSON.stringify(arrItems));
            localStorage.setItem('slItemsShoppingCart', JSON.stringify(sl));
        }

        var items = JSON.parse(localStorage.getItem('itemsShoppingCart'));
        var sl = parseInt(localStorage.getItem('slItemsShoppingCart'),10);
        console.log('in LS: ', items, sl);
    }

    render() {
        return (
            <div style={{borderRadius:'5vh'}} >
                <Card className="card-item-room">
                    <div style={{ height: '35vh', overflow: 'hidden'}}>
                        <CardImg style={{borderTopLeftRadius:'1vh', borderTopRightRadius:'1vh',height: 'auto', width: "35vw"}}  top src={ this.state.hinhAnh }/>
                    </div>
                    <CardBody>
                        <CardTitle style={{textAlign:"center", fontWeight:"bold", fontSize:"3vh"}}>{ this.props.tenLP }</CardTitle>
                        <CardText>{ this.props.moTa[0].length>40? this.props.moTa[0].slice(0,30)+' ...' : this.props.moTa[0] }</CardText>
                        <CardSubtitle><HiOutlineUserGroup className="icon" style={{fontSize:"4vh", color:"#333537"}}/>
                            <span style={{fontSize:"2vh"}}> { this.props.moTa[2]=='1'? '1': '1-'+this.props.moTa[2] }</span> 
                        </CardSubtitle>
                        <hr />
                        <div>
                            <Button style={{marginLeft:"38%"}} 
                                onClick={ ()=>this.addItemInShoppingCart() }
                            >VIEW</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>      
        )
    }
}
