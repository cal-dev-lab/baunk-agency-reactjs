import React from "react";
import { useParams } from "react-router";
import Articles from "../../comps/Articles";
import Query from "../../comps/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const Category = () => {
  let { slug } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
      {({ data: { categories } }) => {
        if (categories.data.length) {
          return (
            <div>
                <div className="">
                    <div className="flex justify-center items-center">
                        <h1 className="font-baunk text-red-500 text-3xl pt-10 pb-6">{categories.data[0].attributes.name}</h1>
                    </div>
                    
                    <Articles articles={categories.data[0].attributes.articles.data} />
                </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Category;