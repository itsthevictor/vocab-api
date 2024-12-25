import Definition from "../models/Definition.js";
import { StatusCodes } from "http-status-codes";

export const createDefinition = async (req, res) => {
  const definition = await Definition.create(req.body);
  res.status(StatusCodes.CREATED).json({ definition });
};

export const getRandomDefinition = async (req, res) => {
  try {
    const randomDoc = await Definition.aggregate([{ $sample: { size: 1 } }]);
    const definition = randomDoc[0];

    res.status(StatusCodes.OK).json({ definition });
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export const getDefinitionStats = async (req, res) => {
  const count = await Definition.countDocuments();
  console.log(count);
  res.status(StatusCodes.OK).json({ count });
};

export const getSingleDefinition = async (req, res) => {
  res.send("getSingleDefinition");
};

export const updateDefinition = async (req, res) => {
  res.send("updateDefinition");
};

export const deleteDefinition = async (req, res) => {
  res.send("deleteDefinition");
};
