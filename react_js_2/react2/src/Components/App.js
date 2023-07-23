import { Fragment, useState } from "react";
import { myData } from "../Data/myData";
import "../Style/App.css";
import Main from "./Main";

// const NewBlock = () => {
//   return (
//     <Fragment>
//       {myDate?.map(({ name, city, age, image }, id) => {
//         return (
//           <Main key={id} name={name} city={city} age={age} image={image} />
//         );
//       })}
//     </Fragment>
//   );
// };

function App() {
  // const mainBlock = myData.map(({ name, city, age, image, id }, index) => {
  //   return (
  //     <Main key={id + index} name={name} age={age} city={city} image={image} />
  //   );
  // });

  const [myDataState, setMyDataState] = useState(myData);
  const [myVar, setMyVar] = useState("Dini");

  const clickHaddler = () => {
    setMyVar("Dhanushika");
    console.log(myVar);

    setMyDataState([
      ...myDataState,
      {
        id: 12348,
        name: "Mihiranga",
        city: "Hapugala",
        age: 25,
        image:
          "https://png.pngitem.com/pimgs/s/49-497525_annoyed-peter-peter-family-guy-transparent-hd-png.png",
      },
    ]);
  };
  const mainBlock = myDataState.map(({ name, city, image, age, id }, index) => {
    return (
      <Main key={id + index} name={name} city={city} image={image} age={age} />
    );
  });

  console.log(myData);
  return (
    <div>
      <h1>Pramitha Jayasooriya</h1>
      <h2>{myVar}</h2>
      <div className="mainBlock_container">{mainBlock}</div>
      <br />
      <br />
      <button
        style={{
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px",
        }}
        onClick={clickHaddler}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
