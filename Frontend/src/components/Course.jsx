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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
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
