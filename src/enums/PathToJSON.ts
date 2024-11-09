const BASE_URL = import.meta.env.DEV ? '' : '/group_project/';

export const PathToJSON = {
  PHONES: `${BASE_URL}public/api/phones.json`,
  TABLETS: `${BASE_URL}public/api/tablets.json`,
  ACCESSORIES: `${BASE_URL}public/api/accessories.json`,
} as const;
