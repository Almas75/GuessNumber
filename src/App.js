import { useState, useEffect } from "react";
import Header from "./components/Header";
import TitleSection from "./components/TitleSection";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import "./App.css";

function App() {
  const [randomVal, setRandomVal] = useState(
    Math.trunc(Math.random() * 50) + 1
  );

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Start guessing...");
  const [score, setScore] = useState(50);
  const [highScore, setHighScore] = useState(0);
  const [numberBox, setNumberBox] = useState("?");
  const [bgColor, setBgColor] = useState("#1d1d1d");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  function handleCheck() {
    const input = Number(guess);

    if (!input) {
      setMessage("⛔ No Number!");
    } else if (input === randomVal) {
      setMessage("🎉 Correct Number");
      setNumberBox(randomVal);
      setBgColor("green");

      if (score > highScore) {
        setHighScore(score);
      }
    } else if (input < randomVal) {
      if (score > 1) {
        setMessage("📉 Too Low");
        setScore(score - 1);
      } else {
        setMessage("💥 Game Over");
      }
    } else {
      if (score > 1) {
        setMessage("📈 Too High");
        setScore(score - 1);
      } else {
        setMessage("💥 Game Over");
      }
    }
  }

  function handleAgain() {
    setScore(50);
    setRandomVal(Math.trunc(Math.random() * 50) + 1);
    setGuess("");
    setMessage("Start guessing...");
    setNumberBox("?");
    setBgColor("#1d1d1d");
  }

  return (
    <>
      <Header onAgain={handleAgain} />

      <TitleSection number={numberBox} />

      <hr />

      <main className="game-container">
        <LeftSection
          guess={guess}
          setGuess={setGuess}
          onCheck={handleCheck}
        />

        <RightSection
          message={message}
          score={score}
          highScore={highScore}
        />
      </main>
    </>
  );
}

export default App;