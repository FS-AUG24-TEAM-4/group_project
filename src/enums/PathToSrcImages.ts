const BASE_URL = import.meta.env.DEV ? 'src/' : '/group_project/';

export const PathToSrcImages = {
  PHONES: `${BASE_URL}assets/images/phones.svg`,
  TABLETS: `${BASE_URL}assets/images/tablets.svg`,
  ACCESSORIES: `${BASE_URL}assets/images/accessories.svg`,
} as const;
