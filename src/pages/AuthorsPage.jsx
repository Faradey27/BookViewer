/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;

let AuthorController = require('./../components/AuthorController.jsx');

require("./AuthorsPage.less");

let AuthorsPage = React.createClass({

    mixins: [FluxMixin, StoreWatchMixin('bookStore')],

    getStateFromFlux() {
        let flux = this.getFlux();
        return {
            authors: flux.store('bookStore').getAuthors()
        };
    },

    componentDidMount() {
        this.getFlux().actions.bookViewer.loadBooks();
    },

    getAuthorsList() {
        return this.state.authors && this.state.authors.map((auhtor) => {
            return <AuthorController data={auhtor} />;
        });
    },

    render() {
        return (
            <div className='AuthorsPage' >
                {this.getAuthorsList()}
            </div>
        );
    }
});

module.exports = AuthorsPage;