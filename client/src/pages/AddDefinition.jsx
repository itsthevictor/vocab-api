import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainFetch } from "../utils/customFetch";
import { parts, categories } from "../../../constants";

const AddDefinition = () => {
  const [query, setQuery] = useState(""); // Tracks input value
  const [suggestions, setSuggestions] = useState([]); // Tracks filtered suggestions
  const [selectedValues, setSelectedValues] = useState([]); // Tracks selected values
  const [newDef, setNewDef] = useState({
    word: null,
    part: "substantiv",
    category: null,
    def: null,
    example: null,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post("/definition", newDef);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      setSuggestions(
        categories.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  // Add selected suggestion to state
  const handleSelect = (value) => {
    if (!selectedValues.includes(value)) {
      setSelectedValues([...selectedValues, value]);
      setNewDef({ ...newDef, category: [...selectedValues] });
    }
    setQuery("");
    setSuggestions([]);
  };

  const handleRemove = (value) => {
    setSelectedValues(selectedValues.filter((item) => item !== value));
  };
  return (
    <div className="add-def-container">
      <form onSubmit={handleSubmit} className="add-def-form">
        <div className="form-row">
          <input
            type="text"
            name="word"
            placeholder="cuvant"
            onChange={(e) => setNewDef({ ...newDef, word: e.target.value })}
          />
        </div>
        <div className="form-row">
          <textarea
            name="def"
            placeholder="definitie"
            onChange={(e) => setNewDef({ ...newDef, def: e.target.value })}
          />
        </div>
        <div className="form-row">
          <textarea
            name="example"
            placeholder="exemplu"
            onChange={(e) => setNewDef({ ...newDef, example: e.target.value })}
          />
        </div>
        <div className="form-row">
          <select
            name="part"
            id="part"
            defaultValue="substantiv"
            onChange={(e) => setNewDef({ ...newDef, part: e.target.value })}
          >
            {parts.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Tasteaza pt a aduga categorii..."
          />
          {suggestions.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "8px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                maxHeight: "150px",
                overflowY: "auto",
              }}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(suggestion)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#fff")
                  }
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <div>
            <strong>Selected Values:</strong>
            <ul style={{ listStyle: "none", padding: "0" }}>
              {selectedValues.map((value, index) => (
                <li key={index}>
                  {value}

                  <button
                    onClick={() => handleRemove(value)}
                    style={{
                      backgroundColor: "#ff4d4d",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          add
        </button>
      </form>
    </div>
  );
};
export default AddDefinition;
