import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newsData from "../../data/News";
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
const Newsrelatedtocar = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] mt-12 ">
        <h1 className="font-bold text-2xl mt-5  text-primary flex items-center justify-center mb-8">
          Our Blog
        </h1>

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
          {newsData?.map((item) => {
            return (
              <div
                data-aos="fade-up"
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group cursor-pointer mx-4 py-8"
                key={item.id}
              >
                <div className="w-full ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <p className="text-gray-400">{item.date}</p>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{item.title}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold flex-col">
                    <p>{item.news.slice(0, 100)}......</p>
                    <span className="px-4 py-2 border border-primary text-primary mt-8">
                      read more
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Newsrelatedtocar;
