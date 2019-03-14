import React from 'react';

//importing components
import Form from './Form.js';
import Analytics from './Form.js';

function View() {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  static contextType = DataContext;

  render() {
    return this.context.SiteName? <Analytics /> : <Form /> ;
  }
}

export default View;
