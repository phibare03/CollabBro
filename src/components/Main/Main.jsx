import React, { useState } from "react";
import CreatePost from "../Main/CreatePost"; // Import the CreatePost component
import Post from "../Main/Post";

function Main() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false); // State to manage the visibility of the pop-up

  const handleCreatePostClick = () => {
    setIsCreatePostOpen(true); // Set the state to open the pop-up
  };

  return (
    <div className="tweetBox ml-16 mt-16">
      <div>
      <form>
        <div className="tweetBox__input flex items-center">
          <img
            className="rounded-full h-12 w-12 mr-4"
            src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            alt="Avatar"
          />
          <button
            type="button" // Change type to "button" to prevent form submission
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCreatePostClick} // Call handleCreatePostClick when button is clicked
          >
            Create Post
          </button>
        </div>
      </form>
      </div>
      {/* Conditionally render the CreatePost component based on the state */}
      {isCreatePostOpen && <div className="mt-4"><CreatePost onClose={() => setIsCreatePostOpen(false)} /></div>}
    <Post/>
    </div>
  );
}

export default Main;
