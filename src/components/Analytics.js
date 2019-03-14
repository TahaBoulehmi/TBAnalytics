import React from 'react';
import Dashboard from './analytics/Dashboard';
import EstimatedMonthlyVisits from './analytics/EstimatedMonthlyVisits';
import TrafficSources from './analytics/TrafficSources';

function Analytics(props) {

  return (
    <div>
      <Dashboard />
      <EstimatedMonthlyVisits />
      <TrafficSources />
    </div>
  );
}

export default Analytics;
