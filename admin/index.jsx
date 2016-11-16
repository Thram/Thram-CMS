import React from "react";
import ReactDOM from "react-dom";
import storage from "store";
import Root from "./containers/Root.jsx";
import {init} from "./store/config";
import "../themes/admin/main.scss";

const preloadedState = window && window.__PRELOADED_STATE__;


const store = init(storage.get(preloadedState));
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));