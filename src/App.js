import "./App.css";
import Main from "./Componets/Main";

function App() {
  return (
    //JSX fagment
    <>
      <h1>PMJ</h1>
      <div>Pramitha Jayasooriy a</div>
      <Main name="Kasun" city="NEliya" position="Softwear developer" />
      <Main name="Amal" city="Kurunagala" position="App developer" >
        <h5>This is under Main components</h5>
      </Main>
      <Main name="Amila" city="tangalle" position="web developer" />
    </>
  );
}

export default App;


//STOP 1:42