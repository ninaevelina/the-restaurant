import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Booking } from "./pages/Booking";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

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
