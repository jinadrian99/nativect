import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import RouterURL from './RouterURL';

function App() {
    return (
        <>
            <RouterURL />
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

