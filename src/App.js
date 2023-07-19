import "./App.css";
import Main from "./Componets/Main";

const myData = [
  {
    name: "Kasun",
    city: "Neliya",
    position: "Web Developer",
  },
  {
    name: "Akila",
    city: "Galle",
    position: "Developer",
  },
  {
    name: "pramitha",
    city: "N-Elia",
    position: "Engineer",
  },
  {
    name: "Jaysooriya",
    city: "Kandy",
    position: "System Engineer",
  },
];

function App() {
  return (
    //JSX fagment
    <>
      <h1>PMJ</h1>
      <div>Pramitha Jayasooriy a</div>
      {/* <Main name="Kasun" city="NEliya" position="Softwear developer" />
      <Main name="Amal" city="Kurunagala" position="App developer">
        <h5>This is under Main components</h5>
      </Main>
      <Main name="Amila" city="tangalle" position="web developer" /> */}

      {/* {myData.map((ele)=> {
        return <p><Main name={ele.name} city={ele.city} position={ele.position} /></p>                
      })} */}

      {/* object distructuring*/}
      {myData.map(({name ,city , position})=> {
        return <p><Main name={name} city={city} position={position} /></p>                
      })} 

      
    </>
  );
}

export default App;

//STOP 1:42
