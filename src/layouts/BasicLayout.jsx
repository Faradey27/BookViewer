/** @jsx React.DOM */
'use strict';

let React  = require('react');
let Router = require('react-router');

require("./BasicLayout.less");
//require("./../assets/style.css");

let BasicLayout = React.createClass({

    render() {
        return (
            <div className='BasicLayout'>
                <RouteHandler flux={this.props.flux} key={name} />
            </div>
        );
    }
});

module.exports = BasicLayout;