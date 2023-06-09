import { useContext, useState, ChangeEvent, FormEvent } from "react";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";
import { IGuest } from "../models/IGuest";
import { FormStyled } from "./styled/FormStyled";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { IBooking } from "../models/IBooking";
import { ActionType } from "../reducers/BookingsReducer";
import { createNewBooking } from "../services/restaurantApi";

export const ShowCreateNewBooking = () => {
  const dispatch = useContext(BookingDispatchContext);

  const [newBookingAdmin, setNewBookingAdmin] = useState<IBooking>({
    _id: 0,
    people: 0,
    date: "",
    sitting: "",
    tables: 0,
    guest: {
      name: "",
      lastname: "",
      email: "",
      phone: 0,
    },
  });

  const handleChangeAdmin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    if (e.target.type === "text" || e.target.type === "email") {
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        [name]: value,
      }));

      dispatch({
        type: ActionType.CREATENEWBOOKING,
        payload: { [name]: value },
      });
    }

    if (e.target.type === "number") {
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        [name]: +value,
      }));

      dispatch({
        type: ActionType.CREATENEWBOOKING,
        payload: { [name]: +value },
      });
    }
  };

  const handleSubmitAdmin = (e: FormEvent) => {
    e.preventDefault();
    createNewBooking(newBookingAdmin);
  };
  return (
    <>
      <FormStyled onSubmit={handleSubmitAdmin}>
        <input
          type="text"
          name="date"
          placeholder="date"
          value={newBookingAdmin.date}
          onChange={handleChangeAdmin}
        ></input>
        {newBookingAdmin.date}

        <input
          type="number"
          name="guests"
          placeholder="guests"
          value={newBookingAdmin.people}
          onChange={handleChangeAdmin}
        ></input>
        {newBookingAdmin.people}

        <input
          type="text"
          name="name"
          placeholder="Firstname"
          value={newBookingAdmin.guest.name}
          onChange={handleChangeAdmin}
        ></input>

        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={newBookingAdmin.guest.lastname}
          onChange={handleChangeAdmin}
        ></input>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newBookingAdmin.guest.email}
          onChange={handleChangeAdmin}
        ></input>

        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={newBookingAdmin.guest.phone}
          onChange={handleChangeAdmin}
        ></input>
        <button>Confirm new booking</button>
      </FormStyled>
    </>
  );
};
