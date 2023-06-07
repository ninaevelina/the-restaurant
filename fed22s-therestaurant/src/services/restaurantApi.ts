import axios from "axios";
import { IBooking } from "../models/IBooking";
import { useParams } from "react-router";

interface newBookingProps {}

// const articleData = { title, description, author, body };

//     axios

//       .post(

//         "http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles",

//         articleData

//       )

//       .then((response) => {

//         console.log(response);

//       })

//       .catch((error) => {

//         console.log(error);

//       });

//   };

//GET

export const getAllBookings = async () => {
  const response = await axios
    .get<IBooking[]>("http://localhost:4000/api/v1/booking")
    .then((response) => {
      console.log(response.data);
      response.data;
    });

  console.log(response);
  return response;
};
getAllBookings();

//CREATE

export const createNewBooking = async (newBooking: newBookingProps) => {
  const response = await axios
    .post<IBooking>("", newBooking)
    .then((response) => response.data);
  // return response.data;
};

//PUT

export const updateBooking = async () => {
  const response = await axios.put<IBooking>("");
  return response.data;
};

//DELETE

export const deleteBooking = async () => {
  const response = await axios.delete<IBooking>("");
};
