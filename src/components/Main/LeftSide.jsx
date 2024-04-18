import { useState, useEffect } from "react";
import axios from "axios";
import { PhotographIcon } from '@heroicons/react/solid';
import { GlobeIcon } from '@heroicons/react/outline';

const apiKey = "781c1391b28b4e658f79a36e684c2f62";

const Leftside = ({ userName }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch news data when the component mounts
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        setNews(response.data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="grid-area leftside ml-16 mt-16">
     <div className="text-center overflow-hidden mb-8 bg-white rounded-lg shadow-md">
  <div className="border-b border-gray-200 py-4">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
      <div className="relative px-4 py-8">
        <PhotographIcon className="mx-auto h-24 w-24 text-purple-500 rounded-full animate-pulse" />
        <h1 className="text-3xl font-semibold text-white mt-4">
          Welcome, {userName}!
        </h1>
        <p className="text-sm text-gray-300">Add a photo</p>
      </div>
    </div>
  </div>
  {/* Other sections remain unchanged */}
</div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
  <h2 className="text-xl font-semibold text-center text-gray-800 border-b border-gray-200 py-4 bg-gradient-to-r from-blue-400 to-purple-400">
    <GlobeIcon className="h-6 w-6 inline-block text-gray-100 mr-2" />
    Top News
  </h2>
  {isLoading ? (
    <div className="text-center py-4">
      <p className="text-gray-600">Loading...</p>
    </div>
  ) : (
    <ul className="divide-y divide-gray-200 overflow-y-auto max-h-[400px]">
      {news.map((article, index) => (
        <li key={index}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {article.title}
          </a>
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
};

export default Leftside;
