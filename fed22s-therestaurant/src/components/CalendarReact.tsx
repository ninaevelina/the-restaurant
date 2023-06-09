import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";

export const CalendarReact = () => {
  const { updateDate } = useContext(CurrentBookingContext);
  const { getBookings, fullyBooked, bookings } = useContext(BookingsContext);
  const [value, onChange] = useState(new Date());
  const [fullTables, setFullTables] = useState(0);

  useEffect(() => {
    getBookings();
  });

  const handleDateChange = (newValue: any) => {
    const formattedDate = newValue.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const matchedBooking = bookings.filter((b) => formattedDate === b.date);
    console.log(matchedBooking);
    let peopleThatDay = 0;
    let tablesThatDay = 0;
    matchedBooking.map((chosenBooking) => {
      peopleThatDay += chosenBooking.people;
      if (peopleThatDay === 90) {
        console.log("fullt med människor");
      }

      tablesThatDay += chosenBooking.tables;
      if (tablesThatDay === 14) {
        console.log("endast 6 platser kvar");
      } else if (tablesThatDay === 15) {
        console.log("fullt");
        fullyBooked();
      }
      console.log(peopleThatDay);
      console.log(tablesThatDay);
    });

    // bookings.map((b) => {
    //   if (formattedDate === b.date) {
    //     console.log(formattedDate + b.date + " ----> MATCHAR ");
    //     if (b.tables === 2) {
    //       setFullTables(fullTables + 2);
    //       console.log(fullTables);
    //     } else {
    //       setFullTables(fullTables + 1);
    //       console.log(fullTables);
    //     }
    //   }
    //   return fullTables;
    // });

    onChange(formattedDate);
    updateDate(formattedDate);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};
