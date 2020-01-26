import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {grey,lightBlue} from '@material-ui/core/colors';

window.axios = axios; //tak można testować axios z przeglądarki

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,{},composeEnhancers(applyMiddleware(reduxThunk)))

const greyTheme = createMuiTheme({
    palette: {
      primary: grey,
      secondary: lightBlue,
      background: {
        default: "#303030"
      },
    }
  });
//console.log(greyTheme)
ReactDOM.render(
    
      <ThemeProvider theme={greyTheme}>
        <Provider store={store}>
          <CssBaseline/>
          <App 
          />
        </Provider>  
      </ThemeProvider>,
     
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
