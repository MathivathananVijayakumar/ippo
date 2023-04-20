import React, { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCalculateClick = () => {
    setError(null);
    setResult(null);

    // Validate input
    const nums = input.split(",");
    if (nums.length !== 2 || nums.some(isNaN)) {
      setError("Invalid input");
      return;
    }

    // Send request to server to calculate result and store in database
    axios.post("/api/calculate", { nums })
      .then((response) => {
        setResult(response.data.result);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className="App">
      <h1>Partition Array</h1>
      <p>Enter comma-separated list of 2n integers:</p>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleCalculateClick}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error !== null && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
