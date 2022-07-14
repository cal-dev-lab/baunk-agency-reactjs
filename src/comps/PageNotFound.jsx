import React from 'react'
import Pnf from '../images/404.svg';
import { Link, useLocation } from 'react-router-dom';

const PageNotFound = () => {

    // Set location varible
    let location = useLocation();

    // Check it is finding correct page
    console.log(`No route found for: ${location.pathname}`);

    return (
        <>

            <div className='max-w-7xl mx-auto py-2 min-h-screen flex items-center justify-center'>

                <div className='font-baunk text-4xl text-red-500 text-center'>

                    <img src={Pnf} alt="" className='h-60 w-full -mt-20' />

                    <h3 className='font-avenir mt-16'>Oops! Didn't expect that...</h3>

                    <p>{location.pathname}</p>

                    <Link to='/'>
                        <p className='font-avenir text-xl mt-10 text-red-500 underline'>
                            &larr; Let's take you back home
                        </p>
                    </Link>

                </div>

            </div>

        </>
    )
}

export default PageNotFound;