import React from 'react';
import Dashboard from './analytics/Dashboard';
import TrafficSources from './analytics/TrafficSources';

function Analytics(props) {

  return (
    <div>
      <Dashboard />
      <TrafficSources />
    </div>
  );
}

export default Analytics;
