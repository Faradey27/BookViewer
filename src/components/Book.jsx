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
        let emptyImage = this.getEmptyImage();

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