import React from "react";
import { useState } from "react";
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

  const locations = [
    {
      name: "Seoul, South Korea",
      key: "korea",
      cards: [
        { src: "/images/korea/culture/gbg_show.jpg", label: "Culture", slug: "culture" },
        { src: "/images/korea/eat-drink/solsot7.jpg", label: "Eat & Drink", slug: "eat-drink" },
        { src: "/images/korea/activities/LanternFestival3.jpg", label: "Activities", slug: "activities" },
      ],
    },
    {
      name: "Tokyo, Japan",
      key: "japan",
      cards: [
        { src: "/images/japan/culture/garden.jpg", label: "Culture", slug: "culture" },
        { src: "/images/japan/eat-drink/market.jpg", label: "Eat & Drink", slug: "eat-drink" },
        { src: "/images/japan/activities/tower.jpg", label: "Activities", slug: "activities" },
      ],
    },
  ];

  const [currentLocation, setCurrentLocation] = useState(locations[0]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title} >TripTime</h1>
        <select
          className={`${styles.dropbtn} dropdown`}
          value={currentLocation.key}
          onChange={(e) =>
            setCurrentLocation(
              locations.find((loc) => loc.key === e.target.value) || locations[0]
            )
          }
          enable-xr
        >
          {locations.map((loc) => (
            <option key={loc.key} value={loc.key}>
              {loc.name}
            </option>
          ))}
        </select>
      </header>

      <main className={`${styles.cards} doors`} enable-xr >
      {currentLocation.cards.map((card) => (
          <Link key={card.slug} to={`/${currentLocation.key}/${card.slug}`} className={styles.card}>
            <img
              src={card.src}
              alt={card.label}
              width={320}
              height={450}
              className={styles.image}
            />
            <p className={`${styles.label} category`} enable-xr>
              {card.label}
            </p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default App;
