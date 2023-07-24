import { useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");

  return (
    <div className="main_container">
      <div className="main_left">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => {
            e.preventDefault();
            setImageUrl(e.target.value);
          }}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => {
            e.preventDefault();
            setCity(e.target.value);
          }}
        />
        <input
          type="text"
          value={position}
          onChange={(e) => {
            e.preventDefault();
            setPosition(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log({
              imageUrl,
              name,
              city,
              position,
            });
          }}
        >
          Submit
        </button>
      </div>
      <div className="main_right"></div>
    </div>
  );
};

export default App;
