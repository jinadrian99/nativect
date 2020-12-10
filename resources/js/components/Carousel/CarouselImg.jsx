import React, { Component } from 'react';
import {
  UncontrolledCarousel
} from 'reactstrap';
import './CarouselImg.css';
import axios from 'axios';
import { link } from '../../link';
const http = link;

export default class CarouselImg extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeIndex: 0,
      items: []
    };
    this.loadSlides=this.loadSlides.bind(this);
  }
    
  componentWillMount(){
    this.loadSlides();
  }

  loadSlides(){
    axios.get(http + '/api/slides').then(res => {
      var data = res.data;
      var formatdata = [];
      for(var i=0; i < data.length; i++){
        var obj = {
          key: data[i].idSlide,
          src: data[i].hinhAnh,
          caption: '',
          header:''
        }
        formatdata.push(obj);
      }
      this.setState({
        items: formatdata
      });
    });
  }

  render() {
    return (
      <div>
        <UncontrolledCarousel items={this.state.items}/>
      </div>
    )
  }
}
