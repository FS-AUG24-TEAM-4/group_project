import { Device, Product } from '@/types';
import styles from './styles.module.scss';
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '@/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleClickedBuy } from '@/features/сart/сartSlice';
import { getSeparetedCapacity } from '@/utils';
import { COLORS } from '@/constants/colors';
import { ColorButton } from '../ColorButton';
import { ParameterButton } from '../ParameterButton';
import { PrimaryButton } from '../PrimaryButton';
import { PrimaryButtons } from '@/enums';
import { FavoritesButton } from '../FavoritesButton';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';

interface Props {
  device: Device;
  cartProduct: Product;
}

export const ParamsSelection: FC<Props> = ({ device, cartProduct }) => {
  const [clickedFav, setClickedFav] = useState(false);
  const isAccessory = device.category === 'accessories';

  const location = useLocation();

  const { addCartButton, removeFromCartButton } = useCart();

  const clickedBuy = useSelector(
    (state: RootState) => state.cart.items[cartProduct.id]?.clickedBuy,
  );

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

  const validRam = getSeparetedCapacity(cartProduct.ram);

  return (
    <div>
      <div className={styles.colorsOptions}>
        <div className={styles.colorsSubtitle}>
          <span className={styles.subtitle}>Available colors</span>

          <span className={styles.productId}>{`ID: ${device.id}`}</span>
        </div>

        <div className={styles.colorsButtons}>
          {device.colorsAvailable.map(color => {
            const validCurrentColor = device.color.replaceAll(' ', '-');
            const validColor = color.replaceAll(' ', '-');

            const visibleColor = COLORS[validColor as keyof typeof COLORS]
              ? COLORS[validColor as keyof typeof COLORS]
              : validColor;

            const pathname = location.pathname.replace(
              validCurrentColor,
              validColor,
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
        <span
          className={styles.subtitle}
        >{`Select ${isAccessory ? 'size' : 'capacity'}`}</span>

        <div className={styles.paramsButtons}>
          {device.capacityAvailable.map(capacity => {
            const pathname = location.pathname.replace(
              device.capacity.replace('GB', 'gb'),
              capacity.replace('GB', 'gb'),
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
          {clickedBuy ? 'Added to cart' : 'Add to cart'}
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
