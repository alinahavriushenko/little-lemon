import React from 'react';
import CallToAction from '../assets/components/CallToAction';
import Testimonials from '../assets/components/Testimonials';
import Chicago from '../assets/components/Chicago';
import WeeksSpecials from '../assets/components/WeeksSpecials';

const Home = () => {
  return (
    <div>
    <CallToAction />
    <WeeksSpecials />
    <Testimonials />
    <Chicago />
    </div>
  )
};

export default Home;