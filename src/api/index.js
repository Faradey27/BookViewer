'use strict';


let ApiClient = require('./ApiClient');
let apiClient = new ApiClient();

let BookViewer = require('./BookViewer');

module.exports = {
    tripsuit: new BookViewer(),
    apiClient: apiClient
};