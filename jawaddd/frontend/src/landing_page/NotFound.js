import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <center>
        <div className='Container p-5'>
            <h1 className='mx-5 mt-3'>404 Error</h1>
                <h6 className='mt-2 p-3'>We couldn’t find the page you were looking for. Visit <Link style={{textDecoration:"none"}} to="/"> Home</Link></h6>  
               
        </div>
        </center>   
     );
}

export default NotFound;