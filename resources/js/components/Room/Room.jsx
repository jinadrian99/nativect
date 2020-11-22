import React, { Component } from 'react'
import NavTop from '../Navigation/NavTop';
import Carousel from '../Carousel/CarouselImg';
import Footer from '../Footer/Footer';
import RoomInfo from '../RoomInfo/RoomInfo';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state={
            idLP: this.props.match.params.id,
        }
    }

    // componentWillMount() {
    //     // // Viết nhanh: ko tốn RAM/CPU cho match
    //     var { match: {params} } = this.props;

    //     // // Tạm nhanh: tốn RAM/CPU cho match
    //     // var { match } = this.props;
    //     // var { params } = match;

    //     console.log('match: ', params.id);
    //     this.setState({ idLP: params.id }, console.log(this.state.idLP));
    // }

    static getDerivedStateFromProps(props, state){
        console.log('room click hook: ', props, state);
        return { idLP: props.match.params.id };
    }
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        console.warn('room click: ',this.state.idLP);
        return (
            <>
                <NavTop />
                <div style={{ marginTop: "7vh" }}/>
                <div className="another-page-carousel" style={{ height: '60vh', overflow: 'hidden'}}>
                    <Carousel/>
                </div>
                <RoomInfo idLP={this.state.idLP}/>
                <Footer/>
            </>
        )
    }
}
