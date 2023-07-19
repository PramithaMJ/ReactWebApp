import "./App.css";
import Main from "./Componets/Main";

const myData = [
  {
    id: 1234,
    name: "Kasun",
    city: "Neliya",
    position: "Web Developer",
  },
  {
    id: 1235,
    name: "Akila",
    city: "Galle",
    position: "Developer",
  },
  {
    id: 1236,
    name: "pramitha",
    city: "N-Elia",
    position: "Engineer",
  },
  {
    id: 1237,
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
      {/* {myData.map(({name ,city , position}, index)=> {
        return <p><Main key={index} name={name} city={city} position={position} /></p>                
      })}  */}

      {myData.map(({ name, city, position }, id) => {
        return <Main key={id} name={name} city={city} position={position} />;
      })}
    </>
  );
}

export default App;

//STOP 1:42
