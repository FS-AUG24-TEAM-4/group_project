const BASE_URL = import.meta.env.DEV ? 'public/' : '/group_project/';

export const PathToSrcImages = {
  PHONES: `${BASE_URL}img/phones.svg`,
  TABLETS: `${BASE_URL}img/tablets.svg`,
  ACCESSORIES: `${BASE_URL}img/accessories.svg`,
} as const;
