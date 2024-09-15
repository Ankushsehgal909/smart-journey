import React from 'react';
// import { FaMapLocationDot } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
// import { tripData } from '@/constants/options';

function TripDetail() {
  const tripData = useSelector((state) => state.result.result);
  console.log(tripData);

  return (
    <div className='flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 gap-8 bg-gray-50'>
      {/* Trip Image */}
      <div className='flex items-center justify-center'>
        <img src="/main.jpg" alt="Trip Overview" className='rounded-lg w-full md:w-10/12 lg:w-8/12 object-cover shadow-lg border-4 border-blue-200' />
      </div>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 text-center mb-6'>Your Trip Plan Awaits</h1>

      {/* Hotel Recommendations */}
      <div className='flex flex-col'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>Recommended Hotels</h2>
        <div className='flex flex-wrap gap-4'>
          {tripData.hotels.map((item, index) => (
            <div key={index} className='flex flex-col w-full sm:w-72 border border-gray-300 rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105'>
              <img className='w-full h-48 object-cover rounded-t-lg' src="/hotel.jpg" alt={item.name} />
              <div className='flex flex-col mt-4'>
                <h2 className='text-base md:text-lg font-semibold text-gray-900'>{item.name}</h2>
                <p className='text-xs md:text-sm text-gray-600 mt-1'>Ticket Price: <span className='font-medium'>{item.price}</span></p>
                <p className='text-xs md:text-sm text-gray-600 mt-1'>Rating: <span className='font-medium'>{item.rating}</span></p>
                <Button className='flex items-center mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300'>
                  {/* <FaMapLocationDot className='mr-2' /> */}
                  <span className='text-xs md:text-sm'>View Location</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Itinerary Plan */}
      <div className='flex flex-col gap-6'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>Daily Itinerary</h2>
        {tripData.itinerary.map((item, index) => (
          <div key={index} className='flex flex-col sm:flex-row border rounded-lg border-gray-300 bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-center bg-blue-100 w-full sm:w-32 h-24 sm:h-full rounded-tl-lg sm:rounded-tl-none md:rounded-tl-lg'>
              <h2 className='text-2xl sm:text-3xl text-gray-700 font-extrabold'>{item.day}</h2>
            </div>
            <div className='flex flex-col p-4 sm:p-6'>
              {item.plan.map((data, key) => (
                <div key={key} className='mb-4 sm:mb-6 border-b border-gray-200 pb-4'>
                  <h3 className='text-sm sm:text-lg font-semibold text-gray-900'>Best Time to Visit: <span className='font-medium'>{data.time}</span></h3>
                  <h4 className='text-xs sm:text-md font-semibold mt-1'>Place: <span className='text-gray-700'>{data.place}</span></h4>
                  <p className='text-xs sm:text-sm text-gray-600 mt-1'>About the Place: <span className='font-medium'>{data.details}</span></p>
                  <p className='text-xs sm:text-sm font-semibold mt-1'>Ticket Price: <span className='text-gray-700'>{data.ticket_pricing}</span></p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripDetail;
