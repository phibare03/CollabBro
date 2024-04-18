import React from "react";
import sateliteImg from "../../../assets/screen-1.png";

const Rapidscat = () => {
  return (
    <section className="bg-black text-white pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div data-aos="zoom-in">
            <img
              src={sateliteImg}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sky-800 uppercase"
            >
              Our mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="uppercase text-5xl"
            >
              Create Exciting College Memories
            </h1>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-delay="700"
                className="list-disc"
              >
                Participate in college events
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="800"
                className="list-disc"
              >
                Explore events across all colleges
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="900"
                className="list-disc"
              >
                Connect with college students
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="1000"
                className="list-disc"
              >
                Discover your passion
              </li>
            </ul>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rapidscat;
