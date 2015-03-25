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

    getBook(id) {
        return this._books && this._books.books && this._books.books.find((book) => {
            return book.id == id;
        });
    },

    _getBooksByGenre(genre) {
        if (this._books && this._books.books) {
            let books = this._books.books;
            return books.filter((data) => {
                return data.genre == genre;
            });
        }

        return [];
    },

    getBooksByGenres(genres) {
        let books = genres && genres.length && genres.map((genre) => {
            return this._getBooksByGenre(genre);
        });
        let result = [];
        books.forEach((data) => {
            data.forEach((data) => {
                result.push(data);
            });
        });
        return result;
    },

    handleUpdateBookList(data) {
        this._books = data;
        this.emit('change');
    },
});

module.exports = ActivityStore;