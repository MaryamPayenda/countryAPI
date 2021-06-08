import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function changeHandler(e) {
    setUserInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);
    let endPoint = `
    https://restcountries.eu/rest/v2/name/${textToUrl}`;

    console.log(endPoint);

    // it also possible using promises
    // fetch(endPoint)
    // .then((res)=> res.json())
    // .then((data)=> setResult(data))

    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`Error ${err}`));
  }

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          value={userInput}
          onChange={changeHandler}
          placeholder="Write Country Name"
        />
        <button type="submit">Search</button>
      </form>
      <Country results={results} />
    </React.Fragment>
  );
}

export default App;
