export const SelelctTravelersList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole travelers in exploration',
        icon:'🍹',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'two traveler in tendem',
        icon:'🍻',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🍿🍿',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill seekers',
        icon:'🍷🍷🍷',
        people:'5 to 10 people'
    }
]

export const SelelctBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💸'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💰💰'
    }
]

export const AI_PROMPT="Generate travel plan for {location} for {totaldays} Days for {travel} with a {budget} budget, Give me a Hotels options list with Hotel Name, Hotel address, Price, Hotel image URL, Geo coordinates, rating, description and suggestion itinerary With place name, Place details, place image URL, Geo coordinates, ticket pricing, time to travel each of location for {totaldays} days with each day plan with best time to visit in JSON format"

export const tripData={"hotels": [{"name": "The Ananda in the Himalayas", "address": "Ananda Spa & Wellness Resort, Narendra Nagar, Tehri Garhwal, Uttarakhand 249199", "price": "$800-$1500", "image_url": "https://www.anandaspa.com/media/images/hero_images/ananda_hero_desktop.jpg", "geo_coordinates": "30.1520, 78.2300", "rating": "4.8", "description": "A luxurious spa and wellness resort nestled in the Himalayas, offering breathtaking views, world-class facilities, and personalized experiences."}, {"name": "The Riverview Retreat", "address": "Near Lakshman Jhula, Tapovan, Rishikesh, Uttarakhand 249201", "price": "$300-$600", "image_url": "https://www.theriverviewretreat.com/images/home/hero-banner.jpg", "geo_coordinates": "30.0873, 78.1908", "rating": "4.5", "description": "A boutique hotel offering elegant rooms, a rooftop restaurant with panoramic views of the Ganges River, and a spa."}, {"name": "Avani Rishikesh", "address": "Near Lakshman Jhula, Rishikesh, Uttarakhand 249201", "price": "$200-$400", "image_url": "https://www.avanihotels.com/rishikesh/media/images/header/hero-avani-rishikesh.jpg", "geo_coordinates": "30.0868, 78.1906", "rating": "4.2", "description": "A contemporary hotel with modern amenities, including a swimming pool, a fitness center, and multiple dining options."}], "itinerary": [{"day": "Day 1", "plan": [{"time": "10:00 AM - 12:00 PM", "place": "Parmarth Niketan Ashram", "details": "Attend a morning yoga session and experience the serene atmosphere of this renowned ashram.", "image_url": "https://www.parmarthniketan.org/wp-content/uploads/2016/01/Parmarth-Niketan-Rishikesh-Ashram.jpg", "geo_coordinates": "30.0858, 78.1900", "ticket_pricing": "Free", "time_to_travel": "1 hour"}, {"time": "12:00 PM - 2:00 PM", "place": "Triveni Ghat", "details": "Enjoy a leisurely boat ride on the Ganges River and witness the vibrant Ganga Aarti ceremony in the evening.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/triveni-ghat-rishikesh.jpg", "geo_coordinates": "30.0874, 78.1898", "ticket_pricing": "Boat rides are usually inexpensive, around ₹50-₹100 per person", "time_to_travel": "2 hours"}, {"time": "2:00 PM - 4:00 PM", "place": "Lakshman Jhula", "details": "Cross the iconic suspension bridge and explore the shops and cafes in the surrounding area.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/lakshman-jhula-rishikesh.jpg", "geo_coordinates": "30.0885, 78.1904", "ticket_pricing": "Free", "time_to_travel": "1 hour"}, {"time": "4:00 PM - 6:00 PM", "place": "Ram Jhula", "details": "Another iconic suspension bridge, offering panoramic views of the Ganges River and the surrounding hills.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/ram-jhula-rishikesh.jpg", "geo_coordinates": "30.0906, 78.1904", "ticket_pricing": "Free", "time_to_travel": "1 hour"}]}, {"day": "Day 2", "plan": [{"time": "10:00 AM - 12:00 PM", "place": "Neelkanth Mahadev Temple", "details": "Embark on a scenic trek to the Neelkanth Mahadev Temple, dedicated to Lord Shiva, amidst the Himalayan foothills.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/neelkanth-mahadev-temple-rishikesh.jpg", "geo_coordinates": "30.1625, 78.2444", "ticket_pricing": "Free", "time_to_travel": "3-4 hours (including trek)", "best_time_to_visit": "Morning or evening for a cooler experience"}, {"time": "12:00 PM - 2:00 PM", "place": "Shivpuri", "details": "Enjoy a relaxing riverside picnic lunch at Shivpuri, known for its scenic beauty and tranquil atmosphere.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/shivpuri-rishikesh.jpg", "geo_coordinates": "30.0873, 78.1791", "ticket_pricing": "Free", "time_to_travel": "1 hour"}, {"time": "2:00 PM - 4:00 PM", "place": "Rajaji National Park", "details": "Embark on a jeep safari or nature walk through Rajaji National Park, home to diverse wildlife, including tigers, elephants, and leopards.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/rajaji-national-park-rishikesh.jpg", "geo_coordinates": "30.1296, 78.1386", "ticket_pricing": "Around ₹150 per person for jeep safari", "time_to_travel": "2-3 hours"}, {"time": "4:00 PM - 6:00 PM", "place": "Beatles Ashram", "details": "Visit the former ashram of the Beatles, now a popular destination for music lovers and spiritual seekers.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/beatles-ashram-rishikesh.jpg", "geo_coordinates": "30.0916, 78.1783", "ticket_pricing": "Free", "time_to_travel": "1 hour"}]}, {"day": "Day 3", "plan": [{"time": "10:00 AM - 12:00 PM", "place": "Gita Bhavan", "details": "Explore the Gita Bhavan, a renowned spiritual center offering a library, a museum, and meditation sessions.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/gita-bhavan-rishikesh.jpg", "geo_coordinates": "30.0878, 78.1898", "ticket_pricing": "Free", "time_to_travel": "1 hour"}, {"time": "12:00 PM - 2:00 PM", "place": "Rishikesh Yoga Festival", "details": "Attend the annual Rishikesh Yoga Festival, featuring renowned yogis, workshops, and performances.", "image_url": "https://www.rishikeshyogafestival.com/wp-content/uploads/2019/10/Rishikesh-Yoga-Festival-2020-Website-Banner-3.jpg", "geo_coordinates": "30.0873, 78.1901", "ticket_pricing": "Varies based on the event and duration", "time_to_travel": "2-3 hours"}, {"time": "2:00 PM - 4:00 PM", "place": "Swarg Ashram", "details": "Visit the Swarg Ashram, known for its serene atmosphere and views of the Ganges River.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/swarg-ashram-rishikesh.jpg", "geo_coordinates": "30.0902, 78.1898", "ticket_pricing": "Free", "time_to_travel": "1 hour"}, {"time": "4:00 PM - 6:00 PM", "place": "The Divine Cafe", "details": "Enjoy a relaxing evening at The Divine Cafe, known for its delicious organic food, peaceful ambiance, and rooftop views.", "image_url": "https://www.holidify.com/images/cmsuploads/2020/08/11/the-divine-cafe-rishikesh.jpg", "geo_coordinates": "30.0872, 78.1898", "ticket_pricing": "Varies based on your order", "time_to_travel": "1 hour"}]}]}