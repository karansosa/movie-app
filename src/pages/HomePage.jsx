// src/pages/HomePage.js
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import GenreList from '../components/GenreList';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <AboutSection /> 
      <GenreList />
      <Footer />
    </div>
  );
};

export default HomePage;
