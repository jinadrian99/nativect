import React, { Component, lazy, Suspense } from 'react'
import NavTop from '../Navigation/NavTop';
import Carousel from '../Carousel/CarouselImg';
// import Footer from '../Footer/Footer';
const Footer = lazy(() => import('../Footer/Footer'));
import RoomInfo from '../RoomInfo/RoomInfo';
import SlickSlider from '../SlickSlider/SlickSlider';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state={
            idLP: this.props.match.params.id,
            slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'),10) : 0
        }
        this.addItemInShoppingCart= this.addItemInShoppingCart.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        console.log('room click hook: ', props, state);
        return { idLP: props.match.params.id };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    addItemInShoppingCart(sl){
        this.setState({
            slItemAddCart: sl
        });
    }

    render() {
        console.warn('room click: ',this.state.idLP);
        return (
            <>
                <NavTop 
                    slItemAddCart = {this.state.slItemAddCart}
                />
                <div style={{ marginTop: "7vh" }}/>
                <div className="another-page-carousel" style={{ height: '60vh', overflow: 'hidden'}}>
                    <Carousel/>
                </div>
                <RoomInfo 
                    idLP={this.state.idLP}
                    onAddItemInShoppingCart = { this.addItemInShoppingCart }
                />
                <SlickSlider />
                <Suspense fallback={ <div>Loading...</div> }>
                    <Footer/>
                </Suspense>
            </>
        )
    }
}
