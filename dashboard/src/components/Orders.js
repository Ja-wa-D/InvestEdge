import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0px 4px 1px rgb(236, 235, 235)',
      padding: '40px',
      textAlign: 'center',
      margin: '20px',
      marginLeft: '260px',
      position: 'relative',
      zIndex: 5
    }}>
      <div className="no-orders">
        <p style={{
          fontSize: '1.2rem',
          color: 'rgb(71, 71, 71)',
          marginBottom: '20px'
        }}>You haven't placed any orders today</p>

        <Link 
          to="/" 
          style={{
            backgroundColor: '#4184f3',
            color: '#fff',
            textDecoration: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            display: 'inline-block',
            fontSize: '0.9rem'
          }}
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
