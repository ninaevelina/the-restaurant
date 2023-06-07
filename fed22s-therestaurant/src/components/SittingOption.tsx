import { useContext, useEffect, useState } from "react";
import { SittingButton } from "./styled/SittingButton";
import { CurrentBookingContext } from "../contexts/BookingContext";
import { IBooking } from "../models/IBooking";

export const SittingOption = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const { addBooking, booking } = useContext(CurrentBookingContext);

  const handleClickFirst = (e: React.MouseEvent, theSitting: string) => {
    e.preventDefault();
    const newSitting = {
      ...booking,
      sitting: theSitting,
    };
    addBooking(newSitting);
    // console.log(newSitting);
  };

  return (
    <>
      <SittingButton
        onClick={(e) => {
          handleClickFirst(e, "17-19");
        }}
      >
        17-19
      </SittingButton>
      <SittingButton
        onClick={(e) => {
          handleClickFirst(e, "19-21");
        }}
      >
        19-21
      </SittingButton>
    </>
  );
};
