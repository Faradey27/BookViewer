/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let Router          = require('react-router');
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;

require("./BookPage.less");

let BookPage = React.createClass({

    mixins: [FluxMixin],

    getStateFromFlux() {
        return {
        };
    },

    render() {
        return (
            <div className='BookPage' >
            </div>
        );
    }
});

module.exports = BookPage;