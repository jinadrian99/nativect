import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            idKH: '1',
            tenKH: 'Adrian',

            isGoToHome: false
        }
    }
    
    componentWillMount(){
        var obj = {
            idKH: this.state.idKH,
            tenKH: this.state.tenKH
        }
        localStorage.setItem('infoAcc',JSON.stringify(obj));
        this.setState({
            isGoToHome: !this.state.isGoToHome
        })
    }
    render() {
        if(this.state.isGoToHome){
            return (
                <Redirect to="/"/>
            )
        }
        return (
            <div className="bg-hotel">
                
            </div>
        )
    }
}
