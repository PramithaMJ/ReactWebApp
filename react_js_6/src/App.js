import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [apiId, setApiId] = useState("1");
  const [data, setData] = useState({});

  console.log(apiId);
  console.log(data);

  useEffect(() => {
    console.log("use Effect running");

    const apiCall = async () => {
      console.log("api call running");
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${apiId}`
      );
      const data = await res.json();

      if (data) {
        setData(data);
      }
    };

    if (apiId.length > 0 && Number(apiId > 0) && Number(apiId) <= 100) {
      console.log("useEffect if condition");
      apiCall();
    }
    return () => {
      console.log("cleanup");
      apiCall();
    };
  }, [apiId]);

  return (
    <div>
      <input
        type="text"
        value={apiId}
        onChange={(e) => {
          setApiId(e.target.value);
        }}
        placeholder="Enter Id "
      />
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;

//end 06:09:00
