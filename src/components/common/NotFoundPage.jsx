"use strict";

var React   = require('react');
var Link    = require('react-router-dom').Link;

var NotFoundPage = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Whoops! Sorry, thre is nothing to see here.</p>
            <p><Link to="/" >Back to home</Link></p>
        </div>
    );
}

module.exports = NotFoundPage;