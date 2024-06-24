import { useNavigate } from "react-router-dom";

const Product = ({ item = {} }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white cursor-pointer rounded-sm"
      data-aos="fade-up"
      onClick={() => navigate(`/product/${item?.id}`)}
    >
      <div className="group aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 dark:bg-gray-900">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover object-center h-full w-full group-hover:opacity-75 p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="mt-4 text-sm text-gray-700 dark:text-orange-100">
          {item.name}
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900 dark:text-orange-400">
          {item.price}
        </p>
      </div>
      <div className="absolute top-0 right-0">
        {item.availability ? (
          <p className="text-white p-4 bg-green-500">Available</p>
        ) : (
          <p className="text-white p-4 bg-red-500">Out of Stock</p>
        )}
      </div>
    </div>
  );
};

export default Product;
