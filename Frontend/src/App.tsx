import "./index.css";
import "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashbord from "./pages/Dashbord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [{ path: "dashbored", element: <Dashbord /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
