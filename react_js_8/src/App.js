//instralling router : npm i react-router-dom
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Element: <Home />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;

//end 08:48:00
{
  /* <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/details" element={<ContactDetails />} />
        <Route path="/Contact/:id" element={<User />}/> */
}
