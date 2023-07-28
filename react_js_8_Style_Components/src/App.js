//instralling router : npm i react-router-dom
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactDetail from "./components/ContactDetail";
import User from "./components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "contact/detail",
    element: <ContactDetail />,
  },
  {
    path: "contact/:id",
    element: <User />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

//stop at 09:25:46
{
  /* <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/details" element={<ContactDetails />} />
        <Route path="/Contact/:id" element={<User />}/> */
}
