import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Container from './Component/Layout/Container';
import Sidebars from './Component/Layout/Sidebar';
import Footer from './Component/Layout/Footer';

function App() {
  return (
    <Router>
      <Sidebars />
      <div className="main-content">
        <Navbar />
        <Container />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
