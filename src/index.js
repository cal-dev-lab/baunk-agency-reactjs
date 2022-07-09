import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";

import client from "./utils/apolloClient";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>
);