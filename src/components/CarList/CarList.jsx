import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carList } from "../../data/Carlist";
import { useNavigate } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarList = () => {
  const navigate = useNavigate();
  return (
    <section className=" dark:bg-black bg-white w-[90%] m-auto my-12  duration-300">
      <div className="max-width slider">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem ipsum dolor
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>

        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
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
        >
          {carList?.map((item, index) => {
            return (
              <div
                data-aos="fade-up"
                className="space-y-3 border-2 border-gray-300 hover:border-orange-700 p-3 rounded-xl relative group "
                key={index}
                onClick={() => navigate(`product/${item.id}`)}
              >
                <div className="w-full h-[120px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-orange-700 font-semibold">{item.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>$ {item.price}</p>
                    <a href="#">Details</a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <button
        data-aos="fade-up"
        className="button-outline text-orange-700 border-orange-700 hover:bg-orange-500 hover:text-white mt-2 md:mt-8"
        onClick={() => navigate(`about`)}
      >
        Get Started
      </button>
    </section>
  );
};

export default CarList;
