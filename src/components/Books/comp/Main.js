import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            search +
            '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' +
            '&maxResults=40'
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header bg-secondary-color text-primary-color relative">
        <div className="row1">
          <h1 className="text-3xl text-center">
            A room without books is like
            <br /> .
          </h1>
        </div>
        <div className="row1">
          <h1 className="text-3xl text-center">
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2 absolute top-10 right-10 text-center">
          <h2 className="text-2xl mb-5">Find Your Book</h2>
          <div className="search flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              className="border border-gray-400 rounded px-3 py-2 mr-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button className="bg-primary-color text-secondary-color px-3 py-2 rounded">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" className="mt-8" />
        </div>
      </div>

      <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Card book={bookData} />
      </div>
    </>
  );
};

export default Main;
