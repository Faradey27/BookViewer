/** @jsx React.DOM */
'use strict';

let React  = require('react');
let Router = require('react-router');
let { RouteHandler } = Router;

let NavBar = require('./../components/NavBar.jsx');

require("./BasicLayout.less");
require("bootstrap/dist/css/bootstrap.min.css");

let BasicLayout = React.createClass({

    render() {
        return (
            <div className='BasicLayout'>
                <NavBar />
                <RouteHandler flux={this.props.flux} key={name} />
            </div>
        );
    }
});

module.exports = BasicLayout;