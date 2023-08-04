import "./index.css";
import "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashbord from "./pages/Dashbord";
import Settings from "./pages/Settings";
import Booking from "./pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [],
  },
  {
    path: "dashbored",
    element: <Dashbord />,
  },
  { path: "settings", element: <Settings /> },
  { path: "booking", element: <Booking /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
