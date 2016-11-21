import React from "react";
import {render} from 'react-dom'
import storage from "store";
import Root from "./containers/Root.jsx";
import {init} from "./store/config";
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import "../themes/admin/main.scss";

const initState = window && window.__INIT_STATE__,
      store     = init(storage.get(initState)),
      history   = syncHistoryWithStore(browserHistory, store);
render(<Root store={store} history={history}/>, document.getElementById('root'));