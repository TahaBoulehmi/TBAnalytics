import React from 'react';
import './App.css';

//importing components
import View from './components/Form.js';

//importing config files
import data from './context/context.js';


//Creating  a global context
const DataContext = React.createContext(data);

class App extends React.Component {
  render() {
    return (
      <DataContext.Provider value={data}>
          <View />
      </DataContext.Provider>
    );
  }
}

export default App;
