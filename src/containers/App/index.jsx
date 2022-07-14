import React from "react";

import Nav from "../../comps/Nav";
import ArticleNav from "../../comps/ArticleNav";
import Articles from "../../containers/Articles";
import Article from "../../containers/Article";
import Category from "../../containers/Category";

import PageNotFound from "../../comps/PageNotFound";

import {Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <div className="App">
            <Nav />
            <ArticleNav />
            <Routes>
                <Route path="/" element={<Articles />} exact />
                <Route path="/article/:slug" element={<Article />} exact />
                <Route path="/category/:slug" element={<Category />} exact />
                <Route component={PageNotFound} />
            </Routes>
        </div>
    );
}

export default App;
