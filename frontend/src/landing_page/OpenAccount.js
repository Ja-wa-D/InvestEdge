import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <center>
        <div className='Container p-5'>
            <h3 className='mx-5 mt-3'>Open a Invest Edge account</h3>
                <p className='mt-2 p-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.  </p>  
                <Link to='/signup'>  <button className='p-2 mt-3 btn btn-primary fs-5 mb-5' style={{width:"16%",margin:"0 auto"}} >Sign Up</button> </Link>
        </div>
        </center>   
     );
}

export default OpenAccount;