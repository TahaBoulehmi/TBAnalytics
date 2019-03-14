import React from 'react';
import './App.css';
import data from './context/context.js';
import config from './config/config.js';

const DataContext = React.createContext(data);
const ConfigContext = React.createContext(config);

class App extends React.Component {
  render() {
    // In this example, we're passing "dark" as the current value.
    return (
      <DataContext.Provider value={data}>
        <ConfigContext.Provider value={config}>
          <p>
            Hello World
          </p>
        </ConfigContext.Provider>
      </DataContext.Provider>
    );
  }
}

export default App;
