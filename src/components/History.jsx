import React from "react";
import Navbar from "./Navbar";
import { LogoLetters, Slide1, Slide2 } from ".";
import NumberTitle from "./NumberTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const History = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          initialSlide: 1
        }
      }
    ]

  };

  return (
    <div className="flex flex-col" id="history">
      {/* Section1 History Navbar */}
      <section className="text-gray">
        <Navbar Logo={LogoLetters} Item1="01. history" Item2="02. team" />
      </section>

      {/* Section2 History Main */}
      <section className="bg-historyBg bg-cover bg-center ">
        <div className="flex flex-col gap-80  w-4/5 mx-auto py-8">
          {/* History main text */}
          <div>
            {/* title */}
            <NumberTitle number="01" title="history" />

            {/* content */}
            <div className="w-10/12 mx-auto">
              <p className="text-left sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                in ante viverra, rutrum erat rutrum, consectetur mi. Proin at
                maximus est. Nullam purus ex, iaculis sed erat sed, blandit
                tincidunt quam. Cras scelerisque id quam sed dignissim
                Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut
                quam. Vivamus suscipit dignissim tortor nec congue.
              </p>
            </div>
          </div>
          </div>

          {/* History carousel */}
          <div className="mt-80 sm:mt-40 py-8 relative">
            <div className="bg-slate-700 opacity-70 absolute w-full h-full left-0 bottom-0 z-10"></div>
            <div className="relative w-4/5 mx-auto z-50">
              <Slider {...settings}>
                <div>
                  <img src={Slide2} alt="nature"/>
                </div>
                <div>
                  <img src={Slide1} alt="man" />
                </div>
                <div>
                  <img src={Slide2} alt="nature" />
                </div>
                <div>
                  <img src={Slide1} alt="man" />
                </div>
                <div>
                  <img src={Slide2} alt="nature" />
                </div>
                <div>
                  <img src={Slide1} alt="man" />
                </div>
                <div>
                  <img src={Slide2} alt="nature" />
                </div>
                <div>
                  <img src={Slide1} alt="man" />
                </div>
                <div>
                  <img src={Slide2} alt="nature" />
                </div>
                <div>
                  <img src={Slide1} alt="man" />
                </div>
              </Slider>
            </div>
          </div>
        
      </section>
    </div>
  );
};

export default History;
