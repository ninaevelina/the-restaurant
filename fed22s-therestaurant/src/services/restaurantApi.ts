import axios from "axios";
import { IBooking } from "../models/IBooking";
import { useParams } from "react-router";
import { IGuest } from "../models/IGuest";
import { useState } from "react";

const [people, setPeople] = useState(0);
const [date, setDate] = useState("");
const [sitting, setSitting] = useState("");
const [tables, setTables] = useState([]);
const [guest, setGuest] = useState<IGuest>();
const [name, setName] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const bookingData = {
  people,
  date,
  sitting,
  tables,
  guest,
  name,
  lastname,
  email,
  phone,
};

//GET

export const getAllBookings = async () => {
  const response = await axios
    .get<IBooking[]>("http://localhost:4000/api/v1/booking")
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

//CREATE

export const createNewBooking = async () => {
  const response = await axios
    .post<IBooking>("http://localhost:4000/api/v1/booking", bookingData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

//PUT

export const updateBooking = async (id: number) => {
  const response = await axios
    .put<IBooking>(`http://localhost:4000/api/v1/booking/${id}`, bookingData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

//DELETE

export const deleteBooking = async (id: number) => {
  const response = await axios
    .delete<IBooking>(`http://localhost:4000/api/v1/booking/${id}`)
    .then((response) => {
      console.log(`deleted a booking with id ${id}`);
    });
};
