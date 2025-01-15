import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { collections, newArrivals } from '../data/featured-products';

const Container = styled.div`
  max-width: 1200px;
  margin: 120px auto 60px;
  padding: 0 2rem;
  min-height: calc(100vh - 180px);
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 125%;
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

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;
`;

const Brand = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

const SizeContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SizeButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: ${props => props.selected ? '#000' : '#fff'};
  color: ${props => props.selected ? '#fff' : '#000'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const AddToCartButton = styled(motion.button)`
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
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff4444;
  padding: 2rem;
  font-size: 1.2rem;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find product in all collections and new arrivals
    const findProduct = () => {
      let foundProduct = null;
      
      // Check in new arrivals
      foundProduct = newArrivals.find(p => p.id === id);
      if (foundProduct) return foundProduct;

      // Check in all collections
      for (const collection of Object.values(collections)) {
        foundProduct = collection.find(p => p.id === id);
        if (foundProduct) return foundProduct;
      }

      return null;
    };

    const product = findProduct();
    if (product) {
      setProduct(product);
      setError(null);
    } else {
      setError('Product not found');
    }
    setLoading(false);
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1
    };

    // Get existing cart
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if item already exists
    const existingItemIndex = existingCart.findIndex(
      item => item.id === cartItem.id && item.size === cartItem.size
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Add new item if it doesn't exist
      existingCart.push(cartItem);
    }

    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Dispatch custom event for cart update
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  if (loading) {
    return (
      <Container>
        <div>Loading...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <ErrorMessage>Product not found</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.image} alt={product.name} />
        </ImageContainer>
        <Details>
          <Title>{product.name}</Title>
          <Brand>{product.brand}</Brand>
          <Price>₹{product.price.toLocaleString()}</Price>
          
          <div>
            <h3>Select Size</h3>
            <SizeContainer>
              {['S', 'M', 'L', 'XL'].map(size => (
                <SizeButton
                  key={size}
                  selected={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeContainer>
          </div>

          <AddToCartButton
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </AddToCartButton>
        </Details>
      </ProductContainer>
    </Container>
  );
};

export default ProductDetail;
