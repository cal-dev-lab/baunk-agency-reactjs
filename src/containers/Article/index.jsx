import React from "react";
import { useParams } from "react-router";
import Query from "../../comps/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import rehypeRaw from "rehype-raw"
import { Link } from "react-router-dom";

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

            <div className="max-w-7xl mx-auto flex-col px-6 h-screen">

              <div className="py-12">


                <div className='pb-16'>
                  <p className="font-semibold underline text-red-500 hover:text-black">
                    <Link to="/">
                      &larr; Home
                    </Link>
                  </p>
                </div>
              
                <h1 className="font-baunk text-6xl md:text-7xl lg:text-9xl">
                  {articles.data[0].attributes.title}
                </h1>

              </div>

              

              <p className="font-avenir text-md uppercase font-semibold text-gray-500 pb-16">
                <span className="lowercase">Article released:{" "}</span>
                
                <br />

                <Moment format="Do MMM YYYY">
                    {articles.data[0].attributes.published_at}
                </Moment>
              </p>
              
              <img className='rounded-tl-3xl rounded-br-3xl' src={imageUrl} alt={articles.data[0].attributes.title} />

              <div className="py-16">

                <div className="font-avenir text-lg">

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