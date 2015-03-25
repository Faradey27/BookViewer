/** @jsx React.DOM */
'use strict';

let React = require('react');

require("./Book.less");

let Book = React.createClass({
    getAuthorsList() {
        if (!this.props.data.authors) {
            return null;
        }

        return this.props.data.authors.map((data) => {
            return <span className="author"
                         onMouseDown={this.handleAuthorClick.bind(this,data)}>
                        {data.name}
                   </span>;
        });
    },

    handleBookClick() {
        if (this.props.handleBookClick) {
            let info = {
                id: this.props.data.id,
                name: this.props.data.name
            };
            this.props.handleBookClick(info);
        }
    },

    handleAuthorClick(info, e) {
        e.stopPropagation();
        if (this.props.handleAuthorClick) {
            this.props.handleAuthorClick(info);
        }
    },

    render() {
        let name = this.props.data.name;

        return (
            <div className="Book" onMouseDown={this.handleBookClick}>
                <div className="thumbnail">
                  <div className="caption">
                    <h3 className="name">{name}</h3>
                    <p className="authors">
                        {this.getAuthorsList()}
                    </p>
                  </div>
                </div>
            </div>
        );
    }
});

module.exports = Book;