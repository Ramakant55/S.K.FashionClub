import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 100%;
  margin: 0 auto;
  @media (max-width:768px){
  width:250px;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 133%; /* 4:3 aspect ratio for better product visibility */
  overflow: hidden;
  background: #f8f8f8;
  border-radius: 8px 8px 0 0;
  `;
  
  const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  opacity: ${props => props.isLoaded ? 1 : 0}; 
  }
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 0.8rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Brand = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  margin: 0.4rem 0 0;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  padding: 0.8rem;
  background: #000;
  color: white;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #333;
  }
`;

const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardLink to={`/product/${id}`}>
        <ImageContainer>
          {!imageLoaded && !imageError && (
            <ImagePlaceholder>
              Loading...
            </ImagePlaceholder>
          )}
          {!imageError ? (
            <Image 
              src={image} 
              alt={name}
              isLoaded={imageLoaded}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <ImagePlaceholder>
              Image not available
            </ImagePlaceholder>
          )}
        </ImageContainer>
        <Content>
          <Title>{name}</Title>
          <Price>₹{price}</Price>
          <AddToCartButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Cart
          </AddToCartButton>
        </Content>
      </CardLink>
    </Card>
  );
};

export default ProductCard;
