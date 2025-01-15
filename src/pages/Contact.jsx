import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { storeDetails } from '../data/products';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Section = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #444;
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
  color: #666;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "•";
    color: #ff4444;
  }
`;

const BusinessHours = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Day = styled.span`
  font-weight: 500;
  color: #444;
`;

const Hours = styled.span`
  color: #666;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Grid>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SubTitle>Store Location</SubTitle>
          <Text>{storeDetails.name}</Text>
          <Text>Owner: {storeDetails.owner}</Text>
          <Text>{storeDetails.address.street}</Text>
          <Text>{storeDetails.address.landmark}</Text>
          <Text>{storeDetails.address.city}, {storeDetails.address.area}</Text>
          <Text>{storeDetails.address.state}, {storeDetails.address.country}</Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SubTitle>Contact Information</SubTitle>
          <Text>Mobile: {storeDetails.contact.mobile}</Text>
          <Text>WhatsApp: {storeDetails.contact.whatsapp}</Text>
          <Text>Email: {storeDetails.contact.email}</Text>
          <SubTitle style={{ marginTop: '2rem' }}>Follow Us</SubTitle>
          <Text>Facebook: {storeDetails.socialMedia.facebook}</Text>
          <Text>Instagram: {storeDetails.socialMedia.instagram}</Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SubTitle>Business Hours</SubTitle>
          <BusinessHours>
            <Day>Monday:</Day><Hours>{storeDetails.businessHours.monday}</Hours>
            <Day>Tuesday:</Day><Hours>{storeDetails.businessHours.tuesday}</Hours>
            <Day>Wednesday:</Day><Hours>{storeDetails.businessHours.wednesday}</Hours>
            <Day>Thursday:</Day><Hours>{storeDetails.businessHours.thursday}</Hours>
            <Day>Friday:</Day><Hours>{storeDetails.businessHours.friday}</Hours>
            <Day>Saturday:</Day><Hours>{storeDetails.businessHours.saturday}</Hours>
            <Day>Sunday:</Day><Hours>{storeDetails.businessHours.sunday}</Hours>
          </BusinessHours>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SubTitle>Our Services</SubTitle>
          <List>
            {storeDetails.services.map((service, index) => (
              <ListItem key={index}>{service}</ListItem>
            ))}
          </List>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SubTitle>Payment Methods</SubTitle>
          <List>
            {storeDetails.paymentMethods.map((method, index) => (
              <ListItem key={index}>{method}</ListItem>
            ))}
          </List>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SubTitle>Store Features</SubTitle>
          <List>
            {storeDetails.features.map((feature, index) => (
              <ListItem key={index}>{feature}</ListItem>
            ))}
          </List>
        </Section>
      </Grid>
    </ContactContainer>
  );
};

export default Contact;
