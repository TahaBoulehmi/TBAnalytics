import React, { useState } from 'react';
import { Form  as BootstrapForm} from 'react-bootstrap';
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

import CONFIG from './../config/Config.js'; //contains the api url
import DataContext from './../context/Context.js';

import extractHostName from 'helpers/extractHostName.js';

const axios = require('axios');


function Form() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [foundData, setFoundData] = useState(false);

  function fetchData(websiteUrl, updateData) { //Fetching the data
    setIsLoading(true);
    setFormSubmitted(false);

    axios.get(CONFIG.API + websiteUrl)
      .then(response => {
        setFoundData(true);
        setFormSubmitted(true);
        setIsLoading(false);
        updateData(response.data); //updating the data using updateData function from the context
      })
      .catch(error => {
        setFoundData(false);
        setFormSubmitted(true);
        setIsLoading(false);
        updateData({}); //updating the data using updateData function from the context
      });
  }

  if (isLoading) {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col><p>Loading ...</p></Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }

  return (
    <DataContext.Consumer>
      {({data, updateData}) => (
        <Container>
          <Row>
            <Col lg={4} sm={1}></Col>
            <Col lg={4}>
              <BootstrapForm>
                <BootstrapForm.Group controlId="formBasicUrl">
                  <BootstrapForm.Label>Website Url</BootstrapForm.Label>
                  <BootstrapForm.Control value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)} type="url" placeholder="Enter website url" />
                  <BootstrapForm.Text className="text-muted">
                    We'll never save your entered inputs anywhere.
                  </BootstrapForm.Text>
                </BootstrapForm.Group>
                <Button onClick={(e) => {e.preventDefault(); fetchData(extractHostName(websiteUrl), updateData)}} variant="primary" type="submit">
                  Submit
                </Button>
                <p>{data.SiteName}</p>
                {(websiteUrl !== '' && !foundData && formSubmitted) ?
                <Alert dismissible variant="danger">
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p>
                    Data not found for this website url!
                  </p>
                </Alert> : null}
              </BootstrapForm>
            </Col>
            <Col lg={4} sm={1}></Col>
          </Row>
        </Container>
      )}
  </DataContext.Consumer>
  );
}

export default Form;
