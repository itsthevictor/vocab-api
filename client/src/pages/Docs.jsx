import { mainFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const docsLoader = async () => {
  try {
    const { data } = await mainFetch.get("/poem/stats");
    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
const Docs = () => {
  const { count } = useLoaderData();
  return <div className="container">{count}&nbsp;poems</div>;
};
export default Docs;
