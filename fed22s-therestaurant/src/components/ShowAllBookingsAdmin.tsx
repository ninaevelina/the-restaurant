import { useContext, useState } from "react";
import { BookingsContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { ActionType } from "../reducers/BookingsReducer";

export const ShowAllBookingsAdmin = () => {
  //Hämta datan i contextet och loopa ut för varje html-tag
  const bookings = useContext(BookingsContext);
  const dispatch = useContext(BookingDispatchContext);
  console.log(bookings);
  const [showUpdate, setShowUpdate] = useState(false);

  const updatebooking = () => {};

  const allBookings = bookings.map((b) => {
    return (
      <div>
        <p>date: {b.date}</p>
        <p>guests: {b.people}</p>
        <p>Firstname{b.guest.name}</p>
        <p>Lastname{b.guest.lastname}</p>
        <p>Phone{b.guest.phone}</p>
        <p>email{b.guest.email}</p>
        <button
          onClick={() => {
            dispatch({
              type: ActionType.DELETEBOOKING,
              payload: b._id.toString(),
            });
          }}
        >
          delete booking
        </button>
        <button
          onClick={() => {
            dispatch({
              type: ActionType.UPDATEBOOKING,
              payload: b._id.toString(),
            });
          }}
        >
          update booking
        </button>
      </div>
    );
  });

  return <>{allBookings}</>;
};
