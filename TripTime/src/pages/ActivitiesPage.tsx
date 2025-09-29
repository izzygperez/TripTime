import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TRIP_DATA } from "../data";
import styles from "./page.module.css";

export default function CulturePage() {
  const [active, setActive] = useState<string | null>(null);
  const [activePlace, setActivePlace] = useState<typeof sectionData[string][0][0] | null>(null);
  const { country } = useParams<{ country: string }>();
  const navigate = useNavigate();

  // normalize key
  const normalizedCountry = (country ?? "").toLowerCase();
  const sectionData = TRIP_DATA[normalizedCountry]?.activities;

  // no data found
  if (!sectionData) return <p>No data found for {country}</p>;

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Open dialog (modal) when activeImage is set
  useEffect(() => {
    if (activeImage) dialogRef.current?.showModal();
  }, [activeImage]);

  // Closes the dialog (modal) and clears activeImage
  function closeModal() {
    dialogRef.current?.close();
    setActiveImage(null);
  }

  const currentCountry = country ?? "korea";

  // Routes dropdown options to corresponding country's categories
  const options = [
    { value: `/${currentCountry}/culture`, label: "Culture" },
    { value: `/${currentCountry}/eat-drink`, label: "Eat & Drink" },
    { value: `/${currentCountry}/activities`, label: "Activities" },
  ];

  // Determines which option matches the current page
  const currentValue = options.find(opt => location.pathname === opt.value)?.value ?? options[0].value;

  return (
    <main>
      <header className={styles.header}>
        <button className={styles.home} onClick={() => navigate("/")} enable-xr>
          🏠
        </button>
        <h1 className="name" enable-xr>
          {country?.toUpperCase()} – ACTIVITIES
        </h1>
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
        {Object.entries(sectionData).map(([sectionName, places]) => {
          const typedPlaces = places as Array<{
            id: string;
            name: string;
            address: string;
            gallery: string[];
          }>;

          return (
            <div key={sectionName}>
              <h2 className={`${styles.placeType} placeCat`} enable-xr >{sectionName.replace(/([A-Z])/g, " $1").trim()}</h2>
              {typedPlaces.map((place) => (
                <div key={place.id}>
                  <button 
                    className={`${styles.address} ${active === place.id ? styles.active : ""} placeRec`} 
                    onClick={() => {
                      setActive(place.id);
                      setActivePlace(place);
                    }}
                  enable-xr >
                    <span>{place.name}</span>
                    <br />
                    <span>{place.address}</span>
                  </button>
                </div>
              ))}
            </div>
          );
        })}
        </section>
        <section className={styles.imageFeed}>
          <div className={styles.imgGrid}>
            {/* simple modal */}
            <dialog ref={dialogRef} className={`${styles.modal} polaroid`} enable-xr>
              <button className={`${styles.closeBtn} polaroid`} onClick={closeModal}>
                X
              </button>
              {activeImage && <img src={activeImage} alt="Selected" />}
            </dialog>
            {activePlace?.gallery.map((imgUrl, idx) => (
              <div key={idx} className={styles.pic}>
                <button onClick={() => setActiveImage(imgUrl)}>
                  <img src={imgUrl} alt={`Gallery ${idx}`} className={styles.galleryImg} />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className={`${styles.notes} info`} enable-xr>
          <h2>Notes</h2>
          {activePlace ? (
            <div>
              {activePlace.notes.map((note, idx) =>
                note.type === "bullet" ? (
                  <li key={idx} style={{ marginBottom: "5%" }}>{note.content}</li>
                ) : (
                  <p key={idx} style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
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
