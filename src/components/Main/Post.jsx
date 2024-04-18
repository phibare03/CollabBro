import React, { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../FbConfig";

const Post = () => {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const unsubscribe = onSnapshot(postsCollectionRef, (snapshot) => {
            const postsData = [];
            snapshot.forEach((doc) => {
                postsData.push({ ...doc.data(), id: doc.id });
            });
            setPostList(postsData);
        });

        // Cleanup function to unsubscribe from snapshot listener
        return () => unsubscribe();
    }, []);

    // Array of background colors for the cards
    const cardColors = ["#FDE68A", "#A7F3D0", "#FECACA", "#C3DAFE", "#FBCFE8", "#FEE2E2"];

    const deletePost = async (postId) => {
        try {
            await deleteDoc(doc(db, "posts", postId));
            console.log("Post deleted successfully!");
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    return (
        <div className="px-8 py-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
                {postLists.map((post, index) => {
                    const authorName = post.author ? post.author.name : "Unknown"; // Check if author exists
                    return (
                        <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full transform hover:scale-105 transition duration-300" style={{ backgroundColor: cardColors[index % cardColors.length] }}>
                            <div className="p-4">
                                <h1 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h1>
                                <p className="text-gray-700">{post.postText}</p>
                            </div>
                            <div className="bg-gray-200 p-4 flex justify-between items-center">
                                <h3 className="text-sm text-gray-600">@{authorName}</h3>
                                <button onClick={() => deletePost(post.id)} className="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Post;
