import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Border from "../images/Border-5.svg";

import CATEGORIES_QUERY from "../queries/categories/categories";
import Query from '../comps/Query';

const Nav = () => {

    // Set nav state
    const [nav, setNav] = useState(false);
    
    // Set nav state on icon click
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    return (
    
    <div className='h-20 z-10 sticky top-0 bg-white border-2 border-slate-900/[0.06] backdrop-filter backdrop-blur-lg bg-opacity-30'>

        <div className='max-w-7xl mx-auto px-2 flex justify-between items-center h-full'>

            <div className='flex items-center align-middle'>

                {/* START: Nav logo */}

                <div className='flex font-bold ml-4 sm:mr-2 text-4xl uppercase font-baunk text-red-500 hover:text-black transition duration-500'>

                    <Link to="/">

                        baunk

                    </Link>

                </div>

                {/* END: Nav logo */}

                {/* START: Logo image */}

                <div className='hidden md:flex'>

                    <div className='flex items-center justify-center ml-4'>

                        <img className='h-28 w-28' src={Border} alt="" />

                    </div>
                    

                </div>

                {/* END: Logo image */}

            </div>

            {/* START: Desktop nav items */}

            <div>

                <Query query={CATEGORIES_QUERY} id={null}>

                    {({ data: { categories } }) => {

                        return (

                            <div className='hidden md:flex'>

                                <ul className="flex">

                                    {categories.data.map((category) => {

                                        return (

                                            <li key={category.attributes.slug} className="text-black pr-6 cursor-pointer transition duration-500 font-avenir font-bold hover:underline hover:text-red-500">

                                                <Link
                                                    to={`/category/${category.attributes.slug}`}
                                                >
                                                    {category.attributes.name}
                                                </Link>

                                            </li>

                                        )

                                    })}

                                </ul>

                            </div>

                        )

                    }}

                </Query>

            </div>

            {/* END: Desktop nav items */}

            {/* START: Mobile menu open/close toggle */}

            <div className='md:hidden mr-4' onClick={handleClick}>

                {!nav ? <MenuIcon className='h-10 w-10 text-slate-800 cursor-pointer hover:text-red-500 transition duration-500' /> : <XIcon className='h-10 w-10 cursor-pointer text-red-500 hover:text-black transition duration-500' />}

            </div>

            {/* END: Mobile menu open/close toggle */}

        </div>

        {/* START: Mobile nav items */}

        <div>

                <Query query={CATEGORIES_QUERY} id={null}>

                    {({ data: { categories } }) => {

                        return (

                            <ul className={!nav ? 'hidden' : 'absolute bg-white text-white w-full px-8 py-2 transition duration-500 backdrop-filter backdrop-blur-lg bg-opacity-30'}>

                                    {categories.data.map((category) => {

                                        return (

                                            <li key={category.attributes.slug} className='text-2xl border-b-2 border-zinc-300 w-full my-5 cursor-pointer hover:text-black text-red-500  transition duration-500 font-avenir font-bold'>

                                                <Link onClick={handleClose} to={`/category/${category.attributes.slug}`}>
                                                    baunk:{category.attributes.name}
                                                </Link>

                                            </li>

                                        )

                                    })}

                                </ul>

                            )

                        }}

                </Query>

            </div>

        {/* END: Mobile nav items */}

    </div>

    );

};

export default Nav;