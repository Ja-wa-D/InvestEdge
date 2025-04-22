import React from 'react'

function Education() {
    return (  
        <div className='Container p-5'>            
            <div className='row p-1'>
            <div className='col-6 p-4 '>
                    <img className='mx-5' src='media/images/education.svg' alt='education' style={{width:"60%"}} />
                </div>
            <div className='col-6 p-2'>
                    <h1 className='mx-1 mt-5'>Free and open market education</h1>

                    <p className='mt-3 text-muted mb-2 mx-1'> Varsity, the largest online stock market education book in the world <br></br> covering everything from the basics to advanced trading. </p>
                    <a href='https://zerodha.com/varsity/'className="mx-1 ml-5"style={{textDecoration:"None"}}>Varsity <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>


                    <p className='my-4 text-muted mb-2 mx-1'> TradingQ&A, the most active trading and investment community in<br></br> India for all your market related queries.  </p>
                    <a href='https://tradingqna.com/'className="mx-1 ml-5"style={{textDecoration:"None"}}>TradingQ&A <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>


                </div>


            </div>  
        </div>
    );

}

export default Education;