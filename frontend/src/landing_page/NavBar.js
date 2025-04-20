import React from 'react'
import { Link } from 'react-router-dom';  

function NavBar() {
    return (  
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
  <div className="container-fluid">
    <Link className="navbar-brand mx2-4 p-2" to="/"><img src='media/images/ie-logo-copy.png' style={{width:"5%"}} /><b className='mx-2'>INVEST EDGE </b> </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse" 
      data-bs-target="#navbarScroll"
      aria-controls="navbarScroll"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse p-2" id="navbarScroll">
      <ul
        className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
        style={{ "--bs-scroll-height": "100px" }}
      >
        <li className="nav-item mx-1">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item  mx-1">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        
        <li className="nav-item mx-1">
          <Link className="nav-link active" to="/products">Product</Link>
        </li>
        <li className="nav-item dropdown mx-1">
          <a
            className="nav-link dropdown-toggle active"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
            {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/support">Support</Link></li>
          </ul>
        </li>

      </ul>
      <form className="d-flex mx-1" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search for stocks"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary  mx-1" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    );
}

export default NavBar
;