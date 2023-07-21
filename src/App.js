import { Fragment, useState } from "react";
import "./App.css";
import Main from "./Componets/Main";

//when export before function or object
import { myData } from "./Data/myData";

//functional comonents
//functional comonents can't start with simple letter. It must start with Capital letters.
// const NewBlock = () => {
//   return (
//     <Fragment>
//       {myData?.map(({ name, city, position }, id) => {
//         return <Main key={id} name={name} city={city} position={position} />;
//       })}
//     </Fragment>
//   );
// };

function App() {
  // react hook   eg.  const [variableName,setVariableNameInFirstLetterCapital] = userState('default value')
  const [myVar, setMyvar] = useState("PMJ");

  const clickHaddle = () => {
    // myVar = "PRAMITHA";
    setMyvar("PRAMITHA");
    console.log(myVar);
  };

  const mainBlock = myData.map(({ name, city, image, position }, id) => {
    return (
      <Main
        key={id}
        name={name}
        city={city}
        image={image}
        position={position}
      />
    );
  });

  return (
    //can use JSX fagment
    <div className="main_container">
      <h1>{myVar}</h1>
      <div>Pramitha Jayasooriya</div>
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
      {/* <NewBlock /> */}
      <div className="mainBlock_container">{mainBlock}</div>
      <br />
      <br />
      <button
        style={{
          //inline css
          //javaScript Object
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px",
        }}
        onClick={clickHaddle}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;

//STOP 2:31
