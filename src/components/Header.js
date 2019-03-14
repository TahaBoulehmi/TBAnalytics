import React from 'react';
import {Navbar} from 'react-bootstrap';
import DataContext from './../context/Context.js';

function Header() {
  return (
    <DataContext.Consumer>
      {({data, updateData}) => (
        <header>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" onClick={() => updateData({})}>
              <img
                alt="/"
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' TBAnalytics'}
            </Navbar.Brand>
          </Navbar>
          <br /><br/>
        </header>
      )}
    </DataContext.Consumer>
  );
}

export default Header;
