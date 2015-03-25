'use strict';

let Base = require('./Base');

class BookViewer extends Base {

    loadBooks() {
        return this.apiClient.post('/loadBooks');
    }

}

module.exports = BookViewer;