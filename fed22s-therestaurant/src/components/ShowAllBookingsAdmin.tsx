import { useContext, useState } from "react";
import { BookingAdminContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { ActionType } from "../reducers/BookingsReducer";
import { deleteBooking } from "../services/restaurantApi";
import { ShowCreateNewBooking } from "./ShowCreateNewBooking";
import { IBooking } from "../models/IBooking";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { BookingsContainer } from "../components/styled/AdminBookingsContainer";
import {
  CalendarContainer,
  CalendarContainerAdmin,
} from "./styled/CalendarContainer";
import { DeleteBookingAdmin } from "./styled/ButtonAdmin";

export const ShowAllBookingsAdmin = () => {
  const { bookings, filteredBookings } = useContext(BookingAdminContext);
  const dispatch = useContext(BookingDispatchContext);

  console.log(bookings);

  const [showForm, setShowForm] = useState(false);
  // const [showSortData, setShowSortData] = useState<IBooking[]>([]);;
  const [value, onChange] = useState("");

  const deleteCurrentBooking = (id: string) => {
    dispatch({ type: ActionType.DELETEBOOKING, payload: id });
  };

  console.log(bookings);

  const showCreateForm = () => {
    setShowForm(true);
  };

  const sortDataDate = () => {
    console.log("klickade på sortDataDate");
    const sortData = [...bookings].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    console.log(sortData);
    // setShowSortData(sortData);

    dispatch({
      type: ActionType.GOTALLBOOKINGS,
      payload: JSON.stringify(sortData),
    });
  };

  const data = filteredBookings.map((b) => {
    return (
      <BookingsContainer key={b._id}>
        <p>date: {b.date}</p>
        <p>guests: {b.people}</p>
        <p>Sitting: {b.sitting}</p>
        <p>Firstname: {b.guest.name}</p>
        <p>Lastname: {b.guest.lastname}</p>
        <p>Phone: {b.guest.phone}</p>
        <p>email: {b.guest.email}</p>

        <DeleteBookingAdmin
          onClick={() => {
            deleteCurrentBooking(b._id.toString()),
              deleteBooking(b._id.toString());
          }}
        >
          delete booking
        </DeleteBookingAdmin>
      </BookingsContainer>
    );
  });

  console.log(data);

  const handleSortChange = (newValue: Value) => {
    const formattedDate = newValue?.toLocaleString("en-US").split(",")[0];
    dispatch({ type: ActionType.FILTERED, payload: formattedDate });
    if (formattedDate) onChange(formattedDate);
  };

  const cancelNewBooking = () => {
    setShowForm(false);
  };

  return (
    <>
      <button onClick={sortDataDate}>All Bookings</button>
      <button onClick={showCreateForm}>create new booking</button>
      {showForm && <ShowCreateNewBooking></ShowCreateNewBooking>}
      {showForm && <button onClick={cancelNewBooking}>Cancel</button>}
      <CalendarContainerAdmin>
        <Calendar onChange={handleSortChange} value={value} />
      </CalendarContainerAdmin>
      <div>{data}</div>
    </>
  );
};
