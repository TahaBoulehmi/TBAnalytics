import React, { useState } from 'react';
import { Form  as BootstrapForm} from 'react-bootstrap';
import { Button, Alert } from 'react-bootstrap';

import CONFIG from './../config/Config.js'; //contains the api url
import DataContext from './../context/Context.js';

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
        console.log(response.data);
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
    return <p>Loading ...</p>;
  }

  return (
    <DataContext.Consumer>
      {({data, updateData}) => (
        <BootstrapForm>
          <BootstrapForm.Group controlId="formBasicUrl">
            <BootstrapForm.Label>Website Url</BootstrapForm.Label>
            <BootstrapForm.Control value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)} type="url" placeholder="Enter website url" />
            <BootstrapForm.Text className="text-muted">
              We'll never save your entered inputs anywhere.
            </BootstrapForm.Text>
          </BootstrapForm.Group>
          <Button onClick={(e) => {e.preventDefault(); fetchData(websiteUrl, updateData)}} variant="primary" type="submit">
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
      )}
  </DataContext.Consumer>
  );
}

export default Form;
