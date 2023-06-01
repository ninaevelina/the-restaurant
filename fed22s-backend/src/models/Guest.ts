import { Schema } from "mongoose";

export interface IGuest {
  name: string;
  lastname: string;
  email: string;
  phone: number;
}
