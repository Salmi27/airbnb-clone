import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
  
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id} // adding key prop is highly recommended
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards__list">{cards}</section>
    </div>
  );
}

export default App;
