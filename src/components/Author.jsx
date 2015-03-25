/** @jsx React.DOM */
'use strict';

let React              = require('react');
let DropdownStateMixin = require('react-bootstrap').DropdownStateMixin;


let DropdownButton = require('react-bootstrap').DropdownButton;
let MenuItem       = require('react-bootstrap').MenuItem;

require("./Author.less");

let Author = React.createClass({
    mixins: [DropdownStateMixin],

    getBooks() {
        if (!this.props.data.books) {
            return null;
        }

        return this.props.data.books.map((data, i) => {
            return <MenuItem eventKey={i}
                             onSelect={this.handleBookClick.bind(this, data)}>
                       {data.name}
                   </MenuItem>;
        });
    },

    handleBookClick(info) {
        if (this.props.handleBookClick) {
            this.props.handleBookClick(info);
        }
    },

    handleAuthorClick() {
        if (this.props.handleAuthorClick) {
            let info = {
                id: this.props.data.id,
                name: this.props.data.name
            };
            this.props.handleAuthorClick(info);
        }
    },

    showMenu() {
        if (this.props.mode !== "clickShow") {
            this.refs.dropdown.setDropdownState(true);
        } else {
            this.handleAuthorClick();
        }
    },

    render() {
        let name = this.props.data.name;

        return (
            <div className="Author" onClick={this.showMenu}>
                <div className="thumbnail">
                  <div className="caption">
                    <h3 className="name">{name}</h3>
                    <DropdownButton eventKey={4}
                                    ref="dropdown">
                        <MenuItem eventKey="4.1"
                                  onSelect={this.handleAuthorClick}>
                            Author details
                        </MenuItem>
                        <MenuItem divider />
                        {this.getBooks()}
                    </DropdownButton>
                  </div>
                </div>
            </div>
        );
    }
});

module.exports = Author;