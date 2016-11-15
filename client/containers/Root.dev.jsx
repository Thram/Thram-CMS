import React from "react";
import {Provider} from "react-redux";
import App from "./App.jsx";
import DevTools from "./DevTools.jsx";

export default ({store}) => (
  <Provider store={store}>
    <div id="root">
      <App />
      <DevTools />
    </div>
  </Provider>
);