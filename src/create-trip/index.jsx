import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelelctBudgetOptions, SelelctTravelersList } from '@/constants/options';
import { chatSession } from '@/service/gemini';
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setResult } from '../store/resultSlice';
import { useNavigate } from 'react-router-dom';

function CreateTrip() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (name, value) => async (event) => {
    if (!value) value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const OnGenerateTrip = async () => {
    setLoader(true);

    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData.location)
      .replace("{totaldays}", formData.days)
      .replace('{travel}', formData.travelers)
      .replace('{budget}', formData.budget)
      .replace('{totaldays}', formData.days);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    dispatch(setResult(JSON.parse(result.response.text())));
    navigate('/view-trip');
    setLoader(false);
  };

  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-16 mt-10'>
      <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Tell us your travel preference</h2>
      <p className='mt-2 text-gray-600 text-lg md:text-xl lg:text-2xl'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className='mt-10 space-y-8'>
        <div>
          <h2 className='text-lg md:text-xl lg:text-2xl font-medium'>What is your destination of choice?</h2>
          <Input
            placeholder={'Enter address'}
            type="text"
            value={formData.location || ''}
            onChange={handleInputChange('location')}
            className='w-full mt-2'
          />
          <h2 className='text-lg md:text-xl lg:text-2xl font-medium mt-4'>How many days are you planning your trip?</h2>
          <Input
            placeholder={'Ex. 3'}
            type="number"
            onChange={handleInputChange('days')}
            className='w-full mt-2'
          />
        </div>
        
        <div>
          <h2 className='text-lg md:text-xl lg:text-2xl font-medium'>What is your budget?</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
            {SelelctBudgetOptions.map((item, index) => (
              <div key={index} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                ${formData?.budget === item.title ? 'shadow-lg border-black' : ''}`}
                onClick={handleInputChange('budget', item.title)}>
                <h2 className='text-3xl md:text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-base md:text-lg lg:text-xl'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-lg md:text-xl lg:text-2xl font-medium'>What do you plan on traveling with on your next adventure?</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
            {SelelctTravelersList.map((item, index) => (
              <div key={index}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                  ${formData?.travelers === item.people ? 'shadow-lg border-black' : ''}`}
                onClick={handleInputChange('travelers', item.people)}>
                <h2 className='text-3xl md:text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-base md:text-lg lg:text-xl'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        
        <div className='flex justify-end mt-6'>
          <Button onClick={OnGenerateTrip} disabled={loader}>
            {loader ? "Please wait..." : "Generate Trip"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
