/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let Router          = require('react-router');
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;

let BookController = require('./../components/BookController.jsx');

require("./GenrePage.less");

let GenrePage = React.createClass({

    mixins: [FluxMixin, StoreWatchMixin('bookStore'),
             Router.State, Router.Navigation],

    getStateFromFlux() {
        return {
            books: this.getBooks()
        };
    },

    componentDidMount() {
        this.getFlux().actions.bookViewer.loadBooks();
    },

    getBooks() {
        let genres = this.getParams().genres.split(',');
        return this.getFlux().store('bookStore').getBooksByGenres(genres);
    },

    getBookList() {
        return this.state.books && this.state.books.map((book) => {
            return <BookController data={book} />;
        });
    },

    render() {
        return (
            <div className='GenrePage' >
                {this.getBookList()}
            </div>
        );
    }
});

module.exports = GenrePage;