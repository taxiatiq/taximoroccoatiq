import React, { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import ServiceFeatures from '../components/home/ServiceFeatures';
import ServiceAreas from '../components/home/ServiceAreas';
import AirportService from '../components/home/AirportService';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Taxi Morocco - Service de taxi professionnel au Maroc';
  }, []);

  return (
    <>
      <Hero />
      <ServiceFeatures />
      <AirportService />
      <ServiceAreas />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;