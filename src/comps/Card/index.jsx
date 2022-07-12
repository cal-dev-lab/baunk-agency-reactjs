import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL +
        article.attributes.image.data.attributes.url;
  return (
    <Link to={`/article/${article.attributes.slug}`}>
      <div className="group rounded-lg">
        <div className="w-full rounded-t-lg bg-transparent">
          <img src={imageUrl} alt={article.attributes.image.url} className="h-64 w-full object-cover" />
        </div>
        <div className="py-2">
          <p id="category" className="text-xl font-avenir py-2">
            {article.attributes.category.data.attributes.name}
          </p>
          <p id="title" className="text-2xl font-avenir font-bold">
            {article.attributes.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;