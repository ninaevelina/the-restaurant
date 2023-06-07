import { ChangeEvent, FormEvent, useState } from "react";
import { IBooking } from "../models/IBooking";
import styled from "styled-components";
import { IGuest } from "../models/IGuest";
import { FormStyled } from "./styled/FormStyled";

//det här måste sedan läggas in i vårat bookingstate med info från sittningar och kalender.
export const Form = () => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(newBooking);
  };

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
