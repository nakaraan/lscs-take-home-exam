import React, { useEffect } from 'react'
import Image1 from "../../assets/carousel/headphones1.png"
import Image2 from "../../assets/carousel/playstation1.png"
import Image3 from "../../assets/carousel/gpu.png"
import Slider from "react-slick";
import AOS from 'aos';

const SliderData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphones.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Playstation 5",
    title: "Limitless",
    title2: "Play.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "NVIDIA GEFORCE RTX",
    title: "Pure",
    title2: "GEFORCE.",
  },
]

const Carousel = () => {

  useEffect(() => {
    AOS.refresh();
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    afterChange: () => AOS.refresh(),
  };

return (
  <div className="container mt-6 sm:mt-10 lg:mt-8">
  <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center bg-gradient-to-r from-[#ffdeac] to-[#ffd391] dark:bg-gradient-to-r dark:from-[#161d25] dark:to-[#444e63] dark:text-[#c7d5e0]">
      <div className="container pb-8 sm:pb-0">
        {/* Carousel section */}
        <Slider {...settings}>
          {SliderData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left relative z-10">
                  <h1 
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                  <h1 
                  data-aos="zoom-out"
                  data-aos-duation="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-8xl font-bold">{data.title}</h1>
                  <h1 
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl uppercase text-whit sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}
                  </h1>
                  <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full w-fit">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10"
                  >
                <img src={data.img} 
                alt="Carousel Image" 
                className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] object-contain mx-auto drop-shadow [-8px_4px_6px_rgba(0,0,0,0.4)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
)}
export default Carousel;
