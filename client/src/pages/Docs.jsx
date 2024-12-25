import { mainFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const docsLoader = async () => {
  try {
    const { data } = await mainFetch.get("/definition/stats");
    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
const Docs = () => {
  const { count } = useLoaderData();
  return <div className="container">{count}&nbsp;words</div>;
};
export default Docs;
