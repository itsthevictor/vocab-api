import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countryCodes } from "../../../constants";
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
      {/* <form onSubmit={handleSubmit} className="add-poem-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="titlu"
            name="title"
            onChange={(e) => setNewPoem({ ...newPoem, title: e.target.value })}
            className="title-input"
          />
        </div>
        <div className="form-row author-row">
          <input
            id="firstNme"
            type="text"
            placeholder="prenume autor"
            name="firstName"
            onChange={(e) =>
              setNewPoem({ ...newPoem, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="nume autor"
            name="lastName"
            onChange={(e) =>
              setNewPoem({ ...newPoem, lastName: e.target.value })
            }
          />
          <select
            name=""
            id=""
            defaultValue="ROU"
            onChange={(e) =>
              setNewPoem({ ...newPoem, nationality: e.target.value })
            }
          >
            {countryCodes.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <textarea
            type="text"
            placeholder="text"
            name="text"
            onChange={(e) => setNewPoem({ ...newPoem, text: e.target.value })}
          />
        </div>
        <div className="form-row"> </div>
        <button type="submit" className="submit-btn">
          add
        </button>
      </form> */}
    </div>
  );
};
export default AddDefinition;
