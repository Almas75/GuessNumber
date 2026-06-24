import Button from "./Button";

function LeftSection({ guess, setGuess, onCheck }) {
  return (
    <div className="left-section">
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="guess"
      />

      <Button text="Check!" onClick={onCheck} />
    </div>
  );
}

export default LeftSection;