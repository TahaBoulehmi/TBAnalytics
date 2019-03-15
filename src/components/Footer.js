import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import DataContext from './../context/Context.js';

function Footer() {
  return (
    <DataContext.Consumer>
      {({data, updateData}) => (
        <footer className="footer">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home" onClick={() => updateData({})}>TBAnalytics</Navbar.Brand>
            <Nav className="mr-auto hide-in-mobile">
              <Nav.Link href="#home" onClick={() => updateData({})}>Retest</Nav.Link>
              <Nav.Link href="https://github.com/TahaBoulehmi/TBAnalytics" target="_blank">Contribute</Nav.Link>
              <Nav.Link href="https://www.btaha.com" target="_blank">Developed By Taha Boulehmi</Nav.Link>
            </Nav>
            <a href="mailto:contact@btaha.com" inline="true">
              <Button variant="outline-light">Contact</Button>
            </a>
          </Navbar>
        </footer>
      )}
    </DataContext.Consumer>
  );
}

export default Footer;
