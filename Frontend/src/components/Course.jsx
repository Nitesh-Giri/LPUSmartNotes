import React, { useEffect, useState } from "react";
import Cards from "./Cards";
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
          <p className="mt-12">
          DiplomaNet is a Digital E-Library tailored specifically for diploma students in India. This project aims to provide easy access to well-organized, syllabus-aligned study materials and foster a collaborative online environment for students.


          </p><br></br>

          <div> 
            <p className="text-pink-500">Computer Science & Engineering</p><br></br>
          </div>

          <div>
            <Slider {...settings}>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://m.media-amazon.com/images/I/71uN0nVAkvL._AC_UF1000,1000_QL80_.jpg"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">C++ Programming</h2>
    <div className="card-actions justify-center">
      <a href="https://notalentgeek.github.io/note/note/project/project-independent/pi-brp-beginning-c-programming/document/20170807-1504-cet-1-book-and-source-1.pdf">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      </a>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4302-0032-1"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Java Programming</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
   width: '25vw',
   border: '1px solid black',
   margin: '20px',
   height: '400px',
  }}
>
  <figure>
    <img
      src="https://qph.cf2.quoracdn.net/main-qimg-84610dbf5532f036eaeebf8c64ba7d69-lq"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Data Structure & Algorithms</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
         
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://m.media-amazon.com/images/I/81P9wo4zRqL._AC_UF1000,1000_QL80_.jpg"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Introduction to DBMS</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <a href="https://www.rjsfgc.edu.in/pdf/even-sem-qp/bca/II-SEMESTER/Database-Management-System.pdf">
      <button className="btn btn-primary text-pink-500">PY-QP</button>
      </a>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
 
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>




      </Slider><br></br>

          </div><br></br>
          <div> 
            <p className="text-pink-500">Civil Engineering</p><br></br>
          </div>

          <div>
            <Slider {...settings}>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9hxLNvZxIP911A0FVpjpkMkgOekmVmRD0Q&s"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Concept Booster for CE</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://m.media-amazon.com/images/I/81S23t46BlL._AC_UF1000,1000_QL80_.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Theory of Structure</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
   width: '25vw',
   border: '1px solid black',
   margin: '20px',
   height: '400px',
  }}
>
  <figure>
    <img
      src="https://m.media-amazon.com/images/I/91VXcW8kLRL._AC_UF1000,1000_QL80_.jpg"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Concrete Technology</h2>
 
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
         
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
 
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
 
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
      </Slider><br></br>

          </div>
          <br></br>
          <div> 
            <p className="text-pink-500">Electronic engineering</p><br></br>
          </div>
          <div>
            <Slider {...settings}>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-78995-4"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Electronics Engineering</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFSufsBgZnH1mzjx9jQJ9PhaeTm3qoLuoMw&s"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Electronics & Communication</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
   width: '25vw',
   border: '1px solid black',
   margin: '20px',
   height: '400px',
  }}
>
  <figure>
    <img
      src="https://m.media-amazon.com/images/I/51XDMQIQ53L._SL500_.jpg"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Electronics Manufacturing</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
         
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>

    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
      </Slider><br></br>

          </div>
          <br></br>
          <div> 
            <p className="text-pink-500">Chemical Engineering</p><br></br>
          </div>
          <div>
            <Slider {...settings}>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Books!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Books!</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
   width: '25vw',
   border: '1px solid black',
   margin: '20px',
   height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Books!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
         
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
      </Slider><br></br>

          </div>
          <br></br>
          <div> 
            <p className="text-pink-500">Electrical engineering</p><br></br>
          </div>
          <div>
            <Slider {...settings}>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Books!</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Books!</h2>
  
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
   width: '25vw',
   border: '1px solid black',
   margin: '20px',
   height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Books!</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
         
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>

    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
        <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4" style={{
    width: '25vw',
    border: '1px solid black',
    margin: '20px',
    height: '400px',
  }}
>
  <figure>
    <img
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Book!</h2>
 
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      <button className="btn btn-primary text-pink-500">PY-QP</button>
    </div>
  </div>
</div>
          
        </div>
      </Slider><br></br>

          </div>
          

        

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
