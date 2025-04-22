import React from 'react'

function Awards() {
    return (  
        <><div className='Container mt-5'>
            <div className='row mt-5'>

                <div className='col-6 mt-3'>
                    <img className='p-2' src='media\images\largestBroker.svg' alt='Largest Broker' style={{ margin: "0 auto" }} />
                </div>

                <div className='col-6'>
                    <h1 className='p-3 mb-3 fs-3'>Trust with confidence</h1>
                    <div className='row'>

                        <div className='col-6 text-muted'>
                            <ul>
                                <li><p>Customer-first always</p></li>
                                <li><p>No spam or gimmicks</p></li>
                                <li><p>Secure and reliable</p></li>
                                <li><p>Easy to use</p></li>

                            </ul>

                        </div>
                        <div className='col-6 text-muted'>
                            <ul>
                                <li><p>Transparent pricing</p></li>
                                <li><p>24/7 customer support</p></li>
                                <li><p>Do better with money</p></li>
                                <li><p>Best trading platform</p></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </>
    );
}

export default Awards;