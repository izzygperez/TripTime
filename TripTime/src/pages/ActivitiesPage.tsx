import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import styles from "../styles/culture.module.css";


export default function CulturePage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeImage, setActiveImage] = useState<string>();

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

  return (
    <main>
      <header>
        <button className="home">🏠</button>
        <h1 className="title">TripTime</h1>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Categories ⬇</button>
          <div className={styles.dropdownContent}>
            <a href="/destination/culture">Culture</a>
            <a href="/destination/eat-drink">Eat & Drink</a>
            <a href="/destination/activities">Activities</a>
          </div>
        </div>
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
        </section>

        <section className={styles.imageFeed}>
          <div className={styles.imgGrid}>
            <dialog ref={dialogRef} className="relative backdrop:bg-black/85">
              {activeImage && (
                <div>
                  <img src={activeImage} alt="Selected" width={400} />
                  <button onClick={closeModal}>
                    <X />
                  </button>
                </div>
              )}
            </dialog>

            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/gbg_history.jpg")}>
                <img src="/images/gbg_history.jpg" alt="Older Gyeongbokgung" />
              </button>
            </div>
            {/* Add more images as needed */}
          </div>
        </section>

        <section className={styles.notes}>
          <h2>Notes</h2>
          <p>IDK SOMETHING</p>
        </section>
      </article>
    </main>
  );
}
