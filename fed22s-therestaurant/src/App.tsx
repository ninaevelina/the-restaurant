import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useEffect, useReducer, useState } from "react";
import {
  BookingContext,
  CurrentBookingContext,
} from "./contexts/BookingContext";
import { BookingDispatchContext } from "./contexts/BookingDispatchContext";
import { BookingReducer } from "./reducers/BookingReducer";
import { IBooking } from "./models/IBooking";

function App() {
  const [bookings, dispatch] = useReducer(BookingReducer, []);
  const [currentBooking, setCurrentBooking] = useState<IBooking>({
    _id: 0,
    people: 0,
    date: "",
    sitting: "",
    tables: [],
    guest: {
      name: "",
      lastname: "",
      email: "",
      phone: 0,
    },
  });

  useEffect(() => {
    //Hämta datan här och lägga in i det vår bookings variabel via dispatch.
  });

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <CurrentBookingContext.Provider value={currentBooking}>
          <BookingDispatchContext.Provider value={dispatch}>
            <RouterProvider router={router} />
          </BookingDispatchContext.Provider>
        </CurrentBookingContext.Provider>
      </BookingContext.Provider>
    </>
  );
}

export default App;
