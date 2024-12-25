import { Router } from "express";
import {
  createDefinition,
  deleteDefinition,
  getDefinitionStats,
  getRandomDefinition,
  getSingleDefinition,
  updateDefinition,
} from "../controllers/definitionController.js";
const router = Router();

router
  .post("/", createDefinition)
  .get("/", getRandomDefinition)
  .get("/stats", getDefinitionStats)
  .get("/:id", getSingleDefinition)
  .patch("/:id", updateDefinition)
  .delete("/:id", deleteDefinition);

export default router;
