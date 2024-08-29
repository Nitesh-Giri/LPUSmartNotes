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
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4"> 
      <div>
        <h1 className="text-pink-500" style={{
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
      src="https://www.realitypremedia.com/blog/wp-content/uploads/2013/11/ebook1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Books!</h2>
    <p>dfdg</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-pink-500">Read Now</button>
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
    <h2 className="card-title">Books!</h2>
    <p>dfbdfn</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-pink-500">Read Now</button>
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
    <h2 className="card-title">Books!</h2>
    <p>fdgn</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-pink-500">Read Now</button>
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
    <h2 className="card-title">Book!</h2>
    <p>fgn</p>
    <div className="card-actions justify-end">
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
    <h2 className="card-title">Book!</h2>
    <p>vfbg</p>
    <div className="card-actions justify-end">
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
    <h2 className="card-title">Book!</h2>
    <p>xvxfbc</p>
    <div className="card-actions justify-end">
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
    <h2 className="card-title">Book!</h2>
    <p>cvnb</p>
    <div className="card-actions justify-end">
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
    <h2 className="card-title">Book!</h2>
    <p>dffdb</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-pink-500">Read Now</button>
    </div>
  </div>
</div>
          
        </div>
      </Slider>

      </div>
    </div>
    </>
  );
}
export default Freebook;
