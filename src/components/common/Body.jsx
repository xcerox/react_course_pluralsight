"use strict";

const React     = require("react");
const Route     = require('react-router-dom').Route;
const Switch    = require('react-router-dom').Switch;

const Home      = require("../pages/home/Home.jsx");
const About     = require("../pages/about/About.jsx");
const Authors   = require("../pages/author/Authors.jsx");
const NotFound  = require("./NotFoundPage.jsx");

class Body extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/authors" component={Authors} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

module.exports = Body;