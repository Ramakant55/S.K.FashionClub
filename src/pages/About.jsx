import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 5rem 10%;
  background-color: #f9f9f9;
`;

const StoreInfo = styled.section`
  margin-bottom: 4rem;
`;

const ContactInfo = styled.section`
  margin-bottom: 4rem;
`;

const LocationInfo = styled.section`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
  @media (max-width: 768px){
  font-size:0.9rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <AboutContainer>
      <StoreInfo>
        <Title>About SK Fashion Club</Title>
        <Text>
          Welcome to SK Fashion Club, your premier destination for contemporary fashion and style. 
          Established in 2024, we've been dedicated to bringing you the latest trends and timeless 
          classics in clothing and accessories.
        </Text>
        <Text>
          Our carefully curated collection features everything from casual wear to formal attire, 
          ensuring that you'll find the perfect outfit for any occasion. We pride ourselves on 
          offering high-quality products from renowned brands at competitive prices.
        </Text>
      </StoreInfo>

      <ContactInfo>
        <Title>Contact Us</Title>
        <ContactGrid>
          <ContactCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Subtitle>Customer Service</Subtitle>
            <Text>Phone: +91 8708716386</Text>
            <Text>Email: support@skfashionclub.com</Text>
            <Text>Hours: Mon-Sat, 10:00 AM - 8:00 PM</Text>
          </ContactCard>

          <ContactCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Subtitle>Business Inquiries</Subtitle>
            <Text>Phone: +91 8708716386</Text>
            <Text>Email: business@skfashionclub.com</Text>
            <Text>Hours: Mon-Fri, 9:00 AM - 6:00 PM</Text>
          </ContactCard>
        </ContactGrid>
      </ContactInfo>

      <LocationInfo>
        <Title>Visit Our Store</Title>
        <Text>
          Main Showroom:
          <br />
          123 Fashion Street, Shopping Mall
          <br />
          City Center, Rajgarh - 331023
          <br />
          India
        </Text>
        <Text>
          Branch Locations:
          <br />
          - Fashion Hub Mall, West City
          <br />
          - Central Market, East City
          <br />
          - Premium Outlet, North City
        </Text>
      </LocationInfo>
    </AboutContainer>
  );
};

export default About;
