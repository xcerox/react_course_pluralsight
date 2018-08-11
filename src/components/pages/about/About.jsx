"use strict";
const React = require("react");

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses the fallowing technologies:</p>
                <ul>
                    <li>React</li>
                    <li>ReactDom</li>
                    <li>prop-types</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
}

module.exports = About;