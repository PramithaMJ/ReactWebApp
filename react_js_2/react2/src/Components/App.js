import { Fragment, useState } from "react";
import { myData } from "../Data/myData";
import "../Style/App.css";
import Main from "./Main";

function App() {
  const [inputVal, setInputVal] = useState(0);
  const clickHaddle = () => {
    setTimeout(() => {
      console.log("I am cliked");
      //setInputVal(inputVal + 1); //this is wrong method
      // setInputVal((pre) => pre + 1); //correct way
      setInputVal((pre) => {
        if (pre < 1) {
          return pre + 1;
        } else if (pre < 2) {
          return pre + 3;
        } else {
          return pre + 2;
        }
      });
    }, 1000);
  };

  //console.log(inputVal);
  const mainBlock = myData.map(({ name, city, image, position, id }, index) => {
    return (
      <Main
        key={id + index}
        name={name}
        city={city}
        image={image}
        position={position}
      />
    );
  });

  const inputChangeHandler = (event, data) => {
    event.preventDefault(); //default function
    console.log(data);
    setInputVal(event.target.value);
  };

  return (
    <div className="main_container">
      <div>
        PMJ
        <h1>{inputVal}</h1>
      </div>

      <p>Pramitha Jayasooriya</p>

      <div className="mainBlock_container">{mainBlock}</div>
      <br />
      <br />
      <button
        style={{
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
