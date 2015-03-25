/** @jsx React.DOM */
'use strict';

let React = require('react');

require("./Tag.scss");

let Tag = React.createClass({

    render() {

        let cx = React.addons.classSet;

        let classes = cx({
            'Tag': true,
            'checked': this.props.isChecked
        });

        return (
            <div className={classes}>
                {this.props.name}
            </div>
        );
    }
});

module.exports = Tag;