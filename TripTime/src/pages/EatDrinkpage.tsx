import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/eatDrink.module.css";

import cheongsudang1 from "../assets/eat-drink/CheongsudangBakery3.jpg";
import cheongsudang2 from "../assets/eat-drink/cheongsudang4.jpg";
import cheongsudang3 from "../assets/eat-drink/cheongsudangBakery.jpg";
import cheongsudang4 from "../assets/eat-drink/cheongsudang7.jpg";
import cheongsudang5 from "../assets/eat-drink/cheongsudang5.jpg";
import cheongsudang6 from "../assets/eat-drink/cheongsudang3.png";

import clementine1 from "../assets/eat-drink/Clementine(1).jpg";
import clementine2 from "../assets/eat-drink/Clementine2.jpg";
import clementine3 from "../assets/eat-drink/clementine.jpeg";
import clementine4 from "../assets/eat-drink/clementine4.jpg";
import clementine5 from "../assets/eat-drink/clementine5.jpg";
import clementine6 from "../assets/eat-drink/clementine6.jpg";

import ocheonjip1 from "../assets/eat-drink/Ocheonjip.jpg";
import ocheonjip2 from "../assets/eat-drink/Ocheonjip2.jpg";
import ocheonjip3 from "../assets/eat-drink/Ocheonjip4.jpg";
import ocheonjip4 from "../assets/eat-drink/ocheonjip3.jpeg";
import ocheonjip5 from "../assets/eat-drink/ocheonjip5.jpg";
import ocheonjip6 from "../assets/eat-drink/ocheonjip6.jpg";

import solsot1 from "../assets/eat-drink/solsot (1).jpg";
import solsot2 from "../assets/eat-drink/solsot3.jpg";
import solsot3 from "../assets/eat-drink/solsot4.jpg";
import solsot4 from "../assets/eat-drink/solsot5.jpeg";
import solsot5 from "../assets/eat-drink/solsot6.jpg";
import solsot6 from "../assets/eat-drink/solsot7.jpg";

const GALLERIES: Record<string, string[]> = {
  Cheongsudang: [
    cheongsudang1,
    cheongsudang2,
    cheongsudang3,
    cheongsudang4,
    cheongsudang5,
    cheongsudang6,
  ],
  Clementine: [
    clementine1,
    clementine2,
    clementine3,
    clementine4,
    clementine5,
    clementine6,
  ],
  Ocheonjip: [
    ocheonjip1,
    ocheonjip2,
    ocheonjip3,
    ocheonjip4,
    ocheonjip5,
    ocheonjip6,
  ],
  Solsot: [
   solsot1,
   solsot2,
   solsot3,
   solsot4,
   solsot5,
   solsot6,
  ],
};

