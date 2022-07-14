import React from "react";
import { useParams } from "react-router";
import Query from "../../comps/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import rehypeRaw from "rehype-raw"

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { slug } = useParams();

  return (

    <Query query={ARTICLE_QUERY} slug={slug}>

      {({ data: { articles } }) => {

        if (articles.data.length) {

          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles.data[0].attributes.image.data.attributes.url
              : process.env.REACT_APP_BACKEND_URL +
                articles.data[0].attributes.image.data.attributes.url;

          return (

            <div>

              <h1>{articles.data[0].attributes.title}</h1>

              <p>
                <Moment format="MMM Do YYYY">
                  {articles.data[0].attributes.published_at}
                </Moment>
              </p>
              
              <img src={imageUrl} />

              <div className="">

                <div className="">

                  <ReactMarkdown children={articles.data[0].attributes.content} rehypePlugins={[rehypeRaw]} />

                </div>

              </div>

            </div>

          );

        }

      }}

    </Query>
  
  );

};

export default Article;