'use strict';

let eventConstants = require('../eventConstants');
let api = require('../api/');

module.exports = {

    loadBooks() {
        return api.bookViewer.loadBooks().then((books) => {
            this.dispatch(eventConstants.SERVER.BOOKS_LIST, books);
        });
    }
};