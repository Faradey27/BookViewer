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

    handleUpdateBookList(data) {
        this.emit('change');
    },
});

module.exports = ActivityStore;