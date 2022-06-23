import "./styles.css";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  const handleAdd = (e) => {
    setCount(count + e);
  };
  const handleReduce = (e) => {
    setCount(count - e);
  };
  const handleDouble = () => {
    setCount(count * 2);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1 style={{ color: count % 2 === 0 ? "green" : "red" }}>
        value : {count}
      </h1>
      <button onClick={() => handleAdd(1)}>Add</button>
      <button onClick={() => handleReduce(1)}>Reduce</button>
      <button onClick={() => handleDouble()}>Double</button>
    </div>
  );
}
