import React from 'react';
import CONFIG from './../config/Config.js';

//Creating a global context
const DataContext = React.createContext(CONFIG.CONTEXT);

export default DataContext;
