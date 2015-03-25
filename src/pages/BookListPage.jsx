/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;

let BookController = require('./../components/BookController.jsx');

require("./BookListPage.less");

let BookListPage = React.createClass({

    mixins: [FluxMixin, StoreWatchMixin('bookStore')],

    getStateFromFlux() {
        let flux = this.getFlux();
        return {
            books: flux.store('bookStore').getBooks()
        };
    },

    componentDidMount() {
        this.getFlux().actions.bookViewer.loadBooks();
    },

    getBookList() {
        return this.state.books && this.state.books.map((book) => {
            return <BookController data={book} />;
        });
    },

    render() {
        return (
            <div className='BookListPage' >
                {this.getBookList()}
            </div>
        );
    }
});

module.exports = BookListPage;