import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface Props {
  photos: string[];
  productName: string;
}

export const ProductPhotosSlider: FC<Props> = ({ photos, productName }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>();

  useEffect(() => setSelectedPhoto(photos[0]), [photos]);

  return (
    <div className={styles.slider}>
      <img className={styles.mainPhoto} src={selectedPhoto} alt={productName} />

      <div className={styles.secondaryPhotos}>
        {photos.map(photo => (
          <img
            className={cn(styles.secondaryPhoto, {
              [styles.secondaryPhotoSelected]: photo === selectedPhoto,
            })}
            src={photo}
            alt={productName}
            key={photo.slice(photo.lastIndexOf('/'), photo.lastIndexOf('.'))}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>
    </div>
  );
};
