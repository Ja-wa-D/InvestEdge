import React from 'react';
import './Products.css';

function LeftSection() {
    return ( 
        <div className='Container p-5'>            
        <div className='row p-1'>
        <div className='col-6 p-4 '>
                <img className='mx-5' src='media/images/kite.png' alt='kite' style={{width:"70%"}} />
            </div>
        <div className='col-6 p-4 text-left'>
                <h3 className='mx-1 mt-5'>InvestEdge</h3>

                <p className='mt-3 text-secondary mb-2 mx-1'> Our ultra-fast flagship trading platform with<br/> streaming market data, advanced charts, an <br/>elegant UI, and more. </p>
                <a href=''className="mx-1 ml-5"style={{textDecoration:"None"}}>Start Investing <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>


              

            </div>


        </div>  
    </div>
     );
}

export default LeftSection;