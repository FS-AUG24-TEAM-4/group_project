import styles from './styles.module.scss';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';
import { useSelector } from 'react-redux';

import { FavoritesButton, PrimaryButton } from '../index';
import { RootState } from '@/app/store';
import { toggleClickedBuy } from '@/features/сart/сartSlice';
import { DeviceCategory, PrimaryButtons } from '@/enums';

import { useCart } from '@/hooks/useCart';
import { Link, useLocation } from 'react-router-dom';
import { Product } from '@/types/Product';
import { getSeparetedCapacity } from '@/utils';
import classNames from 'classnames';
import { useFavorites } from '@/hooks';

interface ProductCardProps {
  product: Product;
  productPath: string;
  type?: 'slider' | 'default';
  discount?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  productPath,
  type = 'default',
  discount,
}) => {
  const clickedBuy = useSelector(
    (state: RootState) => state.cart.items[product.id]?.clickedBuy,
  );

  const { addCartButton, removeFromCartButton } = useCart();

  const { toggleFavorite } = useFavorites();
  const { handleToggleFavorite, isFavorite } = toggleFavorite(product);

  const handleRemoveFromCart = removeFromCartButton();

  const handleAddToCart = addCartButton(product);

  const location = useLocation();
  const category = location.pathname.split('/')[1];

  const handleClick = () => {
    if (clickedBuy) {
      handleRemoveFromCart(product.id);
      toggleClickedBuy(product.id);
    } else {
      handleAddToCart();
    }
  };

  return (
    <article
      className={classNames({
        [styles.slider_card]: type === 'slider',
        [styles.card]: type == 'default',
      })}
    >
      <Link to={productPath}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.picture}
        />
      </Link>

      <Link to={productPath}>
        <h2 className={styles.title}>{product.name}</h2>
      </Link>

      <div className={styles.price}>
        <p className={styles.actual_price}>
          ${product.price || product.fullPrice}
        </p>
        {product.price && discount && (
          <p className={styles.old_price}>${product.fullPrice}</p>
        )}
      </div>

      <div className={styles.line}></div>
      <div className={styles.specs}>
        <p className={styles.label}>Screen</p>
        <p className={styles.value}>{product.screen.replace(`'`, `''`)}</p>
      </div>

      <div className={styles.specs}>
        {category === DeviceCategory.ACCESSORIES ? (
          <p className={styles.label}>Size</p>
        ) : (
          <p className={styles.label}>Capacity</p>
        )}
        <p className={styles.value}>{getSeparetedCapacity(product.capacity)}</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.label}>RAM</p>
        <p className={styles.value}>{getSeparetedCapacity(product.ram)}</p>
      </div>

      <div className={styles.buttons}>
        <PrimaryButton
          type={PrimaryButtons.CART}
          onClick={handleClick}
          isActive={clickedBuy}
        >
          {clickedBuy ? 'Added' : 'Add to cart'}
        </PrimaryButton>

        <FavoritesButton onClick={handleToggleFavorite} isActive={isFavorite}>
          <img
            src={isFavorite ? filledIcon : blankIcon}
            alt="Add to favorites"
          />
        </FavoritesButton>
      </div>
    </article>
  );
};
