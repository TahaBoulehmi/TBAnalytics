import React, { useState } from 'react';
import './App.css';
import context from './context/context.js';

const DataContext = React.createContext(context);

class App extends React.Component {
  render() {
    // In this example, we're passing "dark" as the current value.
    return (
      <DataContext.Provider>
        <p>
          Hello World
        </p>
      </DataContext.Provider>
    );
  }
}


export default App;
