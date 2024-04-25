import { trycatchFunc } from "../helpers/trycatchFunc.js";
import * as services from "../services/services.js";

export const getAnimals = trycatchFunc(async (req, res) => {
  const animals = await services.getAnimalsDB();

  res.status(200).json(animals);
});

export const addAnimal = trycatchFunc(async (req, res) => {
  const newAnimal = await services.addAnimalDB({
    ...req.body,
  });

  res.status(201).json({ message: "Animal was added", newAnimal });
});

export const deleteAnimal = trycatchFunc(async (req, res) => {
  const { id } = req.params;
  await services.deleteAnimalDB(id);

  res.status(200).json({ message: "Animal was deleted" });
});

export const updateAnimal = trycatchFunc(async (req, res) => {
  const { id } = req.params;

  const { hologram_name, weight, superpower, extinct_since } = req.body;
  const updatedAnimal = await services.updateAnimalDB(id, {
    hologram_name,
    weight,
    superpower,
    extinct_since,
  });
  res.json({
    message: "Animal was updated",
    updatedAnimal,
  });
});
