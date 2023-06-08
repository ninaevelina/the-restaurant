import { useContext, useState } from "react";
import Calendar from "react-calendar";
import { CurrentBookingContext } from "../contexts/BookingContext";

export const CalendarReact = () => {
  const { updateDate } = useContext(CurrentBookingContext);
  const [value, onChange] = useState(new Date());

  const handleDateChange = (newValue: any) => {
    console.log(newValue);
    onChange(newValue);
    updateDate(newValue);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
};
