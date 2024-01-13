import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ManageProduct } from './pages';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manage-products" element={<ManageProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
