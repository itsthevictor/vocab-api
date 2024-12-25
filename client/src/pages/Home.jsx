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
  console.log("app get theme", theme);
  if (theme) document.querySelector("body").setAttribute("data-theme", "dark");

  const { definition } = useLoaderData();

  return (
    <div className="container">
      <Link to="docs" className="docs-link">
        docs
      </Link>
      <ThemeToggle theme={theme} />
      <div className="header"></div>
      {definition && (
        <div className="random-container">
          <div className="title">{definition.word}</div>
          <div className="definition"> {definition.def}</div>
        </div>
      )}
    </div>
  );
};
export default Home;
