import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IBooking } from "../models/IBooking";
import styled from "styled-components";
import { IGuest } from "../models/IGuest";
import { FormStyled } from "./styled/FormStyled";
import { CurrentBookingContext } from "../contexts/BookingContext";

//det här måste sedan läggas in i vårat bookingstate med info från sittningar och kalender.
export const Form = () => {
  const { addBooking } = useContext(CurrentBookingContext);
  const { booking } = useContext(CurrentBookingContext);

  const [newBooking, setNewBooking] = useState<IBooking>({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "text" || e.target.type === "email") {
      setNewBooking((prevBooking) => ({
        ...prevBooking,
        guest: {
          ...prevBooking.guest,
          [name]: value,
        },
      }));
    }
    if (e.target.name === "phone") {
      setNewBooking((prevBooking) => ({
        ...prevBooking,
        guest: {
          ...prevBooking.guest,
          [name]: value,
        },
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(newBooking);
    addBooking(newBooking);
  };
  console.log(".........", booking);
  return (
    <>
      <div>
        <FormStyled onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Firstname"
            value={newBooking.guest.name}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={newBooking.guest.lastname}
            onChange={handleChange}
          ></input>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newBooking.guest.email}
            onChange={handleChange}
          ></input>

          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={newBooking.guest.phone}
            onChange={handleChange}
          ></input>
          <button>Confirm Booking</button>
        </FormStyled>
      </div>
    </>
  );
};
