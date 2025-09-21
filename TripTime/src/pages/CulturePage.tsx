import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import styles from "../styles/culture.module.css";

export default function CulturePage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeImage, setActiveImage] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeImage) return;

    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";

    dialogRef.current?.addEventListener("close", closeModal);
    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [activeImage]);

  function closeModal() {
    dialogRef.current?.close();
    setActiveImage(undefined);
    document.body.style.overflow = "";
  }

  // Example gallery images
  const galleryImages = [
    "/images/gbg_history.jpg",
    "/images/gbg_inside.jpg",
    "/images/gbg_show.jpg",
    "/images/GBG.jpg",
    "/images/gbg(1).jpg",
    "/images/gyeongbokgung.jpg",
  ];

  return (
    <main>
      <header className={styles.header}>
        <button className={styles.home} onClick={() => navigate("/")}>
          🏠
        </button>
        <h1 className={styles.title}>TripTime</h1>
        <select className={styles.dropbtn} onChange={(e) => {window.location.href = e.target.value;}}>
          <option value="/destination/culture">Culture</option>
          <option value="/destination/eat-drink">Eat & Drink</option>
          <option value="/destination/activities">Activities</option>
        </select>
      </header>

      <article className={styles.article}>
        <section className={styles.locations}>
          <h2 className={styles.placeType}>Historical Places</h2>
          <button className={styles.address}>
            <span className={styles.addyName}>Gyeongbokgung</span>
            <br />
            <span className={styles.span}>161 Sajik-ro, Jongno-gu, Seoul</span>
          </button>
          <button className={styles.address}>
            <span className={styles.addyName}>Bukchon Hanok Village</span>
            <br />
            <span className={styles.span}>37 Gyedong-gil, Jongno-gu, Seoul</span>
          </button>

          <h2 className={styles.placeType}>Cultural Landmarks</h2>
          <button className={styles.address}>
            <span className={styles.addyName}>DMZ</span>
            <br />
            <span className={styles.span}>???</span>
          </button>
          <button className={styles.address}>
            <span className={styles.addyName}>Han River</span>
            <br />
            <span className={styles.span}>330 Yeouidong-ro, Yeongdeungpo-gu, Seoul</span>
          </button>
        </section>

        <section className={styles.imageFeed}>
          <div className={styles.imgGrid}>
            <dialog ref={dialogRef} className={styles.modal}>
              {activeImage && (
                <div className={styles.modalContent}>
                  <img src={activeImage} alt="Selected" className={styles.modalImage} />
                  <button className={styles.modalClose} onClick={closeModal}>
                    <X />
                  </button>
                </div>
              )}
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
          <p>Add interesting facts or history here.</p>
        </section>
      </article>
    </main>
  );
}
