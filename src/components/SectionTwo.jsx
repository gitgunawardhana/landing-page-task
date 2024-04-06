import React from "react";
import sec2 from "../assets/sec2.png";

const SectionTwo = () => {
  return (
    <div className="sm:px-14 px-6 py-10">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-center items-center md:order-last">
          <img src={sec2} alt="Computer" />
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-[27px] text-primary">
              Digital Strategy Consulting
            </h1>
            <p className="leading-[19.36px] font-normal text-base my-3">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="bg-secondary px-7 py-3 rounded-md text-white uppercase mt-5">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
