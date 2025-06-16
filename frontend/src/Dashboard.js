import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import { 
  Chart as ChartJS, 
  registerables,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip as ChartTooltip,
  Legend 
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { Box, Container, Paper, Tooltip, Snackbar, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link, Routes, Route, useLocation } from "react-router-dom";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  AccountBalanceWalletOutlined,
  ShowChartOutlined,
  ReceiptLongOutlined,
  AccountBalanceOutlined,
  AppsOutlined,
  PersonOutline,
  HomeOutlined
} from "@mui/icons-material";

// Register ChartJS components
ChartJS.register(
  ...registerables,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTooltip,
  Legend
);

// Create Context
const GeneralContext = createContext();

// Menu Component
const DashboardMenu = () => {
  const theme = useTheme();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const menuItems = [
    { icon: <ShowChartOutlined />, label: 'Dashboard', path: '/dashboard' },
    { icon: <ReceiptLongOutlined />, label: 'Orders', path: '/dashboard/orders' },
    { icon: <AccountBalanceWalletOutlined />, label: 'Holdings', path: '/dashboard/holdings' },
    { icon: <ShowChartOutlined />, label: 'Positions', path: '/dashboard/positions' },
    { icon: <AccountBalanceOutlined />, label: 'Funds', path: '/dashboard/funds' },
    { icon: <AppsOutlined />, label: 'Apps', path: '/dashboard/apps' },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const index = menuItems.findIndex(item => currentPath === item.path);
    setSelectedMenu(index >= 0 ? index : 0);
  }, [location]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            textDecoration: 'none',
            color: selectedMenu === index ? theme.palette.primary.main : '#666',
            backgroundColor: selectedMenu === index ? '#f0f0f0' : 'transparent',
            borderRadius: '4px',
            gap: '8px'
          }}
          onClick={() => setSelectedMenu(index)}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
      <div ref={profileRef} style={{ position: 'relative', marginLeft: 'auto' }}>
        <PersonOutline
          style={{ cursor: 'pointer' }}
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        />
      </div>
    </div>
  );
};

