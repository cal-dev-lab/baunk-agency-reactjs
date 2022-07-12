import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {


  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-8 mx-auto">
          {articles.map((article) => {
            return (
              <Card
                article={article}
                key={`article__${article.attributes.slug}`}
              />
            );
          })}
        
      </div>
    </div>
  );
};

export default Articles;