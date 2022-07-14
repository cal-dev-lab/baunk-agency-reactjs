import React from 'react'
import Articles from "../../containers/Articles";
import Article from "../../containers/Article";
import Category from "../../containers/Category";
import PageNotFound from "../../comps/PageNotFound";

// React router import
import { Routes, Route } from "react-router-dom";

const Blog = () => {

    return (

        <>

            <Routes>

                <Route path="/" element={<Articles />} exact />
                <Route path="/article/:slug" element={<Article />} exact />
                <Route path="/category/:slug" element={<Category />} exact />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/*" element={<PageNotFound />} />

            </Routes>

        </>

    )

}


export default Blog;