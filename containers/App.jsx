import React, {Component} from "react";
import {connect} from "react-redux";

class App extends Component {

  render = () =>(
    <div>
      TEST!
    </div>
  );
}

export default connect((state, props) => state.app)(App);