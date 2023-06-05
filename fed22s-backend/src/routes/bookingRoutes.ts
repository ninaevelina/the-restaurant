import { Router } from "express";
import {
  createBooking,
  deleteBooking,
  getAllBookings,
} from "../controllers/bookingController";

const router: Router = Router();

router.post("/", createBooking);
router.delete("/:id", deleteBooking);
router.get("/", getAllBookings);

export default router;
