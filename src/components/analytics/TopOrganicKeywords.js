import React,  { useEffect } from 'react';
import PropTypes from 'prop-types';
import './TopOrganicKeywords.css';
import {Container, Row, Col} from 'react-bootstrap';
import pieChart from 'helpers/pieChart';

function TopOrganicKeywords(props) {
  // Similar to componentDidMount and componentDidUpdate:
  const topOrganicKeywords = [];
  Object.values(props.organicKeywords).forEach(function(obj) {
    topOrganicKeywords.push(obj.Keyword);
  });
  useEffect(() => {
    // Adding the D3Js graph using the browser's api
    pieChart(topOrganicKeywords);
  });

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <h3>Top Organic Keywords</h3>
          <div id="TopOrganicKeywords"></div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

TopOrganicKeywords.propTypes = {
  organicKeywords: PropTypes.array.isRequired,
};

export default TopOrganicKeywords;
