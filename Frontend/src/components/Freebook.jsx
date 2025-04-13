import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div id="practice">
          <h1
            className="text-pink-500"
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Exclusive Content for CSE Students
          </h1>
          <br></br>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <div
                className="card card-compact bg-base-100 w-96 shadow-xl m-4"
                style={{
                  width: "25vw",
                  border: "1px solid black",
                  margin: "20px",
                  height: "400px",
                }}
              >
                <figure>
                  <img
                    src="https://yt3.googleusercontent.com/NbbICHb_UnDAQvRpivEiTSYajzXZV5AKwimSsM6ChQWah12CK1PW1V7usJeJaENNQJheo-hX=s900-c-k-c0x00ffffff-no-rj"
                    alt="book"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">Hitbullseye</h2>
                  <div className="card-actions justify-center">
                    <a
                      href="https://drive.google.com/drive/folders/1X7Ak5U7klzi3rdQnNN91X6LopdrFiXxK?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-primary text-white">
                        Get Answer
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card card-compact bg-base-100 w-96 shadow-xl m-4"
                style={{
                  width: "25vw",
                  border: "1px solid black",
                  margin: "20px",
                  height: "400px",
                }}
              >
                <figure>
                  <img
                    src="https://images.yourstory.com/cs/images/companies/f9d8b138faa1-logonew-1616064559099.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
                    alt="books"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">Myperfectice</h2>

                  <div className="card-actions justify-center">
                    <a href="https://drive.google.com/drive/folders/1CUBO9Kh9Kl-_cSoMmlufAqDd6O4uRLS6?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Get Answer
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card card-compact bg-base-100 w-96 shadow-xl m-4"
                style={{
                  width: "25vw",
                  border: "1px solid black",
                  margin: "20px",
                  height: "400px",
                }}
              >
                <figure>
                  <img
                    src="https://images.yourstory.com/cs/images/company_products/iamneoai_1632891534911.png"
                    alt="books"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">Neocolab</h2>
                  <div className="card-actions justify-center">
                    <a href="https://drive.google.com/drive/folders/1Kygdx7lhRFjKpArQUan5DkQj1-LP3QtN?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Get Answer
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card card-compact bg-base-100 w-96 shadow-xl m-4"
                style={{
                  width: "25vw",
                  border: "1px solid black",
                  margin: "20px",
                  height: "400px",
                }}
              >
                <figure>
                  <img
                    className="h-80"
                    src="https://i.ytimg.com/vi/9yDRbHKpxV8/maxresdefault.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">Codetantra</h2>
                  <div className="card-actions justify-center">
                    <a href="https://drive.google.com/drive/folders/12QcIOY0M0kvHx70SdSzwgycf3E5T6g9c?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Get Answer
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <br></br>
        <br></br>

        <div id="about">
          <h1
            className="text-pink-500"
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Our Mission at LPUSmartNotes
          </h1>
          <br></br>
        </div>

        <div>
          <div>
            <div className="card card-compact bg-base-100 w-90 shadow-xl m-4">
              <div className="overflow-hidden whitespace-nowrap">
                <p className="inline-block animate-[scroll-left_15s_linear_infinite] m-2 text-1.5xl p-1 italic">
                  <samp className="text-pink-500">LPUSmartNotes: </samp>aims to
                  boost student success by making high-quality academic
                  resources easily accessible and encouraging collaborative
                  learning across the LPU community.
                </p>
              </div>

              <div className="overflow-hidden whitespace-nowrap">
                <p className="inline-block animate-[scroll-left_18s_linear_infinite] m-2 text-1.5xl p-1 italic">
                  <samp className="text-pink-500">
                    Syllabus-Aligned Content:
                  </samp>{" "}
                  All study materials are neatly organized according to the
                  official LPU syllabus for various courses.
                </p>
              </div>

              <div className="overflow-hidden whitespace-nowrap">
                <p className="inline-block animate-[scroll-left_16s_linear_infinite] m-2 text-1.5xl p-1 italic">
                  <samp className="text-pink-500">
                    Collaborative Learning:{" "}
                  </samp>
                  Collaborative Learning Space: Engage with peers, exchange
                  ideas, and collaborate on academic projects and discussions.
                </p>
              </div>

              <div className="overflow-hidden whitespace-nowrap">
                <p className="inline-block animate-[scroll-left_17s_linear_infinite] m-2 text-1.5xl p-1 italic">
                  <samp className="text-pink-500">
                    Clean & User-Friendly Interface:{" "}
                  </samp>
                  Navigate with ease through a simple, intuitive design built
                  for a smooth study experience.
                </p>
              </div>

              <div className="overflow-hidden whitespace-nowrap">
                <p className="inline-block animate-[scroll-left_19s_linear_infinite] m-2 text-1.5xl p-1 italic">
                  <samp className="text-pink-500">
                    Smart Resource Management:{" "}
                  </samp>
                  Upload, download, and manage notes and past papers
                  efficiently—all in one place.
                </p>
              </div>

              <br />
            </div>
          </div>
        </div>

        <div id="contact">
          <h1
            className="text-pink-500"
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Contact Us
          </h1>
          <br></br>
        </div>
        <br></br>

        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/map-infographic-background-with-icons_23-2147604180.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <label className="input input-bordered flex items-center gap-2">
                Name:
                <input type="text" className="grow" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email:
                <input type="text" className="grow" />
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write your query"
              ></textarea>
              <button className="btn btn-primary text-white">Submit</button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Freebook;
