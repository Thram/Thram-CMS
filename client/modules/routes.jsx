import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import Home from '../containers/views/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
    </Route>
);