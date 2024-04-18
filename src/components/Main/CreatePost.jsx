import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../FbConfig";

const CreatePost = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null); // State to store the selected image file
  const navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");

  const createPost = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Add the post data to Firestore
      await addDoc(postsCollectionRef, {
        title,
        postText,
        author,
        image: "", // Placeholder for the image URL
      });

      // Reset the form fields
      setTitle("");
      setPostText("");
      setAuthor("");
      setImage(null);

      // Close the form
      onClose();

      // Redirect to the home page after successful post creation
      navigate("/home");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleImageChange = (e) => {
    // Handle file upload for the image
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create A Post</h2>
        <form onSubmit={createPost} className="space-y-4">
          <div className="inputGp">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inputGp">
            <label htmlFor="postText" className="block text-sm font-medium text-gray-700">
              Post
            </label>
            <textarea
              id="postText"
              name="postText"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Post..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          <div className="inputGp">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Issued by
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Author..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="inputGp">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">
            Submit Post
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700 w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
