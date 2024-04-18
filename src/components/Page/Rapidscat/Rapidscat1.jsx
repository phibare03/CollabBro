import React from "react";
import sateliteImg from "../../../assets/screen-1.png";

const Rapidscat = () => {
  return (
    <>
    <center>
      <section className="bg-black text-white pb-12">
        <div className="container ">
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
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                 A community to support you
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
             
Make your personalised feed by following students
              </p>
             
            </div>
          </div>
        </div>
      </section>
      </center>
    </>
  );
};

export default Rapidscat;
