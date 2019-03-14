import React from 'react';
import './App.css';

//importing components
import View from './components/View.js';

//importing context files
import DataContext from 'context/Context.js';
import CONFIG from './config/Config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateData = (newData) => {
      this.setState(state => ({
        data: newData,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      data: CONFIG.CONTEXT.data,
      updateData: this.updateData,
    };
  }
  render() {
    return (
      <DataContext.Provider value={this.state}>
          <View />
      </DataContext.Provider>
    );
  }
}

export default App;
