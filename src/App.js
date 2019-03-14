import React from 'react';
import './App.css';

//importing components
import Form from './components/Form.js';
import Analytics from './components/Form.js';

//importing config files
import data from './context/context.js';
import config from './config/config.js';

const DataContext = React.createContext(data);
const ConfigContext = React.createContext(config);

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = data;
  }

  render() {
    // In this example, we're passing "dark" as the current value.
    const output = this.state.SiteName? <Analytics /> : <Form /> ;
    return (
      <DataContext.Provider value={data}>
        <ConfigContext.Provider value={config}>
          <p>
            {output}
          </p>
        </ConfigContext.Provider>
      </DataContext.Provider>
    );
  }
}

export default App;
