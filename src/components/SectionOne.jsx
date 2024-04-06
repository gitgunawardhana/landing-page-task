import React from "react";
import sec1 from "../assets/sec1.png";

const SectionOne = () => {
  return (
    <div className="sm:px-14 px-6 py-10">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-center items-center">
          <img src={sec1} alt="Computer" />
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <div className="text-center md:text-left">
            <h1 className="font-semibold text-[27px] text-primary">
              Web & Mobile App Development
            </h1>
            <p className="leading-[19.36px] font-normal text-base my-3">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
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

export default SectionOne;
