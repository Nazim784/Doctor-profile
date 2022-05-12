import React from 'react';
import chair from '../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
  return (
    <div class=" bg hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse space-x-8 space-x-reverse ">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Your new smile starts here</h1>
          <p class="py-6 text ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary font-bold text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;