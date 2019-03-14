import React from 'react';

//importing components
import Form from './Form.js';
import Analytics from './Analytics.js';
import Header from './Header.js';

import DataContext from './../context/Context.js';

function View() {
  return (
    <DataContext.Consumer>
      {({data, updateData}) => (
        <div>
          <Header />
          {data.SiteName? <Analytics data={data} /> : <Form />}
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default View;
