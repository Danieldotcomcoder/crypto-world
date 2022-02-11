import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './Redux/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>    
      <Provider store={store}>
      <App />
      </Provider>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


