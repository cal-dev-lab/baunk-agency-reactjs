import React from 'react';
import Query from '../comps/Query';
import { Link } from 'react-router-dom';

import CATEGORIES_QUERY from "../queries/categories/categories";

const ArticleNav = () => {
    
    return (
        
        <div>
            
            <Query query={CATEGORIES_QUERY} id={null}>
                
                {({ data: { categories } }) => {

                return (

                    <div className='max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center h-10 mt-8'>

                        <nav className="">

                                <ul className="flex">

                                    {categories.data.map((category) => {

                                        return (

                                            <li key={category.attributes.slug} className="px-2 text-xl hover:text-red-500 font-avenir transition duration-500 hover:underline">

                                                <Link
                                                    to={`/category/${category.attributes.slug}`}
                                                >
                                                    {category.attributes.name}
                                                </Link>

                                            </li>

                                            );

                                        })}

                                    </ul>

                            </nav>

                        </div>

                    );

                }}

            </Query>

        </div>

    )

}

export default ArticleNav;