import car1 from "../../assets/car svgs/car1.svg";
import car2 from "../../assets/car svgs/car2.svg";
import car3 from "../../assets/car svgs/car3.svg";
import car4 from "../../assets/car svgs/car4.svg";
import car5 from "../../assets/car svgs/car5.svg";
const Carsoffer = () => {
  const data = [
    {
      heading: "Budget",
      text: "Daihatsu Mira or similar",
      img: car1,
      aosDelay: 1000,
    },
    {
      heading: "Standard",
      text: "Toyota Corolla or similar",
      img: car2,
      aosDelay: 1500,
    },
    {
      heading: "Luxury",
      text: "Mercedes Benz or similar",
      img: car3,
      aosDelay: 2000,
    },
    {
      heading: "Toyota",
      text: "Toyota Coaster or similar",
      img: car4,
      aosDelay: 2500,
    },
    {
      heading: "suv",
      text: "Land Cruiser or similar",
      img: car5,
      aosDelay: 3000,
    },
  ];
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] my-12 ">
        <>
          <div className="flex items-center flex-col mb-4 " data-aos="fade-up">
            <h1 className="my-2 text-2xl">
              What <span className="text-orange-700">type of car</span> are you
              looking for?
            </h1>
            <div className=" w-[10%] bg-orange-700 h-[4px] rounded-full mb-4 "></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            {/* <div className="flex items-center justify-between gap-4 "> */}
            {data.map((item, index) => (
              <div
                key={index}
                className=" bg-gray-50 p-4 hover:scale-105 cursor-pointer dark:bg-gray-700 m-2"
                data-aos="fade-left"
                data-aos-delay={item.aosDelay}
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-[50%] sm:w-full h-full fill-current text-black dark:text-white"
                  />
                </div>
                <h1 className="text-orange-700 font-semibold">
                  {item.heading}
                </h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </>
        <div
          className="my-8 text-gray-600 md:my-24"
          data-aos="fade-down"
          data-aos-delay={3000}
        >
          <h1 className="my-2 text-2xl text-orange-700 dark:text-white font-semibold">
            Why Rent A Car With Rently?
          </h1>
          <p className="text-md mt-4 md:mt-6 dark:text-white">
            Rently Car Rental Service is widely regarded as one of the best Car
            Rental Service Providers serving not only Karachi but other major
            cities of Pakistan as well.
            <br />
            The Rently team has extensive experience in renting cars in Karachi,
            allowing us to optimise your travel needs and make it simple for you
            to find the ideal vehicle for your journey. Our team of dedicated
            professionals strives to make your trip more enjoyable and is
            available to you 24 hours a day, seven days a week.
          </p>
          <h2 className="text-gray-700 font-semibold my-2 text-lg md:my-8 dark:text-white">
            Few Reasons to choose Rently over other car rental services:
          </h2>
          <ol className="list-decimal list-inside dark:text-white">
            <li className="text-gray-700 font-semibold my-2 dark:text-white">
              There Are No Hidden Charges
            </li>
            <p>
              Insurance is already included in the price of Rently Cars, so what
              you see online is exactly what you will be charged in addition to
              VAT and fuel.
            </p>
            <li className="text-gray-700 font-semibold my-2 dark:text-white">
              Flexible Pricing Packages
            </li>
            <p>
              There is no such thing as one size fits all. Therefore Rently car
              rental offers flexible pricing packages. The packages are made in
              such a way that there is an optimal balance of time and kilometres
              for your needs and goals. You can always modify them as per your
              requirements.
            </p>
            <li className="text-gray-700 font-semibold my-2 dark:text-white">
              24 Hours Assistance
            </li>
            <p>
              Rently provides assistance 24 hours a day, seven days a week. In
              an unfortunate incident of a breakdown, we will send a replacement
              car as soon as possible. You are never too far away for us.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Carsoffer;
