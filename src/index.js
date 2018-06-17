import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './script';

function App(){
    return(
        <Weather/>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));