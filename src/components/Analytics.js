import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from './analytics/Dashboard';
import TopOrganicKeywords from './analytics/TopOrganicKeywords.js';

function Analytics(props) {

  return (
    <div>
      <Dashboard data={props.data} />
      <TopOrganicKeywords organicKeywords={props.data.TopOrganicKeywords} />
    </div>
  );
}

Analytics.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Analytics;
