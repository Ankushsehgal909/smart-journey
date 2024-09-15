
import './App.css'
import Hero from './components/ui/Hero'

function App() {


  return (
    <>
      <Hero/>
    </>
  )
}

export default App


// import React, { useState } from 'react';
// import '@geoapify/geocoder-autocomplete/styles/minimal.css';
// import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';

// console.log("server started");
// const AddressAutocomplete = () => {
//   const [selectedPlace, setSelectedPlace] = useState(null); // State to store the selected place

//   // Callback function when a place is selected
//   const handlePlaceSelect = (value) => {
//     setSelectedPlace(value);  // Store the selected place in state
//     console.log('Selected Place:', selectedPlace);  // Log the selected place to the console
//   };

//   return (
//     <GeoapifyContext apiKey="8ae9ae02f08b4316b32bb514c4c6d391">
//       <div style={{ maxWidth: '400px', margin: '0 auto' }}>
//         <GeoapifyGeocoderAutocomplete
//           placeholder="Enter address here"
//           placeSelect={handlePlaceSelect}  // Handle place selection
          
//           suggestionsChange={(suggestions) => console.log('Suggestions:', suggestions)} // Log suggestions
//         />
//       </div>
//       {selectedPlace && (
//         <div>
//           <h3>Selected Address Details:</h3>
//           <pre>{JSON.stringify(selectedPlace, null, 2)}</pre> {/* Display the selected place */}
//         </div>
//       )}
//     </GeoapifyContext>
//   );
// };

// export default AddressAutocomplete;
