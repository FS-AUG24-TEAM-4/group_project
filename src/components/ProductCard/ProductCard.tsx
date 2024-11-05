import { useState } from 'react';

import styles from './styles.module.scss';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';
import { PrimaryButtons } from '../../enums/PrimaryButtons';
import { Phone } from '../../types/Phone';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

interface ProductCardProps {
  phone: Phone;
}

export const ProductCard: React.FC<ProductCardProps> = ({ phone }) => {
  const [clickedBuy, setClickedBuy] = useState(false);
  const [clickedFav, setClickedFav] = useState(false);

  return (
    <article className={styles.card}>
      <a href="#">
        <img
          src={phone.images[0]}
          alt={phone.name}
          className={styles.picture}
        />
      </a>

      <a href="#">
        <h2 className={styles.title}>{phone.name}</h2>
      </a>

      <div className={styles.price}>
        <p className={styles.actual_price}>
          ${phone.priceDiscount || phone.priceRegular}
        </p>
        {phone.priceDiscount && (
          <p className={styles.old_price}>${phone.priceRegular}</p>
        )}
      </div>

      <div className={styles.line}></div>
      <div className={styles.specs}>
        <p className={styles.label}>Screen</p>
        <p className={styles.value}>{phone.screen.replace(`'`, `''`)}</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.label}>Capacity</p>
        <p className={styles.value}>{phone.capacity.replace('GB', '')} GB</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.label}>RAM</p>
        <p className={styles.value}>{phone.ram.replace('GB', '')} GB</p>
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
