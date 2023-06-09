import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useReducer } from "react";
import { BookingsReducer } from "./reducers/BookingsReducer";

function App() {
  const [bookings, dispatch] = useReducer(BookingsReducer, [{}]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
