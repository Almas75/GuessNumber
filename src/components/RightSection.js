function RightSection({ message, score, highScore }) {
  return (
    <div className="right-section">
      <p>{message}</p>
      <p>💯 Score: {score}</p>
      <p>🏅 Highscore: {highScore}</p>
    </div>
  );
}

export default RightSection;