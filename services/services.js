import { AnimalModel } from "../models/animalModel.js";
import { v4 } from "uuid";

export const getAnimalsDB = async (animalData) => {
  const animals = await AnimalModel.find();

  return animals;
};

export const addAnimalDB = async (animalData) => {
  const animal = new AnimalModel({ ...animalData, id: v4() });

  await animal.save();

  const newAnimal = await AnimalModel.findById(animal.id);

  return newAnimal;
};

export const deleteAnimalDB = async (id) => {
  await AnimalModel.findByIdAndDelete(id);
};

export const updateAnimalDB = async (id, updatedData) => {
  const updatedAnimal = await AnimalModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  return updatedAnimal;
};
