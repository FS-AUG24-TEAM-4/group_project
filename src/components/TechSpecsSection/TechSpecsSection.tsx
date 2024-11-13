import { Device } from '@/types';
import React from 'react';
import styles from './styles.module.scss';
import { renderRightKeyOfTechSpecs } from '@/utils/renderRIghtKeyOfTechSpecs';
import { getSeparetedCapacity } from '@/utils';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Device;
}

export const TechSpecsSection: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  const specsObj = {
    screen: product.screen,
    resolution: product.resolution,
    processor: product.processor,
    ram: getSeparetedCapacity(product.ram),
    memory: getSeparetedCapacity(product.capacity),
    camera: product.camera,
    zoom: product.zoom,
    cell: product.cell,
  };

  if (specsObj.camera) {
    const howManyCams = specsObj.camera.split('+').length;

    switch (howManyCams) {
      case 2:
        specsObj.camera = `${specsObj.camera} (${t('dual')})`;
        break;

      case 3:
        specsObj.camera = `${specsObj.camera} (${t('triple')})`;
        break;

      default:
        break;
    }
  }

  if (specsObj.cell.length) {
    const newCell = [];

    if (specsObj.cell.includes('LTE')) {
      newCell.push('LTE');
    }

    if (specsObj.cell.includes('GSM')) {
      newCell.push('GSM');
    }

    if (specsObj.cell.includes('UMTS')) {
      newCell.push('UMTS');
    }

    if (newCell.length < 3) {
      for (const cell of specsObj.cell) {
        if (newCell.length === 3) {
          break;
        }

        if (!newCell.includes(cell)) {
          newCell.push(cell);
        }
      }
    }

    specsObj.cell = newCell;
  }

  return (
    <div>
      <h3 className={styles.techspecs__title}>{t('techSpecs')}</h3>
      <div className={styles.line}></div>

      <ul className={styles.list}>
        {Object.entries(specsObj).map(pair => {
          const KEY = pair[0];
          let VAL = pair[1];

          if (VAL === 'Not applicable') {
            VAL = t('notApplicable');
          }

          if (VAL) {
            return (
              <li className={styles.list__element} key={KEY}>
                <div className={styles.list__element__key}>
                  {renderRightKeyOfTechSpecs(product, `${t(KEY)}`)}
                </div>

                <div className={styles.list__element__value}>
                  {KEY === 'cell' && Array.isArray(VAL) ? VAL.join(', ') : VAL}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
