import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Karine from "./Karine";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Karine />
    </div>
  );
}

export default App;
