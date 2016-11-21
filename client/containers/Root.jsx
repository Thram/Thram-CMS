import React from "react";
import {Provider} from "react-redux";
import {Router} from 'react-router'
import routes from '../modules/routes'

export default ({store, history}) => (
    <Provider store={store}>
        <Router routes={routes} history={history}/>
    </Provider>
);