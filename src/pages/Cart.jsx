import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 90rem;
  margin: 120px auto 60px;
  padding: 0 2rem;
  min-height: calc(100vh - 180px);
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem;
    text-align: center;
    }
    `;
    
    const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
    margin-left:5rem;
    @media (max-width: 768px) {
    font-size: 2rem;
    margin-left:0rem;
    }
    `;
    
    const CartContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
   margin-left:5rem;
     @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for mobile */
    gap: 1rem;
     margin-left:0rem;
  }
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr auto;
  gap: 2rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 1rem;
    & > *:not(:first-child):not(:nth-child(2)) {
      grid-column: 2;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductName = styled(Link)`
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
     @media (max-width: 768px) {
    font-size: 0.9rem;
    font-weight:bold;
  }
`;

const ProductSize = styled.span`
  color: #666;
  font-size: .7rem;
  font-weight:bold;
`;

const Price = styled.span`
  font-weight: bold;
  color: #000;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const QuantityButton = styled.button`
  padding: 0.5rem;
  background: black;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

const Quantity = styled.span`
  font-size: 1rem;
  min-width: 30px;
  text-align: center;
   font-weight: bold;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 0.5rem;
   font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #ff0000;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

const Summary = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
     @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CheckoutButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
     @media (max-width: 768px) {
    font-size: 0.7rem;
    font-weight: bold;
  }
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage
    const loadCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(cart);
      calculateTotal(cart);
    };

    loadCart();

    // Listen for cart updates
    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  const updateQuantity = (index, delta) => {
    const newCart = [...cartItems];
    const newQuantity = newCart[index].quantity + delta;
    
    if (newQuantity > 0) {
      newCart[index].quantity = newQuantity;
      setCartItems(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      calculateTotal(newCart);
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
  };

  const removeItem = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    calculateTotal(newCart);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  if (cartItems.length === 0) {
    return (
      <Container>
        <Title>Shopping Cart</Title>
        <CartContainer>
          <EmptyCart>
            <h2>Your cart is empty</h2>
            <p>Add some items to your cart to get started!</p>
          </EmptyCart>
        </CartContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <CartContainer>
        {cartItems.map((item, index) => (
          <CartItem key={`${item.id}-${item.size}`}>
            <ImageContainer>
              <Image src={item.image} alt={item.name} />
            </ImageContainer>
            
            <ProductInfo>
              <ProductName to={`/product/${item.id}`}>{item.name}</ProductName>
              <ProductSize>Size: {item.size}</ProductSize>
            </ProductInfo>

            <Price>₹{item.price.toLocaleString()}</Price>

            <QuantityControl>
              <QuantityButton onClick={() => updateQuantity(index, -1)}>-</QuantityButton>
              <Quantity>{item.quantity}</Quantity>
              <QuantityButton onClick={() => updateQuantity(index, 1)}>+</QuantityButton>
            </QuantityControl>

            <RemoveButton onClick={() => removeItem(index)}>Remove</RemoveButton>
          </CartItem>
        ))}

        <Summary>
          <Total>Total: ₹{total.toLocaleString()}</Total>
          <CheckoutButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proceed to Checkout
          </CheckoutButton>
        </Summary>
      </CartContainer>
    </Container>
  );
};

export default Cart;
