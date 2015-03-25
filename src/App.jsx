'use strict';

let $ = window.$ = window.jQuery = require('jquery');

let React     = require('react');
let Router    = require('react-router');
let AppRoutes = require('./AppRoutes.jsx');
let Fluxxor   = require('fluxxor');

let stores  = require('./stores/');
let actions = require('./actions/');
let flux    = new Fluxxor.Flux(stores, actions);

$(document).ready(function() {
    window.React = React;

    Router
        .create({
            routes: AppRoutes,
            scrollBehavior: Router.ScrollToTopBehavior
        }).run(Handler => {
            React.render(<Handler flux={flux} />, document.getElementById('react-root'));
        });

});
