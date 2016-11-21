import React, {Component} from "react";
import {Link} from 'react-router'

class SideBar extends Component {

    render = () => (
        <div className="side-bar pure-g">
            <div className="pure-u-1">
                <ul>
                    <li>
                        <Link to={`/thram_cms/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/thram_cms/pages`}>Pages</Link>
                    </li>
                    <li>
                        <Link to={`/thram_cms/api`}>Api</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;