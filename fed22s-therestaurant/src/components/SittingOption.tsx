import { useContext, useState } from "react";
import { SittingButton } from "./styled/SittingButton";
import { CurrentBookingContext } from "../contexts/BookingContext";
import { IBooking } from "../models/IBooking";

export const SittingOption = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const { addBooking } = useContext(CurrentBookingContext);
  const { booking } = useContext(CurrentBookingContext);
  const [newSitting, setNewSitting] = useState<IBooking>({
    _id: 0,
    people: 0,
    date: "",
    sitting: "",
    tables: [],
    guest: {
      name: "",
      lastname: "",
      email: "",
      phone: 0,
    },
  });

  const handleClickFirst = (e: MouseEvent) => {
    e.preventDefault();
    setNewSitting({ ...newSitting, sitting: "17-19" });
    console.log(newSitting);
    console.log(booking);
  };
  const handleClickSecond = () => {
    console.log(booking);
  };
  return (
    <>
      <SittingButton onClick={handleClickFirst}>17-19</SittingButton>
      <SittingButton onClick={handleClickSecond}>19-21</SittingButton>
    </>
  );
};
