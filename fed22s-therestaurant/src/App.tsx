import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useReducer } from "react";
import { BookingsReducer } from "./reducers/BookingsReducer";

function App() {
  const [bookings, dispatch] = useReducer(BookingsReducer, [{}]);
  // const [allBookings, setAllBookings] = useState<IBooking[]>([
  //   {
  //     _id: 0,
  //     people: 0,
  //     date: "",
  //     sitting: "",
  //     tables: [],
  //     guest: {
  //       name: "",
  //       lastname: "",
  //       email: "",
  //       phone: 0,
  //     },
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
