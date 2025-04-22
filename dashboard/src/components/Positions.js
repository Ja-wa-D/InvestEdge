import React from "react";
import { Link } from "react-router-dom";

import { positions } from "../data/data";

const Positions = () => {
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
      {positions.length === 0 ? (
        <div className="no-positions" style={{ position: 'relative' }}>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgb(71, 71, 71)',
            marginBottom: '20px'
          }}>You have no open positions</p>

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
      ) : (
        <>
          <h3 className="title" style={{ marginBottom: '20px', position: 'relative' }}>Positions ({positions.length})</h3>

          <div className="order-table" style={{ position: 'relative', zIndex: 6 }}>
            <table style={{ position: 'relative', zIndex: 6 }}>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>

              {positions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profClass}>
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Positions;
