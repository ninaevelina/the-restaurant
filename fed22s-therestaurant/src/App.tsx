import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  // const [allBookings, setAllBookings] = useState<IBooking[]>([
  //   {
  //     _id: 0,
  //     people: 0,
  //     date: "",
  //     sitting: "",
  //     tables: [],
  //     guest: {
  //       name: "",
  //       lastname: "",
  //       email: "",
  //       phone: 0,
  //     },
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
