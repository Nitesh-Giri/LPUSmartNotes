import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes to Your DiplomaNet{" "}
              <span className="text-pink-500">Digital E-Library</span>
            </h1>
            <p className="text-sm md:text-xl">
            Find everything you need for your diploma studies right here.
            DiplomaNet offers a range of easy-to-use, organized study materials
            that match your syllabus. Whether you need textbooks, notes, or previous 5 year questions paper, we've got you covered. Start using DiplomaNet today and make your learning easier and more enjoyable!
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
