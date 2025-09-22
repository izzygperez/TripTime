import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/culture.module.css";

export default function CulturePage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeImage, setActiveImage] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeImage) return;
    console.log("active image: ", activeImage)

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
    "/images/culture/gbg_history.jpg",
    "/images/culture/gbg_inside.jpg",
    "/images/culture/gbg_show.jpg",
    "/images/culture/GBG.jpg",
    "/images/culture/gbg(1).jpg",
    "/images/culture/gyeongbokgung.jpg",
  ];

  return (
    <main>
      <header>
        <button className="home">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
          </svg>
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
            <span className={styles.addyName}>Gyeongbokgung</span><br></br>
            <span className={styles.span}>161 Sajik-ro, Jongno-gu, Seoul</span>
          </button>
          <button className={styles.address}>
            <span className={styles.addyName}>Bukchon Hanok Village</span><br></br>
            <span className={styles.span}>37 Gyedong-gil, Jongno-gu, Seoul</span>
            </button>
          <h2 className={styles.placeType}>Cultural Landmarks</h2>
          <button className={styles.address}>
            <span className={styles.addyName}>DMZ</span><br></br>
            <span className={styles.span}>???</span>
          </button>
          <button className={styles.address}>
            <span className={styles.addyName}>Han River</span><br></br>
            <span className={styles.span}>330 Yeouidong-ro, Yeongdeungpo-gu, Seoul</span>
          </button>
        </section>
        <section className={styles.imageFeed}>
          <div className={styles.imgGrid}>
            <dialog ref={dialogRef} className={styles.modal} >
              <div>
                {activeImage && (
                  <img src={activeImage} alt="Older Gyeongbokgung Image" width={400} height={400}/>
                )}
              </div>
              <button 
                className={styles.closeBtn}
                onClick={closeModal}
              >
                X
              </button>
            </dialog>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_history.jpg")}>
                <img src="/images/culture/gbg_history.jpg" alt="Older Gyeongbokgung Image" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_inside.jpg")}>
                <img src="/images/culture/gbg_inside.jpg" alt="Gyeongbokgung Building" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_show.jpg")}>
                <img src="/images/culture/gbg_show.jpg" alt="Gyeongbokgung Parade" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/GBG.jpg")}>
                <img src="/images/culture/GBG.jpg" alt="Gyeongbokgung at Night" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg(1).jpg")}>
                <img src="/images/culture/gbg(1).jpg" alt="Gyeongbokgung with Snow" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gyeongbokgung.jpg")}>
                <img src="/images/culture/gyeongbokgung.jpg" alt="Gyeongbokgung" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_history.jpg")}>
                <img src="/images/culture/gbg_history.jpg" alt="Older Gyeongbokgung Image" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_inside.jpg")}>
                <img src="/images/culture/gbg_inside.jpg" alt="Gyeongbokgung Building" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_show.jpg")}>
                <img src="/images/culture/gbg_show.jpg" alt="Gyeongbokgung Parade" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/GBG.jpg")}>
                <img src="/images/culture/GBG.jpg" alt="Gyeongbokgung at Night" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg(1).jpg")}>
                <img src="/images/culture/gbg(1).jpg" alt="Gyeongbokgung with Snow" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gyeongbokgung.jpg")}>
                <img src="/images/culture/gyeongbokgung.jpg" alt="Gyeongbokgung" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_history.jpg")}>
                <img src="/images/culture/gbg_history.jpg" alt="Older Gyeongbokgung Image" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_inside.jpg")}>
                <img src="/images/culture/gbg_inside.jpg" alt="Gyeongbokgung Building" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg_show.jpg")}>
                <img src="/images/culture/gbg_show.jpg" alt="Gyeongbokgung Parade" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/GBG.jpg")}>
                <img src="/images/culture/GBG.jpg" alt="Gyeongbokgung at Night" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gbg(1).jpg")}>
                <img src="/images/culture/gbg(1).jpg" alt="Gyeongbokgung with Snow" />
              </button>
            </div>
            <div className={styles.pic}>
              <button onClick={() => setActiveImage("/images/culture/gyeongbokgung.jpg")}>
                <img src="/images/culture/gyeongbokgung.jpg" alt="Gyeongbokgung" />
              </button>
            </div>
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