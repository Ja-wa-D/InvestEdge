import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
       <footer className='border-top' style={{ backgroundColor: "rgb(250,250,250)" }}>     
       <div className='container border-top'>
              <div className='row'>
                <div className='col text-muted'>
                    <img src='media/images/InvestEdge-logo-1.png' alt='InvestEdge Logo' style={{width:"50%"}}/>
                    <p>
                        &copy; 2025 InvestEdge. All rights reserved.
                    </p>
                </div>
                <div className='col text-muted'>
                    <p>Company</p>  
                    <Link to='/about'className='text-muted' style={{textDecoration:"None"}}>About</Link><br/>                    
                        <Link to='/products'className='text-muted' style={{textDecoration:"None"}}>Products</Link><br/>
                        <Link to='/news'className='text-muted' style={{textDecoration:"None"}}>LiveNews</Link><br/>
                        <a href=''className='text-muted' style={{textDecoration:"None"}}>Open Source</a><br/>
                    <a href=''className='text-muted' style={{textDecoration:"None"}}>Tech</a>   <br/>                                
                </div>
                <div className='col text-muted'>
                <p>Indiviual</p>
                <a href=''className='text-muted' style={{textDecoration:"None"}}>Quick Trade</a><br/>
                <a href=''className='text-muted' style={{textDecoration:"None"}}>Private Clients</a><br/>
                <a href=''className='text-muted' style={{textDecoration:"None"}}>Advanced Trade</a><br/>
                </div>
                <div className='col text-muted'>
                <p>Dataset</p>
                <a href='https://www.nseindia.com/'className='text-muted' style={{textDecoration:"None"}}>NSE</a><br/>
                <a href='https://www.bseindia.com/'className='text-muted' style={{textDecoration:"None"}}>BSE</a><br/>
                <a href='https://zerodha.com/'className='text-muted' style={{textDecoration:"None"}}>Zerodha</a><br/>
                <a href='https://groww.in/'className='text-muted' style={{textDecoration:"None"}}>Groww</a><br/>
                </div>
                </div>
       </div>
       </footer>
     );
}

export default Footer;