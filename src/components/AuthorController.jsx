/** @jsx React.DOM */
'use strict';

let React  = require('react');
let Router = require('react-router');

let Author  = require('./Author.jsx');

let AuthorController = React.createClass({
    mixins: [Router.Navigation],

    goToBookPage(info) {
        this.transitionTo('book', {bookName: info.name, id: info.id});
    },

    goToAuthorPage(info) {
        this.transitionTo('author', {name: info.name, id: info.id});
    },

    render() {
        return (
            <div className="AuthorController">
                <Author data={this.props.data}
                        mode={this.props.mode}
                        handleBookClick={this.goToBookPage}
                        handleAuthorClick={this.goToAuthorPage}/>
            </div>
        );
    }
});

module.exports = AuthorController;