import { useState } from "react";
import { CalendarReact } from "../CalendarReact";
import { Form } from "../Form";
import { Navbar } from "../Navbar";
import { SittingOption } from "../SittingOption";

import { GuestNumbers } from "../GuestNumbers";

export const Booking = () => {
  const [showForm, setShowForm] = useState(true); //ska vara false
  const [showCalendar, setShowCalendar] = useState(true);

  return (
    <>
      <p>Booking</p>
      {showCalendar && (
        <div className="calendarWrapper">
          <CalendarReact></CalendarReact>
        </div>
      )}
      {/* // i Calender här ska vi göra en onclick som gör att när man väljer datum
      blir show true */}

      {showForm && <Form></Form>}
    </>
  );
};
