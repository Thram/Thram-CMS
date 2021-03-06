import React, {Component} from "react";

class View extends Component {

    render = () => (
        <div className="view pure-g">
            <div className="pure-u-1">
                {this.props.children}
            </div>
        </div>
    );
}

export default View;