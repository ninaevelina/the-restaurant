import { useCallback, useEffect, useState } from "react";
import { CalendarReact } from "../CalendarReact";
import { Form } from "../Form";
import {
  BookingsContext,
  CurrentBookingContext,
  IAllBookingsContext,
  IBookingContext,
} from "../../contexts/BookingContext";
import { IGuest } from "../../models/IGuest";
import {
  createNewBooking,
  getAllBookings,
  updateBooking,
} from "../../services/restaurantApi";
import { GuestNumbers } from "../GuestNumbers";
import { SittingOption } from "../SittingOption";

export const Booking = () => {
  const [showForm, setShowForm] = useState(false); //ska vara false
  const [bookingInfo, setBookingInfo] = useState(
    "To make a reservation for 10+ people, please contact events@dirtytapas.com"
  );

  const [allBookings, setAllBookings] = useState<IAllBookingsContext>(() => ({
    bookings: [],
    getBookings: () => {},
  }));

  const [currentBooking, setCurrentBooking] = useState<IBookingContext>({
    booking: {
      _id: 0,
      people: 0,
      date: "",
      sitting: "",
      tables: 0,
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
    updateTables: (tables: number) => {
      return;
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      let allResults = await getAllBookings();

      setAllBookings((prevAllBookings) => ({
        ...prevAllBookings,
        bookings: allResults,
      }));
    };

    fetchData();
  }, []);
  console.log(allBookings);

  currentBooking.updateDate = (chosenDate: any) =>
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, date: chosenDate },
    });

  currentBooking.updateSeating = (seatingTime: string) => {
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, sitting: seatingTime },
    });
    setShowForm(true);
    setBookingInfo("Please provide your booking details");
  };
  currentBooking.updateForm = (guestInfo: IGuest) => {
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, guest: guestInfo },
    });
  };
  currentBooking.updateTables = (numberOfGuest: number) => {
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, tables: numberOfGuest },
    });
  };
  currentBooking.updatePeople = (numberOfGuest: number) => {
    setCurrentBooking({
      ...currentBooking,
      booking: {
        ...currentBooking.booking,
        people: numberOfGuest,
        tables: amountOfTables(numberOfGuest),
      },
    });
  };

  const amountOfTables = (numberOfGuest: number) => {
    return numberOfGuest > 6 ? 2 : 1;
  };
  currentBooking.addBooking = async () => {
    let result = await createNewBooking(currentBooking.booking);
    console.log(result);
  };

  return (
    <>
      <p>Booking</p>
      <BookingsContext.Provider value={allBookings}>
        <CurrentBookingContext.Provider value={currentBooking}>
          <div className="calendarWrapper">
            <CalendarReact></CalendarReact>
          </div>

          <GuestNumbers></GuestNumbers>
          <SittingOption></SittingOption>
          <p>{bookingInfo}</p>
          {/* // i Calender här ska vi göra en onclick som gör att när man väljer datum
      blir show true */}

          {showForm && <Form></Form>}
        </CurrentBookingContext.Provider>
      </BookingsContext.Provider>
    </>
  );
};
