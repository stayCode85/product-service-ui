import React from 'react';
import './index.css';
import App from './App';
import configureStore from "./redux/configureStore";
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'


const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
