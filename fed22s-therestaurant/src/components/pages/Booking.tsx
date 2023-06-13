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
import { Value } from "react-calendar/dist/cjs/shared/types";

export const Booking = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showForm, setShowForm] = useState(false); //ska vara false
  const [showGuest, setShowGuest] = useState(true);
  const [showSeatingTime, setShowSeatingTime] = useState(true);
  const [showFormAndPeople, setShowFormAndPeople] = useState(true);
  const [unAvailableGuestButton, setUnavailableGuestButton] =
    useState("showNumbers");
  const [disableSittingStyle, setDisableSittingStyle] = useState("showSeating");
  const [disableSittingOption, setDisableSittingOption] = useState("");
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
    oneTableLeft: (showOrHideGuest: string) => {
      return;
    },
    disableSittingOption: (showOrHideTime: string, disable: string) => {
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
    setShowFormAndPeople(false);
  };

  allBookings.oneTableLeft = (showOrHideNumbers: string) => {
    setUnavailableGuestButton(showOrHideNumbers);
  };

  allBookings.disableSittingOption = (
    showOrHideTime: string,
    disable: string
  ) => {
    setDisableSittingOption(showOrHideTime); //time
    setDisableSittingStyle(disable);
  };

  currentBooking.updateDate = (chosenDate: string) =>
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
    setCurrentBooking({
      ...currentBooking,
      booking: { ...currentBooking.booking, _id: result._id },
    });
    console.log(currentBooking);
    console.log(result);
    setShowConfirmation(true);
  };
  const handleBackClick = () => {
    setShowFormAndPeople(true);
    allBookings.oneTableLeft("showNumbers");
  };

  console.log(unAvailableGuestButton);

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
              {showSeatingTime && (
                <SittingOption
                  showOrHideTime={disableSittingOption}
                  changeVisability={disableSittingStyle}
                ></SittingOption>
              )}
              {showGuest && (
                <GuestNumbers
                  showOrHideNumbers={unAvailableGuestButton}
                ></GuestNumbers>
              )}

              <p>{bookingInfo}</p>
              {/* // i Calender här ska vi göra en onclick som gör att när man väljer datum
              blir show true */}
              {showForm && <Form></Form>}
            </div>
          ) : (
            <>
              <h3>
                Sorry we are fully booked on this date, please go back and try
                another day!
              </h3>
              <button onClick={handleBackClick}>Go back</button>
            </>
          )}
          {showConfirmation && <Confirmation></Confirmation>}
        </CurrentBookingContext.Provider>
      </BookingsContext.Provider>
    </>
  );
};
