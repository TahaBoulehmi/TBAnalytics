import React, { useState } from 'react';
import { Form  as BootstrapForm} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import CONFIG from './../config/config.js'; //contains the api url
const axios = require('axios');


function Form() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [foundData, setFoundData] = useState(false);

  function fetchData(websiteUrl) { //Fetching the data
    setIsLoading(true);
    setFormSubmitted(false);

    axios.get(CONFIG.API + websiteUrl)
      .then(response => {
        console.log("resp");
        console.log(response);
        setFoundData(true);
        setFormSubmitted(true);
        setIsLoading(false);
      })
      .catch(error => {
        setFoundData(false);
        setFormSubmitted(true);
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <BootstrapForm>
      <BootstrapForm.Group controlId="formBasicUrl">
        <BootstrapForm.Label>Website Url</BootstrapForm.Label>
        <BootstrapForm.Control value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)} type="url" placeholder="Enter website url" />
        <BootstrapForm.Text className="text-muted">
          We'll never save your entered inputs anywhere.
        </BootstrapForm.Text>
      </BootstrapForm.Group>
      <Button onClick={() => fetchData(websiteUrl)} variant="primary" type="submit">
        Submit
      </Button>
      {(websiteUrl !== '' && !foundData && formSubmitted) ?
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Data not found for this website url!
        </p>
      </Alert> : null}
    </BootstrapForm>
  );
}

export default Form;
