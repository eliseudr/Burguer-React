import './App.css';
import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurguerBuilder from './Containers/BurguerBuilder/BurguerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurguerBuilder />
      </Layout>
    </div>
  );
}

export default App;
