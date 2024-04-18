import React, { useState, useEffect } from 'react';
import { FiGift } from 'react-icons/fi'; // Importing the Gift icon from react-icons library

const Chall = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // Initial time left in seconds (24 hours)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000); // Update every second

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]); // Run effect whenever timeLeft changes

  // Format the remaining time into hours, minutes, and seconds
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="px-4"> {/* Added horizontal padding */}
<h2 className="text-2xl font-semibold mb-4 text-left">Today's Challenge</h2> {/* Title aligned to the left */}
      <div className="flex justify-between">
        {/* First card */}
        <div className="bg-gradient-to-r from-purple-300 to-blue-200 rounded-lg p-4 w-1/3 mr-4 shadow-md">
          <div className="flex items-center mb-4">
            <FiGift className="text-red-500 text-3xl mr-2" /> {/* Icon for the first card */}
            <h2 className="text-xl font-semibold text-white">Freebies</h2>
          </div>
          <p className="text-gray-600">Get freebies and rewards for completing challenges.</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Challenge: Prank call your friend</h3>
            <p className="text-gray-400">Time left: {formatTime(timeLeft)}</p> {/* Display remaining time */}
          </div>
        </div>
        
        {/* Second card */}
        <div className="bg-gradient-to-r from-green-300 to-blue-200 rounded-lg p-4 w-1/3 mr-4 shadow-md">
          <div className="flex items-center mb-4">
            <FiGift className="text-red-500 text-3xl mr-2" /> {/* Icon for the second card */}
            <h2 className="text-xl font-semibold text-white">Freebies</h2>
          </div>
          <p className="text-gray-600">Get freebies and rewards for completing challenges.</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Challenge: Learn a New Skill</h3>
            <p className="text-gray-400">Time left: {formatTime(timeLeft)}</p> {/* Display remaining time */}
          </div>
        </div>

        {/* Third card */}
        <div className="bg-gradient-to-r from-yellow-300 to-orange-200 rounded-lg p-4 w-1/3 mr-4 shadow-md">
          <div className="flex items-center mb-4">
            <FiGift className="text-red-500 text-3xl mr-2" /> {/* Icon for the third card */}
            <h2 className="text-xl font-semibold text-white">Freebies</h2>
          </div>
          <p className="text-gray-600">Get freebies and rewards for completing challenges.</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Challenge: Sing any rap song</h3>
            <p className="text-gray-400">Time left: {formatTime(timeLeft)}</p> {/* Display remaining time */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chall;
