import React from 'react'

function Team() {
    return (  
        
        <div className='container p-1 mb-5'>
            <div className='row text-center border-top mt-5 mb-5 p-3'>
                <h2>Meet the team</h2>
                </div>
            <div className='row text-center p-3 text-muted'>
            <div className='col-6 mt-5'>
                <img src='media/images/jawad.jpg' alt='Jawad' className='img-fluid rounded-circle'style={{width:"50%"}}/>
                <h3 className='mt-3'>Jawad</h3>
                <p className='text-muted'>CEO</p>
                <button className="btn btn-outline-secondary mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#jawad-desc" aria-expanded="false" aria-controls="jawad-desc">
                  More about Jawad
                </button>
                <div className="collapse" id="jawad-desc">
                  <div className="card card-body mt-2">
                    I noticed a glaring gap: retail investors were<br/> drowning in data but starved for actionable insights.<br/> Platforms either oversimplified or overcomplicated, <br/>leaving most feeling unprepared. I asked: What if AI<br/> could bridge this divide? What if anyone, from a<br/> college student investing their first ₹1000 to a<br/> retiree optimizing their portfolio, could access<br/> tools once reserved for hedge funds? InvestEdge was<br/> built to answer these questions. By merging<br/> institutional-grade machine learning with intuitive<br/> design, we’ve created a platform that’s as powerful<br/> as it is accessible a true edge for the modern<br/> investor.
                  </div>
                </div>

            </div>
            <div className='col-6 mt-5'>
                <img src='media/images/salman.jpeg' alt='Salmna' className='img-fluid rounded-circle'style={{width:"50%"}}/>
                <h3 className='mt-3'>Salman</h3>
                <p className='text-muted '>CTO</p>
                <button className="btn btn-outline-secondary mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#salman-desc" aria-expanded="false" aria-controls="salman-desc">
                  More about Salman
                </button>
                <div className="collapse" id="salman-desc">
                  <div className="card card-body mt-2">
                    We’re not Wall Street wolves. We’re two tech-heads <br/>who believe stock trading can be both <br/>smart and stress-free. Tired of clunky platforms and <br/>guesswork, we built InvestEdge: your AI co-pilot for <br/>market moves. Smarter suggestions, real-time insights, <br/>and automated strategies — all without the jargon.
                  </div>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Team;