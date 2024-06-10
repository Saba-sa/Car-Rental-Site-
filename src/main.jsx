import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Layout/Homepage.jsx";
import Aboutpage from "./Layout/Aboutpage.jsx";
import Bookingpage from "./Layout/Bookingpage.jsx";
import Productpage from "./Layout/Productpage.jsx";
import Singleproduct from "./components/ProductDetail/Singleproduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <Aboutpage />,
      },
      {
        path: "Product",
        element: <Productpage />,
        children: [
          {
            path: "product/:id",
            element: <Singleproduct />,
          },
        ],
      },
      {
        path: "booking",
        element: <Bookingpage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
