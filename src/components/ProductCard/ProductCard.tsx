import { useState } from 'react';
import styles from './styles.module.scss';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';
import { PrimaryButtons } from '../../enums/PrimaryButtons';
import { useAddCartButton } from '../../hooks/useCart';
import { Product } from '../../types/Product';
import { FavoritesButton } from '../FavoritesButton/FavoritesButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { RootState } from '@/app/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleClickedBuy } from '@/features/сart/сartSlice';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const clickedBuy = useSelector(
    (state: RootState) => state.cart.items[product.id]?.clickedBuy,
  );
  const [clickedFav, setClickedFav] = useState(false);

  const handleAddToCart = useAddCartButton(product);

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
            handleAddToCart();
            dispatch(toggleClickedBuy(product.id));
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
