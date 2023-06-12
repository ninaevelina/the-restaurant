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
    _id: "",
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

    if (e.target.type === "text") {
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

  const handleChangeAdminGuest = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    if (e.target.type === "text" || e.target.type === "email") {
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        guest: { ...prevBooking.guest, [name]: value },
      }));

      dispatch({
        type: ActionType.CREATENEWBOOKING,
        payload: { [name]: value },
      });
    }

    if (e.target.type === "number") {
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        guest: { ...prevBooking.guest, [name]: +value },
      }));

      dispatch({
        type: ActionType.CREATENEWBOOKING,
        payload: { [name]: +value },
      });
    }
  };

  const handleSubmitAdmin = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: ActionType.CREATENEWBOOKING, payload: newBookingAdmin });
    createNewBooking(newBookingAdmin);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmitAdmin}>
        <label>Date</label>
        <input
          type="text"
          name="date"
          placeholder="day, date, year - example: Sat, Jun 3, 2023"
          value={newBookingAdmin.date}
          onChange={handleChangeAdmin}
        ></input>

        <label>Guests</label>
        <input
          type="number"
          name="people"
          placeholder="guests"
          value={newBookingAdmin.people}
          onChange={handleChangeAdmin}
        ></input>

        <label>Sitting</label>
        <input
          type="text"
          name="sitting"
          placeholder="pick between 17-19 or 19-21"
          value={newBookingAdmin.sitting}
          onChange={handleChangeAdmin}
        ></input>

        <label>Tables</label>
        <input
          type="number"
          name="tables"
          value={newBookingAdmin.tables}
          onChange={handleChangeAdmin}
        ></input>

        <label>Firstname</label>
        <input
          type="text"
          name="name"
          placeholder="Firstname"
          value={newBookingAdmin.guest.name}
          onChange={handleChangeAdminGuest}
        ></input>

        <label>Lastname</label>
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={newBookingAdmin.guest.lastname}
          onChange={handleChangeAdminGuest}
        ></input>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newBookingAdmin.guest.email}
          onChange={handleChangeAdminGuest}
        ></input>

        <label>Phone</label>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={newBookingAdmin.guest.phone}
          onChange={handleChangeAdminGuest}
        ></input>
        <button>Confirm new booking</button>
      </FormStyled>
    </>
  );
};
