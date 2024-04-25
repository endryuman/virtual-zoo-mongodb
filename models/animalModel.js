import { Schema, model } from "mongoose";

const animalSchema = new Schema(
  {
    hologram_name: {
      type: String,
      required: [true, "Set name for animal"],
    },
    weight: {
      type: Number,
      required: [true, "Set weight for animal"],
    },
    superpower: {
      type: String,
      required: [true, "Set superpower for animal"],
      unique: true,
    },
    extinct_since: {
      type: Number,
      required: [true, "Set extinct date for animal"],
    },
  },
  { versionKey: false, timestamps: true }
);

export const AnimalModel = model("Animal", animalSchema);
