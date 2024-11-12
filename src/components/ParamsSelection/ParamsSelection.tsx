/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';

import { useCart, useFavorites } from '@/hooks';
import { toggleClickedBuy } from '@/features/сart/сartSlice';
import {
  loadProductsStart,
  loadProductsSuccess,
  loadProductsFailure,
} from '@/features/products/productSlice';
import { getSeparetedCapacity, replaceParamsInPathname } from '@/utils';
import { COLORS } from '@/constants';
import { PrimaryButtons } from '@/enums';
import { Device, Product } from '@/types';

import styles from './styles.module.scss';
import blankIcon from '@/assets/images/icons/favorites-blank.svg';
import filledIcon from '@/assets/images/icons/favorites-filled.svg';
import { ColorButton } from '../ColorButton';
import { ParameterButton } from '../ParameterButton';
import { PrimaryButton } from '../PrimaryButton';
import { FavoritesButton } from '../FavoritesButton';

interface Props {
  device: Device | null;
  cartProduct: Product;
}

export const ParamsSelection: FC<Props> = ({ device, cartProduct }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { addCartButton, removeFromCartButton } = useCart();

  const { toggleFavorite } = useFavorites();

  // Перевірка, чи існує `cartProduct` і чи має він властивість `id`
  const { handleToggleFavorite, isFavorite } = cartProduct
    ? toggleFavorite(cartProduct)
    : { handleToggleFavorite: () => {}, isFavorite: false };

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const clickedBuy = useSelector((state: RootState) =>
    cartProduct?.id ? state.cart.items[cartProduct.id]?.clickedBuy : false,
  );

  useEffect(() => {
    const fetchProducts = async () => {
      if (!products.length) {
        try {
          dispatch(loadProductsStart());
          const response = await fetch('/group_project/api/products.json');
          const data = await response.json();

          dispatch(loadProductsSuccess(data));
        } catch (errorFetching: any) {
          dispatch(loadProductsFailure(errorFetching.message));
        }
      }
    };

    fetchProducts();
  }, [dispatch, products.length]);

  const handleRemoveFromCart = removeFromCartButton();
  const handleAddToCart = addCartButton(cartProduct);

  const handleClick = () => {
    if (clickedBuy) {
      handleRemoveFromCart(cartProduct.id);
      toggleClickedBuy(cartProduct.id);
    } else {
      handleAddToCart();
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!device || !cartProduct) {
    return <div className={styles.loading}>Loading device details...</div>;
  }

  const isAccessory = device.category === 'accessories';
  const validRam = getSeparetedCapacity(cartProduct.ram);

  return (
    <div>
      <div className={styles.colorsOptions}>
        <div className={styles.colorsSubtitle}>
          <span className={styles.subtitle}>Available colors</span>
          <span className={styles.productId}>{`ID: ${device.id}`}</span>
        </div>

        <div className={styles.colorsButtons}>
          {[...device.colorsAvailable].sort().map(color => {
            const validCurrentColor = device.color.replaceAll(' ', '');
            const validColor = color.replaceAll(' ', '');
            const currentPathnameColor = device.color.replaceAll(' ', '-');
            const pathnameColor = color.replaceAll(' ', '-');

            const visibleColor = COLORS[validColor as keyof typeof COLORS]
              ? COLORS[validColor as keyof typeof COLORS]
              : validColor;

            const pathname = location.pathname.replace(
              currentPathnameColor,
              pathnameColor,
            );

            const isSelected = validColor === validCurrentColor;

            return (
              <ColorButton
                color={visibleColor}
                isSelected={isSelected}
                key={color}
                pathname={pathname}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.paramsOptions}>
        <span className={styles.subtitle}>
          {`Select ${isAccessory ? 'size' : 'capacity'}`}
        </span>

        <div className={styles.paramsButtons}>
          {device.capacityAvailable.map(capacity => {
            const pathname = replaceParamsInPathname(
              location.pathname,
              device.capacity,
              capacity,
            );

            const validCapacity = getSeparetedCapacity(capacity);
            const isSelected = capacity === device.capacity;

            return (
              <ParameterButton
                key={validCapacity}
                pathname={pathname}
                isSelected={isSelected}
              >
                {validCapacity}
              </ParameterButton>
            );
          })}
        </div>
      </div>

      <div className={styles.price}>
        <p className={styles.actual_price}>
          ${device.priceDiscount || device.priceRegular}
        </p>
        {device.priceDiscount && (
          <p className={styles.old_price}>${device.priceRegular}</p>
        )}
      </div>

      <div className={styles.mainButtons}>
        <PrimaryButton
          type={PrimaryButtons.ITEMCART}
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

      <div className={styles.params}>
        <div className={styles.paramWrapper}>
          <span className={styles.param}>Screen</span>
          <span className={styles.paramValue}>{device.screen}</span>
        </div>

        <div className={styles.paramWrapper}>
          <span className={styles.param}>Resolution</span>
          <span className={styles.paramValue}>{device.resolution}</span>
        </div>

        <div className={styles.paramWrapper}>
          <span className={styles.param}>Processor</span>
          <span className={styles.paramValue}>{device.processor}</span>
        </div>

        <div className={styles.paramWrapper}>
          <span className={styles.param}>RAM</span>
          <span className={styles.paramValue}>{validRam}</span>
        </div>
      </div>
    </div>
  );
};
