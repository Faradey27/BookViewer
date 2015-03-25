/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let Router          = require('react-router');
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;

let Panel           = require('react-bootstrap').Panel;
let Button           = require('react-bootstrap').Button;
let AuthorController  = require('./../components/AuthorController.jsx');


require("./BookPage.less");

let BookPage = React.createClass({

    mixins: [FluxMixin, StoreWatchMixin('bookStore'),
             Router.State, Router.Navigation],

    getStateFromFlux() {
        let id = this.getParams().id;
        return {
            book: this.getFlux().store('bookStore').getBook(id)
        };
    },

    componentDidMount() {
        this.getFlux().actions.bookViewer.loadBooks();
    },

    getAuthors() {
        return this.state.book && this.state.book.authors.map((book) => {
            return <AuthorController mode="clickShow"
                                     data={book} />;
        });
    },

    goToGenre() {
        let book  = this.state.book;
        let genre = book && book.genre;
        this.transitionTo("genre", {genres: [genre]});
    },

    render() {
        let book  = this.state.book;
        let name  = book && book.name;
        let short = book && book.short;
        let genre = book && book.genre;
        return (
            <div className='BookPage' >
                <Panel header={name}>
                    <p>
                        {short}
                    </p>
                </Panel>
                <Panel header="Authors">
                    <div className="books">
                        {this.getAuthors()}
                    </div>
                </Panel>
                <Panel header="Genre">
                    <div className="books">
                        <Button bsStyle="primary"
                                onClick={this.goToGenre}
                                bsSize="large">
                            {genre}
                        </Button>
                    </div>
                </Panel>
            </div>
        );
    }
});

module.exports = BookPage;