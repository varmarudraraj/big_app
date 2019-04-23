import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Signin from './components/Signin';
import Home from './components/Home';
import Drag from './components/Drag_and_drop';

import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <HashRouter>
                
                <Switch>
                <Route exact path="/" component={Signin} />
                <Route path="/Home" component={Home}/>
                <Route path="/Drag" component={Drag}/>
                </Switch>

            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
