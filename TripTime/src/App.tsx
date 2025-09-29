import React from "react";
import { Link } from "react-router-dom";
import styles from "./page.module.css";
import gbgShow from "./assets/gbg_show.jpg";
import solsot from "./assets/solsot7.jpg";
import lf from "./assets/LanternFestival3.jpg";

function App() {
  const cards = [
    { src: gbgShow, label: "Culture", slug: "culture" },
    { src: solsot, label: "Eat & Drink", slug: "eat-drink" },
    { src: lf, label: "Activities", slug: "activities" },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title} >TripTime</h1>
        <select className={`${styles.dropbtn} dropdown`} enable-xr >
          <option>Seoul, South Korea</option>
          <option>Tokyo, Japan</option>
          <option>Honolulu, Hawaii</option>
        </select>
      </header>

      <main className={`${styles.cards} doors`} enable-xr >
        {cards.map((card, i) => (
          <Link
            key={i}
            to={`/korea/${card.slug}`}
            className={styles.card}
          >
            <img
              src={card.src}
              alt={card.label}
              width={320}
              height={450}
              className={styles.image}
            />
            <p className={`${styles.label} category`} enable-xr >{card.label}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default App;
