import { useState } from "react";
import { useContext } from "react";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";
import { IBooking } from "../models/IBooking";
import { StyledHeading } from "./styled/Headings";
import { ActionType } from "../reducers/BookingsReducer";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { deleteBooking } from "../services/restaurantApi";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const { booking } = useContext(CurrentBookingContext);
  const dispatch = useContext(BookingDispatchContext);
  const [showDeleted, setShowDeleted] = useState(false);

  const handleClick = () => {
    deleteBooking(booking._id);
    console.log("log");
    setShowConfirmation(false);
    setShowDeleted(true);
  };

  if (showDeleted === false) {
    return (
      <>
        {showConfirmation && (
          <div>
            <h2>Thank you, {booking.guest.name}</h2>

            <p>{booking.people} guests</p>
            <p>
              {booking.date} {booking.sitting}
            </p>

            <div>
              <h3>Booking details</h3>
              <span>Booking Reference {""}</span>
              <span># {booking._id}</span>
            </div>
            <div>
              <h4>Guest details</h4>
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
  } else {
    return (
      <>
        <h3>Your booking has been cancelled!</h3>
        <Link to="/">Back to homepage</Link>
      </>
    );
  }
};
