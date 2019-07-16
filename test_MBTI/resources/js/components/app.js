import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './main';
import Result from './result';
import { observer } from 'mobx-react';
import store from '../models/store';
import { decorate } from 'mobx';

const App = class App extends Component {
    constructor(props){
        super(props);
        this.store = props.store;
    }
    render () {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={Main}/>  
                <Route exact path='/result' component={Result}/>
            </Switch>
        </div>
        </BrowserRouter>
    )
    }
};

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
