import Layout from "./layout/Layout";
import Page404 from "./components/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <Page404 />,
      // child route components
      children: routes,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
