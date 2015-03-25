'use strict';

class Base {
    constructor({apiClient}) {
        if (!apiClient) throw '[apiClient] required';
        this.apiClient = apiClient;
    }
}

module.exports = Base;