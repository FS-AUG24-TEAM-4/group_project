import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import styles from './styles.module.scss';

const ProductSkeleton = () => {
  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);

      window.addEventListener('resize', handleWindowResize);

      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return { width };
  };

  const { width } = useViewport();
  const isTablet = width >= 640;
  const isDesktop = width >= 1200;

  const getImageDimensions = () => {
    if (isDesktop) {
      return { width: 208, height: 196 };
    } else if (isTablet) {
      return { width: 148, height: 173 };
    }

    return { width: 148, height: 129 };
  };

  const imageDimensions = getImageDimensions();

  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={imageDimensions.width}
          height={imageDimensions.height}
          className={styles.skeleton_image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.title_container}>
          <Skeleton animation="wave" variant="text" height={42} />
        </div>

        <div className={styles.price}>
          <Skeleton animation="wave" variant="text" width={100} height={31} />
        </div>

        <div className={styles.specs_container}>
          {[1, 2, 3].map(item => (
            <div key={item} className={styles.specs}>
              <Skeleton
                animation="wave"
                variant="text"
                width="40%"
                height={16}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width="40%"
                height={16}
              />
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height={40}
            className={styles.button_skeleton}
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({ itemsCount }: { itemsCount: number }) => (
  <div className={styles.grid}>
    {[...Array(itemsCount)].map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </div>
);
