import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import NavTop from '../Navigation/NavTop'
import YourBasketInfo from './YourBasketInfo/YourBasketInfo'

export default class YourBasket extends Component {
    constructor(props) {
        super(props);
        this.state={
            slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'),10) : 0
        }
        this.addItemInShoppingCart= this.addItemInShoppingCart.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    addItemInShoppingCart(sl){
        this.setState({
            slItemAddCart: sl
        });
    }

    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <NavTop slItemAddCart = {this.state.slItemAddCart} />
                <YourBasketInfo onAddItemInShoppingCart = { this.addItemInShoppingCart } />
                <Footer/>
            </div>
        )
    }
}
