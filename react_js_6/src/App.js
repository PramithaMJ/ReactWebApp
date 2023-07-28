import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [apiId, setApiId] = useState("1");
  console.log(apiId);

  useEffect(() => {
    console.log("use Effect running");
  }, [apiId]);

  return (
    <div>
      <input
        type="text"
        value={apiId}
        onChange={(e) => {
          e.preventDefault();
          const enteredId = e.target.value;
          if (enteredId.length > 0) {
            setApiId(enteredId);
          }
        }}
        placeholder="Enter Id "
      />
    </div>
  );
};

export default App;

//end 06:09:00
