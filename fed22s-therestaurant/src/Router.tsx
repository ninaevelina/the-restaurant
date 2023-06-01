import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/pages/Layout";
import { Booking } from "./components/pages/Booking";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home>, index: true },
      { path: "/booking", element: <Booking></Booking> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);
