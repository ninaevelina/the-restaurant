import { useCallback, useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";

export const CalendarReact = () => {
  const { updateDate } = useContext(CurrentBookingContext);
  const { getBookings, fullyBooked, oneTableLeft, bookings } =
    useContext(BookingsContext);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    getBookings();
  }, []);

  useEffect(() => {
    oneTableLeft("seatingOptions");
  }, [value]);

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
      console.log(tablesThatDay);
      if (tablesThatDay === 14) {
        console.log("endast 6 platser kvar");
        oneTableLeft("disableSeatingOption");
      } else if (tablesThatDay === 15) {
        fullyBooked();
        console.log("fullt");
      }
    });

    onChange(formattedDate);
    updateDate(formattedDate);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};
