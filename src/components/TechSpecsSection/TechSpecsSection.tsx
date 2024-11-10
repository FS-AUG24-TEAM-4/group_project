import { Device } from '@/types';
import React from 'react';
import styles from './styles.module.scss';
import { renderRightKeyOfTechSpecs } from '@/utils/renderRIghtKeyOfTechSpecs';

interface Props {
  product: Device;
}

export const TechSpecsSection: React.FC<Props> = ({ product }) => {
  const specsObj = {
    Screen: product.screen,
    Resolution: product.resolution,
    Processor: product.processor,
    RAM: product.ram,
    Memory: product.capacity,
    Camera: product.camera,
    Zoom: product.zoom,
    Cell: product.cell,
  };

  if (specsObj.Camera) {
    const howManyCams = specsObj.Camera.split('+').length;

    switch (howManyCams) {
      case 1:
        break;

      case 2:
        specsObj.Camera = `${specsObj.Camera} (Dual)`;
        break;

      case 3:
        specsObj.Camera = `${specsObj.Camera} (Triple)`;
        break;

      default:
        break;
    }
  }

  if (specsObj.Cell.length) {
    const newCell = [];

    if (specsObj.Cell.includes('LTE')) {
      newCell.push('LTE');
    }

    if (specsObj.Cell.includes('GSM')) {
      newCell.push('GSM');
    }

    if (specsObj.Cell.includes('UMTS')) {
      newCell.push('UMTS');
    }

    if (newCell.length < 3) {
      for (const cell of specsObj.Cell) {
        if (newCell.length === 3) {
          break;
        }

        if (!newCell.includes(cell)) {
          newCell.push(cell);
        }
      }
    }

    specsObj.Cell = newCell;
  }

  return (
    <section className={styles.techspecs__container}>
      <h3 className={styles.techspecs__title}>Tech specs</h3>
      <div className={styles.line}></div>

      <ul className={styles.list}>
        {Object.entries(specsObj).map(pair => {
          if (pair[1]) {
            return (
              <li className={styles.list__element} key={pair[0]}>
                <div className={styles.list__element__key}>
                  {renderRightKeyOfTechSpecs(product, pair[0])}
                </div>
                <div className={styles.list__element__value}>
                  {pair[0] === 'Cell' && Array.isArray(pair[1])
                    ? pair[1].join(', ')
                    : pair[1]}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};
