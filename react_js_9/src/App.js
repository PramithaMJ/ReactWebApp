//instralling router : npm i react-router-dom
import styled from "styled-components";

// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Header from "./components/Header";

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
    path: "project",
    element: <Project />,
  },
]);

const App = () => {
  return (
    <AppContainer>
      <Header />
      <RouterProvider router={router} />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.main`
  width: 100vw;
  overflow-x: hidden;
`;
