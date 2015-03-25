/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let Router          = require('react-router');
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;
let cx              = React.addons.classSet;

require("./DetailsAuthorPage.scss");

let DetailsAuthorPage = React.createClass({

    mixins: [FluxMixin],

    getStateFromFlux() {
        return {
        };
    },

    render() {
        return (
            <div className='DetailsAuthorPage' >
            </div>
        );
    }
});

module.exports = DetailsAuthorPage;