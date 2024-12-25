import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import AddDefinition from "./pages/AddDefinition";
import Error from "./pages/Error";
import Docs, { docsLoader } from "./pages/Docs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: homeLoader,
      errorElement: <Error />,
    },
    {
      path: "docs",
      element: <Docs />,
      errorElement: <Error />,
      loader: docsLoader,
    },
    {
      path: "add-definition",
      element: <AddDefinition />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
