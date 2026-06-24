import NumberBox from "./NumberBox";

function TitleSection({ number }) {
  return (
    <section className="title-section">
      <h1>Guess My Number!</h1>

      <NumberBox number={number} />
    </section>
  );
}

export default TitleSection;