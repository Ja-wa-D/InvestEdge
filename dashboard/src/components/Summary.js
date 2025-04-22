import React from "react";

const Summary = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0px 4px 1px rgb(236, 235, 235)',
      padding: '20px',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="username">
        <h6 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Hi, User!</h6>
        <hr className="divider" style={{ margin: '10px 0' }} />
      </div>

      <div className="section">
        <span>
          <p style={{ 
            fontSize: '1.2rem',
            fontWeight: '300',
            color: 'rgb(71, 71, 71)',
            margin: '0 0 15px 0'
          }}>Equity</p>
        </span>

        <div className="data" style={{ padding: '0 8%' }}>
          <div className="first">
            <h3 style={{ 
              fontSize: '1.8rem',
              color: 'rgb(71, 71, 71)',
              fontWeight: '300',
              margin: '0 0 5px 0'
            }}>3.74k</h3>
            <p style={{
              fontSize: '0.8rem',
              color: 'rgb(153, 153, 153)',
              fontWeight: '300',
              margin: '0'
            }}>Margin available</p>
          </div>
          <hr style={{
            border: 'none',
            background: '#d1d1d1',
            height: '0.5px',
            margin: '15px 0'
          }} />

          <div className="second">
            <p style={{
              fontSize: '0.9rem',
              color: 'rgb(73, 73, 73)',
              margin: '8px 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              Margins used <span style={{ fontWeight: '500' }}>0</span>
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgb(73, 73, 73)',
              margin: '8px 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              Opening balance <span style={{ fontWeight: '500' }}>3.74k</span>
            </p>
          </div>
        </div>
        <hr style={{
          border: 'none',
          background: '#d1d1d1',
          height: '0.5px',
          margin: '20px 0'
        }} />
      </div>

      <div className="section">
        <span>
          <p style={{ 
            fontSize: '1.2rem',
            fontWeight: '300',
            color: 'rgb(71, 71, 71)',
            margin: '0 0 15px 0'
          }}>Holdings (13)</p>
        </span>

        <div className="data" style={{ padding: '0 8%' }}>
          <div className="first">
            <h3 style={{ 
              fontSize: '1.8rem',
              color: 'rgb(72, 194, 55)',
              fontWeight: '300',
              margin: '0 0 5px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              1.55k <small style={{ 
                fontSize: '0.9rem',
                color: 'rgb(72, 194, 55)',
                fontWeight: '300'
              }}>+5.20%</small>
            </h3>
            <p style={{
              fontSize: '0.8rem',
              color: 'rgb(153, 153, 153)',
              fontWeight: '300',
              margin: '0'
            }}>P&L</p>
          </div>
          <hr style={{
            border: 'none',
            background: '#d1d1d1',
            height: '0.5px',
            margin: '15px 0'
          }} />

          <div className="second">
            <p style={{
              fontSize: '0.9rem',
              color: 'rgb(73, 73, 73)',
              margin: '8px 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              Current Value <span style={{ fontWeight: '500' }}>31.43k</span>
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgb(73, 73, 73)',
              margin: '8px 0',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              Investment <span style={{ fontWeight: '500' }}>29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
