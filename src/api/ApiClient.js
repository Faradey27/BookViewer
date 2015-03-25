'use strict';

class ApiClient {

    post(url) {
        return this.request({
            url: url,
            method: 'post'
        });
    }

    request(options) {
        let hash = {
            '/loadBooks': '/books.json'
        };
        let apiCall = hash[options.url];

        return $.ajax({
           url: apiCall,
           dataType: 'json'
        });
    }
}

module.exports = ApiClient;