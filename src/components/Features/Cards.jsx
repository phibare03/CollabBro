import React from 'react';
import { Link } from 'react-router-dom';
import astheticImage from '../../assets/1597380762478 asthetic.jpeg.jpg';
import best from "../../assets/bestbooks.jpg"
import comm from "../../assets/commm.jpg"
import res from "../../assets/res.jpg"

const Cards = () => {
  return (
    <div className="container mx-auto flex justify-center items-center mt-20">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Features to Explore</h2>

        <div className="flex justify-center items-center space-x-8">
          {/* First card */}
          <div className="bg-gray-200 rounded-lg p-6 shadow-md h-80 w-64 flex flex-col justify-between">
            <div>
              <img src={astheticImage} alt="Card 1" className="mb-4 w-full h-40 object-cover rounded-t-lg" /> {/* Image */}
              <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
            </div>
            <Link to="/editor" className="text-blue-500 hover:underline hover:bg-blue-100 py-1 px-3 rounded-md transition duration-300">click</Link>
          </div>

          {/* Second card */}
          <div className="bg-gray-200 rounded-lg p-6 shadow-md h-80 w-64 flex flex-col justify-between">
            <div>
              <img src={best} alt="Card 1" className="mb-4 w-full h-40 object-cover rounded-t-lg" /> {/* Image */}
              <h2 className="text-xl font-semibold mb-2">Books</h2>
            </div>
            <Link to="/book" className="text-blue-500 hover:underline hover:bg-blue-100 py-1 px-3 rounded-md transition duration-300"> click </Link>
          </div>

          {/* Third card */}
          <div className="bg-gray-200 rounded-lg p-6 shadow-md h-80 w-64 flex flex-col justify-between">
  <div>
    <img src={comm} alt="Card 1" className="mb-4 w-full h-40 object-cover rounded-t-lg" /> {/* Image */}
    <h2 className="text-xl font-semibold mb-2">join our community</h2>
  </div>
  <a href="https://chat.whatsapp.com/E4jI4L6x7lQIP5AIbg8QmR" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">click</a> {/* WhatsApp link */}
</div>

          {/* Fourth card */}
          <div className="bg-gray-200 rounded-lg p-6 shadow-md h-80 w-64 flex flex-col justify-between">
            <div>
              <img src={res} alt="Card 1" className="mb-4 w-full h-40 object-cover rounded-t-lg" /> {/* Image */}
              <h2 className="text-xl font-semibold mb-2">Resume</h2>
            </div>
            <Link to="/editor" className="text-blue-500 hover:underline">click</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
