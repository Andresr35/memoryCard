import { useState } from "react";
import "./App.css";
import RenderCards from "./components/RenderCards";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <h1>This is the Memory Card Game!</h1>
      <h2>Score: {score}</h2>
      <h2>Best Score: {bestScore}</h2>
      <h3>Click every image that you haven&apos;t clicked before!</h3>
      <RenderCards
        score={score}
        setBestScore={setBestScore}
        setScore={setScore}
        bestScore={bestScore}
      />
    </>
  );
}

export default App;
