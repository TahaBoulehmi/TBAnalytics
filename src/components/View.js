import React from 'react';

//importing components
import Form from './Form.js';
import Analytics from './Analytics.js';

import DataContext from './../context/Context.js';

function View() {
  return (
    <DataContext.Consumer>
      {({data, updateData}) => (
        data.SiteName? <Analytics /> : <Form />
      )}
    </DataContext.Consumer>
  );
}

export default View;
