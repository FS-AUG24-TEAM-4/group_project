import { useState } from 'react';

import styles from './styles.module.scss';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';
import { PrimaryButtons } from '../../enums';
import { Product } from '../../types/Phone';
import { useAddCartButton, useRemoveFromCartButton } from '../../hooks';
import { FavoritesButton, PrimaryButton } from '../index';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [clickedBuy, setClickedBuy] = useState(false);
  const [clickedFav, setClickedFav] = useState(false);

  const handleRemoveFromCart = useRemoveFromCartButton(product.id);

  const handleAddToCart = useAddCartButton(product);

  const handleClick = clickedBuy ? handleRemoveFromCart : handleAddToCart;

  return (
    <article className={styles.card}>
      <a href="#">
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.picture}
        />
      </a>

      <a href="#">
        <h2 className={styles.title}>{product.name}</h2>
      </a>

      <div className={styles.price}>
        <p className={styles.actual_price}>
          ${product.priceDiscount || product.priceRegular}
        </p>
        {product.priceDiscount && (
          <p className={styles.old_price}>${product.priceRegular}</p>
        )}
      </div>

      <div className={styles.line}></div>
      <div className={styles.specs}>
        <p className={styles.label}>Screen</p>
        <p className={styles.value}>{product.screen.replace(`'`, `''`)}</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.label}>Capacity</p>
        <p className={styles.value}>{product.capacity.replace('GB', '')} GB</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.label}>RAM</p>
        <p className={styles.value}>{product.ram.replace('GB', '')} GB</p>
      </div>

      <div className={styles.buttons}>
        <PrimaryButton
          type={PrimaryButtons.CART}
          onClick={() => {
            setClickedBuy(!clickedBuy);
            handleClick();
          }}
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
