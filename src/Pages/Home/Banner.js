import React from 'react';
import chair from '../../assets/images/chair.png'
import './Banner.css'
import ButtonPrimary from './ButtonPrimary';

const Banner = () => {
  return (
    <div className=" bg hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse space-x-8 space-x-reverse ">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your new smile starts here</h1>
          <p className="py-6 text ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Banner;