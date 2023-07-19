import "./App.css";
import Main from "./Componets/Main";

//when export before function or object
import { myData } from "./Data/myData";

//functional comonents
//functional comonents can't start with simple letter. It must start with Capital letters.
const NewBlock = () => {
  return (
    <>
      {myData.map(({ name, city, position }, id) => {
        return <Main key={id} name={name} city={city} position={position} />;
      })}
    </>
  );
};

function App() {
  // const mainBlock = myData.map(({ name, city, position }, id) => {
  //   return <Main key={id} name={name} city={city} position={position} />;
  // });

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
      {/* {mainBlock} */}
      <NewBlock />
    </>
  );
}

export default App;

//STOP 1:42
