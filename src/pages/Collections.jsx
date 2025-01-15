import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { collections } from '../data/featured-products';
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
    font-size: 1rem;
     margin-left:0rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
   margin-left:5rem;
     @media (max-width: 768px) {
       margin-left:0rem;
     }
`;

const Tab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.active ? '#000' : '#fff'};
  color: ${props => props.active ? '#fff' : '#000'};
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  

  &:hover {
    transform: translateY(-2px);
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

const CollectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin: 2rem 0;
  text-transform: capitalize;
  text-align: center;
   margin-left:5rem;
     @media (max-width: 768px) { 
     margin-left:0rem;}
`;

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState('all');
  const collectionTypes = ['all', ...Object.keys(collections)];

  const getCollectionProducts = () => {
    if (activeCollection === 'all') {
      return Object.values(collections).flat();
    }
    return collections[activeCollection] || [];
  };

  return (
    <Container>
      <Title>Collections</Title>
      <Subtitle>Explore our carefully curated collections</Subtitle>
      
      <Tabs>
        {collectionTypes.map(type => (
          <Tab
            key={type}
            active={activeCollection === type}
            onClick={() => setActiveCollection(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type}
          </Tab>
        ))}
      </Tabs>

      {activeCollection === 'all' ? (
        Object.entries(collections).map(([type, products]) => (
          <div key={type}>
            <CollectionTitle>{type}</CollectionTitle>
            <ProductGrid>
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </div>
        ))
      ) : (
        <ProductGrid>
          {getCollectionProducts().map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}
    </Container>
  );
};

export default Collections;
