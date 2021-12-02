import styles from "./BrandCard.module.scss";
import clsx from "clsx";
import Image from "./Image";

function BrandCard({ brand, red, imgUrl }) {
    const classes = clsx(styles.brand_card , {[styles['brand_card-red']]: red})
  return (
    <div className={classes}>
      <header className={styles.header}>
        <h3 className={styles.brand_name}>{brand}</h3>
      </header>
      <Image imgUrl={imgUrl} />
    </div>
  );
}

export default BrandCard;
