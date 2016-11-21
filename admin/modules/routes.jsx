import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import Pages from '../containers/views/Pages';
import Api from '../containers/views/Api';
import Home from '../containers/views/Home';


export default (
    <Route path="/thram_cms/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="pages" component={Pages}/>
        <Route path="api" component={Api}/>
    </Route>
);