import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { mainFetch } from "../utils/customFetch";
const AddDefinition = () => {
  const [newDef, setNewDef] = useState({
    lastName: null,
    fistName: null,
    title: null,
    text: null,
    nationality: "ROU",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post("/definition", newPoem);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-poem-container">
      <form onSubmit={handleSubmit} className="add-def-form">
        <button type="submit" className="submit-btn">
          add
        </button>
      </form>
    </div>
  );
};
export default AddDefinition;
