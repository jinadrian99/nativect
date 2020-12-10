import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemSlick from './ItemSlick/ItemSlick';
import { link } from '../../link';
const http = link;

export default class SlickSlider extends Component {
  constructor(props) {
      super(props);
      this.state={
        roomTypes:[],
      }
      this.loadRoomTypes=this.loadRoomTypes.bind(this);
      this.showItems = this.showItems.bind(this);
      // this.addItemInShoppingCart = this.addItemInShoppingCart.bind(this);
  }
  
  componentWillMount(){
    this.loadRoomTypes();
  }

  loadRoomTypes(){
    axios.get(http + '/api/room_types').then( response => {
        this.setState({
            roomTypes: response.data
        })
    });
  }

  // addItemInShoppingCart(sl){
  //   // console.log(obj, ' in SlickSlider');
  //   this.props.onAddItemInShoppingCart(sl);
  // }

  showItems(){
    console.log(this.state.roomTypes);
    const lst = this.state.roomTypes.map((item, index)=>
      <ItemSlick 
        key={index} 
        idLP = {item.idLP}
        tenLP  = {item.tenLP}
        hinhAnh  = {item.hinhAnh}
        moTa = {JSON.parse(item.moTa)}
        slPhongTrong = {item.slPhongTrong}
        // onAddItemInShoppingCart = { this.addItemInShoppingCart }
      />
    );
    return lst;
  }

  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
      };
      
      var aos_left = {
        'data-aos': "fade-left",
        'data-aos-offset': "450",
        'data-aos-duration': "700"
      };
      return (
        <div
          className="container goToSlickSlider" style={{ marginTop: '8vh', marginBottom: '6vh' }}
        >
          <h1><b>Find your Native room.</b></h1>
          <p style={{fontSize:'1.2vw', marginBottom: '3vh' }}>We all have favourites, and that's ok. From a West End studio to a slick City penthouse, find your perfect pad.</p>
          <div { ...aos_left }>
            <Slider {...settings}>
              { this.showItems() }
            </Slider>
          </div>
        </div>
      )
    }
}
