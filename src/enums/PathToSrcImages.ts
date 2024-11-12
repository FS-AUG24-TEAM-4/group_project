const BASE_URL = import.meta.env.DEV ? 'public/' : '/group_project/';

export const PathToSrcImages = {
  PHONES: `${BASE_URL}img/phones.png`,
  TABLETS: `${BASE_URL}img/tablets.png`,
  ACCESSORIES: `${BASE_URL}img/accessories.png`,
} as const;
