import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
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
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4" > 
      <div id="books">
        <h1  className="text-pink-500" style={{
    justifyContent: 'center',
    textAlign: 'center'
  }}>Self Help Books</h1><br></br>
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
      src="https://m.media-amazon.com/images/I/61oczMHytQL._AC_UF1000,1000_QL80_.jpg"
      alt="book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">E-Commerce for Entrepreneurs</h2>
    <div className="card-actions justify-center">
    <a
      href="https://drive.google.com/file/d/1c-uqzDoDtFcdYOQWYSz3vpH2mhrav9XS/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn btn-primary text-pink-500">Read Now</button>
      </a>
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
      src="https://cdn.kobo.com/book-images/0e809b81-0b4b-4ed5-814f-80d56b3e6203/1200/1200/False/how-to-help-yourself-with-self-help.jpg"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">How to Help Yourself With Self-Help</h2>
   
    <div className="card-actions justify-center">
      <a href="https://drive.google.com/file/d/1SgVgo6E8x-0XUgnp8LbzV33WLDtT5zPq/view?usp=sharing">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      </a>
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
      src="https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg"
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Rich Dad Poor Dad</h2>
    <div className="card-actions justify-center">
      <a href="https://drive.google.com/file/d/1_8cvORZdqAzGScRU7o2fTHHyPzFH6Nzs/view?usp=sharing">
      <button className="btn btn-primary text-pink-500">Read Now</button>
      </a>
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
    </div>
  </div>
</div>
          
        </div>
      </Slider>

      </div><br></br><br></br>

      <div id="about">
        <h1  className="text-pink-500" style={{
    justifyContent: 'center',
    textAlign: 'center'
  }}>About Us</h1><br></br>
      </div>

      <div>
      <div>
        <div className="card card-compact bg-base-100 w-90 shadow-xl m-4">

          <p>The goal of DiplomaNet is to enhance learning outcomes by making quality educational resources easily accessible to diploma students and promoting continuous collaboration among them.</p><br></br>
          <p><strong> Aligned Content: </strong> SyllabusAll study materials are organized according to the official syllabus.</p><br></br>
          <p><strong>Interactive Learning Environment: </strong> Engage with other students and collaborate on projects.</p><br></br>
          <p><strong> User-Friendly Interface: </strong>Easy navigation and clean design.</p><br></br>
          <p><strong> Management: </strong> ResourceUpload, download, and manage study materials efficiently.
          </p><br></br>
        </div>
          
        </div>
      </div><br></br>

      <div id="contact">
        <h1 className="text-pink-500" style={{
    justifyContent: 'center',
    textAlign: 'center'
  }}>Contact Us</h1><br></br>
      </div><br></br>

      
      <div>
       
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/map-infographic-background-with-icons_23-2147604180.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid"
      alt="Album" />
  </figure>
  <div className="card-body">
  <label className="input input-bordered flex items-center gap-2">
  Name:
  <input type="text" className="grow"  />
</label>
<label className="input input-bordered flex items-center gap-2">
  Email:
  <input type="text" className="grow" />
</label>
<textarea className="textarea textarea-bordered" placeholder="Write your query"></textarea>
  <button className="btn btn-primary text-pink-500">Submit</button>

  </div>
</div>
          
        </div><br /><br />

    </div>
    </>
  );
}


export default Freebook;
