import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Projectpage from "./pages/projectpage";
import Aboutpage from "./pages/aboutpage";
import Contactpage from "./pages/contactpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Firstpage />,
  },
  {
    path: "/Project",
    element: <Projectpage />,
  },
  {
    path: "/About",
    element: <Aboutpage />,
  },
  {
    path: "/Contact",
    element: <Contactpage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
