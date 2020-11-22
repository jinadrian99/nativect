import React, { Component } from 'react'

export default class RateRecord extends Component {
    constructor(props) {
        super(props);
        this.state={
            moTa: '',
            giaLP: ''
        }
    }
    
    componentWillMount(){
        axios.get('http://127.0.0.1:8000/api/room_type_rate/'+this.props.idLP).then( response => {
            // console.log(response.data);
            this.setState({
                giaLP: !response.data?'Chưa có giá':response.data.giaLP+' VND',
                moTa: JSON.parse(this.props.moTa)[0]
            })
        });
    }

    render() {
        return (
            <tr>
                <td>{ this.props.tenLP }</td>
                <td>{ this.state.moTa }</td>
                <td>{ this.state.giaLP }</td>
            </tr>
        )
    }
}
