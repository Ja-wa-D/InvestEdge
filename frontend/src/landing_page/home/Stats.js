import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Stats() {
    return ( 
      <div className='Container p-5'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
                
            <h1 className='fs-1'>Trust with confidence</h1>
            <h3 className='fs-3 mt-5 text-dark'>Predict with Precision</h3>
            <p className='text-muted'>Our algorithms analyze millions of data points—from <br></br> market trends to global news—to forecast<br></br> opportunities before they surge. </p>

            <h3 className='fs-3 text-dark' >No spam or gimmicks</h3>
            <p className='text-muted'>TNo gimmicks, spam, "gamification", or annoying push <br></br>notifications. High quality apps that you use at your <br></br>pace, the way you like.  </p>

            <h3 className='fs-3 text-dark'>Trade with Ease</h3>
            <p className='text-muted'>One-click automation turns insights into action, <br></br>whether you’re building your first portfolio or <br></br>optimizing complex strategies.  </p>


            <h3 className='fs-3 text-dark'>Do better with money</h3>
            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just<br></br> facilitate transactions, but actively help you do <br></br>better with your money.  </p>

                
                  </div>     


            <div className='col-6 p-5'> 
                <img src='media/images/ecosystem.png' style={{width:"95%"}} className='mb-5' />

                <div className='text-center'>

                    {/* <Link to=" /products" className='my-3 mx-3' style={{textDecoration:"None"}}>Explore our products <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                    </Link> */}
                    <Link to='/dashboard' style={{textDecoration:"None"}}>See InvestEdge in Action <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
                
                
                 </div>


            </div>
      </div>
     );
}

export default Stats;