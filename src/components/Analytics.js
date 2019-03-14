import React from 'react';
import Overview from './analytics/Overview';
import EstimatedMonthlyVisits from './analytics/EstimatedMonthlyVisits';
import TrafficSources from './analytics/TrafficSources';

function Analytics(props) {

  return (
    <div>
      <Overview />
      <EstimatedMonthlyVisits />
      <TrafficSources />
    </div>
  );
}

export default Analytics;
