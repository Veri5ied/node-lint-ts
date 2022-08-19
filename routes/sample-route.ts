import express from "express";
import { getSamplecontroller } from "../controllers/sample-controller";

const router = express.Router();

router.route("/").get(getSamplecontroller);

export default router;
