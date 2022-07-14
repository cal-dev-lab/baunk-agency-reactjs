import React from 'react'
import Nav from './Nav';
import Pnf from '../images/404.svg';

const PageNotFound = ({ location }) => {
    return (
        <>

        <Nav />

            <div className='max-w-7xl mx-auto py-2 min-h-screen flex items-center justify-center'>

                <div className='font-baunk text-4xl text-red-500 text-center'>

                    <img src={Pnf} alt="" />

                    <h3 className='text-3xl font-avenir'>No match for {location.pathname}</h3>

                    <a href='/'>
                        <p className='font-avenir text-xl mt-10 text-red-500 underline'>&larr; Let's take you back home</p>
                    </a>

                </div>

            </div>

        </>
    )
}

export default PageNotFound;