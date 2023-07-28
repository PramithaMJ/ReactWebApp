import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [apiId, setApiId] = useState("1");
  const [search, setSearch] = useState(0);
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

    //cleanup process
    return () => {
      console.log("cleanup");
      apiCall();
    };
    // eslint-disable-next-line
  }, [search]);

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
      <button onClick={() => setSearch((pre) => (pre === 0 ? 1 : 0))}>
        Search
      </button>
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

//end 08:48:00
