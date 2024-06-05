import Carousel from "react-multi-carousel";
import { testimonialData } from "../../data/Testimonial";
import fullStarImage from "../../assets/fullStar.png";
import hollowStarImage from "../../assets/hollowStar.png";

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>

      <div className="dark:bg-black dark:text-white py-14 sm:pb-24 dark:bg-white/20 bg-gray-100 ">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12 ">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure consectetur tempora amet.
            </p>
          </div>

          <div className="  text-black dark:text-white">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {testimonialData.map((testimonial, index) => {
                const fullStars = Array(testimonial.rate).fill(
                  <img src={fullStarImage} alt="Full Star" />
                );
                const hollowStar = Array(5 - testimonial.rate).fill(
                  <img src={hollowStarImage} alt="Hollow Star" />
                );

                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={testimonial.aosDelay}
                    className=" text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 duration-300  rounded-lg flex flex-col sm:flex-row items-center justify-evenly"
                  >
                    <div className="grid place-items-center w-[50%] sm:w-[25%] ">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full"
                      />
                    </div>
                    <div className="w-full sm:w-[40%] text-left">
                      <p>{testimonial.description}</p>
                      <p className=" font-bold my-2">{testimonial.name}</p>
                      <div className="w-9 flex">
                        {fullStars.concat(hollowStar)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
