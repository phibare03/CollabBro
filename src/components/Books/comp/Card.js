import React, { useState } from "react";
import Modal from "./Modal";
import Navigation from "../../Main/Navigation";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
    <Navigation/>
      {book.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        let amount = item.saleInfo.listPrice?.amount;

        if (thumbnail && amount) {
          return (
            <div
              key={index}
              className="card bg-secondary-color text-primary-color rounded-lg p-4 shadow-md cursor-pointer"
              style={{ height: "500px" }} // Adjust height as needed
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <img
                src={thumbnail}
                alt={item.volumeInfo.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="bottom">
                <h3 className="title text-xl font-semibold">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
              </div>
              <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Card;
