import React from "react";
import banner from "/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to LPUSmartNotes -{" "}
              <span className="text-pink-500">
                Your Digital Study Companion!
              </span>
            </h1>
            <p className="text-sm md:text-xl italic">
              Looking for syllabus-specific notes and past papers? You've come
              to the right place. LPUSmartNotes is your go-to resource for
              organized, easy-to-access study materials designed specifically
              for LPU students. From comprehensive notes to previous 5-year
              question papers, we've got everything you need to study. Start exploring now and make your study
              journey smarter and simpler with LPUSmartNotes!
            </p>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
