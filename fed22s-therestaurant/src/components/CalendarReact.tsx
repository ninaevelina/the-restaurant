import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";
import { formatShortWeekday } from "react-calendar/dist/cjs/shared/dateFormatter";
import { Value } from "react-calendar/dist/cjs/shared/types";

export const CalendarReact = () => {
  const { updateDate, booking } = useContext(CurrentBookingContext);
  const { getBookings, fullyBooked, oneTableLeft, bookings } =
    useContext(BookingsContext);
  const [value, onChange] = useState("");
  const [seatingTime, setSeatingTime] = useState("");

  useEffect(() => {
    getBookings();
  }, []);

  // useEffect(() => {
  //   oneTableLeft("seatingOptions");
  // }, [booking.date]);

  const handleDateChange = (newValue: Value) => {
    const formattedDate = newValue?.toLocaleString("en-US").split(",")[0];

    const matchedBooking = bookings.filter((b) => formattedDate === b.date);

    console.log(matchedBooking);

    let peopleThatDay = 0;
    let tablesThatDay = 0;

    if (matchedBooking.length === 0) {
      oneTableLeft("seatingOptions");
    } else {
      matchedBooking.map((chosenBooking) => {
        let time = "";
        chosenBooking.sitting === "17-19" ? (time = "17-19") : (time = "19-21");

        //console.log(chosenBooking);

        // if (chosenBooking.sitting === "17-19" && "19-21") {
        if (chosenBooking.tables === 30) {
          console.log("helt fullbokat");
        }
        //  }
        // First sitting
        if (chosenBooking.sitting === time) {
          // If 90 guests = FULL
          peopleThatDay += chosenBooking.people;
          if (peopleThatDay === 90) {
            console.log("fullt med människor");
          }
          // If 14 tables are booked = only 6 seats left
          // If 15 tables are booked = FULL

          tablesThatDay += chosenBooking.tables;
          console.log(peopleThatDay, tablesThatDay);

          if (tablesThatDay === 14) {
            console.log("endast 6 platser kvar");
            oneTableLeft("disableSeatingOption");
          } else {
            oneTableLeft("seatingOptions");
          }

          if (tablesThatDay === 15) {
            fullyBooked();
          }
        }
      });
    }

    updateDate(formattedDate);
    if (formattedDate) onChange(formattedDate);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={booking.date} />
    </div>
  );
};
