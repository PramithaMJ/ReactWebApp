//instralling router : npm i react-router-dom
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetail";
import User from "./components/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/details" element={<ContactDetails />} />
        <Route path="/Contact/:id" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//end 08:48:00
