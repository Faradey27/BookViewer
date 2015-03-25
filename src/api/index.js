'use strict';

let config = require('./../etc/config.json');

let ApiClient = require('./ApiClient');
let apiClient = new ApiClient({ prefix: config.apiPrefix });

let TripSuit = require('./TripSuit');

module.exports = {
    tripsuit: new TripSuit({ apiClient: apiClient }),
    apiClient: apiClient
};