import { createBrowserRouter } from "react-router";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import { RouterProvider } from "react-router/dom";
import Error from "./components/Error";
import Layout from "./components/layout/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <ProductListing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
