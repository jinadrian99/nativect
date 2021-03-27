import React, { Component } from 'react'
import { link } from '../../../link';
const http = link;

export default class ExchangeRatesRecord extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    
    componentWillMount(){

    }

    render() {
        return (
            <tr>
                <td>{this.props.symbol}</td>
                <td>{this.props.currency}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}
