import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/activities.module.css";

/* Image imports for image feed on culture page */
import sparex1 from "../assets/activities/sparex.png";
import sparex2 from "../assets/activities/sparex2.jpg";
import sparex3 from "../assets/activities/sparex3.png";
import sparex4 from "../assets/activities/sparex4.png";
import sparex5 from "../assets/activities/sparex5.jpg";
import sparex6 from "../assets/activities/sparex6.png";

import ol1 from "../assets/activities/outdoorlibrary.jpg";
import ol2 from "../assets/activities/outdoorlibrary2.jpg";
import ol3 from "../assets/activities/outdoorlibrary3.jpg";
import ol4 from "../assets/activities/outdoorlibrary4.jpg";
import ol5 from "../assets/activities/outdoorlibrary5.jpg";
import ol6 from "../assets/activities/outdoorlibrary6.jpg";

import lf1 from "../assets/activities/LanternFestival.jpg";
import lf2 from "../assets/activities/LanternFestival2.jpg";
import lf3 from "../assets/activities/LanternFestival3.jpg";
import lf4 from "../assets/activities/LanternFestival4.jpg";
import lf5 from "../assets/activities/LanternFestival5.jpg";
import lf6 from "../assets/activities/LanternFestival6.jpg";

import cb1 from "../assets/activities/CherryBlossom.jpg";
import cb2 from "../assets/activities/CherryBlossom2.jpg";
import cb3 from "../assets/activities/CherryBlossom3.jpg";
import cb4 from "../assets/activities/CherryBlossom4.jpg";
import cb5 from "../assets/activities/CherryBlossom5.jpg";
import cb6 from "../assets/activities/CherryBlossom6.jpg";


const GALLERIES: Record<string, string[]> = {
  Sparex: [
    sparex1,
    sparex2,
    sparex3,
    sparex4,
    sparex5,
    sparex6,
  ],
  OutdoorLibrary: [
    ol1,
    ol2,
    ol3,
    ol4,
    ol5,
    ol6,
  ],
  LanternFestival: [
    lf1,
    lf2,
    lf3,
    lf4,
    lf5,
    lf6,
  ],
  CherryBlossom: [
    cb1,
    cb2,
    cb3,
    cb4,
    cb5,
    cb6,
  ],
};

export default function ActivitiesPage() {
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
    Sparex: [
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
    OutdoorLibrary: [
      { type: "bullet", content: "Very picturesque depending on the season" },
      { type: "bullet", content: "Small shops with handmade and traditional items" },
      { type: "text", content: "First Time Tips" },
      { type: "bullet", content: "Be respectful of the residents in the area" },
      { type: "bullet", content: "Go early to avoid crowds" },
    ],
    LanternFestival: [
      { type: "bullet", content: "Lots of different options to book a bus tour" },
      { type: "bullet", content: "Museum has a cafe inside" },
      { type: "bullet", content: "Souvenir stops throughout tour" },
      { type: "text", content: "First Time Tips" },
      { type: "bullet", content: "Bring identification and be respectful to soldiers" },
      { type: "bullet", content: "Brush up on North and South Korean history" },
    ],
    CherryBlossom: [
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
        <h1 className="name" enable-xr >Activity</h1>
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
          <h2 className={`${styles.placeType} placeCat`} enable-xr >Relaxing</h2>
          <button 
          className={`${styles.address} ${active === "sparex" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("sparex");
            setActiveLocation("Sparex");
          }} enable-xr >
            <span className={styles.addyName}>Sparex</span>
            <br />
            <span className={styles.span}>18-21 Eulijiro 6(yuk)-ga Jung-gu, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "outdoorlibrary" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("outdoorlibrary");
            setActiveLocation("OutdoorLibrary");
          }} enable-xr >
            <span className={styles.addyName}>Outdoor Library</span>
            <br />
            <span className={styles.span}>Changsin-dong Jongno-gu, Seoul</span>
          </button>

          <h2 className={`${styles.placeType} placeCat`} enable-xr >Seasonal</h2>
          <button 
          className={`${styles.address} ${active === "LanternFestival" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("lanternfestival");
            setActiveLocation("LanternFestival");
          }} enable-xr >
            <span className={styles.addyName}>Lantern Festival</span>
            <br />
            <span className={styles.span}>Changsin-dong Jongno-gu, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "CherryBlossom" ? styles.active : ""} placeRec`} 
          onClick={() => {
            setActive("cherryblossom");
            setActiveLocation("CherryBlossom");
          }} enable-xr >
            <span className={styles.addyName}>Cherry Blossom Viewing</span>
            <br />
            <span className={styles.span}>8 Yeouido-dong Yeongdeungpo-gu, Seoul</span>
          </button>
        </section>

        <section className={styles.imageFeed}>
          <div className={styles.imgGrid}>
            <dialog ref={dialogRef} className={styles.modal}>
              <button className={styles.closeBtn} onClick={closeModal}>
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
          <p>Select location to see details.</p>
        )}
        </section>
      </article>
    </main>
  );
}
