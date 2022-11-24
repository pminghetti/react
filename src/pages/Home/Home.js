import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./Home.scss";

const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      <div className="home__title">
        <h1>{greeting}</h1>
      </div>
      <Slider />
      <Payments />
      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;
