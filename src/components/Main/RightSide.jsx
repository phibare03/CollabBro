import React, { useState } from "react";
import ApplicationFormPopup from "./ApplicationFormPopup"; // Import the popup form component

const Rightside = (props) => {
  const [internshipCards, setInternshipCards] = useState([
    {
      id: 1,
      title: "Software Developer Internship",
      company: "ABC Tech Solutions",
      description: "Exciting internship opportunity for software developers. Apply now!",
      location: "San Francisco, CA",
      email: "itmevoid2904@gmail.com"
    },
    {
      id: 2,
      title: "Marketing Internship",
      company: "XYZ Marketing Agency",
      description: "Join our dynamic marketing team and gain hands-on experience in the field.",
      location: "New York, NY",
    },
    {
      id: 3,
      title: "Data Science Internship",
      company: "Data Insights Co.",
      description: "Explore the world of data science with our cutting-edge internship program.",
      location: "Seattle, WA",
    },
    {
      id: 4,
      title: "Graphic Design Internship",
      company: "Creative Designs Studio",
      description: "Passionate about design? Join us for a creative internship journey.",
      location: "Los Angeles, CA",
    },
    {
      id: 5,
      title: "Finance Internship",
      company: "Financial Wizards Ltd.",
      description: "Learn the ropes of finance with our internship program. Apply today!",
      location: "Chicago, IL",
    },
  ]);

  const removeCard = (cardId) => {
    // Remove the card with the given id
    setInternshipCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="grid-area rightside mt-16 px-4 md:px-8"> {/* Added horizontal padding */}
      <div className="text-center overflow-hidden mb-8 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
        <div className="border-b border-gray-200 py-4">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-semibold text-gray-800">Recently added</h2>
            <img src="/images/feed-icon.svg" alt="Feed Icon" className="w-6 h-6" />
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {/* Display your feed items here */}
        </ul>
        <a href="#" className="block py-4 text-blue-500 hover:text-blue-700 transition duration-300">
          See all Internships
          <img src="/images/right-icon.svg" alt="Right Arrow Icon" className="w-4 h-4 inline-block ml-1" />
        </a>
      </div>

      {/* Display Internship Opportunities */}
      {internshipCards.map((card) => (
        <div key={card.id} className="text-left overflow-hidden mb-8 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          <div className="border-b border-gray-200 py-4 px-4">
            <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
          </div>
          <div className="p-4">
            <p className="text-gray-800">{card.company}</p>
            <p className="text-gray-600">{card.description}</p>
            <p className="text-gray-600">Location: {card.location}</p>
            <a href={`#apply-link-${card.id}`} className="block bg-blue-500 text-white py-2 px-4 mt-4 rounded-md text-center hover:bg-blue-600 transition duration-300" onClick={togglePopup}>
              Apply
            </a>
            <button onClick={() => removeCard(card.id)} className="block bg-red-500 text-white py-2 px-4 mt-2 rounded-md text-center hover:bg-red-600 transition duration-300">
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Application Form Popup */}
      {isPopupOpen && <ApplicationFormPopup onClose={togglePopup} />} {/* Render the popup form when isPopupOpen is true */}
      
      <div className="text-center overflow-hidden bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Rightside;
