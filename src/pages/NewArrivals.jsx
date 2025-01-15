import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { newArrivals } from '../data/featured-products';
import ProductCard from '../components/products/ProductCard';

const Container = styled.div`
  width: 90rem;
  margin: 120px auto 60px;
  padding: 0 2rem;
  min-height: calc(100vh - 180px);
    @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem;
    text-align: start;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
   margin-left:5rem;
   @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-left:0rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
   margin-left:5rem;
     @media (max-width: 768px) {
      text-align:center;
    font-size: 1rem;
    margin-left:0rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  margin-left:5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for mobile */
    gap: 1rem;
     margin-left:0rem;
  }
`;

const NewArrivals = () => {
  return (
    <Container>
      <Title>New Arrivals</Title>
      <Subtitle>Check out our latest collection of premium clothing</Subtitle>
      <ProductGrid>
        {newArrivals.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
};

export default NewArrivals;