// Chart data
const portfolioDistributionData = {
  labels: ['Stocks', 'Mutual Funds', 'ETFs', 'Bonds', 'Cash'],
  datasets: [
    {
      data: [45, 25, 15, 10, 5],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const stockPerformanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Portfolio Value',
      data: [15000, 15500, 16200, 16800, 16500, 17200, 18000, 18500, 19200, 19800, 20500, 21000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Market Index',
      data: [15000, 15300, 15800, 16100, 16400, 16800, 17200, 17800, 18300, 18800, 19200, 19800],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
      fill: true
    }
  ]
};

// Mock data (replace with your actual data)
const watchlist = [
  { 
    name: "RELIANCE", 
    price: 2500.45, 
    change: 25.30,
    changePercent: 1.02,
    open: 2475.15,
    high: 2515.30,
    low: 2470.20,
    volume: "5.2M",
    marketCap: "15.8T",
    pe: 22.5,
    dividend: 1.2
  },
  { 
    name: "TCS", 
    price: 3400.80, 
    change: -15.20,
    changePercent: -0.45,
    open: 3416.00,
    high: 3425.50,
    low: 3395.60,
    volume: "2.8M",
    marketCap: "12.4T",
    pe: 28.3,
    dividend: 2.5
  },
  { 
    name: "HDFCBANK", 
    price: 1600.25, 
    change: 8.45,
    changePercent: 0.53,
    open: 1591.80,
    high: 1605.40,
    low: 1588.75,
    volume: "4.1M",
    marketCap: "8.9T",
    pe: 19.8,
    dividend: 1.8
  },
  { 
    name: "INFY", 
    price: 1450.60, 
    change: -5.80,
    changePercent: -0.40,
    open: 1456.40,
    high: 1458.90,
    low: 1448.20,
    volume: "3.5M",
    marketCap: "6.2T",
    pe: 24.6,
    dividend: 2.8
  },
  { 
    name: "ICICIBANK", 
    price: 950.30, 
    change: 12.40,
    changePercent: 1.32,
    open: 937.90,
    high: 952.80,
    low: 936.50,
    volume: "6.8M",
    marketCap: "6.6T",
    pe: 18.2,
    dividend: 1.5
  },
];

// TopBar Component
const TopBar = () => {
  return (
    <div style={{
      padding: "15px 20px",
      backgroundColor: "#fff",
      borderBottom: "1px solid #eaeaea",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link 
          to="/"
          style={{ 
            textDecoration: 'none', 
            color: '#1976d2',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginRight: '20px',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
        >
          <HomeOutlined />
          <span>Home</span>
        </Link>
        <div>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>NIFTY 50</p>
          <p style={{ margin: 0, fontWeight: "500" }}>19,425.35 <span style={{ color: "green" }}>+0.45%</span></p>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>SENSEX</p>
          <p style={{ margin: 0, fontWeight: "500" }}>64,832.20 <span style={{ color: "green" }}>+0.52%</span></p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span style={{ fontSize: "0.9rem", color: "#666" }}>Welcome, User</span>
      </div>
    </div>
  );
};

// WatchList Component
const WatchList = () => {
  const stocks = watchlist;
  const [selectedStock, setSelectedStock] = useState(null);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [tradeType, setTradeType] = useState('buy');
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const stockPerformanceData = {
    labels: ['9:15', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '15:30'],
    datasets: [
      {
        label: 'Stock Price',
        data: selectedStock ? [
          selectedStock.open,
          selectedStock.open * 1.002,
          selectedStock.open * 0.998,
          selectedStock.open * 1.005,
          selectedStock.open * 1.003,
          selectedStock.open * 1.008,
          selectedStock.open * 1.01,
          selectedStock.price
        ] : [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const handleTrade = (stock, type) => {
    setSelectedStock(stock);
    setTradeType(type);
    setShowTradeModal(true);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Market Watch</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee', backgroundColor: '#f5f5f5' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', width: '25%' }}>Stock</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', width: '20%' }}>Price</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', width: '25%' }}>Change</th>
              <th style={{ textAlign: 'right', padding: '12px 32px', width: '30%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr 
                key={index} 
                style={{ 
                  borderBottom: '1px solid #eee',
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafafa'
                }}
              >
                <td style={{ padding: '12px 8px', fontWeight: 500 }}>{stock.name}</td>
                <td style={{ textAlign: 'right', padding: '12px 8px' }}>
                  ₹{stock.price.toFixed(2)}
                </td>
                <td 
                  style={{ 
                    textAlign: 'right', 
                    padding: '12px 8px',
                    color: stock.change >= 0 ? '#4caf50' : '#f44336'
                  }}
                >
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                  <br />
                  <span style={{ fontSize: '0.8rem' }}>
                    ({stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                  </span>
                </td>
                <td style={{ textAlign: 'right', padding: '12px 32px' }}>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => {
                        setSelectedStock(stock);
                        setShowDetailModal(true);
                      }}
                      style={{
                        padding: '4px 12px',
                        backgroundColor: '#2196f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      More
                    </button>
                    <button
                      onClick={() => handleTrade(stock, 'buy')}
                      style={{
                        padding: '4px 12px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      Buy
                    </button>
                    <button
                      onClick={() => handleTrade(stock, 'sell')}
                      style={{
                        padding: '4px 12px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      Sell
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDetailModal && selectedStock && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '8px',
            width: '800px',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0 }}>{selectedStock.name}</h2>
              <button
                onClick={() => setShowDetailModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '2rem' }}>₹{selectedStock.price.toFixed(2)}</h3>
                  <span style={{ 
                    color: selectedStock.change >= 0 ? '#4caf50' : '#f44336',
                    fontSize: '1.1rem'
                  }}>
                    {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change.toFixed(2)} 
                    ({selectedStock.change >= 0 ? '+' : ''}{selectedStock.changePercent.toFixed(2)}%)
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      handleTrade(selectedStock, 'buy');
                    }}
                    style={{
                      padding: '8px 24px',
                      backgroundColor: '#4caf50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 500
                    }}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      handleTrade(selectedStock, 'sell');
                    }}
                    style={{
                      padding: '8px 24px',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 500
                    }}
                  >
                    Sell
                  </button>
                </div>
              </div>

              <div style={{ height: '300px', marginBottom: '24px' }}>
                <Line 
                  data={stockPerformanceData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false
                      },
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            return `Price: ₹${context.parsed.y.toFixed(2)}`;
                          }
                        }
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: false,
                        ticks: {
                          callback: function(value) {
                            return '₹' + value.toFixed(2);
                          }
                        }
                      }
                    }
                  }}
                />
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '16px',
                backgroundColor: '#f5f5f5',
                padding: '16px',
                borderRadius: '8px'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', color: '#666' }}>Today's Trading</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px' }}>
                    <span style={{ color: '#666' }}>Open:</span>
                    <span style={{ textAlign: 'right' }}>₹{selectedStock.open.toFixed(2)}</span>
                    <span style={{ color: '#666' }}>High:</span>
                    <span style={{ textAlign: 'right' }}>₹{selectedStock.high.toFixed(2)}</span>
                    <span style={{ color: '#666' }}>Low:</span>
                    <span style={{ textAlign: 'right' }}>₹{selectedStock.low.toFixed(2)}</span>
                    <span style={{ color: '#666' }}>Volume:</span>
                    <span style={{ textAlign: 'right' }}>{selectedStock.volume}</span>
                  </div>
                </div>

                <div>
                  <h4 style={{ margin: '0 0 8px 0', color: '#666' }}>Key Metrics</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px' }}>
                    <span style={{ color: '#666' }}>Market Cap:</span>
                    <span style={{ textAlign: 'right' }}>₹{selectedStock.marketCap}</span>
                    <span style={{ color: '#666' }}>P/E Ratio:</span>
                    <span style={{ textAlign: 'right' }}>{selectedStock.pe.toFixed(2)}</span>
                    <span style={{ color: '#666' }}>Dividend:</span>
                    <span style={{ textAlign: 'right' }}>{selectedStock.dividend.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTradeModal && selectedStock && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '8px',
            width: '400px'
          }}>
            <h3 style={{ margin: '0 0 16px 0' }}>
              {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedStock.name}
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ margin: '4px 0' }}><strong>Current Price:</strong> ₹{selectedStock.price.toFixed(2)}</p>
              <p style={{ margin: '4px 0' }}><strong>Day's Range:</strong> ₹{selectedStock.low.toFixed(2)} - ₹{selectedStock.high.toFixed(2)}</p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>Quantity</label>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowTradeModal(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#f5f5f5',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const action = tradeType === 'buy' ? 'purchased' : 'sold';
                  const total = (quantity * selectedStock.price).toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR'
                  });
                  setToastMessage(
                    `Successfully ${action} ${quantity} ${quantity === 1 ? 'share' : 'shares'} of ${selectedStock.name} for ${total}`
                  );
                  setShowToast(true);
                  setShowTradeModal(false);
                  setQuantity(1);
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: tradeType === 'buy' ? '#4caf50' : '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Confirm {tradeType === 'buy' ? 'Purchase' : 'Sale'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Snackbar
        open={showToast}
        autoHideDuration={5000}
        onClose={() => setShowToast(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setShowToast(false)} 
          severity="success" 
          variant="filled"
          sx={{ 
            width: '100%',
            backgroundColor: tradeType === 'buy' ? '#4caf50' : '#f44336',
            '& .MuiAlert-icon': {
              color: 'white'
            },
            '& .MuiAlert-message': {
              color: 'white'
            }
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

// Summary Component
const Summary = () => {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '4px', padding: '20px' }}>
      <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem' }}>Summary</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Portfolio Value</p>
          <p style={{ margin: '5px 0', fontSize: '1.2rem', fontWeight: '500' }}>₹1,25,000</p>
        </div>
        <div>
          <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Today's P&L</p>
          <p style={{ margin: '5px 0', fontSize: '1.1rem', color: 'green' }}>+₹2,500 (+2.04%)</p>
        </div>
      </div>
    </div>
  );
};

// Orders Component
const Orders = () => (
  <div style={{ padding: '20px' }}>
    <h2>Orders</h2>
    <p>Your order history will appear here.</p>
  </div>
);

// Holdings Component
const Holdings = () => (
  <div style={{ padding: '20px' }}>
    <h2>Holdings</h2>
    <p>Your holdings and investments will appear here.</p>
  </div>
);

// Positions Component
const Positions = () => (
  <div style={{ padding: '20px' }}>
    <h2>Positions</h2>
    <p>Your current market positions will appear here.</p>
  </div>
);

// Funds Component
const Funds = () => (
  <div style={{ padding: '20px' }}>
    <h2>Funds</h2>
    <p>Your funds and balance information will appear here.</p>
  </div>
);

// Apps Component
const Apps = () => (
  <div style={{ padding: '20px' }}>
    <h2>Apps</h2>
    <p>Additional trading apps and tools will appear here.</p>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ 
        backgroundColor: '#fff', 
        borderBottom: '1px solid #eaeaea',
        padding: '0 20px'
      }}>
        <TopBar />
        <DashboardMenu />
      </div>
      
      <Box sx={{ flex: 1, py: 2 }}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ flex: 1, minWidth: '300px' }}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                      <GeneralContext.Provider value={{}}>
                        <WatchList />
                      </GeneralContext.Provider>
                    </Paper>
                  </Box>
                  <Box sx={{ width: { xs: '100%', md: 350 } }}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                      <Summary />
                    </Paper>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ flex: 1, minWidth: '300px' }}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                      <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem' }}>Portfolio Distribution</h3>
                      <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
                        <Doughnut 
                          data={portfolioDistributionData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: 'bottom',
                              },
                            },
                          }}
                        />
                      </div>
                    </Paper>
                  </Box>
                  <Box sx={{ flex: 1, minWidth: '300px' }}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                      <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem' }}>Portfolio Performance</h3>
                      <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
                        <Line 
                          data={stockPerformanceData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: 'top',
                              },
                              tooltip: {
                                callbacks: {
                                  label: function(context) {
                                    return `${context.dataset.label}: ₹${context.parsed.y.toLocaleString()}`;
                                  }
                                }
                              }
                            },
                            scales: {
                              y: {
                                beginAtZero: false,
                                ticks: {
                                  callback: function(value) {
                                    return '₹' + value.toLocaleString();
                                  }
                                }
                              }
                            }
                          }}
                        />
                      </div>
                    </Paper>
                  </Box>
                </Box>
              </Box>
            } />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </Container>
      </Box>
    </div>
  );
};

export default Dashboard;
