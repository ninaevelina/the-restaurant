import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IBooking } from "../models/IBooking";
import styled from "styled-components";
import { IGuest } from "../models/IGuest";
import { FormStyled } from "./styled/FormStyled";
import { CurrentBookingContext } from "../contexts/BookingContext";
import { createNewBooking } from "../services/restaurantApi";
import { GuestNumbers } from "./GuestNumbers";
import { SittingOption } from "./SittingOption";

export const Form = () => {
  const { updateForm, addBooking, booking } = useContext(CurrentBookingContext);
  const [showSittingButton, setShowSittingButton] = useState(true); //ska vara false

  const [newBooking, setNewBooking] = useState<IGuest>({
    name: "",
    lastname: "",
    email: "",
    phone: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "text" || e.target.type === "email") {
      setNewBooking((prevBooking) => ({
        ...prevBooking,
        [name]: value,
      }));

      updateForm({ ...newBooking, [name]: value });
    }

    if (e.target.name === "phone") {
      setNewBooking((prevBooking) => ({
        ...prevBooking,
        [name]: +value,
      }));

      updateForm({ ...newBooking, [name]: +value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addBooking();
  };

  return (
    <>
      <div>
        <FormStyled onSubmit={handleSubmit}>
          <GuestNumbers></GuestNumbers>
          {showSittingButton && <SittingOption></SittingOption>}
          <input
            type="text"
            name="name"
            placeholder="Firstname"
            value={booking.guest.name}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={booking.guest.lastname}
            onChange={handleChange}
          ></input>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={booking.guest.email}
            onChange={handleChange}
          ></input>

          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={booking.guest.phone}
            onChange={handleChange}
          ></input>
          <button>Confirm Booking</button>
        </FormStyled>
      </div>
    </>
  );
};
