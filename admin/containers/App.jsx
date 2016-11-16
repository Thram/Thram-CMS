import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import View from "./View";

class App extends Component {

    render = () => (
        <div id="app" className="pure-g">
            <div className="pure-u-1-5">
                <SideBar/>
            </div>
            <div className="pure-u-4-5">
                <TopBar/>
                <View/>
            </div>
        </div>
    );
}

export default connect((state, props) => state.app)(App);