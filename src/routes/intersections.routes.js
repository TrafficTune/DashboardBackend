import { Router } from "express";
const router = Router();
import intersectionController from "../controllers/intersections.controller";

router.get("/:locationId", intersectionController.getIntersection);

export default router;
