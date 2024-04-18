import React, { useState } from "react";
import { Chrono } from "react-chrono";
import { EventDatabase } from '../components/Data/EventDatabase';
import Navigation from "./Main/Navigation";

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const currentDate = new Date();

  // Filter upcoming events
  const upcomingEvents = EventDatabase.filter(event => {
    const eventDate = new Date(event.date.year, getMonthIndex(event.date.month));
    return eventDate >= currentDate;
  });

  // Filter past events
  const pastEvents = EventDatabase.filter(event => {
    const eventDate = new Date(event.date.year, getMonthIndex(event.date.month));
    return eventDate < currentDate;
  });

  const upcomingItems = upcomingEvents.map(event => ({
    title: `${event.date.month} ${event.date.year}`,
    cardTitle: event.heading,
    url: event.url,
    cardSubtitle: `${event.location}`,
    cardDetailedText: event.description,
    media: {
      type: "IMAGE",
      source: {
        url: event.img
      }
    },
    onClick: () => setSelectedEvent(event),
  }));

  const pastItems = pastEvents.map(event => ({
    title: `${event.date.month} ${event.date.year}`,
    cardTitle: event.heading,
    url: event.url,
    cardSubtitle: `${event.location}`,
    cardDetailedText: event.description,
    media: {
      type: "IMAGE",
      source: {
        url: event.img
      }
    },
    onClick: () => setSelectedEvent(event),
  }));

  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-b from-blue-200 via-teal-200 to-green-200 min-h-screen">
        bksabdk
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Events Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Upcoming Events</h3>
              <Chrono items={upcomingItems} mode="VERTICAL_ALTERNATING" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Past Events</h3>
              <Chrono items={pastItems} mode="VERTICAL_ALTERNATING" />
            </div>
          </div>
        </div>
      </div>
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 max-w-xl rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedEvent.heading}</h2>
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setSelectedEvent(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

// Function to get month index
const getMonthIndex = (month) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months.indexOf(month);
};

export default Home;
