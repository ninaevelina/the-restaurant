import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";

export const CalendarReact = () => {
  const { updateDate } = useContext(CurrentBookingContext);
  const { getBookings, bookings } = useContext(BookingsContext);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    getBookings();
  });

  const handleDateChange = (newValue: any) => {
    const formattedDate = newValue.toISOString().split("T")[0];
    console.log(formattedDate);
    onChange(formattedDate);
    updateDate(formattedDate);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};
