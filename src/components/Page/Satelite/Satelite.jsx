import React from "react";
import satelitImg from "../../../assets/e654dcca0ef64bb9c644ec92e231b2d4.jpg";

const Rapidscat = () => {
  return (
    <>
    <center>
      <section className="bg-black text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                C0LLABR0
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                A meaningful place to hangout
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Exchange ideas within a transparent community of college friends.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </center>
    </>
  );
};

export default Rapidscat;
