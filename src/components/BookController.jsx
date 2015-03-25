/** @jsx React.DOM */
'use strict';

let React  = require('react');
let Router = require('react-router');

let Book  = require('./Book.jsx');

let BookController = React.createClass({
    mixins: [Router.Navigation],

    goToBookPage(info) {
        this.transitionTo('book', {bookName: info.name, id: info.id});
    },

    goToAuthorPage(info) {
        this.transitionTo('author', {name: info.name, id: info.id});
    },

    render() {
        return (
            <div className="BookController">
                <Book data={this.props.data}
                      handleBookClick={this.goToBookPage}
                      handleAuthorClick={this.goToAuthorPage}/>
            </div>
        );
    }
});

module.exports = BookController;