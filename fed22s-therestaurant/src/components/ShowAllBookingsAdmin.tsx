import { useContext, useState } from "react";
import { BookingAdminContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { ActionType } from "../reducers/BookingsReducer";
import { deleteBooking } from "../services/restaurantApi";
import { ShowCreateNewBooking } from "./ShowCreateNewBooking";
import { IBooking } from "../models/IBooking";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";

export const ShowAllBookingsAdmin = () => {
  const bookings = useContext(BookingAdminContext);
  const dispatch = useContext(BookingDispatchContext);

  console.log(bookings);

  const [showForm, setShowForm] = useState(false);
  const [showSortData, setShowSortData] = useState<IBooking[]>([]);
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
    setShowSortData(sortData);
  };

  const data = showSortData.map((b) => {
    const date = b.date;
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    console.log(formattedDate);
    console.log(date);
    return (
      <div key={b._id}>
        <p>date: {formattedDate}</p>
        <p>guests: {b.people}</p>
        <p>Sitting: {b.sitting}</p>
        <p>Firstname: {b.guest.name}</p>
        <p>Lastname: {b.guest.lastname}</p>
        <p>Phone: {b.guest.phone}</p>
        <p>email: {b.guest.email}</p>

        <button
          onClick={() => {
            deleteCurrentBooking(b._id.toString()),
              deleteBooking(b._id.toString());
          }}
        >
          delete booking
        </button>
      </div>
    );
  });

  const handleSortChange = (newValue: Value) => {
    const formattedDate = newValue?.toLocaleString("en-US").split(",")[0];

    console.log(formattedDate);

    const matchedBooking = bookings.filter((b) => formattedDate === b.date);

    console.log(matchedBooking);

    const sortDataDate = [...matchedBooking].sort((a, b) =>
      a.date < b.date ? -1 : 1
    );

    if (formattedDate) onChange(formattedDate);
    setShowSortData(sortDataDate);
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
      <Calendar onChange={handleSortChange} value={value} />

      <div>{data}</div>
    </>
  );
};
