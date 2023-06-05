import { useState } from "react";
import { CalendarReact } from "../CalendarReact";
import { Form } from "../Form";
import { Navbar } from "../Navbar";

export const Booking = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <p>Booking</p>
      <CalendarReact></CalendarReact>
      {/* // i Calender här ska vi göra en onclick som gör att när man väljer datum
      blir show true */}
      {show && <Form></Form>}
    </>
  );
};
