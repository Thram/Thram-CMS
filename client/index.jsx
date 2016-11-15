import React from "react";
import ReactDOM from "react-dom";
import storage from "store";
import Root from "./containers/Root.jsx";
import {init} from "./store/config";
import "../themes/client/main.scss";

const store = init(storage.get({}));
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));