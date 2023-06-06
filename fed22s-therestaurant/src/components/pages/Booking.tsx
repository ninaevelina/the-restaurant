import { useState } from "react";
import { CalendarReact } from "../CalendarReact";
import { Form } from "../Form";
import { Navbar } from "../Navbar";
import { SittingOption } from "../SittingOption";

import { GuestNumbers } from "../GuestNumbers";

export const Booking = () => {
  const [showForm, setShowForm] = useState(true); //ska vara false
  const [showSittingButton, setShowSittingButton] = useState(true); //ska vara false

  return (
    <>
      <p>Booking</p>
      <CalendarReact></CalendarReact>
      {/* // i Calender här ska vi göra en onclick som gör att när man väljer datum
      blir show true */}
      <GuestNumbers></GuestNumbers>
      {showSittingButton && <SittingOption></SittingOption>}
      {showForm && <Form></Form>}
    </>
  );
};
