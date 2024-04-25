import express from "express";
import * as controllers from "../controllers/controllers.js";
import * as schema from "../schemas/schema.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = express.Router();

router.get("/", controllers.getAnimals);

router.post("/", validateBody(schema.newSchema), controllers.addAnimal);

router.patch(
  "/:id",
  validateBody(schema.changeSchema),
  controllers.updateAnimal
);

router.delete("/:id", controllers.deleteAnimal);

export default router;
