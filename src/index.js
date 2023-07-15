import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './home.css';
import { BrowserRouter} from "react-router-dom"
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './mainpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Main/>
  </BrowserRouter>
);



