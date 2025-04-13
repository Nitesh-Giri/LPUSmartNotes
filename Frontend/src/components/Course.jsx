import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
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
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12 italic">
            LPUSmartNotes is a digital e-library designed for students of Lovely
            Professional University. This platform provides seamless access to
            well-organized, syllabus-aligned notes and past papers, supporting a
            smarter and more efficient learning experience. LPUSmartNotes also
            encourages a collaborative academic environment where students can
            share knowledge and grow together.
          </p>
          <br></br>
          <div>
            <h1 className="text-pink-500">Computer Science & Engineering</h1>
            <br></br>
          </div>

          <div>
            <p className="text-pink-500">Semester 1</p>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      ENGINEERING MATHEMATICS (MTH165)
                    </h2>
                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1mtBTkifm3_8bg5ZYpTH57PsyRn7mM59L?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          Read Now
                        </button>
                      </a>
                      <div>
                        <a href="https://drive.google.com/file/d/1AQq5JVHEq6v1DDL5TEIMct_hrn94hSrF/view?usp=drive_link">
                          <button className="btn btn-primary text-white">
                            PY-QP
                          </button>
                        </a>
                      </div>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      ENGINEERING PHYSICS (PHY109)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1xRGLsKxfTdhTkchaK2AoJkCSmv0pip63?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          Read Now
                        </button>
                      </a>

                      <a href="https://drive.google.com/drive/folders/1xRGLsKxfTdhTkchaK2AoJkCSmv0pip63?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      PYTHON PROGRAMMING (INT108)
                    </h2>

                    <div className="card-actions justify-center">
                      
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      SOFT SKILLS-I (PES318)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/10B-thrw1HpmHPsZApALyEfqpfOgmV4xx?usp=drive_link">
                      
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>

                      <a href="https://drive.google.com/drive/folders/10B-thrw1HpmHPsZApALyEfqpfOgmV4xx?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          PY-QP
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      ORIENTATION TO COMPUTING-I (CSE111)
                    </h2>

                    <div className="card-actions justify-center">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      INTERNET PROGRAMMING LABORATORY (CSE326)
                    </h2>
                    <div className="card-actions justify-center">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <br></br>
          </div>
          <br></br>

          <div>
            <p className="text-pink-500">Semester 2</p>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Computer Programming (CSE101)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/file/d/1IUFd9x399d9ojffthsSI63DtK_lGS_9t/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>

                      <a href="https://drive.google.com/file/d/1IUFd9x399d9ojffthsSI63DtK_lGS_9t/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Database Management Systems (INT306)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1OiTfaQtVq9h7R5W3QRdFfj-WnHyYbK11?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1noue5-JC6AY86cUgs0imoIhcends41kj/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Engineering Mathematics (MTH174)
                    </h2>

                    <div className="card-actions justify-center">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Environmental Studies (CHE110)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1L_N1KpTJ2wzhvmkDDfuzLJcGInYFAnzE?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>

                      <a href="https://drive.google.com/drive/folders/1L_N1KpTJ2wzhvmkDDfuzLJcGInYFAnzE?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Software Engineering (CSE320)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1BUI36RBmf2ksF_rB9iUbjlc52IU4MwZd?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>

                      <a href="https://drive.google.com/file/d/1Fs97JPO0rKM8QS-5Lnf0RiQqBVxBdpr_/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <br></br>
          </div>
          <br></br>

          <div>
            <p className="text-pink-500">Semester 3</p>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Data Structures and Algorithms (CSE205)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1pjKgGeDVfF14Hc_1h71N1UK3ZusJCx-3?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/drive/folders/180HNHmsrPDAFG6XrDJT0kGlWplbV0giU?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Object-Oriented Programming (CSE202)
                    </h2>
                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1tznnBrT2qkDVEDug9ArDSdOPkXVemRDn?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1TopHiZUEkEn-o3Tfk0tY20JuBNp7m8kI/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="books"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Computer Organization and Design (CSE211)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/16nozb5vd5fIf3iX1JIprwjwCc1JO123y?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1IkKxUnHCz7BMTUUOcaJnAMYXPyoxlLWc/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Computer Networks (CSE306)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1clQKGBO68AO8gv8nuDTN4qRCZbM9ptaE?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1NkQA8e-E7MW03PE0jLZUahnZ_hTrrWsR/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Probability and Statistics (MTH302)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1IMFRszjfIrmnBAkw_-GGMRCkatrPrWk-?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1WHBNVYsXYcQMdCUUBTVF1g5sU4E9D9bo/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <br></br>
          </div>
          <br></br>

          <div>
            <p className="text-pink-500">Semester 4</p>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Programming in Java (CSE310)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1-EgwkM9kX-3n0THOjwIa-Iyk65e22ZfX?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/11ObQ4L6RpI4kLs3aWPDvy5xXPk7IK-p2/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Artificial Intelligence (INT426)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/17190T6GY4Yu9g1Yxpqu0UHIEiT-aasJO?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/drive/folders/1T1NGnHb-rw7sBERTwiToz-yFHXIDeF0d?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Design and Analysis of Algorithms (CSE408)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1w-3NEwgDZ4xFOXOre7Hnr1OlgaGrdsRa?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>

                      <a href="https://drive.google.com/drive/folders/1w-3NEwgDZ4xFOXOre7Hnr1OlgaGrdsRa?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      OPERATING SYSTEMS (CSE316)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1fXsPo0zV7GwsbrNny8t5DXFhcpTFp3LN?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1aZdssuS0_A059KjzmApFf1ybAGKP8Z2G/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      FRONT END WEB DEVELOPER (INT219)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/16mHSGcjVmXQFdpYW_60AcJ6rJvzOLiHL?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1U8dNoqXUtwJRAw5CQcKSuzjOwJvpHa_8/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      ADVANCED WEB DEVELOPMENT (INT222)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/16_rPFBiUb9LsY2GrHkP97VTjN9KnPhV0?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1crPmzNmr4zyuJX79RGmpTek_t-dtAg3m/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <br></br>
          </div>
          <br></br>

          <div>
            <p className="text-pink-500">Semester 5</p>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      ANALYTICAL SKILLS-II (PEA306)
                    </h2>
                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1GBifbd0o7p9aT0y0JfZjgIG0Or0IZrcA?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1nYn44gbPJrR_iCf1nN2DA6ieoB2-QS13/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      Formal Languages and Automata Theory (CSE322)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1E4UxbwaIaZVWlSVtJvFjdLuIi3jfETFq?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          Read Now
                        </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1lPa-6-SGymo66TqCJj2kyqm1gv_RMuZ7/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      SERVER SIDE SCRIPTING (INT220)
                    </h2>
                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1Y2c7A-lIXHOY-KAnJYUy4FEBBEh8DMFM?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/drive/folders/1Y2c7A-lIXHOY-KAnJYUy4FEBBEh8DMFM?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      WEB APP DEVELOPMENT WITH REACTJS (INT252)
                    </h2>
                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1NnZCxzAmpFC78btnds3epAIINndKg-u6?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1uRi8xnnMtqV9tubuiiEYDJ0978P58vW9/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      FUNDAMENTALS OF DEVOPS (INT331)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1y6xKmsjmxBP8BLpR1lco8aQ9hl9274Go?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1wLuRgBzDjpXmi6E2Dk0Y9sgdtrOYXq_R/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      VERBAL ABILITY (PEV112)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1VWVTVl-33x223WXq53raWgfRoUqY8gDc?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1PsHNFD8tigyvsaQQ8q8dPqS2qFctuK9E/view?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <br></br>
          </div>

          <br></br>
          <div>
            <p className="text-pink-500">Semester 6</p>
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      INDUSTRY ETHICS AND LEGAL ISSUES (CSE332)
                    </h2>
                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1tefsUPauGpJeaGduyA-YcvUsrDziNNXc?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          Read Now
                        </button>
                      </a>
                      <a href="https://drive.google.com/file/d/15nWpf0Illn8rHdbkHyDJmX1XwjWhhjHT/view?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      MVC PROGRAMMING (INT221)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1d1eQ_7fWOUDvUB40JqAuHWFec1IeLAJ1?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      </a>

                      <a href="https://drive.google.com/drive/folders/1d1eQ_7fWOUDvUB40JqAuHWFec1IeLAJ1?usp=drive_link">
                      <button className="btn btn-primary text-white">
                        PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      DEVOPS VIRTUALIZATION AND CONFIGURATION MANAGEMENT (INT332)
                    </h2>
                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1ziCsp9cyy2n9mVfzTN0wtvnKy-BX8aZ8?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          Read Now
                        </button>
                      </a>
                      <a href="https://drive.google.com/file/d/1nrvyE2wYX3RbeknV3wcUlYch-gjVwz6S/view?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          PY-QP
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
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      COMBINATORIAL STUDIES (CSE392)
                    </h2>
                    <div className="card-actions justify-center">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      ONLINE ACADEMIC COURSE (CSE393)
                    </h2>

                    <div className="card-actions justify-center">
                      <button className="btn btn-primary text-white">
                        Read Now
                      </button>
                      <button className="btn btn-primary text-white">
                        PY-QP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card card-compact bg-base-100 w-90 shadow-xl m-4"
                  style={{
                    width: "25vw",
                    border: "1px solid black",
                    margin: "20px",
                    height: "400px",
                  }}
                >
                  <figure>
                    <img
                      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      SOFT SKILLS-II (PES319)
                    </h2>

                    <div className="card-actions justify-center">
                      <a href="https://drive.google.com/drive/folders/1V0xiaM6-SNyIF_QnJGlNkWGxopVBUHTv?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          Read Now
                        </button>
                      </a>

                      <a href="https://drive.google.com/drive/folders/1V0xiaM6-SNyIF_QnJGlNkWGxopVBUHTv?usp=drive_link">
                        <button className="btn btn-primary text-white">
                          PY-QP
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <br></br>
          </div>

          <Link to="/">
            <button className="mt-6 mb-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      
      </div>
    </>
  );
}

export default Course;
