import React from 'react'
import { Link } from 'react-router-dom';

function Pricing() {
    return (  
        <div className='Container'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='mx-5 mt-3' >Unbeatable pricing</h1>
                    <p className='mt-3 text-muted mb-2 mx-5'> We pioneered the concept of discount broking and price<br></br>transparency in India. Flat fees and no hidden charges. </p>
                    <Link to='/pricing'className="mx-5 ml-5"style={{textDecoration:"None"}}>See pricing <i class="fa fa-angle-double-right" aria-hidden="true"></i></Link>


                </div>
                <div className='col-6 p-5 '>
                    <img className='' src='media/images/pricing.png' alt='pricing' style={{width:"110%"}} />
                </div>

            </div>
        </div>

    );
}

export default Pricing;