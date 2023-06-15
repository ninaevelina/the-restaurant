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
  //const [isLoading, setIsLoading] = useState(true);

  const handleClick = async () => {
    // setIsLoading(true);
    await deleteBooking(booking._id);
    console.log("log");
    setShowConfirmation(false);
    setShowDeleted(true);
    // setIsLoading(false);
  };

  if (showDeleted === false) {
    return (
      <>
        {showConfirmation && (
          <div>
            <h2>Thank you, {booking.guest.name}</h2>
            <div>
              <div>
                <span>Guests: {""}</span>
                <span>{booking.people} guests</span>
              </div>
              <div>
                {" "}
                <span>
                  Date: {booking.date} {booking.sitting}
                </span>
              </div>

              <div>
                <span>Order: {""}</span>
                <span>#{booking._id}</span>
              </div>
            </div>
            <div>
              <h4>Guest details</h4>
              <div>
                <span>Name: </span>
                <span>
                  {booking.guest.name} {booking.guest.lastname}
                </span>
              </div>
              <div>
                <span>Email: </span>
                <span>{booking.guest.email}</span>
              </div>
              <div>
                <span>Phone: </span>
                <span>{booking.guest.phone}</span>
              </div>
            </div>
            <div>
              <button onClick={handleClick}>Delete</button>
            </div>
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
