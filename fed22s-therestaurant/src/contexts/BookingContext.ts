import { createContext } from "react";
import { IBooking } from "../models/IBooking";

export const PodcastContext = createContext<IBooking[]>([]);
