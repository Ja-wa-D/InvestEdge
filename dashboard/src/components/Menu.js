import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { ProfileDropdown } from "./ProfileDropdown";
import "./Menu.css";

const Menu = () => {
  const theme = useTheme();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  // Update selected menu based on current route
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        setSelectedMenu(0);
        break;
      case '/orders':
        setSelectedMenu(1);
        break;
      case '/holdings':
        setSelectedMenu(2);
        break;
      case '/positions':
        setSelectedMenu(3);
        break;
      case '/funds':
        setSelectedMenu(4);
        break;
      case '/apps':
        setSelectedMenu(6);
        break;
      default:
        setSelectedMenu(0);
    }
  }, [location]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false); // Close profile dropdown when menu changes
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleCloseProfile = () => {
    setIsProfileDropdownOpen(false);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div 
          className="profile" 
          onClick={handleProfileClick}
          ref={profileRef}
          style={{ cursor: 'pointer' }}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
      <ProfileDropdown 
        open={isProfileDropdownOpen}
        anchorEl={profileRef.current}
        handleClose={handleCloseProfile}
      />
    </div>
  );
};

export default Menu;
