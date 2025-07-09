import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        
        <div className='Container P-5 mb-5'>
        
        <div className='row text-center'>

                <img src='media\images\homeHero.png' alt='Hero Images' className='mb-5' style={{width:"65%",margin:"0 auto"}} />
                <h1 className='mt-3 mb-3'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>  
               <Link to='/signup'> <button className='p-2 mt-3 btn btn-primary fs-5 mb-5' style={{width:"16%",margin:"0 auto"}} >Sign Up</button>  </Link> 
        </div>
        </div>
     );
}

export default Hero;