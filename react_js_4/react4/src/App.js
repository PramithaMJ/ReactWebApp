import { useState } from "react";
import "./App.css";
import Unit from "./components/Unit";

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
            setMyData((pre) => [
              ...pre,
              {
                image: inputData.imageUrl,
                name: inputData.name,
                city: inputData.city,
                position: inputData.position,
              },
            ]);

            setInputData((pre) => {
              if (pre.imageUrl.length > 0) {
                return {
                  ...pre,
                  imageUrl: "",
                };
              } else {
                return pre;
              }
            });
            //using ternory operator
            setInputData((preName) =>
              preName.name.length > 0
                ? {
                    ...preName,
                    name: "",
                  }
                : preName
            );

            setInputData((preCity) =>
              preCity.city.length > 0
                ? {
                    ...preCity,
                    city: "",
                  }
                : preCity
            );
            setInputData((prePosition) =>
              prePosition.posistion.length > 0
                ? {
                    ...prePosition,
                    prePosition: "",
                  }
                : prePosition
            );
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
  );
};

export default App;

//end 06:09:00
