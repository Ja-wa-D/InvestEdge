import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { ChartContainer } from "./ChartContainer";
import "./WatchList.css";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
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
    <div className="watchlist">
      <div style={{ 
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0px 0px 4px 1px rgb(236, 235, 235)',
        overflow: 'hidden',
        marginBottom: '20px',
        position: 'relative',
        zIndex: '1'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
              <th style={{ 
                textAlign: 'left',
                padding: '15px 20px',
                color: 'rgb(145, 145, 145)',
                fontWeight: '300',
                fontSize: '0.8rem'
              }}>Stock</th>
              <th style={{ 
                textAlign: 'right',
                padding: '15px 20px',
                color: 'rgb(145, 145, 145)',
                fontWeight: '300',
                fontSize: '0.8rem'
              }}>Price</th>
              <th style={{ 
                textAlign: 'right',
                padding: '15px 20px',
                color: 'rgb(145, 145, 145)',
                fontWeight: '300',
                fontSize: '0.8rem'
              }}>Change</th>
              <th style={{ 
                textAlign: 'right',
                padding: '15px 20px',
                color: 'rgb(145, 145, 145)',
                fontWeight: '300',
                fontSize: '0.8rem'
              }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((stock, index) => {
              return (
                <tr key={index} style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ 
                    padding: '12px 20px',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    color: 'rgb(73, 73, 73)',
                    fontWeight: '400'
                  }}>{stock.name}</td>
                  <td style={{ 
                    padding: '12px 20px',
                    textAlign: 'right',
                    fontSize: '0.9rem',
                    color: 'rgb(73, 73, 73)',
                    fontWeight: '400'
                  }}>₹{stock.price}</td>
                  <td style={{ 
                    padding: '12px 20px',
                    textAlign: 'right',
                    fontSize: '0.9rem',
                    fontWeight: '400'
                  }}>
                    {stock.isDown ? (
                      <span style={{ color: 'rgb(223, 73, 73)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <KeyboardArrowDown /> {stock.percent}
                      </span>
                    ) : (
                      <span style={{ color: 'rgb(72, 194, 55)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <KeyboardArrowUp /> {stock.percent}
                      </span>
                    )}
                  </td>
                  <td style={{ 
                    padding: '12px 20px',
                    textAlign: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '8px'
                  }}>
                    <Tooltip title="Chart">
                      <BarChartOutlined style={{ 
                        color: 'rgb(65, 65, 65)',
                        cursor: 'pointer',
                        fontSize: '20px'
                      }} />
                    </Tooltip>
                    <Tooltip title="More">
                      <MoreHoriz style={{ 
                        color: 'rgb(65, 65, 65)',
                        cursor: 'pointer',
                        fontSize: '20px'
                      }} />
                    </Tooltip>
                    <button style={{
                      backgroundColor: '#4184f3',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: '400',
                      cursor: 'pointer',
                      ':hover': {
                        backgroundColor: '#337ab7'
                      }
                    }}>Buy</button>
                    <button style={{
                      backgroundColor: '#ff5722',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: '400',
                      cursor: 'pointer',
                      ':hover': {
                        backgroundColor: '#e64a19'
                      }
                    }}>Sell</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ 
        marginTop: '20px', 
        position: 'relative', 
        zIndex: '0',
        width: '100%'
      }}>
        <ChartContainer data={data} />
      </div>
    </div>
  );
};

export default WatchList;
