import React from 'react'
import { Link } from 'react-router-dom';

function News() {
    return (  
        <div className='Container'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='mx-5 mt-3' >News Moves Markets. AI Moves First.</h1>
                    <p className='mt-3 text-muted mb-2 mx-5'> Don't just read the headlines—act on them. InvestEdge's AI<br></br> analyzes breaking news, earnings reports, and global<br></br> events in real time, turning chaos into actionable trading signals. </p>
                    <Link to='/pricing'className="mx-5 ml-5"style={{textDecoration:"None"}}>See Live News Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                </div>
                <div className='col-6 p-5 '>
                    <img className='' src='media/images/pricing.png' alt='pricing' style={{width:"110%"}} />
                </div>
            </div>
        </div>
    );
}

export default News;
