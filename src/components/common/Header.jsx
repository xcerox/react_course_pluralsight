"use strict";

const React = require("react");
const Link  = require('react-router-dom').Link;

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="nav navbar-default">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img className="d-inline-block align-top" src="https://raw.githubusercontent.com/assertgo/icon/master/assertgo_512.png" width="30px" height="30px" />
                        </Link>

                        <ul className="nav navbar-nav">
                            <li><Link className="nav-item" to="/">Home</Link></li>
                            <li><Link className="nav-item" to="authors">Authors</Link></li>
                            <li><Link className="nav-item" to="about">About</Link></li>
                  
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

module.exports = Header;
