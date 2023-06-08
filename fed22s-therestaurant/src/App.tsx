import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useReducer, useState } from "react";
import {
  CurrentBookingContext,
  IBookingContext,
} from "./contexts/BookingContext";
import { BookingsReducer } from "./reducers/BookingsReducer";
import { IGuest } from "./models/IGuest";
import { createNewBooking } from "./services/restaurantApi";

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
    updateDate: (chosenData: any) => {
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

  currentBooking.updateDate = (chosenDate: any) =>
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, date: chosenDate },
    });

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

  return (
    <>
      <CurrentBookingContext.Provider value={currentBooking}>
        <RouterProvider router={router} />
      </CurrentBookingContext.Provider>
    </>
  );
}

export default App;
