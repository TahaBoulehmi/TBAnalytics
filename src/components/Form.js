import React, { useState } from 'react';
import { Form  as BootstrapForm} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import config from './../config/config.js'; //contains the api url


function Form() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [foundData, setFoundData] = useState(false);

  function fetchData(websiteUrl) { //Fetching the data
    setFormSubmitted(true);

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
