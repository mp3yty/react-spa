import React, { Component } from 'react';
import {BrowserRouter,Route,Link,} from 'react-router-dom';
import Dashboard from './views/dashboard';
import Code from './views/code';
import Tickets from './views/tickets';

class SinglePageApp extends Component {
    render() {
        return (
        <BrowserRouter>
        <div className="SinglePageApp">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/code">Code</Link></li> 
                <li><Link to="/tickets">Tickets</Link></li>
            </ul>
            <Route exact path="/" component={Dashboard} />
            <Route path="/code" component={Code} /> 
            <Route path="/tickets" component={Tickets} />
        </div>
        </BrowserRouter>
        );
    }
}
export default SinglePageApp;