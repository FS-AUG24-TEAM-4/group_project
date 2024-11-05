import { useState } from 'react';

import styles from './styles.module.scss';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';
import { PrimaryButtons } from '../../enums/PrimaryButtons';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

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
      <a href="#">
        <h2 className={styles.title}>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </h2>
      </a>
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
        <PrimaryButton
          type={PrimaryButtons.CART}
          onClick={() => setClickedBuy(!clickedBuy)}
          isActive={clickedBuy}
        >
          {clickedBuy ? 'Added' : 'Add to cart'}
        </PrimaryButton>

        <FavoritesButton
          onClick={() => setClickedFav(!clickedFav)}
          isActive={clickedFav}
        >
          <img
            src={clickedFav ? filledIcon : blankIcon}
            alt="Add to favorites"
          />
        </FavoritesButton>
      </div>
    </article>
  );
};
