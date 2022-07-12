import React from "react";
import Articles from "../../comps/Articles";
import Query from "../../comps/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles.data} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;