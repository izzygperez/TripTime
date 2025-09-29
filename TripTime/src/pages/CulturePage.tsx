import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/culture.module.css";

/* Image imports for image feed on culture page */
import gbgHistory from "../assets/culture/gbg_history.jpg";
import gbgInside from "../assets/culture/gbg_inside.jpg";
import gbgShow from "../assets/culture/gbg_show.jpg";
import gbgMain from "../assets/culture/GBG.jpg";
import gbg1 from "../assets/culture/gbg(1).jpg";
import gbg from "../assets/culture/gyeongbokgung.jpg";

import bhv1 from "../assets/culture/bHanokVillage.jpg";
import bhv2 from "../assets/culture/BHV.jpg";
import bhv3 from "../assets/culture/bhv(1).jpg";
import bhv4 from "../assets/culture/Bukchon.jpg";
import bhv5 from "../assets/culture/bukchon(1).jpg";

import dmz1 from "../assets/culture/demilitarized-zone.jpg";
import dmz2 from "../assets/culture/DMZ_map.png";
import dmz3 from "../assets/culture/dmz.jpg";

import hr1 from "../assets/culture/Hangang.jpg";
import hr2 from "../assets/culture/hanPark.jpg";
import hr3 from "../assets/culture/hanRiver.jpg";
import hr4 from "../assets/culture/HanRiver(1).jpg";

const GALLERIES: Record<string, string[]> = {
  Gyeongbokgung: [
    gbgHistory,
    gbgInside,
    gbgShow,
    gbgMain,
    gbg1,
    gbg,
  ],
  BukchonHanokVillage: [
    bhv1,
    bhv2,
    bhv3,
    bhv4,
    bhv5,
  ],
  DMZ: [
    dmz1,
    dmz2,
    dmz3,
  ],
  HanRiver: [
    hr1,
    hr2,
    hr3,
    hr4,
  ],
};

export default function CulturePage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeImage, setActiveImage] = useState<string>();
  const navigate = useNavigate();
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  // Open dialog (modal) when activeImage is set
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

  // Closes the dialog (modal) and clears activeImage
  function closeModal() {
    dialogRef.current?.close();
    setActiveImage(undefined);
    document.body.style.overflow = "";
  }

  const notes: Record<string,{ type: "text" | "bullet"; content: string }[]> = {
    Gyeongbokgung: [
      { type: "bullet", content: "Lots of hanbok rental options nearby" },
      { type: "bullet", content: "Scheduled ceremonies throughout the day" },
      { type: "text", content: "First Time Tips" },
      {
        type: "bullet",
        content: "There’s an entry discount if you show up in hanbok!!",
      },
      { type: "bullet", content: "Tons of photo op places since it’s a big landmark" },
      { type: "bullet", content: "Check for special events to see the palace at night" },
    ],
    BukchonHanokVillage: [
      { type: "bullet", content: "Very picturesque depending on the season" },
      { type: "bullet", content: "Small shops with handmade and traditional items" },
      { type: "text", content: "First Time Tips" },
      { type: "bullet", content: "Be respectful of the residents in the area" },
      { type: "bullet", content: "Go early to avoid crowds" },
    ],
    DMZ: [
      { type: "bullet", content: "Lots of different options to book a bus tour" },
      { type: "bullet", content: "Museum has a cafe inside" },
      { type: "bullet", content: "Souvenir stops throughout tour" },
      { type: "text", content: "First Time Tips" },
      { type: "bullet", content: "Bring identification and be respectful to soldiers" },
      { type: "bullet", content: "Brush up on North and South Korean history" },
    ],
    HanRiver: [
      { type: "bullet", content: "Famous spot for Korean media" },
      { type: "bullet", content: "Boat tours, cafes, bike rentals!!" },
      { type: "text", content: "First Time Tips" },
      { type: "bullet", content: "Check for special events for photo ops" },
      { type: "bullet", content: "Have a little picnic with food from nearby convenience stores or fast food spots" },
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
        <h1 className="name" enable-xr >Culture</h1>
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
          <h2 className={`${styles.placeType} placeCat`} enable-xr >Historical Places</h2>
          <button 
          className={`${styles.address} ${active === "gyeongbokgung" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("gyeongbokgung");
            setActiveLocation("Gyeongbokgung");
          }} enable-xr >
            <span className={styles.addyName}>Gyeongbokgung</span>
            <br />
            <span className={styles.span}>161 Sajik-ro, Jongno-gu, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "bukchon" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("bukchon");
            setActiveLocation("BukchonHanokVillage");
          }} enable-xr >
            <span className={styles.addyName}>Bukchon Hanok Village</span>
            <br />
            <span className={styles.span}>37 Gyedong-gil, Jongno-gu, Seoul</span>
          </button>

          <h2 className={`${styles.placeType} placeCat`} enable-xr >Cultural Landmarks</h2>
          <button 
          className={`${styles.address} ${active === "dmz" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("dmz");
            setActiveLocation("DMZ");
          }} enable-xr >
            <span className={styles.addyName}>DMZ</span>
            <br />
            <span className={styles.span}>Bus Tour Only</span>
          </button>
          <button 
          className={`${styles.address} ${active === "hanriver" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("hanriver");
            setActiveLocation("HanRiver");
          }} enable-xr >
            <span className={styles.addyName}>Han River</span>
            <br />
            <span className={styles.span}>330 Yeouidong-ro, Yeongdeungpo-gu, Seoul</span>
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
          <p>Select a location to see details.</p>
        )}
        </section>
      </article>
    </main>
  );
}
