import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0px 4px 1px rgb(236, 235, 235)',
      padding: '40px',
      margin: '20px',
      marginLeft: '260px',
      position: 'relative',
      zIndex: 5
    }}>
      <div style={{ position: 'relative', zIndex: 6 }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          color: 'rgb(71, 71, 71)',
          marginBottom: '30px'
        }}>Funds</h3>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '40px'
        }}>
          <div>
            <h4 style={{ 
              fontSize: '2rem', 
              margin: '0',
              color: 'rgb(71, 71, 71)'
            }}>
              ₹50,000.<span style={{ fontSize: '1.2rem' }}>00</span>
            </h4>
            <p style={{ 
              margin: '5px 0 0 0',
              color: 'rgb(153, 153, 153)',
              fontSize: '0.9rem'
            }}>Available balance</p>
          </div>

          <div>
            <Link 
              to="/add-funds" 
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
              Add funds
            </Link>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '4px',
          marginBottom: '30px'
        }}>
          <h4 style={{ 
            fontSize: '1.1rem', 
            margin: '0 0 15px 0',
            color: 'rgb(71, 71, 71)'
          }}>Account Statement</h4>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '15px 0',
            borderBottom: '1px solid #eee'
          }}>
            <div>
              <p style={{ margin: '0', color: 'rgb(71, 71, 71)' }}>Opening balance</p>
              <p style={{ margin: '5px 0 0 0', color: 'rgb(153, 153, 153)', fontSize: '0.9rem' }}>As of Apr 09, 2025</p>
            </div>
            <div>
              <p style={{ margin: '0', color: 'rgb(71, 71, 71)' }}>₹50,000.00</p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '15px 0'
          }}>
            <div>
              <p style={{ margin: '0', color: 'rgb(71, 71, 71)' }}>Available margin</p>
              <p style={{ margin: '5px 0 0 0', color: 'rgb(153, 153, 153)', fontSize: '0.9rem' }}>For trading</p>
            </div>
            <div>
              <p style={{ margin: '0', color: 'rgb(71, 71, 71)' }}>₹50,000.00</p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '4px'
        }}>
          <h4 style={{ 
            fontSize: '1.1rem', 
            margin: '0 0 15px 0',
            color: 'rgb(71, 71, 71)'
          }}>Recent Transactions</h4>
          
          <p style={{ 
            textAlign: 'center',
            color: 'rgb(153, 153, 153)',
            margin: '20px 0'
          }}>No recent transactions</p>
        </div>
      </div>
    </div>
  );
};

export default Funds;
