function Header({ onAgain }) {
  return (
    <header>
      <button className="again" onClick={onAgain}>
        Again!
      </button>

      <p>(Between 1 and 50)</p>
    </header>
  );
}

export default Header;