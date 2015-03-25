/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let Router          = require('react-router');
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;

let Panel           = require('react-bootstrap').Panel;
let BookController  = require('./../components/BookController.jsx');


require("./DetailsAuthorPage.less");

let DetailsAuthorPage = React.createClass({

    mixins: [FluxMixin, StoreWatchMixin('bookStore'), Router.State],

    getStateFromFlux() {
        let id = this.getParams().id;
        return {
            author: this.getFlux().store('bookStore').getAuthor(id)
        };
    },

    componentDidMount() {
        this.getFlux().actions.bookViewer.loadBooks();
    },

    getBooks() {
        return this.state.author && this.state.author.books.map((book) => {
            return <BookController data={book} />;
        });
    },

    render() {
        let author = this.state.author;
        let name = author && author.name;
        let biography = author && author.biography;

        return (
            <div className='DetailsAuthorPage' >
                <Panel header={name}>
                    <p>
                        {biography}
                    </p>
                </Panel>
                <Panel header="Books">
                    <div className="books">
                        {this.getBooks()}
                    </div>
                </Panel>
            </div>
        );
    }
});

module.exports = DetailsAuthorPage;