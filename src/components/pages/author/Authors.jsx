"use strict";

const React = require("react");
const AuthorApi = require("../../../api/authorApi");
const AuthorsTable = require("./AuthorsTable.jsx");

class Authors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {authors: AuthorApi.getAllAuthors()};
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorsTable authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = Authors;