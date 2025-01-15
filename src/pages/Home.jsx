import React from 'react';
import styled from 'styled-components';
import Hero from '../components/home/Hero';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
};

export default Home;
