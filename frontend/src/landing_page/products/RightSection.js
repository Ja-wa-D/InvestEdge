import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css';

function RightSection() {
    return ( 
        <div className='Container mt-5 mb-1'>
            <div className='row p-1'>

            <div className='col-6 p-4' style={{textAlign:"right"}}>
                <h3 className='mx-1 mt-5'>Personalized Dashboard</h3>

                <p className='mt-3 text-secondary mb-2 mx-1' style={{textAlign:"left"}}> The central dashboard for your InvestEdge<br/>
account. Gain insights into your trades and<br/> investments with in-depth reports and<br/> visualisations. </p>
                <a href=''className="mx-1 ml-5"style={{textDecoration:"None"}}>Learn more <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                </div>
            <div className='col-6 p-4 '>
                    <img className='mx-5 mb-5' src='media/images/console.png' alt='coin' style={{width:"70%"}} />
                    </div>
            </div>

    </div>
     );
}

export default RightSection;