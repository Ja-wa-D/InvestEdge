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

            </div>
            <div className='col-6 mt-5'>
                <img src='media/images/salman.jpeg' alt='Salmna' className='img-fluid rounded-circle'style={{width:"50%"}}/>
                <h3 className='mt-3'>Salman</h3>
                <p className='text-muted mb-5'>CTO</p>

            </div>
            </div>
        </div>
    );
}

export default Team;