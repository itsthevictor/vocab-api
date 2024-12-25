import mongoose from "mongoose";

const DefinitionSchema = new mongoose.Schema({
  word: String,
  phonetics: String,
  def: String,
  example: string,
  categories: [],
});

export default mongoose.model("Definition", DefinitionSchema);
