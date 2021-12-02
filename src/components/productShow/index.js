import Card from "../card";
import styles from "./ProductShow.module.scss";

function ProductShow({ cards }) {
  return (
    <div className={styles.cards}>
      {cards.map((card, i) => (
        <div className={styles.cards__item} key={i}>
          <Card imgUrl={card.imgUrl} />
        </div>
      ))}
    </div>
  );
}

export default ProductShow;
