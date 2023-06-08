import { useContext, useEffect, useState } from "react";
import { SittingButton } from "./styled/SittingButton";
import { CurrentBookingContext } from "../contexts/BookingContext";
import { IBooking } from "../models/IBooking";

export const SittingOption = () => {
  // const [first, setFirst] = useState(true);
  // const [second, setSecond] = useState(false);
  const { updateSeating } = useContext(CurrentBookingContext);

  const handleClickSitting = (e: React.MouseEvent, theSitting: string) => {
    e.preventDefault();
    updateSeating(theSitting);

    // console.log(newSitting);
  };

  return (
    <>
      <SittingButton
        onClick={(e) => {
          handleClickSitting(e, "17-19");
        }}
      >
        17-19
      </SittingButton>
      <SittingButton
        onClick={(e) => {
          handleClickSitting(e, "19-21");
        }}
      >
        19-21
      </SittingButton>
    </>
  );
};
