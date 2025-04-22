import React from 'react'

function Hero() {
    return ( 
        <div className='container p-4 mb-5'>
        <div className='row text-center mt-5 mb-5 p-3'>
          <h1> Charges </h1>
          <h6 className='text-muted mt-3'>List of all charges and taxes</h6>
        </div>
        <div className='row text-muted text-center'>
          <div className='col-4 mt-5'>
<img src='media/images/pricingequity.svg' style={{width:"30%"}}/>
<h2 className='text-secondary'>Free equity delivery</h2>
<p>All equity delivery investments (NSE, BSE),<br/>are absolutely free — ₹ 0 brokerage.</p>
            </div>
            
            <div className='col-4 mt-5'>
<img src='media/images/pricingMF.svg' style={{width:"30%"}} />
<h2 className='text-secondary'>Intraday and F&O trades</h2>
<p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 mt-5'>
<img src='media/images/pricingequity.svg'  style={{width:"30%"}}/>
<h2 className='text-secondary'>Free direct MF</h2>
<p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
            </div>
      </div>
    </div>
     );
}

export default Hero;