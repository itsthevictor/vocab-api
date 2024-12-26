import { useLoaderData, Link } from "react-router-dom";
import { mainFetch } from "../utils/customFetch";

import ThemeToggle from "../components/ThemeToggle";
export const homeLoader = async () => {
  try {
    const { data } = await mainFetch.get("/definition");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Home = () => {
  const theme = localStorage.getItem("dark-theme");
  if (theme) document.querySelector("body").setAttribute("data-theme", "dark");

  const { definition } = useLoaderData();
  console.log(definition);

  return (
    <div className="container">
      <Link to="add-definition" className="docs-link">
        docs
      </Link>
      <ThemeToggle theme={theme} />

      {definition && (
        <div className="random-container">
          <div className="title">
            <h3>{definition.word}</h3>
          </div>
          <div className="part">{definition.part}</div>
          <div className="def">{definition.def}</div>
          <div className="example"> {definition.example}</div>
        </div>
      )}
    </div>
  );
};
export default Home;
