/** @jsx React.DOM */
'use strict';

let React           = require('react');
let FluxMixin       = require('fluxxor').FluxMixin(React);
let Router          = require('react-router');
let StoreWatchMixin = require('fluxxor').StoreWatchMixin;
let cx              = React.addons.classSet;

require("./AuthorsPage.scss");

let AuthorsPage = React.createClass({

    mixins: [FluxMixin],

    getStateFromFlux() {
        return {
        };
    },

    render() {
        return (
            <div className='AuthorsPage' >
            </div>
        );
    }
});

module.exports = AuthorsPage;