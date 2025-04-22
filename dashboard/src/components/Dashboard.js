import React from "react";
import { Chart, registerables } from 'chart.js';
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

Chart.register(...registerables);

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: '1' }}>
          <GeneralContextProvider>
            <WatchList />
          </GeneralContextProvider>
        </div>
        <div style={{ width: '300px', alignSelf: 'flex-start' }}>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
