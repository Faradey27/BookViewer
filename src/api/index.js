'use strict';


let ApiClient = require('./ApiClient');
let apiClient = new ApiClient();

let BookViewer = require('./BookViewer');

module.exports = {
    bookViewer: new BookViewer({ apiClient: apiClient }),
    apiClient: apiClient
};