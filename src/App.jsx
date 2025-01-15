import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NewArrivals from './pages/NewArrivals';
import Collections from './pages/Collections';
import About from './pages/About';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
