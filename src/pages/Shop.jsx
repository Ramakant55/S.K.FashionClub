import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import { collections } from '../data/featured-products';

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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {  
    font-size: 1rem;
  }
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Enable wrapping for multiple rows */
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-center; /* Align to the start on mobile */
    gap: 0.5rem; /* Reduce gap for compact spacing */
    padding: 0;
  }
`;

const CategoryButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: none;
  margin-left:2rem;
  background: ${props => (props.active ? '#000' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem; /* Adjust padding for smaller screens */
    font-size: 0.9rem; /* Adjust font size for mobile */
    margin-left:4px;
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

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', ...Object.keys(collections)];

  const getFilteredProducts = () => {
    if (activeCategory === 'all') {
      return Object.values(collections).flat();
    }
    return collections[activeCategory] || [];
  };

  return (
    <Container>
      <Title>Shop</Title>
      <Subtitle>Explore our latest collection of premium clothing</Subtitle>

      <FiltersContainer>
        <CategoryContainer>
          {categories.map(category => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))}
        </CategoryContainer>
      </FiltersContainer>

      <ProductGrid>
        {getFilteredProducts().map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
};

export default Shop;
