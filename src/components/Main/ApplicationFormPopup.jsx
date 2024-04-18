import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../FbConfig";

const ApplicationFormPopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const postsCollectionRef = collection(db, "internship");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Resume:", resume);
    console.log("Mobile:", mobile);

    // Close the popup after form submission
    onClose();

    // Save data to Firestore
    intern();
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const intern = async () => {
    try {
      await addDoc(postsCollectionRef, {
        name,
        email,
        resume,
        mobile,
      });
      console.log("Application submitted successfully!");
      // Redirect to the home page after successful submission
      navigate("/home");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md" style={{ backgroundColor: "#FDE68A" }}> {/* Apply background color here */}
        <h2 className="text-xl font-semibold mb-4">Submit Application</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">
            Submit
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700 w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplicationFormPopup;
