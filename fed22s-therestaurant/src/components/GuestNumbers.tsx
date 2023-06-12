import { GuestNumbersStyled } from "./styled/GuestNumbersStyled";
import "../scss/main.scss";
import { useContext, useEffect, useState } from "react";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";

interface unAvailableGuestButtonProps {
  disableButton: string;
}

export const GuestNumbers = ({
  disableButton,
}: unAvailableGuestButtonProps) => {
  const { updatePeople } = useContext(CurrentBookingContext);

  const handleClickPeople = (e: React.MouseEvent, people: number) => {
    e.preventDefault();

    updatePeople(people);
  };

  return (
    <>
      <div className="guestNumberWrapper">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <GuestNumbersStyled
            key={num}
            onClick={(e) => {
              handleClickPeople(e, num);
            }}
            available="seatingOptions"
          >
            {num}
          </GuestNumbersStyled>
        ))}
        {[7, 8, 9, 10].map((num) => (
          <GuestNumbersStyled
            key={num}
            onClick={(e) => {
              handleClickPeople(e, num);
            }}
            available={disableButton}
          >
            {num}
          </GuestNumbersStyled>
        ))}
      </div>
    </>
  );
};
