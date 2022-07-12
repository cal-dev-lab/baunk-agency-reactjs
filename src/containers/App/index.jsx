import React from "react";
import ArticleNav from "../../comps/ArticleNav";
import Articles from "../../containers/Articles";
import Nav from "../../comps/Nav";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <ArticleNav />
            <Articles />
        </div>
    );
}

export default App;
