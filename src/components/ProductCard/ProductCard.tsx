import classNames from 'classnames';
import { useState } from 'react';

import styles from './styles.module.scss';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';

export const ProductCard = () => {
  const [clickedBuy, setClickedBuy] = useState(false);
  const [clickedFav, setClickedFav] = useState(false);

  return (
    <article className={styles.card}>
      <a href="#">
        <img
          src="public/img/phones/apple-iphone-13-mini/midnight/00.webp"
          alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
          className={styles.picture}
        />
      </a>
      <h2 className={styles.title}>Apple iPhone 14 Pro 128GB Silver (MQ023)</h2>
      <div className={styles.price}>
        <p className={styles.actual_price}>$999</p>
        <p className={styles.old_price}>$1199</p>
      </div>

      <div className={styles.line}></div>
      <div className={styles.specs}>
        <p className={styles.label}>Screen</p>
        <p className={styles.value}>6.1” OLED</p>
      </div>
      <div className={styles.specs}>
        <p className={styles.label}>Capacity</p>
        <p className={styles.value}>128 GB</p>
      </div>
      <div className={styles.specs}>
        <p className={styles.label}>RAM</p>
        <p className={styles.value}>6 GB</p>
      </div>

      <div className={styles.buttons}>
        <a
          href="#"
          onClick={() => setClickedBuy(!clickedBuy)}
          className={classNames(styles.buy_button, { [styles.active]: clickedBuy })}
        >
          {clickedBuy ? 'Added' : 'Add to cart'}
        </a>
        <a href="#"
          onClick={() => setClickedFav(!clickedFav)}
          className={classNames(styles.favorites_button, { [styles.active]: clickedFav })}
        >
          <img
            src={clickedFav ? filledIcon : blankIcon}
            alt="Add to favorites"

          />
        </a>
      </div>
    </article>
  );
};
