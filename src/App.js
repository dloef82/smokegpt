import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/restaurang" element={<RestaurantMenu />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
