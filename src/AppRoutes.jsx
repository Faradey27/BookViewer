'use strict';

let React = require('react');
let Router = require('react-router');
let {Route, DefaultRoute} = Router;

let BasicLayout = require("./layouts/BasicLayout.jsx");
let AuthorsPage       = require("./pages/AuthorsPage.jsx");
let BookListPage      = require("./pages/BookListPage.jsx");
let DetailsAuthorPage = require("./pages/DetailsAuthorPage.jsx");
let GenrePage         = require("./pages/GenrePage.jsx");

let AppRoutes = (
    <Route name='root' path='/' handler={LoginLayout}>
        <Route name='books' path='/books' handler={BookListPage} />
        <Route name='book' path='/book/:bookName/:id' handler={DetailsAuthorPage} />
        <Route name='authors' path='/authors' handler={AuthorsPage} />
        <Route name='author' path='/author/:name/:id' handler={DetailsAuthorPage} />
        <Route name='genre' path='/genre' handler={GenrePage} />

        <DefaultRoute name='defaultMain' handler={LoginPage}/>
    </Route>
);

module.exports = AppRoutes;