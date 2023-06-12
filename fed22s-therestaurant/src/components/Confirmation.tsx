import { useState } from "react";
import { useContext } from "react";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";
import { IBooking } from "../models/IBooking";
import { StyledHeading } from "./styled/Headings";
import { Wrapper } from "./styled/Wrapper";
import { ActionType } from "../reducers/BookingsReducer";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { deleteBooking } from "../services/restaurantApi";

export const Confirmation = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const { booking } = useContext(CurrentBookingContext);
  const dispatch = useContext(BookingDispatchContext);
  //state to show "thank you-msg" when handleClick-fn is run

  //const { current}
  // const { bookings, getBookings } = useContext(BookingsContext);

  //getBookings()

  const handleClick = () => {
    // dispatch({ type: ActionType.DELETEBOOKING, payload: booking._id });
    deleteBooking(booking._id);
    console.log("log");
    setShowConfirmation(false);
  };

  return (
    <>
      {showConfirmation && (
        <div>
          <h2>Thank you {booking.guest.name}!</h2>

          <strong>Dirty Tapas</strong>
          <p>{booking.people} guests</p>
          <p>
            {booking.date} {booking.sitting}
          </p>

          <div>
            <strong>Booking details</strong>
            <p>Booking Reference</p>
            <p># {booking._id}</p>
          </div>
          <div>
            <strong>Guest details</strong>
            <p>
              {booking.guest.name} {booking.guest.lastname}
            </p>
            <p>{booking.guest.email}</p>
            <p>{booking.guest.phone}</p>
          </div>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </>
  );
};
