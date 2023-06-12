import { useContext, useState } from "react";
import { BookingAdminContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { ActionType } from "../reducers/BookingsReducer";
import { deleteBooking } from "../services/restaurantApi";
import { ShowCreateNewBooking } from "./ShowCreateNewBooking";

export const ShowAllBookingsAdmin = () => {
  //Hämta datan i contextet och loopa ut för varje html-tag
  const bookings = useContext(BookingAdminContext);
  const dispatch = useContext(BookingDispatchContext);

  const [showForm, setShowForm] = useState(false);

  const deleteCurrentBooking = (id: string) => {
    dispatch({ type: ActionType.DELETEBOOKING, payload: id });
  };

  // const showUpdatebooking = (id: string) => {
  //   const currentId = bookings.map((booking) => {
  //     if (booking._id.toString() === id) {
  //       setShowUpdate(true);
  //     }
  //   });

  //   console.log(currentId);

  //   // if (currentId) {

  //   // }
  // };

  const showCreateForm = () => {
    setShowForm(true);
  };

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
        {/* <button
          onClick={() => {
            showUpdatebooking(b._id.toString());
          }}
        >
          update booking
        </button> */}
      </div>
    );
  });

  return (
    <>
      <button onClick={showCreateForm}>create new booking</button>
      {showForm && <ShowCreateNewBooking></ShowCreateNewBooking>}
      <div>{allBookings}</div>
    </>
  );
};
