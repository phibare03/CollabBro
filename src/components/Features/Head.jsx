import React from 'react';
import { FiActivity, FiPlay } from 'react-icons/fi'; // Importing icons from react-icons library

const Head = () => {
  return (
    <div className="py-8 text-center mt-20 display-flex"> {/* Added mt-20 for top margin */}
      <div className="flex justify-center items-center mb-4">
        <div className="rounded-full p-2 bg-blue-500 text-white mr-2"> {/* Interactive circle */}
          <FiActivity className="text-4xl" /> {/* Fun Zones icon */}
        </div>
        <h2 className="text-2xl font-semibold">Fun Zones</h2>
      </div>
      <p className="text-gray-700">Explore and Enjoy 🎉</p> {/* Emoji for fun */}
      
    </div>
  );
};

export default Head;
