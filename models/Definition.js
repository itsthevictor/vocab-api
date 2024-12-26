import mongoose from "mongoose";

const DefinitionSchema = new mongoose.Schema({
  word: String,
  phonetics: String,
  def: String,
  example: String,
  part: String,
  category: [],
});

export default mongoose.model("Definition", DefinitionSchema);
