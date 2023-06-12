import { useContext, useState } from "react";
import { BookingAdminContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { ActionType } from "../reducers/BookingsReducer";
import { deleteBooking } from "../services/restaurantApi";
import { ShowCreateNewBooking } from "./ShowCreateNewBooking";
import { IBooking } from "../models/IBooking";
import Calendar from "react-calendar";

export const ShowAllBookingsAdmin = () => {
  //Hämta datan i contextet och loopa ut för varje html-tag
  const bookings = useContext(BookingAdminContext);
  const dispatch = useContext(BookingDispatchContext);

  const [showForm, setShowForm] = useState(false);
  const [showSortData, setShowSortData] = useState<IBooking[]>([]);
  const [value, onChange] = useState(new Date());
  const [ShowBookingDate, setShowBookingDate] = useState<IBooking[]>([]);

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

  console.log(bookings);

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

  const sortDataDate = () => {
    // const sortData = [...bookings].sort((a, b) => (a.date < b.date ? -1 : 1));

    const sortData = [...bookings].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    // const sortData = [...bookings].sort((a, b) =>
    //   a.date.valueOf().localeCompare(b.date.valueOf())
    // );

    // const sortData = [...bookings].filter((b) => )
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

  const handleSortChange = (newValue: any) => {
    const formattedDate = newValue.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    //bara datumet jag klickade på
    const matchedBooking = bookings.filter((b) => formattedDate === b.date);

    console.log(matchedBooking);

    const sortDataDate = [...matchedBooking].sort((a, b) =>
      a.date < b.date ? -1 : 1
    );

    onChange(formattedDate);
    setShowSortData(sortDataDate);
  };

  return (
    <>
      <button onClick={sortDataDate}>Sort</button>
      <button onClick={showCreateForm}>create new booking</button>
      <Calendar onChange={handleSortChange} value={value} />

      {showForm && <ShowCreateNewBooking></ShowCreateNewBooking>}
      {/* <div>{allBookings}</div> */}
      <div>{data}</div>
      {/* <div>{ShowBookingDate}</div> */}
    </>
  );
};
