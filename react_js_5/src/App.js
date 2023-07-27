import { Fragment, useState } from "react";
import "./App.css";
import Unit from "./components/Unit";
import Header from "./components/Header";

const App = () => {
  // const [imageUrl, setImageUrl] = useState("");
  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  // const [position, setPosition] = useState("");

  const [inputData, setInputData] = useState({
    imageUrl: "",
    name: "",
    city: "",
    position: "",
  });

  const [myData, setMyData] = useState([]);

  console.log(myData);

  return (
    <div>
      <Header />

      <div className="main_container">
        <div className="main_left">
          <input
            type="text"
            value={inputData.imageUrl}
            placeholder="image url"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                imageUrl: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            value={inputData.name}
            placeholder="name"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                name: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            value={inputData.city}
            placeholder="city"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                city: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            value={inputData.position}
            placeholder="position"
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                position: e.target.value,
              }));
            }}
          />
          <button
            onClick={() => {
              setMyData((prev) => [
                ...prev,
                {
                  image: inputData.imageUrl,
                  name: inputData.name,
                  city: inputData.city,
                  position: inputData.position,
                },
              ]);

              setInputData((prev) => {
                if (prev.imageUrl.length > 0) {
                  return {
                    ...prev,
                    imageUrl: "",
                  };
                } else {
                  return prev;
                }
              });

              setInputData((prev) => {
                if (prev.name.length > 0) {
                  return {
                    ...prev,
                    name: "",
                  };
                } else {
                  return prev;
                }
              });

              setInputData((prev) => {
                if (prev.city.length > 0) {
                  return {
                    ...prev,
                    city: "",
                  };
                } else {
                  return prev;
                }
              });

              setInputData((prev) => {
                if (prev.position.length > 0) {
                  return {
                    ...prev,
                    position: "",
                  };
                } else {
                  return prev;
                }
              });
            }}
          >
            Submit
          </button>
        </div>
        <div className="main_right">
          {myData?.map(({ image, name, city, position }, index) => (
            <Unit
              image={image}
              name={name}
              city={city}
              posistion={position}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

//end 06:09:00
