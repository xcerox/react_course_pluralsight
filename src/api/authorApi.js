"use strict";

var authors = require("./data").authors;
var _ = require("lodash");

var _generateId = function(author) {
    return author.firstName.toLowerCase() + '-'+ author.lastName.toLowerCase();
}

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item));
}

var AuthorApi = {
    getAllAuthors: function() {
        return _clone(authors);
    },

    getAuthorById: function(id) {
        var author = _.find(author, {id: id});
        return _clone(author);
    },

    saveAuthor: function(author) {
        if (author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
            authors.splice(existingAuthorIndex, 1, author);
        } else {
            author.id = _generateId(author);
            authors.push(author);
        }

        return _clone(author);
    },

    deleteAuthor: function(id) {
        _.remove(authors, {id: id});
    }
}

module.exports = AuthorApi;