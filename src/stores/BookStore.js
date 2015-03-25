'use strict';

let Fluxxor = require('fluxxor');
let eventConstants = require('../eventConstants');

let ActivityStore = Fluxxor.createStore({

    initialize() {

        this._books = [];

        this.bindActions(
            eventConstants.SERVER.BOOKS_LIST, this.handleUpdateBookList
        );
    },

    getBooks() {
        console.log(this._books)
        return this._books && this._books.books;
    },

    getAuthors() {
        return this._books && this._books.authors;
    },

    getAuthor(id) {
        return this._books && this._books.authors && this._books.authors.find((author) => {
            return author.id == id;
        });
    },

    handleUpdateBookList(data) {
        this._books = data;
        this.emit('change');
    },
});

module.exports = ActivityStore;