import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/activities.module.css";

const GALLERIES: Record<string, string[]> = {
  Sparex: [
    "/images/activities/sparex.png",
    "/images/activities/sparex2.jpg",
    "/images/activities/sparex3.png",
    "/images/activities/sparex4.png",
    "/images/activities/sparex5.jpg",
    "/images/activities/sparex6.png",
  ],
  OutdoorLibrary: [
    "/images/activities/outdoorlibrary.jpg",
    "/images/activities/outdoorlibrary2.jpg",
    "/images/activities/outdoorlibrary3.jpg",
    "/images/activities/outdoorlibrary4.jpg",
    "/images/activities/outdoorlibrary5.jpg",
    "/images/activities/outdoorlibrary6.jpg",
  ],
  LanternFestival: [
    "/images/activities/LanternFestival.jpg",
    "/images/activities/LanternFestival2.jpg",
    "/images/activities/LanternFestival3.jpg",
    "/images/activities/LanternFestival4.jpg",
    "/images/activities/LanternFestival5.jpg",
    "/images/activities/LanternFestival6.jpg",
  ],
  CherryBlossom: [
    "/images/activities/CherryBlossom.jpg",
    "/images/activities/CherryBlossom2.jpg",
    "/images/activities/CherryBlossom3.jpg",
    "/images/activities/CherryBlossom4.jpg",
    "/images/activities/CherryBlossom5.jpg",
    "/images/activities/CherryBlossom6.jpg",
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

  const handleClick = (place: string) => {
    setActive(place);
  };


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

  return (
    <main>
      <header className={styles.header}>
        <button className={styles.home} onClick={() => navigate("/")}>
          🏠
        </button>
        <h1 className={styles.title}>Activity</h1>
        <select className={styles.dropbtn} onChange={(e) => navigate(e.target.value)}>
          <option value="/destination/culture">Culture</option>
          <option value="/destination/eat-drink">Eat & Drink</option>
          <option value="/destination/activities">Activities</option>
        </select>
      </header>

      <article className={styles.article}>
        <section className={styles.locations}>
          <h2 className={styles.placeType}>Relaxing</h2>
          <button 
          className={`${styles.address} ${active === "sparex" ? styles.active : ""}`} 
          onClick={() => {
            setActive("sparex");
            setActiveLocation("Sparex");
          }}>
            <span className={styles.addyName}>Sparex</span>
            <br />
            <span className={styles.span}>18-21 Eulijiro 6(yuk)-ga Jung-gu, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "outdoorlibrary" ? styles.active : ""}`} 
          onClick={() => {
            setActive("outdoorlibrary");
            setActiveLocation("OutdoorLibrary");
          }}>
            <span className={styles.addyName}>Outdoor Library</span>
            <br />
            <span className={styles.span}>Changsin-dong Jongno-gu, Seoul</span>
          </button>

          <h2 className={styles.placeType}>Seasonal</h2>
          <button 
          className={`${styles.address} ${active === "LanternFestival" ? styles.active : ""}`} 
          onClick={() => {
            setActive("lanternfestival");
            setActiveLocation("LanternFestival");
          }}>
            <span className={styles.addyName}>Lantern Festival</span>
            <br />
            <span className={styles.span}>Changsin-dong Jongno-gu, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "CherryBlossom" ? styles.active : ""}`} 
          onClick={() => {
            setActive("cherryblossom");
            setActiveLocation("CherryBlossom");
          }}>
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

        <section className={styles.notes}>
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
