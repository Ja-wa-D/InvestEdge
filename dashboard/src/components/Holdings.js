import React, { useState,useEffect } from "react";
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";
import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState(holdings);
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: [
          "rgba(65, 132, 243, 0.6)",
          "rgba(72, 194, 55, 0.6)",
          "rgba(245, 104, 52, 0.6)",
          "rgba(237, 85, 101, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(65, 132, 243, 1)",
          "rgba(72, 194, 55, 1)",
          "rgba(245, 104, 52, 1)",
          "rgba(237, 85, 101, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0px 4px 1px rgb(236, 235, 235)',
      padding: '20px',
      margin: '20px',
      marginLeft: '260px',
      position: 'relative',
      zIndex: 5
    }}>
      <h3 className="title" style={{ marginBottom: '20px' }}>Holdings ({allHoldings.length})</h3>

      <div className="order-table" style={{ marginBottom: '20px', position: 'relative', zIndex: 6 }}>
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>Cur. Val</th>
            <th>P&L</th>
            <th>Net Chg.</th>
            <th>Day Chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>
                  {(((curValue - stock.avg * stock.qty) / (stock.avg * stock.qty)) * 100).toFixed(2)}%
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', position: 'relative', zIndex: 6 }}>
        <div className="col">
          <h5 style={{ margin: '0', fontSize: '1.5rem', color: 'rgb(71, 71, 71)' }}>
            29,875.<span style={{ fontSize: '1rem' }}>55</span>
          </h5>
          <p style={{ margin: '5px 0 0 0', color: 'rgb(153, 153, 153)', fontSize: '0.9rem' }}>Total investment</p>
        </div>
        <div className="col">
          <h5 style={{ margin: '0', fontSize: '1.5rem', color: 'rgb(71, 71, 71)' }}>
            31,428.<span style={{ fontSize: '1rem' }}>95</span>
          </h5>
          <p style={{ margin: '5px 0 0 0', color: 'rgb(153, 153, 153)', fontSize: '0.9rem' }}>Current value</p>
        </div>
        <div className="col">
          <h5 style={{ margin: '0', fontSize: '1.5rem', color: 'rgb(72, 194, 55)' }}>1,553.40 (+5.20%)</h5>
          <p style={{ margin: '5px 0 0 0', color: 'rgb(153, 153, 153)', fontSize: '0.9rem' }}>P&L</p>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 5 }}>
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;
