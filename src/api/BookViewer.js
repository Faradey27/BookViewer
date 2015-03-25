'use strict';

let Base = require('./Base');

class BookViewer extends Base {

    registerUser(user) {
        return this.apiClient.post("register.json", user);
    }

}

module.exports = BookViewer;