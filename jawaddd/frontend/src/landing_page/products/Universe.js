import React from 'react'
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
       <div className='container my-5 mt-5'>
        <div className='row text-center mb-5'>
            <h2>The InvestEdge Universe</h2>
            <p className='text-secondary mt-1'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className='row mt-5 mb-3'>
            <div className='col-md-4 text-center'>
                <img src='media/images/zerodhafundhouse.png' alt='zerodhafundhouse' style={{width:'50%'}}/>
                <p className='text-muted text-small mt-2'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
            </div>
            <div className='col-md-4 text-center'>
            <img src='media/images/sensibullLogo.svg' alt='sensibull-logo'style={{width:'50%'}} />   
                <p className='text-muted text-small mt-4'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

</p>
            </div>
            <div className='col-md-4 text-center'>
                <img src='media/images/streakLogo.png' alt='varsity'style={{width:'50%'}} />
                <p className='text-muted text-small mt-2'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

</p>
            </div>
        </div>
      
        <div className='row mt-5 mb-5 text-center'>
            <div className='col-md-4 text-center'>
                <img src='media/images/smallcaseLogo.png' alt='zerodhafundhouse' style={{width:'50%'}}/>
                <p className='text-muted text-small mt-2'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
            </div>
            <div className='col-md-4 text-center'>
            <img src='media/images/goldenpiLogo.png' alt='sensibull-logo'style={{width:'50%'}} />   
                <p className='text-muted text-small mt-4'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

</p>
            </div>
            <div className='col-md-4 text-center'>
                <img src='media/images/dittoLogo.png' alt='varsity'style={{width:'40%'}} />
                <p className='text-muted text-small mt-2'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

</p>
            </div>
            <Link to='/signup'>  <button className='p-2 mt-5 btn btn-primary fs-5 mb-5' style={{width:"16%",margin:"0 auto"}} >Sign up for free </button> </Link>
        </div>
        
        </div>
     );
}

export default Universe;