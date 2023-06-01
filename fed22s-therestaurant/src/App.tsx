import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useEffect, useReducer } from "react";
import { BookingContext } from "./contexts/BookingContext";
import { BookingDispatchContext } from "./contexts/BookingDispatchContext";
import { BookingReducer } from "./reducers/BookingReducer";

function App() {
  const [bookings, dispatch] = useReducer(BookingReducer, []);

  useEffect(() => {
    //Hämta datan här och lägga in i det vår bookings variabel via dispatch.
  });

  return (
    <>
      <BookingContext.Provider value={bookings}>
        <BookingDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router} />
        </BookingDispatchContext.Provider>
      </BookingContext.Provider>
    </>
  );
}

export default App;
