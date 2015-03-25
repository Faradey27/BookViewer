'use strict';

let eventConstants = require('../eventConstants');
let api = require('../api/');

module.exports = {

    hideErrors() {
        this.dispatch(eventConstants.UI.NO_ERRORS);
    },
};