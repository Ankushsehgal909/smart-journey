import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate travel plan for location:  Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with Hotel Name,Hotel address, Price, Hotel image URL, Geo coordinates, rating, description and suggestion itinerary With place name, Place details, place image URL, Geo coordinates, ticket pricing, time to travel each of location for 3 days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"from $40 per night\",\n      \"image_url\": \"https://www.the-d.com/sites/default/files/styles/hero_desktop/public/images/2019/10/the-d-hotel-las-vegas-hero-image.jpg\",\n      \"geo_coordinates\": \"36.1685, -115.1426\",\n      \"rating\": \"4.0 stars\",\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience. Offers comfortable rooms, a casino, and a variety of dining options.\"\n    },\n    {\n      \"name\": \"Plaza Hotel & Casino\",\n      \"address\": \"1 South Main Street, Las Vegas, NV 89101\",\n      \"price\": \"from $50 per night\",\n      \"image_url\": \"https://www.plazahotelcasino.com/sites/default/files/styles/hero_desktop/public/images/2019/10/plaza-hotel-casino-las-vegas-hero-image.jpg\",\n      \"geo_coordinates\": \"36.1675, -115.1424\",\n      \"rating\": \"4.5 stars\",\n      \"description\": \"A historic hotel located on Fremont Street. Known for its elegant rooms, a casino, and multiple restaurants.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"from $60 per night\",\n      \"image_url\": \"https://www.goldennugget.com/las-vegas/media/img/hero-images/hero-home-desktop.jpg\",\n      \"geo_coordinates\": \"36.1683, -115.1417\",\n      \"rating\": \"4.0 stars\",\n      \"description\": \"A popular hotel known for its shark tank, casino, and multiple dining and entertainment options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"name\": \"Fremont Street Experience\",\n      \"details\": \"Enjoy the vibrant atmosphere of Fremont Street, with live music, street performers, and the iconic canopy of lights.\",\n      \"image_url\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_desktop/public/images/2019/10/fremont-street-experience-hero-image.jpg\",\n      \"geo_coordinates\": \"36.1685, -115.1426\",\n      \"ticket_pricing\": \"Free\",\n      \"time_to_travel\": \"3 hours\",\n      \"best_time_to_visit\": \"Evening\"\n    },\n    \"day2\": {\n      \"name\": \"Hoover Dam\",\n      \"details\": \"Take a day trip to Hoover Dam, one of the most iconic engineering marvels in the world.\",\n      \"image_url\": \"https://www.nps.gov/hdam/planyourvisit/images/Hoover_Dam_wide.jpg\",\n      \"geo_coordinates\": \"36.0287, -114.9806\",\n      \"ticket_pricing\": \"Free to walk around the dam, tours are available\",\n      \"time_to_travel\": \"5-6 hours\",\n      \"best_time_to_visit\": \"Morning or late afternoon\"\n    },\n    \"day3\": {\n      \"name\": \"Red Rock Canyon National Conservation Area\",\n      \"details\": \"Explore the scenic beauty of Red Rock Canyon, with its stunning red rock formations and hiking trails.\",\n      \"image_url\": \"https://www.nps.gov/redr/planyourvisit/images/redrock_canyon_overview_2.jpg\",\n      \"geo_coordinates\": \"36.1466, -115.2115\",\n      \"ticket_pricing\": \"$15 per vehicle\",\n      \"time_to_travel\": \"4 hours\",\n      \"best_time_to_visit\": \"Morning or late afternoon\"\n    }\n  }\n}\n```\n\n**Explanation:**\n\n* **Hotels:** The list includes three budget-friendly hotels located in the downtown area near Fremont Street. You can choose based on your preferences.\n* **Itinerary:**\n    * **Day 1:** Spend the evening exploring the vibrant atmosphere of Fremont Street Experience.\n    * **Day 2:** Take a day trip to Hoover Dam, enjoying the scenic drive and the impressive engineering feat.\n    * **Day 3:** Explore the natural beauty of Red Rock Canyon, with hiking trails and stunning landscapes.\n* **Place Details:** Each location has details like images, coordinates, ticket pricing, and the best time to visit.\n* **Time to Travel:** The itinerary includes estimated travel times for each location, giving you an idea of how to plan your day.\n\n**Important Considerations:**\n\n* **Transportation:** Public transportation is available in Las Vegas, but you can consider renting a car for day trips like Hoover Dam and Red Rock Canyon.\n* **Food:** There are many affordable dining options in Las Vegas, especially on Fremont Street.\n* **Entertainment:** Consider exploring free attractions like the Bellagio Fountains and the Mirage volcano.\n* **Weather:** Las Vegas has a desert climate with hot summers and mild winters. Plan accordingly.\n\n**Remember:** This is a suggested itinerary, you can customize it based on your interests and preferences."},
        ],
      },
    ],
  });
