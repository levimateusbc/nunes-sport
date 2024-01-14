// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, Login, RegisterProduct } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
              <Route index element={<HomePage />} />
              <Route path="/register-product" element={<RegisterProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
