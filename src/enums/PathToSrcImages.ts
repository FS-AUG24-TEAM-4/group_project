const BASE_URL = import.meta.env.DEV ? '' : '/';

export const PathToSrcImages = {
  PHONES: `${BASE_URL}src/assets/images/phones.svg`,
  TABLETS: `${BASE_URL}src/assets/images/tablets.svg`,
  ACCESSORIES: `${BASE_URL}src/assets/images/accessories.svg`,
} as const;
