import React from "react";
import { useParams } from "react-router";
import Query from "../../comps/Query";

import ARTICLE_QUERY from "../../queries/article/articles";

const Article = () => {
  let { slug } = useParams();

  return (
    <Query query={ARTICLE_QUERY} slug={slug}>
      {({ data: { articles } }) => {
        if (articles.data.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles.data[5].attributes.image.data.attributes.url
              : process.env.REACT_APP_BACKEND_URL +
                articles.data[5].attributes.image.data.attributes.url;


          return (
            <div>
                <img src={imageUrl} />
                <h1>{articles.data[5].attributes.title}</h1>
            </div>
          );

        }
      }}
    </Query>
  );
};

export default Article;