const BASE_URL = import.meta.env.DEV ? 'public/' : '/group_project/';

export const PathToJSON = {
  PHONES: `${BASE_URL}api/phones.json`,
  TABLETS: `${BASE_URL}api/tablets.json`,
  ACCESSORIES: `${BASE_URL}api/accessories.json`,
  CREATORS: `${BASE_URL}api/creators.json`,
} as const;
