import { Fragment } from "react";
import { myDate } from "../Data/myData";
import "../Style/App.css";
import Main from "./Main";

const NewBlock = () => {
  return (
    <Fragment>
      {myDate?.map(({ name, city, age,image }, id) => {
        return <Main key={id} name={name} city={city}  age={age} image={image}/>;
      })}
    </Fragment>
  );
};

function App() {
  return (
    <div>
      <h1>Pramitha Jayasooriya</h1>
      {/* <Main /> */}
      <NewBlock />
    </div>
  );
}

export default App;
