import { Fragment } from "react";
import { myDate } from "../Data/myData";
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
  const mainBlock = myDate.map(({ name, city, age, image, id }, index) => {
    return (
      <Main key={id + index} name={name} age={age} city={city} image={image} />
    );
  });

  return (
    <div>
      <h1>Pramitha Jayasooriya</h1>
      <div className="mainBlock_container">{mainBlock}</div>
    </div>
  );
}

export default App;
