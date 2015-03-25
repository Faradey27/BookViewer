/** @jsx React.DOM */
'use strict';

let React  = require('react');
let Router = require('react-router');

let Navbar  = require('react-bootstrap').Navbar;
let Nav     = require('react-bootstrap').Nav;
let NavItem = require('react-bootstrap').NavItem;


let Book  = require('./Book.jsx');

let NavBar = React.createClass({
    mixins: [Router.Navigation],

    goToBookPage(info) {
        this.transitionTo('book', {bookName: info.name, id: info.id});
    },

    goToAuthorPage(info) {
        this.transitionTo('author', {name: info.name, id: info.id});
    },

    render() {
        return (
            <div className="NavBar">
                <Navbar brand="Book viewer">
                    <Nav>
                        <NavItem eventKey={1} href="/#/books">Books</NavItem>
                        <NavItem eventKey={2} href="/#/authors">Authors</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
});

module.exports = NavBar;