import { useContext, useState } from "react";
import { BookingsContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { ActionType } from "../reducers/BookingsReducer";
import { deleteBooking } from "../services/restaurantApi";

export const ShowAllBookingsAdmin = () => {
  //Hämta datan i contextet och loopa ut för varje html-tag
  const bookings = useContext(BookingsContext);
  const dispatch = useContext(BookingDispatchContext);

  const [showUpdate, setShowUpdate] = useState(false);

  const deleteCurrentBooking = (id: string) => {
    dispatch({ type: ActionType.DELETEBOOKING, payload: id });
  };

  const showUpdatebooking = () => {
    setShowUpdate(true);
  };

  console.log(showUpdate);
  const allBookings = bookings.map((b) => {
    return (
      <div key={b._id}>
        <p>date: {b.date}</p>
        <p>guests: {b.people}</p>
        <p>Firstname{b.guest.name}</p>
        <p>Lastname{b.guest.lastname}</p>
        <p>Phone{b.guest.phone}</p>
        <p>email{b.guest.email}</p>
        <button
          onClick={() => {
            deleteCurrentBooking(b._id.toString()),
              deleteBooking(b._id.toString());
          }}
        >
          delete booking
        </button>
        <button onClick={showUpdatebooking}>update booking</button>
      </div>
    );
  });

  return <>{allBookings}</>;
};
