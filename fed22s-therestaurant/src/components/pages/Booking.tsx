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
import { Confirmation } from "../Confirmation";
import { IBooking } from "../../models/IBooking";

export const Booking = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showForm, setShowForm] = useState(false); //ska vara false
  const [showGuest, setShowGuest] = useState(true);
  const [showSeatingTime, setShowSeatingTime] = useState(true);
  const [showFormAndPeople, setShowFormAndPeople] = useState(true);
  const [lastTable, setLastTable] = useState(false);
  const [bookingInfo, setBookingInfo] = useState(
    "To make a reservation for 10+ people, please contact events@dirtytapas.com"
  );

  const [allBookings, setAllBookings] = useState<IAllBookingsContext>(() => ({
    bookings: [],
    getBookings: () => {
      return;
    },
    fullyBooked: () => {
      return;
    },
    oneTableLeft: () => {
      return;
    },
  }));

  const [currentBooking, setCurrentBooking] = useState<IBookingContext>({
    booking: {
      _id: "",
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

  allBookings.fullyBooked = () => {
    console.log("NU ÄR DET FULLT");
    //console.log(allBookings.bookings);
    setShowFormAndPeople(false);
  };

  allBookings.oneTableLeft = () => {
    setLastTable(true);
  };

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
    // let resultString = JSON.stringify(result);
    // console.log(result);
    //console.log(resultString);
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, _id: result._id },
    });
    console.log(currentBooking);
    console.log(result);
    setShowConfirmation(true);

    //set default values
  };

  return (
    <>
      <p>Booking</p>
      <BookingsContext.Provider value={allBookings}>
        <CurrentBookingContext.Provider value={currentBooking}>
          <div className="calendarWrapper">
            <CalendarReact></CalendarReact>
          </div>
          {showFormAndPeople ? (
            <div>
              {showGuest && <GuestNumbers lastTable={lastTable}></GuestNumbers>}
              {showSeatingTime && <SittingOption></SittingOption>}
              <p>{bookingInfo}</p>
              {/* // i Calender här ska vi göra en onclick som gör att när man väljer datum
              blir show true */}
              {showForm && <Form></Form>}
            </div>
          ) : (
            <>
              <h3>
                Sorry we are fully booked on this date, please go back and try
                another one!
              </h3>
              <button
                onClick={() => {
                  console.log("ojiji");
                  setShowFormAndPeople(true);
                }}
              >
                Go back
              </button>
            </>
          )}
          {showConfirmation && <Confirmation></Confirmation>}
        </CurrentBookingContext.Provider>
      </BookingsContext.Provider>
    </>
  );
};
