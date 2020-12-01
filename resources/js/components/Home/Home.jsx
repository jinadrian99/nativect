import React, { Component, lazy, Suspense } from 'react';
import NavTop from '../Navigation/NavTop';
import Carousel from '../Carousel/CarouselImg';
import SlickSlider from '../SlickSlider/SlickSlider';
import Intro from '../Intro/Intro';
// import Footer from '../Footer/Footer';
const Footer = lazy(() => import('../Footer/Footer'));

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            slItemAddCart: 0
        }
        // this.addItemInShoppingCart = this.addItemInShoppingCart.bind(this);
    }

    componentWillMount(){
        this.setState({
            slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'),10) : 0
        })
    }

    // addItemInShoppingCart(sl){
    //     var tongsl = this.state.slItemAddCart + sl ;
        
    //     this.setState({
    //         slItemAddCart: tongsl
    //     });
    // }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div style={{ overflow: 'hidden', width: '98.9vw' }}>
                <NavTop 
                    slItemAddCart = {this.state.slItemAddCart} 
                />
                {/* <NavTop /> */}
                <div style={{ marginTop: "7vh" }}/>
                <div className="home-page-carousel" style={{ height: '93vh', overflow: 'hidden' }}>
                    <Carousel />
                </div>
                <SlickSlider 
                    // onAddItemInShoppingCart = { this.addItemInShoppingCart } 
                />
                {/* <SlickSlider /> */}
                <Intro />
                <Suspense fallback={ <div>Loading...</div> }>
                    <Footer/>
                </Suspense>
            </div>
        )
    }
}
