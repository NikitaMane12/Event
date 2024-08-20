import React, { useState } from "react";
import "./event.css";

const initialData = [
  {
    eventBooked: [],
    _id: "666fc92911af595688b6a826",
    title: "Science Fair 2024",
    description: "Explore the wonders of science through interactive exhibits.",
    eventDate: "2024-05-15T09:00:00.000Z",
    organizer: "sciencerocks",
    category: "Science",
    imageUrl: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    eventPlaner: "666b05f5ecb6bf71e0fa669b",
    time: "09:00 - 16:00",
    mode: "Offline",
    Price: 35,
    location: "Science Center, Berlin",
    ticketTypes: ["Exhibit Pass", "General Admission"],
  },
  {
    eventBooked: [],
    _id: "666fc92911af595688b6a827",
    title: "Fashion Week 2024",
    description: "Celebrate haute couture and fashion innovation.",
    eventDate: "2024-09-08T20:00:00.000Z",
    organizer: "fashionforward",
    category: "Fashion",
    imageUrl: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1681503974121-b9387f3aea69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
    ],
    eventPlaner: "666b05f5ecb6bf71e0fa669b",
    time: "20:00 - 23:00",
    mode: "Offline",
    Price: 90,
    location: "Fashion Center, Milan",
    ticketTypes: ["Couture Pass", "General Admission"],
  },
  {
    eventBooked: [],
    _id: "666fc92911af595688b6a828",
    title: "Music Awards 2024",
    description: "Honoring the best in music talent and performance.",
    eventDate: "2024-07-20T19:30:00.000Z",
    organizer: "musiclover",
    category: "Music",
    imageUrl: [
      "https://images.unsplash.com/photo-1558620013-a08999547a36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhZ2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZ2V8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1680362477555-46a4f522c09f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhZ2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhZ2V8ZW58MHx8MHx8fDA%3D",
    ],
    eventPlaner: "666b05f5ecb6bf71e0fa669b",
    time: "19:30 - 22:30",
    mode: "Offline",
    Price: 55,
    location: "Music Hall, Nashville",
    ticketTypes: ["VIP", "General"],
  },
  {
    eventBooked: [],
    _id: "666fc92911af595688b6a829",
    title: "Sports Expo 2024",
    description:
      "Celebrate athleticism and sportsmanship with exhibits and competitions.",
    eventDate: "2024-08-25T10:00:00.000Z",
    organizer: "sportsenthusiast",
    category: "Sports",
    imageUrl: [
      "https://images.unsplash.com/photo-1613210434051-4b00d62d03fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0YWdlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1558970439-add78fc68990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0YWdlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/flagged/photo-1590425113058-3a2678b4cdad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YWdlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhZ2V8ZW58MHx8MHx8fDA%3D",
    ],
    eventPlaner: "666b05f5ecb6bf71e0fa669b",
    time: "10:00 - 17:00",
    mode: "Offline",
    Price: 40,
    location: "Sports Arena, New York",
    ticketTypes: ["General Admission", "VIP"],
  },
];

const CardComponent = () => {
  const [data, setData] = useState(initialData);
  const handleBookEvent = (eventId) => {
    alert(`Booked event with ID: ${eventId}`);
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item._id} className="card">
          <img src={item.imageUrl[0]} alt={item.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <p className="card-date">
              Date: {new Date(item.eventDate).toLocaleDateString()}
            </p>
            <p className="card-time">Time: {item.time}</p>
            <p className="card-location">Location: {item.location}</p>
            <p className="card-price">Price: ${item.Price}</p>
            <button
              className="book-event-button"
              onClick={() => handleBookEvent(item._id)}
            >
              Book Event
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
