import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import View from "./View";
import DevTools from "./DevTools";

class App extends Component {

    render = () => (
        <div id="app">
            <div id="container" className="pure-g">
                <div className="pure-u-1-5">
                    <SideBar/>
                </div>
                <div className="pure-u-4-5">
                    <TopBar/>
                    <View children={this.props.children}/>
                </div>
            </div>
            {process.env.NODE_ENV === 'development' && <DevTools/>}
        </div>
    );
}

export default connect((state, props) => state.app)(App);