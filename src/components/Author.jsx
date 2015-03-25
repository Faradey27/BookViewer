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
        return this.props.data.books.map((data, i) => {
            return <MenuItem eventKey={i}
                             onSelect={this.handleBookClick.bind(this, data)}>
                       {data.name}
                   </MenuItem>;
        });
    },

    getEmptyImage() {
        return `data:image/svg+xml;base64,
                PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN
                0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3
                cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTU2IiBoZWlnaHQ9I
                jIwMCIgdmlld0JveD0iMCAwIDU1NiAyMDAiIHByZXNlcnZlQXNwZ
                WN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iNTU2Ii
                BoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9
                IjIxMC41MzkwNjI1IiB5PSIxMDAiIHN0eWxlPSJmaWxsOiNBQUFBQU
                E7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVs
                dmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTt
                mb250LXNpemU6MjZwdDtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj
                41NTZ4MjAwPC90ZXh0PjwvZz48L3N2Zz4=`;
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

    showMenu(info) {
        this.refs.dropdown.setDropdownState(true);
    },

    render() {
        let name = this.props.data.name;
        let emptyImage = this.getEmptyImage();

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