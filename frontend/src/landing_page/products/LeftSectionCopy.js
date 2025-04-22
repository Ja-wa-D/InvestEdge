import React from 'react';
import './Products.css';

function LeftSectionCopy() {
    return ( 
        <div className='Container p-5'>            
        <div className='row p-1'>
        <div className='col-6 p-4 '>
                <img className='mx-5' src='media/images/coin.png' alt='coin' style={{width:"70%"}} />
            </div>
        <div className='col-6 p-4 text-left'>
                <h3 className='mx-1 mt-2'>Tailored Recommendations</h3>

                <p className='mt-3 text-secondary mb-2 mx-1'> Receive recommendations tailored to your trading style,<br/> risk appetite, and market interests—helping you make<br/>  smarter, faster decisions. </p>
                <a href=''className="mx-1 ml-5"style={{textDecoration:"None"}}>Learn more <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>


              

            </div>


        </div>  
    </div>
    );
}

export default LeftSectionCopy;
