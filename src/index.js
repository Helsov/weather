import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './script';

function HelloWorld(){
    return(
        <Weather/>
    )
}

ReactDOM.render(<HelloWorld/>,document.querySelector('#root'));