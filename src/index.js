import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './Redux/configureStore';
import App from './App';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
