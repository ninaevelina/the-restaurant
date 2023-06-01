import { Router } from "express";
import { createBooking, deleteBooking } from "../controllers/bookingController";

const router: Router = Router();

router.post("/", createBooking);
router.delete("/:id", deleteBooking);

export default router;
