import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/eatDrink.module.css";

const GALLERIES: Record<string, string[]> = {
  Cheongsudang: [
    "/images/eat-drink/CheongsudangBakery3.JPG",
    "/images/eat-drink/cheongsudang4.jpg",
    "/images/eat-drink/cheongsudangBakery.jpg",
    "/images/eat-drink/cheongsudang7.jpg",
    "/images/eat-drink/cheongsudang5.jpg",
    "/images/eat-drink/cheongsudang3.png",
  ],
  Clementine: [
    "/images/eat-drink/Clementine (1).jpg",
    "/images/eat-drink/Clementine2.JPG",
    "/images/eat-drink/clementine.jpeg",
    "/images/eat-drink/clementine4.jpg",
    "/images/eat-drink/clementine5.jpg",
    "/images/eat-drink/clementine6.jpg",
  ],
  Ocheonjip: [
    "/images/eat-drink/Ocheonjip.JPG",
    "/images/eat-drink/Ocheonjip2.JPG",
    "/images/eat-drink/Ocheonjip4.JPG",
    "/images/eat-drink/ocheonjip3.jpeg",
    "/images/eat-drink/ocheonjip5.jpg",
    "/images/eat-drink/ocheonjip6.jpg",
  ],
  Solsot: [
    "/images/eat-drink/solsot (1).jpg",
    "/images/eat-drink/solsot3.jpg",
    "/images/eat-drink/solsot4.jpg",
    "/images/eat-drink/solsot5.jpeg",
    "/images/eat-drink/solsot6.jpg",
    "/images/eat-drink/solsot7.jpg",
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

  const handleClick = (place: string) => {
    setActive(place);
  };


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

  return (
    <main>
      <header className={styles.header}>
        <button className={styles.home} onClick={() => navigate("/")}>
          🏠
        </button>
        <h1 className={styles.title}>Eat & Drink</h1>
        <select className={styles.dropbtn} onChange={(e) => navigate(e.target.value)}>
          <option value="/destination/culture">Culture</option>
          <option value="/destination/eat-drink">Eat & Drink</option>
          <option value="/destination/activities">Activities</option>
        </select>
      </header>

      <article className={styles.article}>
        <section className={styles.locations}>
          <h2 className={styles.placeType}>Cafe</h2>
          <button 
          className={`${styles.address} ${active === "cheongsudang" ? styles.active : ""}`} 
          onClick={() => {
            setActive("cheongsudang");
            setActiveLocation("Cheongsudang");
          }}>
            <span className={styles.addyName}>Cheongsudang</span>
            <br />
            <span className={styles.span}>31-9 Donhwamun-ro 11na-gil, Jongno District, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "clementine" ? styles.active : ""}`} 
          onClick={() => {
            setActive("clementine");
            setActiveLocation("Clementine");
          }}>
            <span className={styles.addyName}>Clementine</span>
            <br />
            <span className={styles.span}>5-1 Seoulsup 2-gil, Seongdong-gu, Seoul</span>
          </button>

          <h2 className={styles.placeType}>Restaurant</h2>
          <button 
          className={`${styles.address} ${active === "ocheonjip" ? styles.active : ""}`} 
          onClick={() => {
            setActive("ocheonjip");
            setActiveLocation("Ocheonjip");
          }}>
            <span className={styles.addyName}>Ocheonjip</span>
            <br />
            <span className={styles.span}>31-10 Donhwamun-ro 11na-gil, Ikseon-dong, Jongno District, Seoul</span>
          </button>
          <button 
          className={`${styles.address} ${active === "solsot" ? styles.active : ""}`} 
          onClick={() => {
            setActive("solsot");
            setActiveLocation("Solsot");
          }}>
            <span className={styles.addyName}>Solsot</span>
            <br />
            <span className={styles.span}>35 Donggyo-ro 38-gil, Mapo-gu, Seoul</span>
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
