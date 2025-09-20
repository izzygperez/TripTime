import React from "react";
import { Link } from "react-router-dom";
import styles from "./page.module.css";

function App() {
  const cards = [
    { src: "/images/gbg_show.jpg", label: "Culture", slug: "culture" },
    { src: "/images/hanPark.jpg", label: "Eat & Drink", slug: "eat-drink" },
    { src: "/images/GBG.jpg", label: "Activities", slug: "activities" },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>TripTime</h1>
        <select className={styles.dropdown}>
          <option>Seoul, South Korea</option>
          <option>Tokyo, Japan</option>
          <option>Paris, France</option>
        </select>
      </header>

      <main className={styles.cards}>
        {cards.map((card, i) => (
          <Link
            key={i}
            to={`/destination/${card.slug}`}
            className={styles.card}
          >
            <img
              src={card.src}
              alt={card.label}
              width={320}
              height={450}
              className={styles.image}
            />
            <p className={styles.label}>{card.label}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default App;
