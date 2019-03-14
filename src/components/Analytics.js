import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from './analytics/Dashboard';
import TrafficSources from './analytics/TrafficSources';

function Analytics(props) {

  return (
    <div>
      <Dashboard data={props.data} />
      <TrafficSources />
    </div>
  );
}

Analytics.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Analytics;
