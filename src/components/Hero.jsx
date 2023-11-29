import grid from "../assets/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={grid} alt="grid" />
      <h1 className="hero__title">Online Experience</h1>
      <p className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
}

export default Hero;
