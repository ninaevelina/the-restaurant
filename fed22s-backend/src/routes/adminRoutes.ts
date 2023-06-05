import { Router } from "express";
import {
  getAllBookings,
  deleteAdminBooking,
  updateBooking,
} from "../controllers/adminControllers";

const router: Router = Router();

router.get("/", getAllBookings);
router.put("/", updateBooking);
router.delete("/booking/:id", deleteAdminBooking);

module.exports = router;
