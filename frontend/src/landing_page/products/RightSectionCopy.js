import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css';

function RightSection() {
    return ( 
        <div className='Container mt-5 mb-1'>
            <div className='row p-1'>

            <div className='col-6 p-4' style={{textAlign:"right"}}>
                <h3 className='mx-1 mt-5'>Your Personal Stock Newsroom</h3>

                <p className='mt-3 text-secondary mb-2 mx-1' style={{textAlign:"left"}}> Our system scans top financial sources, social feeds,<br/> and global headlines, delivering breaking<br/> updates to help you stay    ahead of the curve. </p>
                {/* <a href=' 'className="mx-1 ml-5"style={{textDecoration:"None"}}>Start Your News Feed <i class="fa fa-angle-double-right" aria-hidden="true"></i></a> */}
                <Link to='/news'className="mx-1 ml-5"style={{textDecoration:"None"}}>Start Your News Feed <i class="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                </div>
            <div className='col-6 p-4 '>
                    <img className='mx-5 mb-5' src='media/images/signup.png' alt='news' style={{width:"70%"}} />
                    </div>
            </div>

    </div>
     );
}

export default RightSection;