import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';


render(
    // define componenet
    // DOM Element we're mounting on
    <App/>,
    document.getElementById('app')
)