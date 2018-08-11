"use strict";
const React = require("react");

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Do it Page</h1>
                <p>React, React Router, Flux for ultra-responsive web apps.</p>
            </div>
        );
    }
}

module.exports = Home;