export default function EatDrinkPage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeImage, setActiveImage] = useState<string>();
  const navigate = useNavigate();
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    dialogRef.current?.showModal();
    dialogRef.current?.addEventListener("close", closeModal);

    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [activeImage]);

  useEffect(() => {
    setActiveImage(undefined);
  }, [activeLocation]);

  const galleryImages = activeLocation ? GALLERIES[activeLocation] || [] : [];

  function closeModal() {
    dialogRef.current?.close();
    setActiveImage(undefined);
    document.body.style.overflow = "";
  }

  const notes: Record<string,{ type: "text" | "bullet"; content: string }[]> = {
    Cheongsudang: [
      { type: "text", content: "Other Locations" },
      { type: "bullet", content: "A lot of strawberries. promage cake: its a new menu promo with a lot of fresh strawberry juice" },
      { type: "bullet", content: "Original egg souffle castela: Order-made dessert where you can enjoy warm souffles freshly baked at high temperatures for 20 minutes at the time as ordering by mixing fluffy cream cheese souffles and vanilla cream with nut honey" },
      { type: "bullet", content: "Bonnie Bomb Mont Blanc: full of savory and sweet taste"},
      { type: "bullet", content: "Stone drip coffee: Hand drip coffee extracted from three carefully selected top-quality beans using porous volcanic rocks"},
    ],
    Clementine: [
      { type: "text", content: "Popular Menu Items" },
      { type: "bullet", content: "Earl Grey Lemon Tart" },
      { type: "bullet", content: "Earl Grey Gateau Cake" },
      { type: "bullet", content: "Tiramisu Roll Cake" },
    ],
    Ocheonjip: [
      { type: "text", content: "Popular Menu Itmes" },
      { type: "bullet", content: "Black Angus Almoxim Sukiyaki: Traditional sukiyaki with sweet soy sauce base plus fresh vegetable and meat" },
      { type: "bullet", content: "Hot Spring Bear Shabu: A hot spring rip with two cute white bears! There’s a bear on top of the miso broth!" },
      { type: "bullet", content: "Hot Spring House Miso Shabu: Savory shabu shabu (choose rice or noodles) enjoyed with sauce in miso sauce pork bone broth" },
    ],
    Solsot: [
      { type: "text", content: "Other Locations" },
      {
        type: "bullet",
        content: "Myeongdong, Hannam-dong, Yeonnam-dong, Sinsa, Gangnam, Seongsu",
      },
      { type: "text", content: "Popular Menu Items" },
      { type: "bullet", content: "Steak Pot Rice: putting meat and yolk together and mixing it with rice in a light steak pot" },
      { type: "bullet", content: "Sea Bream Cauldron Rice: premium pot rice with soft sea bream and scallops" },
    ],
  };

  const location = useLocation();
  
  // map your paths to labels
  const options = [
    { value: "/destination/culture", label: "Culture" },
    { value: "/destination/eat-drink", label: "Eat & Drink" },
    { value: "/destination/activities", label: "Activities" },
  ];
  
  // figure out which option matches current page
  const currentValue = options.find(opt => location.pathname === opt.value)?.value || "/destination/culture";

  return (
    <main>
      <header className={styles.header}>
        <button className={`${styles.home} homePage`} onClick={() => navigate("/")} enable-xr >
          🏠
        </button>
        <h1 className="name" enable-xr >Eat & Drink</h1>
        <select className={`${styles.dropbtn} dropdown`} value={currentValue} onChange={(e) => navigate(e.target.value)} enable-xr >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </header>

      <article className={styles.article}>
        <section className={`${styles.locations} places`} enable-xr >
          <h2 className={`${styles.placeType} placeCat`} enable-xr >Cafe</h2>
          <button 
          className={`${styles.address} ${active === "cheongsudang" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("cheongsudang");
            setActiveLocation("Cheongsudang");
          }} enable-xr >
            <span className={styles.addyName}>Cheongsudang</span>
            <br />
            <span className={styles.span}>144 Ikseon-dong Jongno-gu, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "clementine" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("clementine");
            setActiveLocation("Clementine");
          }} enable-xr >
            <span className={styles.addyName}>Clementine</span>
            <br />
            <span className={styles.span}>685-490 Seongsu-dong, Seoul</span>
          </button>

          <h2 className={`${styles.placeType} placeCat`} enable-xr >Restaurant</h2>
          <button 
          className={`${styles.address} ${active === "ocheonjip" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("ocheonjip");
            setActiveLocation("Ocheonjip");
          }} enable-xr >
            <span className={styles.addyName}>Ocheonjip</span>
            <br />
            <span className={styles.span}>128-3 Ikeon-dong Jogno-gu, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "solsot" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("solsot");
            setActiveLocation("Solsot");
          }} enable-xr >
            <span className={styles.addyName}>Solsot</span>
            <br />
            <span className={styles.span}>390-42 Yeonnam-dong Mapo-gu, Seoul</span>
          </button>
        </section>

        <section className={styles.imageFeed}>
          <div className={styles.imgGrid}>
          <dialog ref={dialogRef} className={`${styles.modal} polaroid`} enable-xr >
              <button className={`${styles.closeBtn} polaroid`} onClick={closeModal}>
                X
              </button>
              <div>
                {activeImage && (
                  <img src={activeImage} alt="Selected" />
                )}
              </div>
            </dialog>

            {galleryImages.map((img, idx) => (
              <div className={styles.pic} key={idx}>
                <button onClick={() => setActiveImage(img)}>
                  <img src={img} alt={`Gallery ${idx}`} className={styles.galleryImg} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.notes} info`} enable-xr >
          <h2>Notes</h2>
          {activeLocation ? (
          <div>
            {notes[activeLocation].map((note, index) =>
              note.type === "bullet" ? (
                <li key={index} style={{ color: "#013d5a" }}>{note.content}</li>
              ) : (
                <p key={index} style={{ color: "#013d5a", fontWeight: "bold", marginTop: "1rem" }}>
                  {note.content}
                </p>
              )
            )}
          </div>
        ) : (
          <p>Select A location to see details.</p>
        )}
        </section>
      </article>
    </main>
  );
}
