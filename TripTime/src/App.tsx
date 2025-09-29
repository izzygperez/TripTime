import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./page.module.css";

import gbg_show from "./assets/korea/culture/gbg_show.jpg";
import solsot7 from "./assets/korea/eat-drink/solsot7.jpg";
import lf3 from "./assets/korea/activities/LanternFestival3.jpg"

import garden from "./assets/japan/culture/garden.jpg";
import market from "./assets/japan/eat-drink/market.jpg";
import tower from "./assets/japan/activities/tower.jpg";

import mm from "./assets/hawaii/culture/mm(1).jpg";
import ys from "./assets/hawaii/eat-drink/ys.png";
import kob from "./assets/hawaii/activities/kob1.jpg";

function App() {
  const locations = [
    {
      name: "Seoul, South Korea",
      key: "korea",
      cards: [
        { src: gbg_show, label: "Culture", slug: "culture" },
        { src: solsot7, label: "Eat & Drink", slug: "eat-drink" },
        { src: lf3, label: "Activities", slug: "activities" },
      ],
    },
    {
      name: "Tokyo, Japan",
      key: "japan",
      cards: [
        { src: garden, label: "Culture", slug: "culture" },
        { src: market, label: "Eat & Drink", slug: "eat-drink" },
        { src: tower, label: "Activities", slug: "activities" },
      ],
    },
    {
      name: "Hawaii, USA",
      key: "hawaii",
      cards: [
        { src: mm, label: "Culture", slug: "culture" },
        { src: ys, label: "Eat & Drink", slug: "eat-drink" },
        { src: kob, label: "Activities", slug: "activities" },
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
