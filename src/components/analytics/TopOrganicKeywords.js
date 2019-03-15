import React,  { useEffect } from 'react'
import './TopOrganicKeywords.css';
import {Container, Row, Col} from 'react-bootstrap';
import pieChart from 'helpers/pieChart';

function TopOrganicKeywords(props) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Adding the D3Js graph using the browser's api
    pieChart();
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

export default TopOrganicKeywords;
