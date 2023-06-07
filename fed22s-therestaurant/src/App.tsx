import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useEffect, useReducer, useState } from "react";
import {
  CurrentBookingContext,
  IBookingContext,
} from "./contexts/BookingContext";
import { BookingDispatchContext } from "./contexts/BookingDispatchContext";
import { BookingReducer } from "./reducers/BookingReducer";
import { IBooking } from "./models/IBooking";
import axios from "axios";
import { IGuest } from "./models/IGuest";

function App() {
  const [bookings, dispatch] = useReducer(BookingReducer, [{}]);
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
  const [currentBooking, setCurrentBooking] = useState<IBookingContext>({
    booking: {
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
    },

    addBooking: (newBooking: IBooking) => {
      return;
    },
  });

  //detta ska göras i reducerdokumentet
  useEffect(() => {
    //hur lägger vi in datan i bookings i reducern?
    axios
      .get<IBooking[]>("http://localhost:4000/api/v1/booking")
      .then((response) => {
        setAllBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(allBookings);
  return (
    <>
      {/* <BookingContext.Provider value={bookings}> */}
      <CurrentBookingContext.Provider value={currentBooking}>
        <BookingDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router} />
        </BookingDispatchContext.Provider>
      </CurrentBookingContext.Provider>
      {/* </BookingContext.Provider> */}
    </>
  );
}

export default App;
