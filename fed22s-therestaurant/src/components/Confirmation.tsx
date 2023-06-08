import { useContext } from "react";
import { IBooking } from "../models/IBooking";
import { BookingContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { StyledHeading, StyledHeading2 } from "./styled/Headings";
import { ActionType } from "../reducers/BookingReducer";

interface IBookingProps {
  booking: IBooking;
}

export const Confirmation = ({ booking }: IBookingProps) => {
  const dispatch = useContext(BookingContext); // change to currentbookingcontext

  return (
    // draft
    <>
      <StyledHeading>Thank you {booking.guest.name}</StyledHeading>
      <StyledHeading2>Details:</StyledHeading2>
      <p>{booking.date}</p>
      <p>{booking.sitting}</p>
      <p>{booking.people}</p>
      <button
        onClick={() => {
          dispatch({
            /* type(add to actiontype in reducer) + payload */
          });
        }}
      >
        Cancel
      </button>
    </>
  );
};
