import React from 'react'

function CreateTicket() {
    return ( 
    <div className='container'>
        <div className='row mb-5'>
            <h4 className='mb-4 mt-5 text-muted'>To create a ticket, select a relevant topic below:</h4>
            <div className='col-4'>
                <h5 className='mb-3'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening 
                </h5>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Getting started<br/></a> 
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Online</a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Offline </a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Charges </a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Company, Partnership and HUF<br/> </a>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Non Resident Indian (NRI)</a><br/>
            </div>
            <div className='col-4'>
                <h5 className='mb-3'><i class="fa fa-user" aria-hidden="true"></i> Your Account
                
                </h5>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Login credentials<br/></a> 
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Account modification and segment addition </a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>CMR & DP ID </a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Nomination<br/> </a>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Transfer and conversion of shares</a><br/>
            </div>
            <div className='col-4'>
                <h5 className='mb-3'><i class="fa fa-signal" aria-hidden="true"></i> Trading and Markets 
                 
                </h5>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Trading FAQs<br/></a> 
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Kite</a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Margins </a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Product and order types</a><br/>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Corporate actions<br/> </a>
                <a href='' style={{textDecoration:"none", lineHeight:"2"}}>Kite features</a><br/>
            </div>
  
        </div>
    </div>
);
}

export default CreateTicket;