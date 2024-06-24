import { useEffect } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import banner from "../../assets/banner-car2.png";
import AOS from "aos";
import { Link } from "react-router-dom";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center"> */}
        <div className="flex flex-col place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative md:-top-[50px] -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row-reverse  gap-4 items-center justify-between text-neutral-900">
            <div className="space-y-5 order-2 sm:order-1 sm:pr-32 pt-12 lg:w-[60%]">
              <p
                data-aos="fade-up"
                className="text-primary text-2xl font-serif"
              >
                Road Trip Ready{" "}
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-5xl lg:text-7xl font-semibold font-serif dark:text-white"
              >
                Car Rental
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="1000"
                className="dark:text-gray-300"
              >
                Rent Your Perfect Ride in Minutes adipisicing elit. Ratione
                veritatis explicabo quibusdam quae reprehenderit ab{" "}
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="1500"
                onClick={() => {
                  AOS.refreshHard();
                }}
                className="rounded-md bg-primary hover:bg-orange-800 transition duration-500 py-2 px-6 text-white"
              >
                Get Started
              </button>
            </div>
            <div
              className=" flex flex-col justify-center items-center cursor-pointer border border-red w-[40%]  sm:w-[60%] md:w-[30%] lg:w-[10%] bg-gray-100 rounded-xl dark:text-white dark:bg-black"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
            >
              <Link to="/product">
                <img src={banner} alt="banner" />
                <p className="">View Gallery</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
