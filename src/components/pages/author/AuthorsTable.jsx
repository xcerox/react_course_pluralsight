"use strict";

const React = require("react");
const PropTypes = require("prop-types");

class AuthorsTable extends React.Component {

    constructor(props) {
        super(props);
    }

    createAuthorsRow(author) {
        return (
            <tr key={author.id}>
                <td><a href={`/#authors/${author.id}`}>{author.id}</a></td>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(this.createAuthorsRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorsTable.propTypes = {
    author: PropTypes.array.isRequired
}

module.exports = AuthorsTable;