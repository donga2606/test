import Image from "../utils/Image";
import styles from "./Card.module.scss";

function Card({ imgUrl }) {
  console.log(`${imgUrl}.png`);
  return (
    <div className={styles.card}>
      <Image imgUrl={imgUrl} alt="product image" className={styles.img} />
      <h3 className={styles.title}>[what happen] How to create </h3>
      <div className={styles.desc}>
        <div className={styles.price}>2,500 won</div>
        <div className={styles.likes}>
          <Image
            imgUrl="../../assets/img/hearticon"
            className={styles.heart}
            alt="heart"
          />
          <span>236</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
