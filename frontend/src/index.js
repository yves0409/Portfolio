import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'



import App from './App';
import GlobalStyle from "./styles/GlobalStyle"

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <Router>
    <App />
    </Router>
  
  </Provider>,
  document.getElementById('root')
);


