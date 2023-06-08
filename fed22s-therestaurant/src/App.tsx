import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useEffect, useReducer, useState } from "react";
import {
  CurrentBookingContext,
  IBookingContext,
} from "./contexts/BookingContext";
import { BookingDispatchContext } from "./contexts/BookingDispatchContext";
import { BookingsReducer } from "./reducers/BookingsReducer";
import { IBooking } from "./models/IBooking";
import axios from "axios";
import { IGuest } from "./models/IGuest";
import { createNewBooking } from "./services/restaurantApi";

function App() {
  const [bookings, dispatch] = useReducer(BookingsReducer, [{}]);
  const [allBookings, setAllBookings] = useState<IBooking[]>([
    {
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
  ]);
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

    addBooking: () => {
      return;
    },
    updatePeople: (numberOfGuest: number) => {
      return;
    },
    updateSeating: (seatingTime: string) => {
      return;
    },
    updateForm: (guestInfo: IGuest) => {
      return;
    },
  });

  currentBooking.addBooking = async () => {
    console.log(currentBooking.booking);
    try {
      let result = await createNewBooking(currentBooking.booking);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currentBooking);

  currentBooking.updatePeople = (numberOfGuest: number) => {
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, people: numberOfGuest },
    });
  };

  currentBooking.updateSeating = (seatingTime: string) => {
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, sitting: seatingTime },
    });
  };
  currentBooking.updateForm = (guestInfo: IGuest) => {
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, guest: guestInfo },
    });
  };

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
