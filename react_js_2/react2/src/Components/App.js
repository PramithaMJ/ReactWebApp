import { Fragment, useState } from "react";
import { myData } from "../Data/myData";
import "../Style/App.css";
import Main from "./Main";

function App() {
  const [inputVal, setInputVal] = useState(0);

  const clickHaddle = () => {
    setInputVal(inputVal + 1);
  };

  console.log(inputVal);
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
