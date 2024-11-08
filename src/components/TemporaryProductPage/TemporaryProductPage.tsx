import cn from 'classnames';
import { useState } from 'react';
import styles from './styles.module.scss';
import blankIcon from '../../assets/images/icons/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';
import { ColorButton } from '../ColorButton';
import { useLocation } from 'react-router-dom';
import { COLORS } from '@/constants/colors';
import { ParameterButton } from '../ParameterButton';
import { getSeparetedCapacity } from '@/utils/getSeparetedCapacity';
import { PrimaryButton } from '../PrimaryButton';
import { PrimaryButtons } from '@/enums';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleClickedBuy } from '@/features/сart/сartSlice';
import { FavoritesButton } from '../FavoritesButton';
import { useCart } from '@/hooks';

const selectedProduct = {
  id: 'apple-iphone-11-256gb-purple',
  category: 'phones',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 256GB Purple',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '256GB',
  priceRegular: 1172,
  priceDiscount: 1115,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'purple',
  images: [
    'img/phones/apple-iphone-11/purple/00.webp',
    'img/phones/apple-iphone-11/purple/01.webp',
    'img/phones/apple-iphone-11/purple/02.webp',
    'img/phones/apple-iphone-11/purple/03.webp',
    'img/phones/apple-iphone-11/purple/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: ['A transformative triple-camera.'],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technolog',
      ],
    },
    {
      title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it.',
      text: ['iPhone 11 Pro lets you capture videos that'],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

const selectedProductForCart = {
  id: 62,
  category: 'phones',
  itemId: 'apple-iphone-11-256gb-purple',
  name: 'Apple iPhone 11 256GB Purple',
  fullPrice: 1172,
  price: 1115,
  screen: "6.1' IPS",
  capacity: '256GB',
  color: 'purple',
  ram: '4GB',
  year: 2019,
  image: 'img/phones/apple-iphone-11/purple/00.webp',
};

export const TemporaryProductPage = () => {
  const photos = selectedProduct.images;
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
  const [clickedFav, setClickedFav] = useState(false);
  const category = selectedProduct.category;
  const isAccessory = category === 'accessories';

  const location = useLocation();

  const { addCartButton, removeFromCartButton } = useCart();

  const clickedBuy = useSelector(
    (state: RootState) =>
      state.cart.items[selectedProductForCart.id]?.clickedBuy,
  );

  const handleRemoveFromCart = removeFromCartButton();

  const handleAddToCart = addCartButton(selectedProductForCart);

  const handleClick = () => {
    if (clickedBuy) {
      handleRemoveFromCart(selectedProductForCart.id.toString());
      toggleClickedBuy(selectedProductForCart.itemId);
    } else {
      handleAddToCart();
    }
  };

  const validRam = getSeparetedCapacity(selectedProduct.ram);

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <img
          className={styles.mainPhoto}
          src={selectedPhoto}
          alt={selectedProduct.id}
        />
        <div className={styles.secondaryPhotos}>
          {photos.map(photo => (
            <img
              className={cn(styles.secondaryPhoto, {
                [styles.secondaryPhotoSelected]: photo === selectedPhoto,
              })}
              src={photo}
              alt={selectedProduct.id}
              key={photo.slice(photo.lastIndexOf('/'), photo.lastIndexOf('.'))}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>
      </div>

      <div className={styles.selection}>
        <div className={styles.colorsOptions}>
          <div className={styles.colorsSubtitle}>
            <span className={styles.subtitle}>Available colors</span>

            <span
              className={styles.productId}
            >{`ID: ${selectedProduct.id}`}</span>
          </div>

          <div className={styles.colorsButtons}>
            {selectedProduct.colorsAvailable.map(color => {
              const validColor = color.replaceAll(' ', '-');

              const visibleColor = COLORS[validColor as keyof typeof COLORS]
                ? COLORS[validColor as keyof typeof COLORS]
                : validColor;

              const pathname = location.pathname.replace(
                selectedProduct.color,
                validColor,
              );

              const isSelected = validColor === selectedProduct.color;

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
            {selectedProduct.capacityAvailable.map(capacity => {
              const pathname = location.pathname.replace(
                selectedProduct.capacity,
                capacity,
              );

              const validCapacity = getSeparetedCapacity(capacity);

              const isSelected = capacity === selectedProduct.capacity;

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
            ${selectedProduct.priceDiscount || selectedProduct.priceRegular}
          </p>
          {selectedProduct.priceDiscount && (
            <p className={styles.old_price}>${selectedProduct.priceRegular}</p>
          )}
        </div>

        <div className={styles.mainButtons}>
          <PrimaryButton
            type={PrimaryButtons.ITEMCART}
            onClick={handleClick}
            isActive={clickedBuy}
          >
            Add to cart
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
            <span className={styles.paramValue}>{selectedProduct.screen}</span>
          </div>

          <div className={styles.paramWrapper}>
            <span className={styles.param}>Resolution</span>
            <span className={styles.paramValue}>
              {selectedProduct.resolution}
            </span>
          </div>

          <div className={styles.paramWrapper}>
            <span className={styles.param}>Processor</span>
            <span className={styles.paramValue}>
              {selectedProduct.processor}
            </span>
          </div>

          <div className={styles.paramWrapper}>
            <span className={styles.param}>RAM</span>
            <span className={styles.paramValue}>{validRam}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
