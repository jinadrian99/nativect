import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import RouterURL from './RouterURL';

class App extends Component {
    render(){
        return(
            <div>
                <RouterURL />   
            </div>
        );
    }
}

export default App;

if (document.getElementById('root_admin')) {
    ReactDOM.render(<App />, document.getElementById('root_admin'));
}

