import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {HashRouter} from 'react-router-dom';

import './index.css';
import './less/main.less';
import logo from './logo.svg'
import App from './App';
import Lib from './components/Lib/Lib'


ReactDOM.render(
    <HashRouter>
        <Route path="/" component={() => <App logo= {logo}/>}>
            <Route component={Lib} path='lib'/>
        </Route>
    </HashRouter>
    , document.getElementById('root'));
