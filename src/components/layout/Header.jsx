import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background: ${(props) => (props.isScrolled ? 'white' : 'transparent')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: ${(props) => (props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)')};
  transition: background 0.3s, box-shadow 0.3s;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => (props.isScrolled ? '#000' : '#000')};
  text-decoration: none;
  transition: color 0.3s;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => (props.isScrolled ? '#000' : '#000')};
  transition: color 0.3s;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => (props.isScrolled ? '#333' : '#333')};
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  font-weight: bold;
  transition: color 0.3s;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2.5px;
    background: ${(props) => (props.isScrolled ? '#000' : '#000')};
    transition: width 0.4s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const CartLink = styled(Link)`
  color: ${(props) => (props.isScrolled ? '#333' : '#fff')};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background: #000;
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    return () => window.removeEventListener('cartUpdated', updateCartCount);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <Logo to="/" isScrolled={isScrolled}>
          S.K. Fashion Club
        </Logo>
        
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} isScrolled={isScrolled}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>

        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" isScrolled={isScrolled} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/shop" isScrolled={isScrolled} onClick={() => setIsMenuOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/new-arrivals" isScrolled={isScrolled} onClick={() => setIsMenuOpen(false)}>
            New Arrivals
          </NavLink>
          <NavLink to="/collections" isScrolled={isScrolled} onClick={() => setIsMenuOpen(false)}>
            Collections
          </NavLink>
          <NavLink to="/about" isScrolled={isScrolled} onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <CartLink to="/cart" onClick={() => setIsMenuOpen(false)} isScrolled={isScrolled}>
            🛒
            {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
          </CartLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
