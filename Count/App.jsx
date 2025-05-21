import { useState } from "react";
import "./App.css";


function App(){
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("reset");

  function handleAdd() {
    setCount(count + 1);
    setLastAction("increase");
  }

  function handleSub() {
    setCount(count - 1);
    setLastAction("decrease");
  }

  function handleReset() {
    setCount(0);
    setLastAction("reset");
  }

  // explanation based on lastAction
  let explanation = "";
  if (lastAction === "increase") {
    explanation = "You've increased the count.";
  } else if (lastAction === "decrease") {
    explanation = "You've decreased the count.";
  } else {
    explanation = "You're at the starting state.";
  }
  return(
    <div className="App">
    <div className="box">
      <p>{count}</p>
      <p className="explanation">{explanation}</p>
      <button onClick={handleAdd} className="add">ADD</button>
      <button onClick={handleSub} className="sub">SUB</button>
      <button onClick={ handleReset } className="reset">RESET</button>
    </div>
    </div>
  );
}

export default App;
