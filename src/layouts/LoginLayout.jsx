/** @jsx React.DOM */
'use strict';

let React = require('react');
let Router = require('react-router');
let { RouteHandler } = Router;
let FluxMixin = require('fluxxor').FluxMixin(React);
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

require("./LoginLayout.scss");
require("./../assets/style.css");

let LoginLayout = React.createClass({

    mixins: [FluxMixin, Router.State],

    componentDidMount() {
        window.ga_debug = {trace: true};
        let type = 'homepage_views';
        let text = 'Ein Nutzer hat die Startseite gesehen';
        this.getFlux().actions.tripsuit.sendTrackingEvent(type, text);
    },

    render() {
        var name = this.getRoutes().reverse()[0].name;

        if (name != "main" && name != "quiz") {
            name = "main";
        }

        return (
            <div className='LoginLayout'>
                <TransitionGroup component="div" transitionName="example">
                    <RouteHandler flux={this.props.flux} key={name} />
                </TransitionGroup>
            </div>
        );
    }
});

module.exports = LoginLayout;