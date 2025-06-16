import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore'; // adjust path as needed

function NavBar() {
    const { authUser, checkAuth, logout } = useAuthStore();

    useEffect(() => {
        checkAuth(); // Check user auth status on component mount
    }, [checkAuth]);

    const handleLogout = () => {
        logout(); // Clears authUser in store + cookie + toast
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <Link className="navbar-brand mx2-4 p-2" to="/">
                    <img src="/media/images/ie-logo-copy.png" style={{ width: "5%" }} alt="logo" />
                    <b className='mx-2'>INVEST EDGE</b>
                </Link>
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
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                        {authUser ? (
                            <li className="nav-item mx-1">
                                <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                            </li>
                        ) : (
                            <li className="nav-item mx-1">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                        )}
                        <li className="nav-item mx-1">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link active" to="/products">Product</Link>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/news">Live News</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/support">Support</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        {authUser ? (
                            <button className="btn btn-outline-danger mx-2" onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" className="btn btn-outline-primary mx-2">Login</Link>
                        )}
                        <form className="d-flex mx-1" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search for stocks"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-primary mx-1" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
