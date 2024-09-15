import React from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-56 py-8 gap-6 md:gap-9'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mt-8 md:mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Adventure With AI:</span> Personalized Itineraries At Your Fingertips
      </h2>
      <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 text-center'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget
      </p>
      <Link to={'/create-trip'}>
        <Button className='mt-4 md:mt-6'>Get started, It's free</Button>
      </Link>
    </div>
  );
}

export default Hero;
