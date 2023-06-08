import { useContext, useEffect, useReducer } from "react";
import { ActionType, BookingsReducer } from "../reducers/BookingsReducer";
import { getAllBookings } from "../services/restaurantApi";
import { BookingsContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";

export const ShowAllBookingsAdmin = () => {
  //Hämta datan i contextet och loopa ut för varje html-tag
  const bookings = useContext(BookingsContext);
  const dispatch = useContext(BookingDispatchContext);
  console.log(bookings);

  //när klicket gjorts ska bokningen vara borta från domen och databasen.
  const deleteBooking = () => {
    // kopplar på vår reducer delete här
    return;
  };

  //när klicket gjorts så ska man kunna förändra
  const updateBooking = () => {
    //kopplar på vår reducer update här
    return;
  };

  const allBookings = bookings.map((b) => {
    return (
      <div>
        <p>date: {b.date}</p>
        <p>guests: {b.people}</p>
        <p>Firstname{b.guest.name}</p>
        <p>Lastname{b.guest.lastname}</p>
        <p>Phone{b.guest.phone}</p>
        <p>email{b.guest.email}</p>
        <button onClick={deleteBooking}>delete booking</button>
        <button onClick={updateBooking}>update booking</button>
      </div>
    );
  });

  return (
    // <div>
    //   {state.map((b) => {
    //     return (
    //       <div key={b._id}>
    //         <p>date: {b.date}</p>
    //         <p>guests: {b.people}</p>
    //         {/* <p>Firstname: {b.guest.name}</p> */}
    //         <p>Lastname: {b.guest.lastname}</p>
    //         <p>Phone: {b.guest.phone}</p>
    //         <p>Email: {b.guest.email}</p>
    //         <button onClick={deleteBooking}>delete booking</button>
    //         <button onClick={updateBooking}>update booking</button>
    //       </div>
    //     );
    //   })}
    // </div>
    <>{allBookings}</>
  );
};
