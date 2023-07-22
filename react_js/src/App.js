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
  //const [myVar, setMyvar] = useState("PMJ");
  //object
  const [myVar, setMyvar] = useState({
    id: 1235,
    name: "Akila",
    city: "Galle",
    position: "Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd36Z9hply0yjJg0xjkrcKw0WJ78YcXdw4Ps1UQqvPydcrBbvVmqt9EgRWTV-c5pNWUt4&usqp=CAU",
  });

  const [myDataState, setMyDataState] = useState(myData);
  const [inputVal, setInputVal] = useState("");
  const [inputVal2, setInputVal2] = useState("");

  const clickHaddle = () => {
    // myVar = "PRAMITHA";
    //setMyvar("PRAMITHA");
    setMyvar({
      ...myVar,
      name: "PRAMITHAMJ", //spread oprator
      city: "Kothmale",
    });
    setMyDataState([
      ...myDataState,
      {
        //add another element to array as object
        id: 12348,
        name: "Mihiranga",
        city: "Hapugala",
        position: "Ruhuna",
        image:
          "https://png.pngitem.com/pimgs/s/49-497525_annoyed-peter-peter-family-guy-transparent-hd-png.png",
      },
    ]);
    //console.log(myVar);
  };

  //console.log(myDataState);
  console.log(inputVal);
  console.log(inputVal2);

  const mainBlock = myDataState.map(
    ({ name, city, image, position, id }, index) => {
      return (
        <Main
          key={id + index}
          name={name}
          city={city}
          image={image}
          position={position}
        />
      );
    }
  );

  // const mainBlock = myData.map(({ name, city, image, position }, id) => {
  //   return (
  //     <Main
  //       key={id}
  //       name={name}
  //       city={city}
  //       image={image}
  //       position={position}
  //     />
  //   );
  // });

  const inputChangeHandler = (event, data) => {
    event.preventDefault(); //default function
    console.log(data);
    setInputVal2(event.target.value);
  };

  return (
    //can use JSX fagment
    <div className="main_container">
      {/* <h1>{myVar.name}</h1> */}
      <h1>{inputVal}</h1>
      <br />
      <h1>{inputVal2}</h1>
      <h2>{myVar.city}</h2>
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
      <br />
      <br />

      <input
        style={{
          border: "1px solid red",
          fontSize: "14px",
          padding: "7px",
        }}
        type="text"
        placeholder="type what you want"
        //anonymous function
        onChange={(e) => {
          e.preventDefault();
          setInputVal(e.target.value); //get value of user input box
        }}
      />
      <br />
      <br />
      <input
        style={{
          border: "1px solid red",
          fontSize: "14px",
          padding: "7px",
        }}
        type="text"
        placeholder="method 2 input "
        //anonymous function
        onChange={(e) => {
          e.preventDefault();
          inputChangeHandler(e, inputVal2); //no problem when it give as function bracket because it call in under annonimous function
        }}
      />
    </div>
  );
}

export default App;

//STOP 3:49:38
