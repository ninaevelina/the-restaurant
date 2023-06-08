import { useState } from "react";
import { CalendarReact } from "../CalendarReact";
import { Form } from "../Form";
import {
  CurrentBookingContext,
  IBookingContext,
} from "../../contexts/BookingContext";
import { IGuest } from "../../models/IGuest";
import { createNewBooking } from "../../services/restaurantApi";

export const Booking = () => {
  const [showForm, setShowForm] = useState(true); //ska vara false
  const [showCalendar, setShowCalendar] = useState(true);

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
      <p>Booking</p>
      <CurrentBookingContext.Provider value={currentBooking}>
        {showCalendar && (
          <div className="calendarWrapper">
            <CalendarReact></CalendarReact>
          </div>
        )}
        {/* // i Calender här ska vi göra en onclick som gör att när man väljer datum
      blir show true */}

        {showForm && <Form></Form>}
      </CurrentBookingContext.Provider>
    </>
  );
};
