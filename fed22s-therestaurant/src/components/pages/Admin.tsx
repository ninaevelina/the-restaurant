import { useEffect, useReducer } from "react";
import { ActionType, BookingsReducer } from "../../reducers/BookingsReducer";
import { getAllBookings } from "../../services/restaurantApi";
import { ShowAllBookingsAdmin } from "../ShowAllBookingsAdmin";
import { BookingsContext } from "../../contexts/BookingContext";
import { BookingDispatchContext } from "../../contexts/BookingDispatchContext";

export const Admin = () => {
  const [bookings, dispatch] = useReducer(BookingsReducer, []);

  useEffect(() => {
    const getData = async () => {
      const getAllDataFromApi = await getAllBookings();
      dispatch({
        type: ActionType.GOTALLBOOKINGS,
        payload: JSON.stringify(getAllDataFromApi),
      });
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <BookingsContext.Provider value={bookings}>
        <BookingDispatchContext.Provider value={dispatch}>
          <ShowAllBookingsAdmin></ShowAllBookingsAdmin>
        </BookingDispatchContext.Provider>
      </BookingsContext.Provider>
    </>
  );
};
