import React, {Component} from "react";
import {connect} from "react-redux";
import DevTools from "./DevTools";

class App extends Component {

    render = () => (
        <div id="app" className="pure-g">
            <div className="pure-u-1">
                CLIENT!
            </div>
            {process.env.NODE_ENV === 'development' && <DevTools />}
        </div>
    );
}

export default connect((state, props) => state.app)(App);